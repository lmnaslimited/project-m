import Card from "./card"
/*const services = [
    { title: 'SAP', subTitle: 'Consulting', image: '/services/sap-512x512.png' },
    { title: 'IT', subTitle: 'Consulting', image: '/services/consulting-512x512.png' },
    { title: 'IS Oil', subTitle: 'Expertise', image: '/services/is-oil-512x512.png' },
    { title: 'Talent', subTitle: 'Resourcing', image: '/services/talent-512x512.png' },
    { title: 'CLOUD', subTitle: 'Migration', image: '/services/migration-512x512.png' },
    { title: 'HANA', subTitle: 'Cloud', image: '/services/cloud-512x512.png' },
    { title: 'SUPPORT', subTitle: 'Maintenance', image: '/services/support-512x512.png' },
] */
export default function Services({ services }) {
    return (
        <>
          
                <section id='services' className=" text-th-primary-dark body-font">
                    <div className="container py-12 px-5 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-th-primary-medium">{services.title}
                            </h1>
                            <i><p className="lg:w-2/3 mx-auto text-th-primary-dark tracking-widest leading-loosed text-base">{services.subTitle}
                            </p></i>
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