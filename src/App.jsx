
import { useEffect,  useState } from 'react'
import './App.css'

function App() {
 
  const [product,setProduct]=useState([]);
  
 
 const productFetch=async()=>{
  const res=await fetch("https://fakestoreapi.com/products");
   const data= await res.json();
   console.log(data);
    setProduct(data);
 }
  
 useEffect(()=>{
 productFetch();
 },[])
  return (
    <>
     <div> Hello</div>
      <h1>Products</h1>
      {
        product.map((shivam)=>{
          return <h2>{shivam.title}</h2>
        })
      }
     

    </>
  )
}

export default App
