import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [cart, setCart] = useState([]);

  const productFetch = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setProduct(data.products);
  }

  useEffect(() => {
    productFetch();
  }, [])
  const p={
  title,
  price
  }
const handleSubmit = async(e) => {
  e.preventDefault();
  // Handle form submission logic here
  try{

    await axios.post("https://fakestoreapi.com/products",{p});
    alert("Product added successfully");
    setCart([...cart, p]);
    localStorage.setItem("product", JSON.stringify(cart));
    console.log(p);
  }catch(err){
    console.error("Error adding product:", err);
    alert("Failed to add product");
  }
        
   
}
  return (
    <>
      <input
        type='search'
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />

      <h1>Products</h1>

      {/* {
        product
          .filter((item) => {
            return search.toLowerCase() === ""
              ? true
              : item.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => {
            return <h2 key={item.id}>{item.title}</h2>
          })
      } */}

      <form onSubmit={handleSubmit} >
       Name: <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      <br/>
      Price: <input type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
      <br/>
      <br/>
      <button type='submit'>Submit</button>

      </form>
      {
        cart.map((item, index) => {
          return <h2 key={index}>{item.title} - ${item.price}</h2>
        })
      }
    </>
  )
}

export default App