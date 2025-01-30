import {Menu, X} from "lucide-react"
import logo from "../assets/aacalogo.jpg"
import { navItems } from "../constants/index"
import { useState } from "react"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    const handleNavClick = (href) => {
        if (href.startsWith("/aacalanding/#/#")) {
          const sectionId = href.substring(16) 
          const section = document.getElementById(sectionId);
    
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        } else {
            window.location.href = href;
        }
    
        setMobileDrawerOpen(false); // Close the mobile drawer
      }

  return (
    <nav className="sticky top-0 z-50 py-5 bg-white shadow-md">
        <div className="container px-4 mx-auto relative text-base ">
            <div className="flex justify-between items-center ">
                <div className="flex items-center flex-shrink-0 ">
                    <a href="/">
                        <img className="h-20 w-64" src={logo} alt="logo" />
                    </a>
                </div>
                <ul className="hidden lg:flex ml-40 space-x-20 font-bold text-aaca-blue ">
                    {navItems.map((item, index) => (
                        <li key={index}>
                           <a
                                href={item.href}
                                className="hover:text-aaca-green"
                                onClick={() => handleNavClick(item.href)}
                            >
                                {item.label}
                           </a>
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
                            <li key={index} className="py-2 text-aaca-blue font-bold text-center">
                                <a
                                    href={item.href}
                                    className="hover:text-aaca-green"
                                    onClick={() => handleNavClick(item.href)}
                                >
                                    {item.label}
                                </a>
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