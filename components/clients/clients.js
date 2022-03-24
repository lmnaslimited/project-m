import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function brands() {
    return (
        <section className="lg:mx-40 md:mx-20 mx-2 h-60 md:mb-10">
            <div class="text-xl md:text-2xl lg:text-4xl text-2xl mb-10 text-center text-lime-800 font-bold">Our Clients</div>
            <Marquee gradientWidth="150">

                <div className="px-10 lg:px-20">
                    <Image
                        src='/ibm-logo-800x600.png'
                        height='100'
                        width='100'
                        className="absolute duration-75 w-full h-full  object-center border-gray-900"
                    />
                </div>
                <div className="px-10 lg:px-20">
                    <Image
                        src='/shell-logo-424x632.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full  object-center border-gray-200"
                    />
                </div>
                <div className="px-10 lg:px-20">

                    <Image
                        src='/Kellogg-Logo-3840x2160.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full  object-center border-gray-200"
                    />
                </div>
                <div className="px-10 lg:px-20">

                    <Image
                        src='/Neste-Oil-Logo-1280x720.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full  object-center border-gray-200"
                    />
                </div>
                <div className="px-10 lg:px-20">

                    <Image
                        src='/national-grid-logo-600x338.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full  object-center border-gray-200"
                    />
                </div>
            </Marquee>
        </section>
    )
}
