export default function Contact() {
    return (
        <section className="text-gray-600 body-font relative ">
            <header className="text-white body-font bg-th-background">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div className='flex items-center flex-shrink-0 mr-6 '>
                            <div className=' mr-4'>
                                <div className='flex bg-white mb-4 px-1 py-1 rounded-full'>
                                <img
                    src="/scl-logo-161x108.png"
                    height="60"
                    width="60"
                    className="text-white p-2"
                    alt='Logo'
                />
                 <img
                    src="/scl-161x108.png"
                    height="60"
                    width="60"
                    className="text-white p-2"
                    alt='Logo'
                />
                                </div>
                            </div>

                        </div>
                        {/**<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span className="ml-3 text-xl">Tidal Groups</span>*/}
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  bg-th-background text-gray-600 flex flex-wrap items-center text-base justify-center">
                        <a href="" className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Home</a>
                        <a className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Services</a>
                        <a href="/scope-of-supply" className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Technology</a>
                        <a className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Clients</a>
                        <a className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Contact</a>
                    </nav>
                </div>
            </header>
            <div className="min-w-screen min-h-screen bg-th-background flex  items-center justify-center px-5 py-5">
                <div className="bg-th-background-secondary rounded-3xl shadow-xl  overflow-hidden">
                    <div className="md:flex w-full">
                        <div className="hidden md:block w-1/2 ">
                            <img src="/contact/contact-img-427x529.jpg" className="w-full object-cover h-auto" />   </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center text-th-primary-dark mb-10">
                                <h1 className="font-bold text-3xl text-th-primary-medium">Let's Connect</h1>

                            </div>
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-lg text-th-primary-dark font-semibold px-1">First name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline  text-lg"></i></div>
                                            <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg  outline-none " placeholder="John" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-lg text-th-primary-dark font-semibold px-1">Last name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg  outline-none focus:border-indigo-600" placeholder="Smith" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label for="" className="text-lg text-th-primary-dark font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg  outline-none focus:border-indigo-600" placeholder="johnsmith@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <label for="message" className="text-lg text-th-primary-dark font-semibold px-1">Message</label>
                                        <textarea id="message" name="message" class="w-full bg-white rounded  focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button className="block w-full max-w-xs mx-auto  bg-th-accent-medium focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="home" href="tel:+44 2030062716 / +44 7536029430" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="/contact/contact-bg-sec-500x500.png" />
                    </a>
                </div>
            </div>


        </section>
    )
}