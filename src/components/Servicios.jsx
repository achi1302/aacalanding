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

  return (
    <div>
        {/* Banner */}
        <div className="relative w-full h-[535px] flex flex-col items-center justify-center shadow-sm">
            {/* Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${contact})`,
                    filter: "brightness(0.5)"}}
                ></div>
                {/* Content */}
                <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <p className="text-white font-bold text-5xl mt-4">
                        SERVICIOS
                    </p>
                </div>
        </div>

        {/* Grid Section */}
        <div className="p-12 flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-6">
                <p className="text-aaca-green font-medium text-xl">NUESTROS SERVICIOS</p>
                <h2 className="text-aaca-blue font-bold text-5xl">REFACCIONES</h2>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 max-w-[1125px]">
                {servicios.map((servicio, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-sm flex flex-col items-center justify-center p-3 w-[200px] transform transition-transform duration-500 hover:scale-110"
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
        </div>

        {/* Servicios y Reparaciones */}
        <div className="bg-aaca-medium-gray py-16">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-aaca-blue font-bold text-5xl">SERVICIOS Y REPARACIONES</h2>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto">
                {/* First Row */}
                <div className="flex justify-center gap-12 mb-12">
                    <div 
                        className="relative h-80 w-[535px] rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105" 
                        style={{backgroundImage: `url(${serviciosac})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <p className="text-white font-bold text-4xl text-center">
                                SERVICIOS DE AIRE ACONDICIONADO
                            </p>
                        </div>
                    </div>
                    <div 
                        className="relative h-80 w-[535px] rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105" 
                        style={{backgroundImage: `url(${mangeras})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <p className="text-white font-bold text-4xl text-center">
                                FABRICACIONES DE MANGUERAS
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex justify-center">
                    <div 
                        className="relative h-80 w-[535px] rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105" 
                        style={{backgroundImage: `url(${baleros})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <p className="text-white font-bold text-4xl text-center">
                                CAMBIOS DE BALEROS/COMPRESOR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicios