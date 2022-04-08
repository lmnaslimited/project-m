import Image from "next/image";

export default function Index() {
    return (
        <section classNameName="bg-purple-50 ">

            <div className="px-4 py-32 mt-72 mb-20 lg:my-40 shadow shadow-white rounded-3xl mx-auto max-w-7xl px-20 ">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold tracking-normal title-font mb-4 text-th-accent-medium">Our Partners
                    </h1>
                    <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed text-lg font-semibold text-base">A Blended delivery will give optimum cost and maximum benefit. We have partnered with an energetic startup to benefit our clients the most. </p>
                </div>
                <div className="bg-gray-800 shadow shadow-amber-500 rounded-3xl transform transition hover:scale-105 duration-300 ease-in-out p-8 grid items-center w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-8 lg:gap-4 xl:w-3/4">
                    <div className="w-40 h-40 col-span-1 lg:col-span-2 bg-white rounded-full ring-4">

                        <Image src="/partners/lmnas-logo-circular.png" className="object-cover  bg-center rounded-md shadow-xl" alt="Lmnas Logo" width={'160'} height={'160'} />
                    </div>
                    <div className="ml-4 col-span-1 lg:col-span-6">
                        <p className="mb-5 text-lg font-semibold text-th-accent-medium md:text-xl">LMNAs Cloud Solutions</p>
                        <h1 className="mb-3 text-lg font-bold text-th-primary-dark md:leading-tight md:text-xl">
                            “An Indian Startup who have built a range of <span className="text-red-600">ERP & ECommerce</span>, products inhouse and services clients globally“
                        </h1>


                    </div>
                </div>
            </div>
        </section>

    )
}