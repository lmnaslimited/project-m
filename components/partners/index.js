export default function Index() {
    return (
        <section classNameName="bg-purple-50">
            
            <div className="px-4 py-32 mx-auto max-w-7xl">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-accent-medium">Our Partners
                </h1>
                <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed text-base">A Blended delivery will give optimum cost and maximum benefit. We have partnered with an energetic startup to benefit our clients the most. </p>
            </div>
                <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-8 lg:gap-4 xl:w-3/4">
                    <div className="w-40 h-40 col-span-1 lg:col-span-2 bg-white rounded-full ring-4">
                        <img src="/partners/lmnas-logo-circular.png" className="object-cover w-full h-full bg-center rounded-md shadow-xl" alt="Kutty" />
                    </div>
                    <div className="col-span-1 lg:col-span-6">
                    <p className="mb-5 text-lg font-semibold text-th-accent-medium md:text-xl">LMNAs Cloud Solutions</p>
                        <h1 className="mb-3 text-2xl font-extrabold text-th-primary-dark md:leading-tight md:text-3xl">
                            “An Indian Startup who have built a range of <span className="text-red-600">ERP & ECommerce</span>, products inhouse and services clients globally“
                        </h1>
                       
    
                    </div>
                </div>
            </div>
        </section>

    )
}