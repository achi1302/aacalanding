import { Helmet } from "react-helmet"
import contact from "../assets/contact.jpg"
import compresornuevo from "../assets/compresornuevo.jpg"
import condesador from "../assets/condesador.png"
import evaporador from "../assets/evaparador.jpg"
import valvulasexpansion from "../assets/valvulasexpansion.jpg"
import deshidratador from "../assets/deshidratador.jpg"
import filtrocabina from "../assets/filtrocabina.jpg"
import valvulascontrol from "../assets/valvulascontrol.jpg"
import abanicosauxiliares from "../assets/abanicosauxiliares.jpg"
import resistencia from "../assets/resistencias.jpg"
import serviciosac from "../assets/serviciosac.jpg"
import mangeras from "../assets/fabricaciondemangeras.jpg"
import baleros from "../assets/baleros.jpg"
import services from "../assets/services.jpg"



const Servicios = () => {
   
    const servicios = [
        {name: "COMPRESORES NUEVOS", image: compresornuevo},
        {name: "CONDENSADORES", image: condesador},
        {name: "EVAPORADORES", image: evaporador},
        {name: "VALVULAS DE EXPANSIÓN", image: valvulasexpansion},
        {name: "DESHIDRATADORES", image: deshidratador},
        {name: "FILTROS DE CABINA", image: filtrocabina},
        {name: "VALVULAS DE CONTROL", image: valvulascontrol},
        {name: "EVAPORADORES UNIVERSALES", image: compresornuevo},
        {name: "ABANICOS AUXILIARES", image: abanicosauxiliares},
        {name: "RESISTENCIAS", image: resistencia},
    ]

    const serviciosReparaciones = [
        {
            image: [serviciosac], 
            title: "SERVICIO A/C AUTOMOTRIZ",
            description: "Descripción adicional sobre el servicio."
        },
        {
            image: [mangeras], 
            title: "FABRICACIÓN DE MANGUERAS A/C    ",
            description: "Descripción adicional sobre el servicio."
        },
        {
            image: [baleros], 
            title: "CAMBIO DE BALERO A COMPRESOR A/C",
            description: "Descripción adicional sobre el servicio."
        }
    ]

  return (
    <>
        <Helmet>
            <title>Servicios - Auto Aire California</title>
        </Helmet>
        <div>
            {/* Banner */}
            <div className="relative w-full h-[535px] flex flex-col items-center justify-center shadow-sm">
                {/* Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${services})`,
                        filter: "brightness(0.5)"}}
                    ></div>
                    {/* Content */}
                    <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                        <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mt-4">
                            SERVICIOS
                        </p>
                    </div>
            </div>

            {/* Grid Section */}
            <div className="p-12 flex flex-col items-center">
                <div className="text-center mb-6">
                    <h2 className="text-aaca-blue font-bold text-4xl md:text-5xl lg:text-5xl">VENTA DE REFRACCIONES</h2>
                </div>
                {/* Grid */}
                <a href="/aacalanding/#/contacto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 max-w-[1125px]">
                        {servicios.map((servicio, index) => (
                            <div
                                key={index}
                                className="border rounded-lg shadow-sm flex flex-col items-center justify-center p-3 w-[150px] md:w-[200px] lg:w-[200px] transform transition-transform duration-500 hover:scale-110"
                            >
                                <img
                                    src={servicio.image}
                                    alt={servicio.name}
                                    className="w-full h-28 object-contain mb-4"
                                />
                                <p className="text-center font-bold text-sm">
                                    {servicio.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </a> 
            </div>

            {/* Servicios y Reparaciones */}
            <div className="bg-aaca-medium-gray py-16 px-6">
                <div className="text-center mb-10">
                    <h2 className="text-aaca-blue font-bold text-4xl md:text-5xl lg:text-5xl">SERVICIOS Y REPARACIONES</h2>
                </div>
                {/* Grid */}
                <a href="/aacalanding/#/contacto">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-12">
                            {serviciosReparaciones.map((servicio, index) => (
                                <div
                                    key={index}
                                    className="relative h-80 w-[535px] rounded-2xl overflow-hidden group"
                                    style={{
                                        backgroundImage: `url(${servicio.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    {/* Visible */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transform transition-transform duration-500 hover:scale-110">
                                        <h3 className="text-white font-bold text-4xl text-center w-3/4">
                                            {servicio.title}
                                        </h3>
                                    </div>

                                    {/* Hover */}
                                    {/* <div className="absolute inset-0 bg-white bg-opacity-0 flex items-start justify-start p-6 transition-all duration-500 group-hover:bg-opacity-100">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <h3 className="text-black font-bold text-2xl mb-2">
                                                {servicio.title}
                                            </h3>
                                            {servicio.description && (
                                                <p className="text-black text-xl">
                                                    {servicio.description}
                                                </p>
                                            )}

                                        </div>
                                    </div> */}
                                </div>
                            ))} 
                        </div>
                    </div>
                </a>
            </div>

            {/* Maybe Contacto Section */}
            <div className="text-center pt-16">
                <h2 className="text-aaca-blue font-bold text-5xl mb-6">¿NECESITAS AYUDA?</h2>
                <p className="text-aaca-green font-medium text-xl mb-6">¡Contáctanos!</p>
                <a href="/aacalanding/#/contacto">
                    <button className="bg-aaca-green text-white font-bold px-6 py-4 rounded-lg shadow transform transition-transform duration-500 hover:scale-110">
                        CONTACTO
                    </button>
                </a>
            </div>
        </div>
    </>
  )
}

export default Servicios