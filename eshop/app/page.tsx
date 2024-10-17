'use client'
import HomeProduct from "@/components/HomeProduct";
import { useProducts } from "@/utils/Context";
import Link from "next/link";

export default function Home() {
  const{products}= useProducts()
  
  return (
    <div className=" container">
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:max-w-[80vw] max-w-[90vw] mx-auto gap-3" >
        {products && products.map((product)=>(
          <Link key={product.id} href={`/product/${product.id}`}  >
            <HomeProduct status={product.availabilityStatus} category={product.category} price={product.price} des={product.description} title={product.title} img={product.thumbnail} rate={product.rating} />
          </Link>
        ))}
      </div>
    </div>
  );
}

//https://dummyjson.com/products