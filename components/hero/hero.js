import Container from "../container";

export default function Hero() {
  return (
    <section className="leading-normal tracking-normal bg-cover pb-40 bg-fixed ">
     <div className="h-full">
      <Container>
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

          <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
            <h1 className=" md:mb-10 mb-2 lg:w-1/1 w-full text-2xl md:text-4xl text-th-accent-medium opacity-75 font-bold leading-tight text-center lg:text-left">
              Get Edge ERP Expertise And Consulting
            </h1>
            <span className="mb-4 text-2xl  md:text-4xl text-th-accent-medium opacity-75 font-bold leading-tight text-center lg:text-left">
            </span>

            <p className="leading-normal lg:w-3/5 xl:w-full font-semibold tracking-normal  text-base text-md md:text-xl md:mb-2 lg:mb-0 text-center lg:text-left">
              Our Engagement is just a click away
            </p>
            <p className="leading-normal lg:w-1/3 xl:w-1/2 font-semibold tracking-normal text-base text-md md:text-xl mb-4 lg:mb-16 text-center lg:text-left">Contact Us to get started
            </p>


            <div className="flex items-center justify-center text-md lg:justify-between md:pt-4">
              <button
                className="bg-amber-500 hover:bg-amber-500 text-white font-bold px-4 py-1 md:py-4 md:px-10 mb-2 ml-1  rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Get Started
              </button>
            </div>

          </div>


          <div className="w-full xl:w-1/2 lg:1/2 py-12 md:pl-20 p-12 lg:pl-20  overflow-hidden">
            <img className="mx-auto lg:w-full xl:1/1 md:w-3/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="https://img.freepik.com/free-vector/minimal-white-style-video-player-template-design_1017-25481.jpg?t=st=1648970020~exp=1648970620~hmac=10b20230b2ff4f1a5c842f9a0fd8ed24c1f71ed82a431bcc13ae7a718b7607a5&w=996" />
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
