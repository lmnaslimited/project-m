export default function Hero() {
  return (


    <div className="h-auto bg-gradient-to-r from-lime-900 via-lime-400 to-lime-900">
      <div className="grid lg:grid-rows-1 lg:grid-cols-2 md:grid-rows-2 md:grid-cols-2 grid-rows- gap-4">
        <div className="lg:row-span-1 lg:col-span-1 md:row-span-1 md:col-span-2 mx-10 my-10">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Main Hero Message
            <span className="text-white md:text-3xl lg:text-4xl md:inline md:text-center md:text-5xl">
              <br></br> to sell yourself!
            </span>
          </h1>
          <p className="leading-normal text-base md:text-2xl text:xl font-semibold text-gray-800 text-center md:text-left">
            Sub-hero message, not too long and </p>
          <p className="leading-normal text-base md:text-2xl text-xl font-semibold mb-8 text-gray-800 text-center md:text-left">not too short. Make it just right!
          </p>

          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
                Signup for our newsletter
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="you@somewhere.com"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:row-span-1 md:col-span-2 w-full md:pt-40  overflow-hidden">
          <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="https://airwallpaper.com/wp-content/uploads/wall003/Backgrounds-Grey.jpg" /> </div>
      </div>
      <div className="flex justify-center">
        <a className="inline-block md:px-7 md:py-3 p-2 mb-2 md:mb-10 bg-purple-600 hover:text-lime-600   mt-10  text-gray-100 font-medium text-sm leading-snug uppercase rounded     hover:bg-gray-200 focus:bg-gray-100 focus:outline-none shadow-2xl transform transition hover:-translate-y-1 focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">CTA Button2</a>
        <a className="inline-block md:px-7 md:py-3 p-2 mb-2 md:mb-10 bg-purple-600 hover:text-lime-600 ml-10 mt-10  text-gray-100 font-medium text-sm leading-snug uppercase rounded hover:bg-gray-200 focus:bg-gray-100 focus:outline-none shadow-2xl transform transition hover:-translate-y-1 focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">CTA Button2</a>
      </div>
    </div>

  )

}
