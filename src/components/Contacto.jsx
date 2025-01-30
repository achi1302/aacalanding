import {MapPin, Smartphone} from "lucide-react"
import {Helmet} from "react-helmet"
import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import phones from "../assets/phones.jpg"

const Contacto =() => {

    const form = useRef()
    const [isSending, setIsSending] = useState(false)
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSending(true)
        setMessage("")

        emailjs
      .sendForm(
        "service_ip7x2fm", // Service ID 
        "template_outjkoo", // Template ID
        form.current,
        "AnMHiTtLNpK73Zr6h" // Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setMessage("¡Mensaje enviado correctamente!")
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text)
          setMessage("Hubo un error al enviar el mensaje. Inténtalo de nuevo.")
        }
      )
      .finally(() => setIsSending(false))
    }
  return (
    <>
        <Helmet>
            <title>Contacto - Auto Aire California</title>
        </Helmet>
        <div>
            {/* Banner */}
            <div className="relative w-full h-[535px] flex flex-col items-center justify-center shadow-md">
                {/* Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage:  `url(${phones})`,
                        filter: "brightness(0.5)"
                    }}
                ></div>
                {/* Content */}
                <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <p className="hidden md:block text-white font-bold text-lg md:text-xl lg:text-2xl">
                        Auto | Tractocamión | Maquinaria Agrícola
                    </p>
                    <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mt-4">
                        AUTO AIRE CALIFORNIA
                    </p>
                </div>
            </div>

            {/* Contacto Section */}
            <div className="container mx-auto px-4 pt-10">
                <h2 className="text-5xl font-bold text-center text-aaca-blue mb-10">CONTÁCTANOS</h2>
                <div className="flex flex-col lg:flex-row justify-center gap-0">
                    {/* Map */}
                    <div className="flex-1">
                        <iframe
                            title="Mapa"
                            className="w-full h-[520px] rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.4048611803114!2d-115.47220362360784!3d32.64866879053292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7707428f2cadf%3A0x3971cf5a38861e0!2sCompresores%20de%20Mexicali!5e0!3m2!1sen!2smx!4v1734410715965!5m2!1sen!2smx"
                            loading="lazy"
                        ></iframe>
                    </div>
                    {/* Form */}
                    <div className="flex-1 bg-aaca-blue text-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-center">Compártenos tus datos y conversemos</h3>
                        <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                            <input
                               type="text"
                               name="nombre"
                               placeholder="Nombre"
                               className="w-full p-3 rounded-lg text-black"
                               required
                            />
                            <div className="flex gap-4">
                                <input 
                                    type="text"
                                    name="telefono"
                                    placeholder="Teléfono"
                                    className="w-1/2 p-3 rounded-lg text-black"
                                    required
                                />
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    className="w-1/2 p-3 rounded-lg text-black"
                                    required
                                />
                            </div>
                            <textarea
                                name="mensaje"
                                placeholder="Mensaje"
                                className="w-full p-3 rounded-lg h-52 text-black"
                                required
                            ></textarea>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-aaca-green text-white w-40 py-4 px-6 rounded-lg font-bold shadow transform transition-transform duration-500 hover:scale-110"
                                    disabled={isSending}
                                >
                                    {isSending ? "Enviando..." : "ENVIAR"}
                                </button>
                                <p className="text-center font-bold text-base md:text-lg lg:text-xl w-80 mr-6 md:mr-20 lg:mr-20 transform transition-transform duration-500 hover:scale-110">
                                    ¡Nos puede contactar por teléfono, correo o whatsapp!
                                </p>
                            </div>
                            {message && (
                                <p className={`text-center font-bold mt-4 ${message.includes("error") ? "text-red-500" : "text-green-500"}`}>
                                    {message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-10 flex flex-col lg:flex-row justify-center md:gap-[50px] lg:gap-[500px] hidden md:flex">
                    <div className="flex flex-col items-center gap-2">
                        <a 
                            href="https://www.google.com/maps?q=Calle+de+la+Industria+%23218-B,+Col.+Industrial,+C.P.+21010,+Mexicali,+B.C."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MapPin size={55} className="text-aaca-blue hover:text-aaca-green transform transition-transform duration-500 hover:scale-125" />
                        </a>
                        <p className="font-normal text-aaca-blue text-xl">
                            <span className="font-bold text-aaca-blue">Calle de la Industria #218-B</span>
                            <br />
                            Col. Industrial C.P. 21010
                            <br />
                            Mexicali, B.C.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Smartphone size={55} className="text-aaca-blue hover:text-aaca-green transform transition-transform duration-500 hover:scale-125" />
                        <p className="font-bold text-aaca-blue text-xl">
                            (686) 278-6325 
                            <br/>
                            (686) 280-7225
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacto