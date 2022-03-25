export default function Hero () {
    return (
        <div>
    <section class="mb-40">
      <div class="px-6 py-12 md:px-12 text-gray-800 bg-gradient-to-r from-lime-500 to-lime-300 text-center lg:text-left">
        <div class="container mx-auto xl:px-32">
          <div class="grid lg:grid-cols-2 flex items-center">
            <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
              <div class="block rounded-lg shadow-2xl transform transition hover:-translate-y-4 bg-gray-100 shadow-lg px-6 py-12 md:px-12 lg:-mr-14">
                <h1 class="text-4xl md:text-5xl xl:text-6xl text-green-500 font-bold tracking-tight mb-2">Hero Section</h1><span class="text-4xl md:text-5xl xl:text-6xl text-green-500 font-bold tracking-tight mb-10 text-green-800">for our website</span>
                <a class="inline-block px-7 py-3 md:mr-40 lg:mr-1 mr-1 mt-10 mb-2 md:mb-0 md:mr-2 bg-green-400 text-black hover:text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg shadow-2xl transform transition hover:-translate-y-1 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">CTA Button1</a>
                <a class="inline-block px-7 py-3  mt-10 bg-transparent text-green-800 font-medium text-sm leading-snug uppercase rounded hover:text-green-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none shadow-2xl transform transition hover:-translate-y-1 focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">CTA Button2</a>
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                class="w-full rounded-lg shadow-2xl transform transition hover:-translate-y-6"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  
  </div>
    )

}