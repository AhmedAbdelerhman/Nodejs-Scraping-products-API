
# FakeproductsAPI 
   free online REST API  based on web scraping data from e-commerce websites
   providing you with dynamic products and different categories 
  # 
## Why FakeproductsAPI ?
  instade of using  lorem ipsum data or 
  creating a JSON file from the base.
   get real products (imges , prices, description).
 #
  ## Features
   - dynamic products changing by the time not fixed as real e-commerce
   - supporting many categories  (fashion,electronics, grocery,mobiles)
  - you can practise  get , delete , update  
  - supporting Arabic and English
 # 
### https://fake-products-dynamic-api.herokuapp.com/

#### you can fetch data with any kind of methods 
you know(fetch API, Axios, jquery ajax,...)


### Get 

#### 1- get random products by language

`````http
   axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/${language}/products/random`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
`````

| Parameter | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `language`      | `en` | It will respnse with English  language |
| `language`      | `ar` | It will respnse with Arabic   language |


#### Example 

`````http
    axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/en/products/random`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
`````


####  2- get random products by language and category

```http
    axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/${language}/products/${category}`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

| Parameter | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`| `electronics` | It will respnse with electronics products|
|           | `mobiles` |  It will respnse with  mobiles products |
|           | `grocery` |  It will respnse with  grocery  products|
|           | `fashion` |  It will respnse with  fashion products|

#### Example

```http
   axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/en/products/electronics`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```


#### 3- get random product id

```http
    axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/${language}/products/random/${id}`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

| Parameter | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      |   `1` | It will respnse with product id =1|

#### Example

```http
   axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/en/products/random/1`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```



#### 4- get category product id

```http
    axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/${language}/products/${category}/${id}`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

| Parameter | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      |   `1` | It will respnse with product id =1|

#### Example

```http
   axios
  .get(`https://fake-products-dynamic-api.herokuapp.com/api/en/products/electronics/1`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```
#
### delete
