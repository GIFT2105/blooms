import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import Hamburger from "../components/Hamburger";

const Nav = () => {
    return (
        <div className='w-screen h-auto flex flex-col'>
            <div id="topSection" className="flex flex-row items-center mt-4 ">
                <div className="text-end flex flex-row items-end  justify-end w-screen   ">
                    <div className="flex flex-row items-start text-start w-screen ">
                        <h1 className="text-start font-news font-extrabold sm:text-2xl  xl:text-4xl    ">BloomPath</h1>
                    </div>
                    <Hamburger />
                </div>
            </div>
        </div>
    )
}

export default Nav
