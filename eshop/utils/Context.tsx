'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProductType } from "./Interfaces";


interface ProductsContexttype{
    products:ProductType[]

}

interface ProductsProviderProp{
    children:ReactNode
}

export const productsContext = createContext<ProductsContexttype | undefined>(undefined)

 const ProductsProvider:React.FC<ProductsProviderProp>=({children})=>{
    const[products,setProducts] = useState<ProductType[]>([])

    const fetchProducts = async()=>{
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok){
            throw new Error("something wrong")
        }
            response.json().then((res)=>setProducts(res.products))
            .catch((e)=>console.log(e))
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    return(
        <productsContext.Provider value={{products}}>
            {children}
        </productsContext.Provider>
    )

}

export default ProductsProvider;

export const useProducts = ():ProductsContexttype=>{
    const context = useContext(productsContext)
    if(!context){
        throw new Error("product context not found")

    }
    return context;
}