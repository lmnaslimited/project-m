import Image from "next/image";

export default function Index({partners}) {
    return (
        <section classNameName="bg-purple-50 ">
            <div className=" py-32 mt-72 mb-20 lg:my-40 shadow shadow-th-primary-dark rounded-3xl mx-auto max-w-7xl px-20 ">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold tracking-normal title-font mb-4 text-th-primary-medium">{partners.title}
                    </h1>
                    <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed text-lg font-semibold ">{partners.subTitle} </p>
                </div>
                <div className="bg-th-background-secondary shadow shadow-th-accent-medium rounded-3xl transform transition hover:scale-105 duration-300 ease-in-out p-8 grid items-center w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-8 lg:gap-4 xl:w-3/4">
                    <div className="w-40 h-40 col-span-1 lg:col-span-2 bg-th-primary-dark rounded-full ring-4">
                        <Image src="/partners/lmnas-logo-circular.png" className="object-cover  bg-center rounded-md shadow-xl" alt="Lmnas Logo" width={'160'} height={'160'} />
                    </div>
                    <div className="ml-4 col-span-1 lg:col-span-6">
                        <p className="mb-5 text-lg font-semibold text-th-primary-medium md:text-xl">{partners.name}</p>
                        <h1 className="mb-3 text-lg font-bold text-th-primary-dark md:leading-tight md:text-xl">
                            “{partners.text1}<span className="text-th-accent-medium">{partners.textHighlight}</span>, {partners.text2}“
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}