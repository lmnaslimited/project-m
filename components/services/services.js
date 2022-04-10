import Card from "./card"

export default function Services({services}) {
    return (
        <>
            <section className=" text-th-primary-dark body-font">
                <div className="container py-12 px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-primary-medium">{services.title}
                        </h1>
                        <p className="lg:w-2/3 mx-auto text-th-primary-dark leading-relaxed text-base">{services.subTitle}
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        {services.services.slice(0, 4).map((service) => (
                            <Card key={service.title} src={service.image} title={service.title} subTitle={service.subTitle} />
                        ))}
                    </div>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="flex justify-center flex-wrap -m-4 text-center">
                        {services.services.slice(4).map((service) => (
                            <Card key={service.title} src={service.image} title={service.title} subTitle={service.subTitle} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}