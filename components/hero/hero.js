import Container from "../container";

export default function Hero() {
  return (<>
    <section className="leading-normal tracking-normal py-80 pt-10 bg-cover md:bg-cover bg-[url('/hero/bg-hero-1000x666.png')] ">
  <div className="grid grid-rows-1 grid-cols-2 gap-2 mr-10 py-20 ">
    <div className="row-span-1 col-span-1 ">
    <div className=" ml-20">
                    <h1 className="mb-10 font-bold drop-shadow-lg text-4xl md:text-5xl max-w-xl text-white leading-tight">Don't listen to what they say, Go See</h1>
                   </div>
    <button type="button" className=" mt-20 ml-20 px-12 py-4 m-1 text-white text-lg font-semibold transition-colors duration-200 transform bg-amber-500 rounded-md ">
                            Join Us
                        </button>               
    </div>
    <div className="row-span-1 col-span-1">
    <div className="grid grid-cols-14 grid-flow-col gap-4 ml-4">
  <div className="col-start-1 col-end-5"><img className="rounded-xl h-60 -mt-24  " src="/hero/bg-sec3-1000x1000.png"/></div>
  <div className="col-start-5 col-end-9"><img className="rounded-xl h-60 -mt-24" src="/hero/bg-sec2-1000x666.png"/></div>
  <div className="col-start-3 col-end-10 "><img className="rounded-xl w-96 h-60 -mt-16  shadow-teal-400 shadow backdrop-opacity-50" src="https://img.freepik.com/free-vector/gradient-dashboard-element-collection_23-2148372636.jpg?t=st=1649411956~exp=1649412556~hmac=e06043281bb586a96dbc5c457eccc56d5779d93ecd0b6e48cd78321032155338&w=1060"/></div>
 
 </div>
    </div>
  </div>
  </section>
  </>
  )

}
