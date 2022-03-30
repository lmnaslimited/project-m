export default function Hero() {
  return ( <>
    <div className="h-auto bg-lime-800 my-5 mx-5">

      <div className="flex p-60 rounded-l-full mx-0 my-0 bg-gradient-to-r from-gray-900 via-lime-800 to-gray-900 px-6 mr-0 ml-10">
    <div class="flex justify-between">
    <div>
    <div className="text-6xl font-semibold text-gray-200">
          <h1 className="text-4xl font-bold leading-tight capitalize">  Professional Tailwind theme </h1>
            <h1 className="text-4xl font-bold leading-tight capitalize">design for Creators. </h1>
          <p className="text-xl text-bg-gray-200">  With Tailwind you can optimized </p>
          <p className="text-xl  text-bg-gray-200">the customization process. </p>
          <div className="">
            <a href="#" className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">CTA BUTTON1</a>
            <a href="#" className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black">CTA BUTTON2</a>
          </div>
        </div>
    </div>
    <div>02</div>
    <div>
    <div className="flex flex-wrap w-96 h-96  items-center justify-center rounded-full bg-lime-800">
          <div className=" md:w-1/3 flex flex-col text-center items-center">
            <div className="w-80 h-80 inline-flex items-center justify-center rounded-full bg-lime-600 text-indigo-500 flex-shrink-0">
              <div className=" md:w-1/3 flex flex-col text-center items-center">
                <div className="w-60 h-60 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                 <img src="/global.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
  </div>
  </>



  )

}
