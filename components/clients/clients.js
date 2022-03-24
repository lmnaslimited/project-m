import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function brands() {
    return (
        <section className="mx-4 p-3">
            <Marquee>

                <div className="px-3">
                    <Image
                        src='/china.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">
                    <Image
                        src='/japan.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">

                    <Image
                        src='/south-korea.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
                <div className="px-3">

                    <Image
                        src='/european-union.png'
                        height='100'
                        width='100'
                        className="absolute inset-0 w-full h-full object-cover object-center border-gray-200"
                    />
                </div>
            </Marquee>
        </section>
    )
}