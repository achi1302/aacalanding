import { navItems } from "../constants/index"
import logowhite from "../assets/aacalogowhite.png"

const Footer = () => {
  return (
    <footer className="mt-20 py-10 bg-aaca-blue">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
       
        <div className="flex flex-col items-center justify-center">
            <a href="/"><img className="h-20 w-64 mx-auto md:mx-0" src={logowhite} alt="logowhite" /></a>
        </div>

        
        <a href="/contacto">
          <div className="flex flex-col items-center justify-center text-white font-bold hover:text-aaca-green mt-2">
            <p>Calle de la Industria #218-B</p>
            <p>Col. Industrial C.P.21010</p>
            <p>Mexicali, B.C.</p>
            <br />
            <p>(686) 278-6325</p>
            <p>(686) 280-7225</p>
            <a href="https://www.linkedin.com/in/hector-alexanderson-0294342b3/"><p className="text-aaca-blue hover:text-aaca-green">Hecho por: Hector Alexanderson</p></a>
          </div>
        </a>

        
        <div className="flex flex-col items-center justify-center">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-white hover:text-aaca-green font-bold"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer