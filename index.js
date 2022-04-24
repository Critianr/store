const express = require('express');
const port = 3000;
const app = express();
const faker = require('community-faker');


//  query params
app.get('/products', (req, res)=>{
  const products = [];
  // parametros tipo query
  // const {limit, offset} = req.query;
  const {size} = req.query;
  const limit = size || 10 ;
  for(let index = 0; index < limit ; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);
})
app.get('/products/filter', (req, res) =>{
  res.send('yo soy un filter')
})

app.listen(port, () => {
  console.log(`inicio de ${port}`);
});
