import { MdOutlineShoppingCart } from "react-icons/md"
import { VscAccount } from "react-icons/vsc"

const Navbar = () => {
    return (
        <nav className=" py-5 shadow-md max-w-[100vw] flex justify-center items-center gap-[5vw] overflow-hidden">
            <div className="flex gap-[5vw]">
                <h1 className="text-5xl font-extrabold">e<span className="text-purple-600">Shop</span></h1>
            
            <ul className="flex items-end gap-[5vw] text-2xl font-medium">
                <li>Shop</li>
                <li>Collection</li>
            </ul>
            </div>
            <div className="w-[30vw]">
                <input type="text" placeholder="search" className="p-2 border-2 border-black w-full" />
            </div>
            <ul className="flex gap-[5vw] text-2xl ">
                <li><VscAccount /></li>
                <li><MdOutlineShoppingCart/></li>
            </ul>
            
        </nav>
    )
}

export default Navbar