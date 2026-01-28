import React from 'react'
import { productsary } from './newproductdata'
import { Link } from 'react-router-dom'
export default function Categories() {
  let categories= [];
  productsary.map((p)=>
  {
    if(categories.findIndex((e)=>e.cname==p.category)==-1)
    {
    categories.push({cname:p.category, imgsrc:p.images})
    }
  })
  
    let categories_ui = categories.map((c)=>
    {
    return    <div className='w-1/4 text-center flex justify-center items-center flex-col'>
           <Link to={"/products/"+c.cname}>
            <img src={c.imgsrc} className='w-4/5 aspect-square'></img>
            <div className='font-bold text-lg'>{c.cname}</div>
            </Link>
        </div>
    })
  return (
    <div>Categories
        <br />
        <div className='flex flex-wrap gap-4 justify-center'>
    {categories_ui}
        </div>
    </div>
  )
}
