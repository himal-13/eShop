import Image from "next/image"
import { BiSolidStar, BiStar } from "react-icons/bi"
import { BsStarHalf } from "react-icons/bs";
import { FaStarHalf } from "react-icons/fa";

interface Props{
    img:string,
    title:string,
    des:string
    rate:number
    price:number
    category:string
    status:string

}
const createArray = (n:number) => Array(n).fill(0).map((_, i) => i + 1);

const HomeProduct = ({status,img,title,des,rate,price,category}:Props) => {
  return (
    <div className="shadow-md hover:shadow-2xl p-2 lg:scale-100 sm:scale-95 scale-90">
        <img src={img} alt="" />
        <h2 className="text-xl">{title}</h2>
        <h3 className="text-[14px] text-gray-500 h-6 truncate">{des}</h3>
        <h4 className="text-orange-600 font-bold text-2xl">${price}</h4>
        <p className="flex justify-between text-sm">
          <span className="flex items-center">
            {createArray(Math.ceil(rate-1)).map((r)=><BiSolidStar  className="text-yellow-500 shadow-2xl" key={r}/>)}
            <BsStarHalf className="text-yellow-500 shadow-2xl"/>{rate.toFixed(1)}
          </span>
          <span className={`font-bold  ${status =='Low Stock' && 'text-red-600'}`}>
            {status}
          </span>    

        </p>
    </div>
  )
}

export default HomeProduct