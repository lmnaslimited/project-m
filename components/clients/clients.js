
import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function brands({clients}) {
    return (
        <section id='clients' className="lg:mx-40 md:mx-8 mx-2 h-60 md:mb-10">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-th-primary-medium">{clients.title}
                </h1>
                <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed text-lg md:text-xl text-base">{clients.subTitle}
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
