
import Marquee from "react-fast-marquee";
import Image from 'next/image'
export default function brands() {
    return (
        <section className="lg:mx-40 md:mx-20 mx-2 h-60 md:mb-10">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-accent-medium">Trusted by Global Clients, Built by Us
      </h1>
      <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed text-base">Our Client Speak our values.
      </p>
    </div>
            <Marquee gradientWidth="150" pauseOnHover>


                <div class="grid grid-cols-2 gap-2 text-center lg:grid-cols-5">
                    <div class="mx-8 flex items-center justify-center p-6  bg-gray-50">
                        <Image
                            src='/clients/ibm-logox300.png'
                            height='100'
                            width='100'
                            className="absolute duration-75 w-full h-full  object-center border-gray-900"
                        />
                       
                    </div>
                    <div class="flex  mx-8 items-center justify-center p-6  bg-gray-50">
                        <Image
                            src='/clients/shell-logox300.jpeg'
                            height='100'
                            width='100'
                            className="absolute inset-0 w-full h-full  object-center border-gray-200"
                        />
                    </div>
                    <div class="flex mx-8 items-center justify-center p-6  bg-gray-50">
                        <Image
                            src='/clients/kelloggs-logox300.png'
                            height='100'
                            width='100'
                            className="absolute inset-0 w-full h-full  object-center border-gray-200"
                        />
                    </div>
                    <div class="flex mx-8 items-center justify-center p-6  bg-gray-50">
                        <Image
                            src='/clients/neste-oil-logox300.png'
                            height='100'
                            width='100'
                            className="absolute inset-0 w-full h-full  object-center border-gray-200"
                        />
                    </div>
                    <div class="flex mx-8 items-center justify-center p-6  bg-gray-50">
                        <Image
                            src='/clients/national-gridx300.png'
                            height='100'
                            width='100'
                            className="absolute inset-0 w-full h-full  object-center border-gray-200"
                        />
                    </div>
                </div>



                
            </Marquee>
        </section>
    )
}
