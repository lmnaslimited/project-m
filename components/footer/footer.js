export default function Footer() {
    return (
     
     <footer className="text-gray-600 body-font">
      <div className="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-2 grid-cols-2 bg-lime-400">
        <div className="lg:row-span-1 lg:col-span-1 row-span-1 col-span-2 mx-5 px-5 my-5 py-5">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-lime-800 text-xl">LOGO</span>
          </a>
          <p className="mt-2 md:w-4/5 lg:mt-10 w-full font-medium text-lime-800 text-md lg:text-lg md:text-md" >A service-based company is the one that provides customers, clients the ultimate solution to their requirements or a service to another company.</p>
        </div>
        <div className="lg:row-span-1 row-span-1 col-span-1 mx-2 px-2 my-5 py-5">
         <h2 className="text-md md:text-lg lg:text-xl font-bold text-lime-800">Contact Us</h2>
            <nav className="list-none mb-10 lg:mt-10 ">
              <li >
                <a href="#" className="text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4 my-2 lg:mr-2 inline shadow-2xl transform transition hover:-translate-y-2" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                <h1 className="text-sm md:text-lg font-medium  inline text-lime-800">+91 1234567890</h1></a>
                </li>
              <li>
                <a  href="#" className="text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4 my-2 lg:mr-2 inline shadow-2xl transform transition hover:-translate-y-2" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
           <h1  className="text-sm md:text-lg font-medium inline ml-2 text-lime-800">xyz123@gmail.com </h1></a>
              </li>
            </nav>
          </div>
          
          <div className="lg:row-span-1 row-span-1 col-span-1 mx-5 px-5 my-5 py-5">
            <h2 className="font-bold text-md md:text-lg lg:text-xl text-lime-800 md:mr-5">Join the xyz community on our social media handles</h2>
            <nav className="mt-2 lg:mt-10">
              <div className="grid grid-cols-5 gap-4 lg:gap-1 md:gap-1">
                <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4 shadow-lg transform transition hover:-translate-y-1" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></div>
                <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4  shadow-lg transform  transition hover:-translate-y-1" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></a></div>
                <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4 shadow-lg transform transition hover:-translate-y-1" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a></div>
                <div className="mr-2"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4 shadow-lg transform transition hover:-translate-y-1" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></div>
                <div className="mr-2 "><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6 w-4 h-4 shadow-lg transform  transition hover:-translate-y-1" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a></div>
              </div>
            </nav>
          </div>
      </div>
        <div className=" text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row bg-lime-800">
          <p className="text-white text-lg text-center">© 2022 xyz Private Limited —
            <a href="#" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@Author</a>
          </p>
      </div>
      </footer>
    )
}