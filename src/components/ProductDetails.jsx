import React from 'react'
import { useParams } from 'react-router-dom'
import { productsary } from './newproductdata'
import { Link } from 'react-router-dom'
import Imagegallery from './Imagegallery'
export default function ProductDetails() {
  let params = useParams()
  let pid = params.id
    // category: "Electronics",
    // items: [
    //   {
    //     id: 1,
    //     name: "Smartphone",
    //     price: 14999,
    //     imgurl: "https://thumbnail.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    //   },
    //   {
  
  let product = productsary.find((i)=>i.id==pid)
  let category_products = productsary.filter((p)=>p.category == product.category)
let similer_Products = category_products.filter((p)=>p.id!=pid)
console.log(similer_Products)

 let similer_Products_ui = similer_Products.map((p)=>
    {
      return  <div key= {p.id} className='w-1/4 flex justify-center items-center text-center flex-col'>
        <img src={p.thumbnail} alt="" className='w-4/5 aspect-square' />
        <div className='text-lg'>{p.title}</div>
        <div>${p.price}</div>
        <Link to={"/productDetails/"+p.id}>view more</Link>
        </div>
    })


  console.log(JSON.stringify(product))
  return (
    <div>
    <div className='flex '>
      <div className='w-1/2'> 
    {/* <img src={product.thumbnail} className='w-4/5 aspect square' alt="" /> */}
    <Imagegallery imgary={product.images}></Imagegallery>
      </div>
      <div className='w-1/2'>
      {product.title}
      <br />
     $ {product.price}
      

      </div>

    </div>
    <div className='text-lg text-black underline'>
      Products you make like :
    </div>
   <div className='flex gap-4 flex-wrap justify-center'>
      {similer_Products_ui}
    </div>
    </div>
  )
}
