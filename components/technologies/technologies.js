const technologies = {
  title: 'Technology Expertise',
  subTitle: 'Our expertise span across SAP, Mobility, UI/UX, Analytics and other ERP platforms.',
  ctaText: 'Become a Partner',
  expertise: [
    'SAP IS OIL Downstream & Upstream Modules',
    'SD, MM, WM, PP, QM,FICO,HCM & ABAP',
    'SAP HANA',
    'SAP Integrations',
    'Management',
    'JAVA, .Net, C#',
    'Open link technologies (ENDUR)',
    'Web Technologies',
    'Networking services',
    'Reach 90,000 customers via our integration page'
  ]
}
export default function Technologies() {
  return (
    <>
      <section className="flex rounded-3xl my-40  px-20  shadow shadow-white py-20 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
          <div>
            <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-normal text-center text-th-primary-medium sm:text-left md:text-4xl">{technologies.title}</h2>
            <p className="mb-6 text-lg text-center th-primary-dark sm:text-left md:text-xl">{technologies.subTitle}</p>
            <button
              className="bg-th-accent-medium font-bold md:px-4 py-2 px-4  w-auto md:py-4  mb-2 md:mx-0 mx-8  rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button">
              <a href="#" className="w-full text-white tracking-normal font-bold text-md md:text-lg th-primary-dark btn btn-primary btn-lg sm:w-auto">{technologies.ctaText}</a>
            </button>
          </div>
          <div className="flex bg-th-background-secondary shadow shadow-th-accent-medium rounded-3xl md:p-12 p-12 transform transition hover:scale-105 duration-300 ease-in-out flex-col flex-grow md:space-y-5">
            {technologies.expertise.map((expert) => (
              <div key={expert} className="flex items-start">
                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-th-primary-medium">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-sm md:text-lg  th-primary-dark">{expert}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </>
  )
}