import { useEffect, useState } from "react"
import {User, Wifi, Puzzle, Wrench, CarFront} from "lucide-react"
import { Helmet } from "react-helmet"
import car from "../assets/bmw.jpg"
import truck from "../assets/truck.jpg"
import tractor from "../assets/tractor.jpg"
import nosotros from "../assets/nosotros.jpg"

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
    <>
        <Helmet>
            <title>Inicio - Auto Aire California</title>
        </Helmet>
        <div>
            {/* Carousel */}
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden shadow-md">

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
                <div className="absolute bottom-4 left-0 right-0 w-full h-full flex flex-col justify-center items-center">
                    {slides.map((slide, index) =>
                        <div
                            key={index}
                            className={`absolute transition-opacity duration-1000 ${
                                currentIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <h1 className="hidden md:block max-w-[300px] md:max-w-[600px] lg:max-w-[975px] text-white font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-4">
                                {slide.subtitle}
                            </h1>
                            <h1 className="max-w-[400px] md:max-w-[600px] lg:max-w-[800px] text-white font-bold text-3xl md:text-4xl lg:text-5xl">
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
                <div className="text-center">
                    <p className="text-aaca-green text-lg uppercase font-medium mb-5">Somos expertos en aire acondicionado</p>
                    <h2 className="text-aaca-blue text-5xl font-bold uppercase">Ofrecemos soluciones de alta calidad</h2>
                </div>

                <div className="relative flex flex-wrap justify-center items-center gap-8 w-full">
                    {/* Boxes */}
                    <a href="/#/servicios">
                        <div className="flex flex-wrap justify-center gap-8 relative z-10">
                            <div className="flex flex-col items-center justify-center bg-aaca-medium-gray p-8 rounded-lg shadow-sm w-72 transform transition-transform duration-500 hover:scale-110">
                                <Puzzle size={75} className="text-aaca-blue mb-4" />
                                <h3 className="text-aaca-blue text-4xl font-bold mb-2">Partes</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-aaca-medium-gray p-8 rounded-lg shadow-sm w-72 transform transition-transform duration-500 hover:scale-110">
                                <Wrench size={75} className="text-aaca-blue mb-4" />
                                <h3 className="text-aaca-blue text-4xl font-bold mb-2">Servicios</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-aaca-medium-gray p-8 rounded-lg shadow-sm w-72 transform transition-transform duration-500 hover:scale-110">
                                <CarFront size={75} className="text-aaca-blue mb-4" />
                                <h3 className="text-aaca-blue text-4xl font-bold mb-2">Reparaciones</h3>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Bottom Text */}
                <div className="text-center max-w-2xl">
                    <h2 className="text-aaca-blue text-5xl font-bold mb-8 uppercase">
                        ¿quiere saber más acerca de nuestros servicios?
                    </h2>
                    <p className="text-aaca-green text-lg font-medium  mb-10">
                        Conoce nuestro portafolio y pongámonos en contacto para encontrar la solución ideal hecha a tu medida.
                    </p>

                    {/* Button */}
                    <a href="/#/servicios">
                        <button className="bg-aaca-green text-white py-4 px-6 rounded-lg font-bold shadow transform transition-transform duration-500 hover:scale-110">
                            SERVICIOS
                        </button>
                    </a>
                </div>

            
            </div>

            {/* Nosotros Section */}
            <div id="nosotros" className="flex items-center justify-center bg-aaca-medium-gray py-16 px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg w-full max-w-[1315px] px-8">
                    
                    {/* Image Container */}
                    <div 
                        className="relative w-full md:w-1/2 flex items-center justify-center hidden md:flex"
                        style={{
                            height: '750px'
                        }}
                    >
                        <img 
                            src={nosotros}
                            alt="Nosotros"
                            className="object-cover rounded-xl"
                            style={{
                                width: '535px',
                                height: '615px'
                            }}
                        />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2 px-8 py-20 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-black mb-4">NOSOTROS</h2>
                        <p className="text-black font-medium mb-4 text-xl md:text-2xl lg:text-2xl">
                            Establecidos en Mexicali, Baja California desde el año 1998 y hoy líderes en el área de
                            la distribución de refacciones nuevas de reemplazo para aire acondicionado automotriz
                            y de uso pesado, para el público general y talleres.
                        </p>
                        <p className="text-black font-medium mb-6 text-xl md:text-2xl lg:text-2xl">
                            Contamos con el mayor inventario en la región listo para surtirlo al momento; así mismo
                            contamos con taller de servicio, mantenimiento y reparación del A/C de su auto,
                            tractocamión y/o maquinaria para brindarle una mejor experiencia y trato.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contacto Section */}
            <div className="flex flex-col md:flex-row items-center justify-center bg-white pt-16 px-4 md:px-16 lg:px-32 xl:px-60">
                {/* Text */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                    <p className="text-aaca-green text-lg uppercase font-medium mb-2"></p>
                    <h2 className="text-aaca-blue text-3xl md:text-5xl font-bold leading-tight mb-4">CONTÁCTANOS</h2>
                    <p className="text-black font-normal mb-6 text-2xl">
                        ¿Tienes preguntas o necesitas ayuda? ¡Contáctanos hoy mismo! Nuestro equipo 
                        está aquí para ayudarte a encontrar la solución perfecta.
                    </p>
                    <a href="/#/contacto">
                        <button className="bg-aaca-green text-white py-4 px-6 rounded-lg font-bold shadow transform transition-transform duration-500 hover:scale-110">
                            CONTACTO
                        </button>
                    </a>
                </div>

                {/* Icons */}    
                <div className="w-full md:w-1/2 flex justify-center relative hidden md:flex">
                    <div className="relative">
                        <div className="absolute -bottom-1">
                            <User size={180} className="text-aaca-blue" />
                        </div>
                        <div className="absolute -left-32 -top-12 transform rotate-45">
                            <Wifi size={180} className="text-aaca-green" />
                        </div>
                        <div className="absolute top-0 right-20">
                            <User size={180} className="text-aaca-blue" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Inicio