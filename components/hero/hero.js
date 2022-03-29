export default function Hero () {
    return (
      <div class="py-16 bg-gray-300 my-5 mx-5">
      <div class="container m-auto px-6">
    
       <div class="lg:flex justify-between items-center">
           <div class="lg:w-6/12 lg:p-0 p-7">
              <h1 class="text-4xl mx-20 font-bold leading-tight mb-2 capitalize">  Tailwind Website theme </h1>
              <h1 class="text-3xl mx-20 font-bold leading-tight mb-5 capitalize"> designed for Clients. </h1>
              <p class="text-lg mx-20">  With Tailwind you can optimized </p>
              <p class="text-lg mx-20">customization process. </p>
    
              <div class="py-5">
                   <a href="#" class=" mx-20 text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">Try for free</a>
                   <a href="#" class="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black">Requist a demo</a>
              </div>
    
            </div>
            <div class="mr-40 mt-10 ring-offset-2 ring-4 rounded-full">
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class=" w-60 h-60 rounded-full"/>
            </div>
        </div>
    
      </div>
    </div>
    )

}
