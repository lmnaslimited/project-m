
import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function brands({clients}) {
    return (
        <section className="lg:mx-40 md:mx-8 mx-2 h-60 md:mb-10">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-primary-medium">Trusted by Global Clients, Built by Us
                </h1>
                <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed md:text-lg text-base">Our Client Speak our values.
                </p>
            </div>
            <Marquee gradientWidth="150" pauseOnHover>
                <div className="grid grid-cols-3 gap-8 text-center lg:grid-cols-5 mx-4">
                    {clients.logos.map((client) => (
                        <div key={client.name} className="mx-8 flex items-center justify-center p-6 rounded-2xl relative w-full bg-gray-50">
                            <Image
                                src={client.logo}
                                height='50'
                                width='100'
                                className="absolute duration-75 w-full h-full  object-center border-th-accent-medium"
                                alt={client.name}
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    )
}
