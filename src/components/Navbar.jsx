import {Menu, X} from "lucide-react"
import logo from "../assets/aacalogo.jpg"
import { navItems } from "../constants/index"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-5 bg-white shadow-md">
        <div className="container px-4 mx-auto relative text-base ">
            <div className="flex justify-between items-center ">
                <div className="flex items-center flex-shrink-0 ">
                    <Link to="/">
                        <img className="h-20 w-64" src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className="hidden lg:flex ml-40 space-x-20 font-bold text-aaca-blue ">
                    {navItems.map((item, index) => (
                        <li key={index}>
                           <Link
                                to={item.href}
                                className="hover:text-aaca-green"
                                onClick={() => setMobileDrawerOpen(false)}
                            >
                                {item.label}
                           </Link>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar} className="text-aaca-bold-gray">
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div> 
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-aaca-light-gray w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index)=> ( 
                            <li key={index} className="py-2 text-aaca-blue font-bold">
                                <Link
                                    to={item.href}
                                    className="hover:text-aaca-green"
                                    onClick={toggleNavbar}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar