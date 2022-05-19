import Layout from '../components/layout'
import Container from "../components/container";
export default function AboutUs() {
  return (
    <div>
      <Layout>
      
          <section className="relative">
            <img className="absolute inset-0 object-cover w-full h-full" alt="" />
            <div className="relative bg-opacity-50  bg-th-background">
              <div className="absolute bg-th-accent-dark inset-x-0 bottom-0">
                <svg
                  viewBox="0 0 224 12"
                  fill="currentColor"
                  className="w-full -mb-1 text-white"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
                </svg>
              </div>
              {/** <header className="text-white body-font bg-th-background">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <div className='flex items-center flex-shrink-0 mr-6 '>
            <div className=' mr-4'>
            <div className='flex bg-white mb-4 px-1 py-1 rounded-lg '>
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span className="ml-3 text-xl">Tidal Groups</span>
    </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  bg-th-background text-gray-600 flex flex-wrap items-center text-base justify-center">
                  <a href="" className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Home</a>
                  <a href="" className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Services</a>
                  <a href="" className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Technology</a>
                  <a href="" className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Clients</a>
                  <a href="" className="mr-5 text-th-primary-dark hover:text-th-primary-medium">Contact</a>
                </nav>
              </div>
            </header>  */}
              <div className="px-4 py-16 mx-auto  bg-th-background sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col mb-6 mr-12  lg:w-1/2 w-full lg:flex-col md:mb-10">
                    <div className="lg:w-3/4">
                      <h2 className="max-w-lg mb-6  md:mx-auto">
                        <span className="relative inline-block ">
                          <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-18 z-0 hidden w-32 -mt-8 -ml-20 text-black lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                          >
                            <defs>
                              <pattern
                                id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                              >
                                <circle cx="1" cy="1" r=".7"></circle>
                              </pattern>
                            </defs>
                            <rect
                              fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                              width="52"
                              height="24"
                            ></rect>
                          </svg>
                          <h1 className="relative lg:ml-0 ml-20 m-8 mr-2 font-sans text-3xl md:text-5xl font-bold leading-none tracking-tight text-3xl md:text-5xl text-th-primary-medium">About <span className="text-th-primary-dark">US</span></h1>
                        </span>
                        <span className="relative px-1">
                          <div className="absolute inset-x-0 bottom-0 h-4 transform -skew-x-12 bg--800"></div>

                        </span>
                      </h2>
                    </div>

                  </div>
                  <div className="flex flex-col mb-6  lg:w-3/4 lg:pr-8 md:w-full w-full lg:flex-col md:mb-10">
                    <div className="lg:w-full md:w-4/3 w-2/7 ml-4 md:ml-8">
                      <p className="font-Arial tracking-widest leading-loose font-medium mb-8 mt-8 text-md md:text-xl">
                        <i><span className="text-th-accent-medium mr-1">SCL</span> is a forward-thinking technology company provides project/support-based IT consulting, services, digital-transformation, training,<span className="text-th-accent-medium ml-1">expert/fire-fighter</span> SAP support,offshore support model and  talent recruitment for other<span className="text-th-accent-medium mr-1">  IT technologies.</span>
                          we add value through software development, talent acquisition, training programs and proven success rendering <span className="text-th-accent-medium">world-class</span> deliverables.
                        </i> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-col justify-center text-center">
            <h1 className="font-sans font-bold mt-4 md:mt-10 lg:text-5xl md:text-3xl text-2xl text-th-primary-dark">Our <span className="text-th-primary-medium">strength</span>

            </h1>
            <p className="my-4 md:my-12">
              <ul className="inline ">
                <li className="font-semibold font-arial text-md md:text-xl tracking-widest md:inline"><h1 className="inline">We are flexible</h1></li>
                <li className="font-semibold font-arial text-md md:text-xl tracking-widest md:inline"><h1 className="inline md:ml-12">We are experts</h1></li>
                <li className="font-semibold font-arial text-md md:text-xl tracking-widest md:inline"><h1 className="inline md:ml-12">We value people</h1></li>
              </ul>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-12 mx-12 pb-12">
            <div className="row-span-1 col-span-1 lg:ml-28 bg-th-background-secondary px-4">
              <div className="flex flex-col my-12">
                <div className="flex flex-row mb-4 text-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  <h1 className="font-semibold font-arial text-xl md:text-2xl lg:text-3xl mt-1 md:mt-2 lg:ml-4 text-th-primary-medium">Business Growth</h1>
                </div>
                <div className="flex text-center justify-center">
                  <p className=" w-full mb-2 md:mb-0 lg:w-3/4 font-semibold font-arial tracking-widest text-sm md:text-lg text-th-primary-dark"> We develop client relationships through customer empathy Quality Deliverables</p>
                </div>
              </div>
            </div>
            <div className="row-span-1 col-span-1 lg:mr-28 bg-th-background-secondary px-4">
              <div className="flex flex-col my-12">
                <div className="flex flex-row mb-4 text-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  <h1 className="font-semibold font-arial text-xl md:text-2xl lg:text-3xl mt-1 md:mt-2 lg:ml-4 text-th-primary-medium">Finanical Growth</h1>
                </div>
                <div className="flex text-center justify-center">
                  <p className="w-full mb-2 md:mb-0 lg:w-3/4 font-semibold font-arial tracking-widest text-sm md:text-lg text-th-primary-dark">  Provide visible positive contribution to<span className="">the client's IT growth strategy.</span></p>
                </div>
              </div>
            </div>
            <div className="row-span-1 col-span-1 lg:ml-28 bg-th-background-secondary px-4 ">
              <div className="flex flex-col my-12">
                <div className="flex flex-row mb-4 text-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                  <h1 className="font-semibold font-arial text-xl  md:text-2xl lg:text-3xl mt-1 md:mt-2 lg:ml-4 text-th-primary-medium">Planning</h1>
                </div>
                <div className="flex text-center justify-center">
                  <p className="w-full mb-2 md:mb-0 lg:w-3/4 font-semibold font-arial tracking-widest text-sm md:text-lg text-th-primary-dark"> We follow the golden circle of Why, How, and What</p>
                </div>
              </div>
            </div>
            <div className="row-span-1 col-span-1 lg:mr-28 bg-th-background-secondary px-4">
              <div className="flex flex-col my-12">
                <div className="flex flex-row mb-4 text-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <h1 className="font-semibold font-arial text-xl  md:text-2xl lg:text-3xl mt-1 md:mt-2 lg:ml-4 text-th-primary-medium">Performance</h1>
                </div>
                <div className="flex text-center justify-center">
                  <p className="w-full mb-2 md:mb-0 lg:w-3/4 font-semibold font-arial tracking-widest text-sm md:text-lg text-th-primary-dark">  We Value People, encourage their development and reward their performance.</p>
                </div>
              </div>
            </div>
          </div>
        
      </Layout>

    </div>

  );
}
