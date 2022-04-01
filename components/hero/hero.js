import Container from "../container";

export default function Hero() {
  return (
    <section className="leading-normal tracking-normal bg-cover pb-40 bg-fixed bg-[url('/header.png')] ">
      <div className="h-full">
        <Container>
          <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

            <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
              <h1 className=" md:mb-10 mb-2 lg:w-1/1 w-full text-2xl md:text-4xl text-th-accent-medium opacity-75 font-bold leading-tight text-center lg:text-left">
                Main Hero Message  to sell yourself!
               </h1>
               <span className="mb-4 text-2xl  md:text-4xl text-th-accent-medium opacity-75 font-bold leading-tight text-center lg:text-left"> 
               </span>
             
              <p className="leading-normal lg:w-3/5 xl:w-full  text-base text-md md:text-xl md:mb-2 lg:mb-0 text-center lg:text-left">
                Sub-hero message, not too long and 
              </p>
              <p className="leading-normal lg:w-1/3 xl:w-1/2 text-base text-md md:text-xl mb-4 lg:mb-16 text-center lg:text-left"> not  too short, Make it just right!
              </p>


                <div className="flex items-center justify-center text-md lg:justify-between md:pt-4">
                  <button
                    className="bg-purple-500 text-white font-bold px-4 py-1 md:py-4 md:px-10 mb-2  rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
             
            </div>


            <div className="w-full xl:w-1/2 lg:1/2 py-12 md:pl-20 p-12 lg:pl-20 xl:pl-48 overflow-hidden">
              <img className="mx-auto lg:w-full xl:1/1 md:w-3/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="/hero-bg-sec.webp" />
            </div>

            <div className="mx-auto md:pt-16">
             
              <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
               </div>
            </div>



          </div>
        </Container>
      </div>
    </section>
  )

}
