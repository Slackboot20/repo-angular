const express = require('express');
const { createClient } = require("@libsql/client"); 
const bodyParser = require('body-parser');
const cors = require('cors')

//const whitelist = ['http://localhost:3000/products']

const client = createClient({
  url: "libsql://fakeapi-slackboot20.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTcxMTQ3NzEsImlkIjoiMGJlM2IxMTgtMTFhMy00ZDc2LTg2MmUtY2NjM2YxYTBiZDhjIn0.quQwZ6jKAnNqw6sRIqdqe-qaKri1pW3ILUqiffNh_Y8R-JFqSxoQdX4WfEvPzI2UI5wYBVfeDeG7ahSZLZo3Dw",
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

app.get('/products', async (req, res) => {
  const products = await client.execute("SELECT * FROM products"); 
    res.json(products.rows);
}); 

app.post('/products', async (req, res) => {
  const { id, title, price, images, description, categoryid } = req.body;
  
  const products = await client.execute(`
    INSERT INTO products (title, images, description, price, categoryid) VALUES ("${title}", "${images}", "${description}", "${price}", 1);`
  ); 
  res.json({ message: "product created"});
}); 

// app.put(''){

// }

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await client.execute(`DELETE FROM products WHERE id = ${id}`); 
  res.json({message: "product deleted"});
}); 

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
}); 