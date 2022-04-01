import Image from "next/image"
export default function Cards() {
    return(
        <section classNameName=" text-th-primary-dark body-font">
  <div className="container py-12 px-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-accent-medium">Our Services
      </h1>
      <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed text-base">Our range of services help organizations succeed in this demanding environment by leveraging our technological and industry expertise, producing innovative and practical solutions
      </p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <Image src="/services/sap-512x512.png" width="80" height="80"/>
          {/*<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="text-indigo-500 w-12 h-12 mb-3 inline-block">
            <path d="M8 17l4 4 4-4m-4-5v9">
            </path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29">
            </path>
    </svg> */}
          <h2 className="title-font font-medium text-2xl text-th-accent-medium">SAP
          </h2>
          <p className="leading-relaxed">Consulting
          </p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src="/services/consulting-512x512.png" width="80" height="80"/>
          <h2 className="title-font font-medium text-2xl text-th-accent-medium">IT
          </h2>
          <p className="leading-relaxed">Consulting
          </p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src="/services/is-oil-512x512.png" width="80" height="80"/>
          <h2 className="title-font font-medium text-2xl text-th-accent-medium">IS OIL
          </h2>
          <p className="leading-relaxed">Expertise
          </p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src="/services/talent-512x512.png" width="80" height="80"/>
          <h2 className="title-font font-medium text-2xl text-th-accent-medium">TALENT
          </h2>
          <p className="leading-relaxed">Resourcing
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container px-5 mx-auto">

    <div className="flex justify-center flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/2 w-full md:w-1/4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src="/services/migration-512x512.png" width="80" height="80"/>
          <h2 className="title-font font-medium text-2xl text-th-accent-medium">CLOUD
          </h2>
          <p className="leading-relaxed">Migration
          </p>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 w-full md:w-1/4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src="/services/cloud-512x512.png" width="80" height="80"/>
          <h2 className="title-font font-medium text-2xl text-th-accent-medium">HANA
          </h2>
          <p className="leading-relaxed">Cloud
          </p>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 w-full md:w-1/4">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <Image src="/services/support-512x512.png" width="80" height="80"/>
          <h2 className="title-font font-medium text-2xl text-th-accent-medium">SUPPORT
          </h2>
          <p className="leading-relaxed">Maintenance
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
} 