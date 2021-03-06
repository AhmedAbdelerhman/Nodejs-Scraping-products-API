const cheerio = require("cheerio");
const axios = require("axios");

let products = [];

const newspapers = [
  {
    Electronics: (language = "en") => {
      return `https://www.amazon.eg/-/${language}/Electronics/b/?ie=UTF8&node=18018102031&ref_=nav_cs_electronics`;
    },
  },

  {
    Mobiles: (language = "en") => {
      return `https://www.amazon.eg/-/${language}/Mobiles/b/?ie=UTF8&node=21832883031&ref_=nav_cs_mobiles`;
    },
  },

  {
    Grocery: (language = "en") => {
      return `https://www.amazon.eg/-/${language}/gp/browse.html?node=26082334031&ref_=nav_cs_supermarket`;
    },
  },

  {
    Fashion: (language = "en") => {
      return `https://www.amazon.eg/-/${language}/Fashion/b/?ie=UTF8&node=18018165031&ref_=nav_cs_fashion`;
    },
  },
];

exports.editCategoryById = async (req, res) => {
  const { language, category, id } = req.params;

  if (typeof req.body == undefined || req.params.id == null) {
    res.status(404).json({
      status: "error",
      message: "something went wrong! check your sent data",
    });
  }
  products = [];
  console.log(category);
  let url = "";
  if (category === "electronics") url = newspapers[0].Electronics(language);
  else if (category === "mobiles") url = newspapers[1].Mobiles(language);
  else if (category === "grocery") url = newspapers[2].Grocery(language);
  else if (category === "fashion") url = newspapers[3].Fashion(language);
  else {
    res.status(404).json({ status: "error", msg: "no such category" });
  }

  console.log(url);
  let counter = 1;
  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);
    $(".a-carousel li", html).each(function () {
      const description = $(this).find(".a-truncate-full").text().trim();
      const img = $(this).find("img").attr("src").trim();
      const price = $(this).find(".a-price-whole").text().trim();

      products.push({
        //  id: Date.now().toString(36) + Math.random().toString(36),
        id: counter++ + "",
        description,
        img,
        price,
      });
    });
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.id = id;
        product.description = req.body.description ? req.body.description:product.description
        product.img = req.body.img ? req.body.img:product.img
        product.price = req.body.price ? req.body.price:product.price
        return product;
      } else {
        return product;
      }
    });
    const editedItem = products.filter((product) => product.id === id);
    if (editedItem.length === 0) {
      res.status(404).json({ status: "error", msg: "no such id" });

      return;
    }

    res.status(200).json({
      status: "updated successfully",
      editedItem,
      productsData: newProducts,
    });
  } catch (error) {
    console.log(error);
  }
};

//************************************************************************ */
exports.editRandomById = async (req, res) => {
  const { language, id } = req.params ? req.params : "en";
  if (typeof req.body == undefined || req.params.id == null) {
    res.status(404).json({
      status: "error",
      message: "something went wrong! check your sent data",
    });
  }
  console.log(req.params);
  console.log(language);
  products = [];

  let counter = 1;

  try {
    const { data: html } = await axios.get(
      `https://www.amazon.eg/-/${language}/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2`
    );
    const $ = cheerio.load(html);
    $(".a-carousel li", html).each(function () {
      const description = $(this).find(".a-truncate-full").text().trim();

      const img = $(this).find("img").attr("src").trim();
      const price = $(this)
        .find("._p13n-zg-list-carousel-desktop_price_p13n-sc-price__3mJ9Z")
        .text()
        .trim();

      products.push({
        //  id: Date.now().toString(36) + Math.random().toString(36),
        id: counter++ + "",
        description,
        img,
        price,
      });
    });
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.id = id;
        product.description = req.body.description ? req.body.description:product.description
        product.img = req.body.img ? req.body.img:product.img
        product.price = req.body.price ? req.body.price:product.price
        return product;
      } else {
        return product;
      }
    });

    const editedItem = products.filter((product) => product.id === id);
    if (editedItem.length === 0) {
      res.status(404).json({ status: "error", msg: "no such id" });

      return;
    }

    res.status(200).json({
      status: "edited successfully",
      editedItem,
      productsData: newProducts,
    });
  } catch (error) {
    console.log(error);
  }
};
