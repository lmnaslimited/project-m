import Image from "next/image";
import { imagePrefix } from '../../lib/envConvert'

export default function Hero() {
  //const bgImageClass = "[url(" + imagePrefix('/hero/bg-hero-1000x666.png') + ")]"
  const bgImageClass = "leading-normal tracking-normal py-28 pt-10 bg-cover md:bg-cover bg-[url('" + imagePrefix('/hero/bg-hero-1000x666.png')  + "')]"
  //console.log(bgImageClass)
  return (<>
    <section className={(bgImageClass)}>
      <div className="grid grid-rows-1 grid-cols-2 gap-2 mr-10 py-20 ">
        <div className="row-span-1 col-span-1 ">
          <div className=" ml-20">
            <h1 className="mb-10 font-bold drop-shadow-lg text-4xl md:text-5xl max-w-xl text-th-primary-dark leading-tight">Dont listen to what they say, Go See</h1>
          </div>
          <button type="button" className=" mt-20 ml-20 px-12 py-4 m-1 text-th-primary-dark text-lg font-semibold transition-colors duration-200 transform bg-th-accent-medium rounded-md ">
            Join Us
          </button>
        </div>
        <div className="row-span-1 col-span-1">
          <div className="grid grid-cols-14 grid-flow-col gap-4 ml-4">       
            <div className="col-start-1 col-end-5 -mt-8"> <Image className="rounded-xl" src={imagePrefix("/hero/bg-sec2-1000x666.png")} height='200' width='320' alt='hero1'/></div>
            <div className="col-start-5 col-end-9 -mt-20 -ml-12" ><Image className="rounded-xl -ml-10" src={imagePrefix("/hero/bg-sec3-1000x1000.png")} height='250' width='350' alt="hero2"/></div>
            <div className="col-start-3 col-end-10 -mt-20 -ml-12 "><Image className=" shadow shadow-th-accent-dark backdrop-opacity-50 rounded-xl" src={imagePrefix("/hero/bg-sec1-1000x666.png")} height='250' width='400' alt="hero3"/></div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
