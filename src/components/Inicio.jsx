import { useEffect, useState } from "react"
import {User, Wifi, Puzzle, Wrench, CarFront} from "lucide-react"
import { Link } from "react-router-dom"
import car from "../assets/bmw.jpg"
import truck from "../assets/truck.jpg"
import tractor from "../assets/tractor.jpg"

const Inicio = () => {
    const slides = [
        { 
            image: [car], 
            title: 'ESPECIALISTAS EN REFACCIONES PARA A/C AUTOMOTRIZ',
            subtitle: 'Compresores Nuevos | Condensadores | Evaporadores | Otros' 
        },
        { 
            image: [truck],
            title: 'ESPECIALISTAS EN REFACCIONES PARA A/C TRACTOCAMIÓN',
            subtitle: 'Compresores Nuevos | Condensadores | Evaporadores | Otros' 
        },
        { 
            image: [tractor],
            title: 'ESPECIALISTAS EN REFACCIONES PARA A/C MAQUINARIA AGRICOLA',
            subtitle: 'Compresores Nuevos | Filtros Deshidratadores | Válvulas de Expansión | Otros'
        }
    ]

    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ autoPlay, setAutoPlay ] = useState(true)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 ) % slides.length)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
        setAutoPlay(false)
    }

    //Autoplay effect
    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(nextSlide, 5000) //Change every 5 seconds
            return () => clearInterval(interval) //Cleanup Interval on unmount
        }
        
        //Re-enable autoplay
        const timeout = setTimeout(() => setAutoPlay(true), 5000)
        return () => clearTimeout(timeout)
    }, [currentIndex, autoPlay])

  return (
    <div>
        {/* Carousel */}
        <div className="relative w-full h-[800px] overflow-hidden shadow-md">

            {/* Image */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <img 
                        key={index}
                        src={slide.image}
                        alt='CarouselSlide'
                        className={`absolute inset-0 w-full h-full object-cover filter brightness-50 transition-opacity duration-1000 ${
                            currentIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
        
            {/* Texts */}
            <div className="absolute bottom-4 left-[550px] w-full h-full flex flex-col justify-center items-start">
                {slides.map((slide, index) =>
                    <div
                        key={index}
                        className={`absolute transition-opacity duration-1000 ${
                            currentIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Sub */}
                        <h1 className="max-w-[975px] text-white font-bold text-2xl mb-4">
                            {slide.subtitle}
                        </h1>
                        {/* Title */}
                        <h1 className="max-w-[800px] text-white font-bold text-5xl">
                            {slide.title}
                        </h1>
                    </div> 
                )}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${
                            currentIndex === index ? 'bg-aaca-blue' : 'bg-aaca-bold-gray'
                            }`}
                            onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
        
        {/* Servicios Section */}
        <div className="relative flex flex-col items-center px-4 py-16 bg-white space-y-16">

            {/* Top Section Text */}
            <div className="text-center">
                <p className="text-aaca-green text-lg uppercase font-medium">Lorem ipsum dolot sit em</p>
                <h2 className="text-aaca-blue text-5xl font-bold">LOREM IPSUM DOLOR SIT EM</h2>
            </div>

            {/* Middle Section */}
            <div className="relative flex flex-wrap justify-center items-center gap-8 w-full">

                {/* Left Lines*/}
                <div className="absolute left-0 flex items-center justify-center h-full">
                    <svg className="h-32 text-aaca-blue" viewBox="0 0 20 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C15.5228 20 15.5228 80 10 100" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>
                
                {/* Right Line */}
                <div className="absolute right-0 flex items-center justify-center h-full">
                    <svg className="h-32 text-aaca-blue" viewBox="0 0 20 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C15.5228 20 15.5228 80 10 100" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>
                
                {/* Boxes */}
                <div className="flex flex-wrap justify-center gap-8 relative z-10">
                    {/* Partes */}
                    <div className="flex flex-col items-center justify-center bg-aaca-medium-gray p-8 rounded-lg shadow-sm w-72 transform transition-transform duration-500 hover:scale-110">
                        <Puzzle size={75} className="text-aaca-blue mb-4" />
                        <h3 className="text-aaca-blue text-4xl font-bold mb-2">Partes</h3>
                    </div>

                    {/* Servicios */}
                    <div className="flex flex-col items-center justify-center bg-aaca-medium-gray p-8 rounded-lg shadow-sm w-72 transform transition-transform duration-500 hover:scale-110">
                        <Wrench size={75} className="text-aaca-blue mb-4" />
                        <h3 className="text-aaca-blue text-4xl font-bold mb-2">Servicios</h3>
                    </div>

                    {/* Reparaciones */}
                    <div className="flex flex-col items-center justify-center bg-aaca-medium-gray p-8 rounded-lg shadow-sm w-72 transform transition-transform duration-500 hover:scale-110">
                        <CarFront size={75} className="text-aaca-blue mb-4" />
                        <h3 className="text-aaca-blue text-4xl font-bold mb-2">Reparaciones</h3>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center max-w-2xl">
                <h2 className="text-aaca-blue text-5xl font-bold">
                    LOREM IPSUM DOLOR SIT EMET, CONSECTETUR ADIPISCING ELIT, SED
                </h2>
                <p className="text-aaca-green text-lg font-medium mt-2">
                    Conoce nuestro portafolio y pongámonos en contacto para encontrar la solución ideal hecha a tu medida.
                </p>
            </div>

            {/* Button */}
            <button className="bg-aaca-green text-white py-4 px-6 rounded-lg font-bold shadow transform transition-transform duration-500 hover:scale-110">
                SERVICIOS
            </button>
        </div>

        {/* Nosotros Section */}
        <div className="flex items-center justify-center bg-aaca-medium-gray py-16 px-8">
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg w-full max-w-5xl">
                
                {/* Backgrounds */}
                <div className="relative w-full md:w-1/2 h-80 flex items-center justify-center">
                    <div className="absolute w-64 h-64 bg-aaca-medium-gray rounded-xl"></div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 px-8 py-8">
                    <h2 className="text-2xl font-bold text-black mb-4">NOSOTROS</h2>
                    <p className="text-black font-medium mb-4">
                        Establecidos en Mexicali, Baja California desde el año 1998 y hoy líderes en el área de
                        la distribución de refacciones nuevas de reemplazo para aire acondicionado automotriz
                        y de uso pesado, para el público general y talleres.
                    </p>
                    <p className="text-black font-medium mb-6">
                        Contamos con el mayor inventario en la región listo para surtirlo al momento; así mismo
                        contamos con taller de servicio, mantenimiento y reparación del A/C de su auto,
                        tractocamión y/o maquinaria para brindarle una mejor experiencia y trato.
                    </p>
                </div>
            </div>
        </div>

        {/* Contacto Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-60 outline">
            {/* Text */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 items-center outline">
                <p className="text-aaca-green text-lg uppercase font-medium mb-2">Contácto</p>
                <h2 className="text-aaca-blue text-5xl font-bold leading-tight mb-4">LOREM IPSUM DOLOR AMET, CO</h2>
                <p className="text-black font-normal mb-6">
                    Lorem ipsum odor amet, consectetur adipiscing elit. Imperdiet curabitur consequat risus
                    felis interdum euismod posuere, risus aenean. Effictur consectetur neque nostra interdum
                    congue himenaeos libero. Cubilia luctus morbi cubilia non pharetra id eget phar.
                </p>
                <Link to="/contacto">
                    <button className="bg-aaca-green text-white py-4 px-6 rounded-lg font-bold shadow transform transition-transform duration-500 hover:scale-110">
                    CONTÁCTO
                    </button>
                </Link>
            </div>

            {/* Icons */}    
            <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative">
                    {/* Top Icon */}
                    <div className="absolute -bottom-1">
                        <User size={180} className="text-aaca-blue" />
                    </div>
                    {/* Sound Waves */}
                    <div className="absolute -left-32 -top-12 transform rotate-45">
                        <Wifi size={180} className="text-aaca-green" />
                    </div>
                    {/* Bottom Figure */}
                    <div className="absolute top-0 right-20">
                        <User size={180} className="text-aaca-blue" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inicio