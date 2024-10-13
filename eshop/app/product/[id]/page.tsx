'use client'
import { useProducts } from '@/utils/Context'
import { ProductType } from '@/utils/Interfaces'
import React, { useEffect, useState } from 'react'
import { BiSolidStar } from 'react-icons/bi';
import { BsStarHalf } from 'react-icons/bs';
import { MdOutlineShoppingCart,  MdVerifiedUser } from 'react-icons/md';
import {  RiBankCardLine } from 'react-icons/ri';

const createArray = (n:number) => Array(n).fill(0).map((_, i) => i + 1);
const page = ({params}:{params:{id:number}}) => {
  const{products} = useProducts()
  const[isLoading,setIsLoading] = useState(true)
  const[currentProduct,setProduct] = useState<ProductType|undefined>()
  const[quantity,setQuantity] = useState(1)

  useEffect(()=>{
    setProduct(products[params.id-1])
    if(currentProduct){
      setIsLoading(false)
    }
  })
  if(isLoading){
    return<div className='text-5xl absolute left-1/2 top-1/2'><h2>Loading...</h2></div>
  }

  return (
    <main className=' bg-slate-100 min-h-[100vh] max-w-[100vw]'>
      <div className=" max-w-[90vw] sm:max-w-[80vw] xl:max-w-[60vw] mx-auto flex lg:flex-row flex-col items-center gap-4 bg-white">
          <section className='lg:w-1/2 w-full lg:block flex justify-center'>
              <img src={currentProduct?.thumbnail} alt="" className='w-10/12 shadow-md'/>
              {/* <div className="flex lg:flex-row sm:flex-col flex-row">
                  {currentProduct?.images.map((img,key)=>(
                    <img className='h-10 shadow-md' src={img} alt='' key={key}/>
                  ))}
              </div>     */}
          </section>
          <section className='self-center p-4'>
          <p>
                <span className="flex items-center">
                {createArray(Math.ceil(currentProduct!.rating-1)).map((r)=><BiSolidStar  className="text-yellow-500 shadow-2xl" key={r}/>)}
                <BsStarHalf className="text-yellow-500 shadow-2xl"/>{currentProduct?.rating.toFixed(1)}
                </span>
            </p>
            <h2 className='text-3xl font-bold'>{currentProduct?.title}</h2>
            <h3>
                <span className={`font-bold  ${currentProduct?.availabilityStatus =='Low Stock'? 'text-red-600':"text-blue-600"}`}>
                    {currentProduct?.availabilityStatus}
                </span>   
            </h3>
            <h4>{currentProduct?.description}</h4>
 
            <h2 className='text-3xl text-orange-600'>${currentProduct?.price}</h2>
            <div className="my-[1vh]">
              <h5 className='text-xl'>Quantity</h5>
              <button className='m-2 px-2 border-[1px] border-black' onClick={()=>{if(quantity>1)setQuantity(quantity-1)}}>-</button><span className='m-2 px-4 py-2 border-[1px] border-blue-600'>{quantity}</span><button className='m-2 px-2 border-[1px] border-black' onClick={()=>{if(quantity<currentProduct!.stock)setQuantity(quantity+1)}}>+</button>
              <h6 className='text-sm'>{currentProduct?.stock} items in stock</h6>
            </div>
            <div className="flex gap-2 text-xl">
              <button className='px-3 py-2 rounded-md bg-blue-600 text-white flex items-center '><MdOutlineShoppingCart/> Add to cart</button>
              <button className='flex px-2 border-[1px] border-black rounded-md justify-center items-center'><RiBankCardLine/>Buy now</button>
            </div>
            
          </section>
          
      </div>
      <div className="mt-[2vh] max-w-[90vw] sm:max-w-[80vw]xl:max-w-[60vw] mx-auto bg-white py-[2vh]  overflow-hidden">
        <h2 className='text-2xl text-center font-sans font-medium mb-[5vh]'>Product details of {currentProduct?.title}</h2>
        <ul className='list-disc relative left-6'>
          <li>Title:{currentProduct?.title}</li>
          <li>Price:${currentProduct?.price}</li>
          <li>Brand:{currentProduct?.brand}</li>
          <li>Category:{currentProduct?.category}</li>
          <li>Rating:{currentProduct?.rating}</li>
        </ul>
      </div>
      <div className="mt-[2vh] max-w-[90vw] sm:max-w-[80vw] xl:max-w-[60vw] mx-auto bg-white px-[2vw] py-[2vh]">
        <h2 className='text-2xl text-center font-sans font-medium mb-[5vh]'>Rate & Reviews of {currentProduct?.title}</h2>
        <section className='text-3xl flex flex-col items-center py-4 border-b-[1px] border-gray-300'>
          <h3 className=''>{currentProduct?.rating}/5</h3>
          <p>
            <span className="flex items-center">
                {createArray(Math.ceil(currentProduct!.rating-1)).map((r)=><BiSolidStar  className="text-yellow-500 shadow-2xl" key={r}/>)}
                <BsStarHalf className="text-yellow-500 shadow-2xl"/>
            </span>
          </p>
        </section>
        <section className='py-4'>
          {currentProduct!.reviews.map((review,index)=>(
            <div className="py-2 border-b-[1px] border-gray-100" key={index}>
                <p>
                    <span className="flex items-center">
                        {createArray(Math.ceil(review.rating)).map((r)=><BiSolidStar  className="text-yellow-500 shadow-2xl" key={r}/>)}
                        <span>{review.rating}</span>
                    </span>
                </p>
                <h4 className='flex items-center font-sans text-sm'>{review.reviewerName}<MdVerifiedUser className='text-green-600'/> </h4>
                <p className=' text-xl'>{review.comment}</p>
            </div>
          ))}

        </section>
      </div>
    </main>
  )
}

export default page