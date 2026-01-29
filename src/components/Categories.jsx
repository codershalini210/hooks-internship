import React from 'react'
import { productsary } from './newproductdata'
import { Link } from 'react-router-dom'

export default function Categories(props) {
  

  // console.log(currentPath)
  let direction = props.direction
  let css_class_name = "flex"
  if(direction=="bottom")
  {
    css_class_name = "flex-col"
  }
  let categories= [];
  productsary.map((p)=>
  {
    if(categories.findIndex((e)=>e.cname==p.category)==-1)
    {
    categories.push({cname:p.category, imgsrc:p.thumbnail})
    }
  })
  
    let categories_ui = categories.map((c)=>
    {
    return    <div className='w-1/4 text-center flex justify-center items-center flex-col'>
           <Link to={"/products/"+c.cname}>
           {direction=="right"? <img src={c.imgsrc} className='w-4/5 aspect-square'></img>:""}
            <div className={direction=="right"?'font-bold text-lg':"text-md underline text-blue-800"}
            >{c.cname}</div>
            </Link>
        </div>
    })
  return (
    <div>Categories
        <br />
        <div className={css_class_name +' flex-wrap gap-4 justify-center'}>
    {categories_ui}
        </div>
    </div>
  )
}
