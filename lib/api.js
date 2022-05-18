const clients = {
    title: 'Clients',
    subTitle: ' We value our clients.',
    logos: [
        { 'name': 'IBM', 'logo': '/clients/ibm-logox300.png' },
        { 'name': 'Shell', 'logo': '/clients/shell-logox300.jpeg' },
        { 'name': 'Kelloggs', 'logo': '/clients/kelloggs-logox300.png' },
        { 'name': 'Neste oil', 'logo': '/clients/neste-oil-logox300.png' },
        { 'name': 'National Grid', 'logo': '/clients/national-gridx300.png' },

    ]
}
const services = {
    title: 'Our Services',
    subTitle: 'SCL is a forward-thinking company with superior value-priced services for each non-public and government sector clients. Our Team organizations higher perceive troubled technologies, implement agile style principles, and take a strategic approach to disruptive technologies. employing a holistic approach, we tend to help you define, style and execute ways that optimize costs and quality while making new revenue streams. Our technology consultants have innovative solutions and deep domain expertise to develop short- and long-term methods aligned together with your enterprise goals, IT environment, ability necessities, and policies. The result: superior IT performance at the side of the ability to leverage technology advancements for measurable business outcomes. Our services area unit offered on a project or strategic staffing basis, across the majority of technology platforms, operative systems, and infrastructures. we provide a good range of services which will help rework your business and technology operations to foremost excellence.',
    services:
        [

            { title: 'SAP', subTitle: 'Consulting', image: '/services/sap-512x512.png' },
            { title: 'IT', subTitle: 'Consulting', image: '/services/consulting-512x512.png' },
            { title: 'IS Oil', subTitle: 'Expertise', image: '/services/is-oil-512x512.png' },
            { title: 'Talent', subTitle: 'Resourcing', image: '/services/talent-512x512.png' },
            { title: 'CLOUD', subTitle: 'Migration', image: '/services/migration-512x512.png' },
            { title: 'HANA', subTitle: 'Cloud', image: '/services/cloud-512x512.png' },
            { title: 'SUPPORT', subTitle: 'Maintenance', image: '/services/support-512x512.png' },
        ]
}
const partners = {
    title: 'Our Partners',
    subTitle: 'A Blended delivery will give optimum cost and maximum benefit. We have partnered with an energetic startup to benefit our clients the most.',
    name: 'LMNAs Cloud Solutions',
    logo: '/partners/lmnas-logo-circular.png',
    text1: 'An Indian Startup who have built a range of ',
    textHighlight: 'ERP & ECommerce',
    text2: ', products inhouse and services clients globally'

}
const technologies = {
    title: 'Technology Expertise',
    subTitle: 'Our expertise span across SAP, Digital transformation, Data Migration, Mobility, UI/UX, Analytics and other ERP platforms.',
    ctaText: 'Contact us',
    expertise: [
        'SAP IS OIL Downstream & Upstream Modules',
        'SAP SD, MM, WM, EWM, PP, QM, CRM, BI, FICO, HCM, ABAP',
        'SAP All Functional/Basis/Technical modules',
        'SAP S4 HANA',
        'SAP Integrations',
        'Data Migration',
        'Business Analytics',
        'Management',
        'JAVA, .Net, C#, REACT, Angular etc.,',
        'Windows Applications',
        'Open link technologies (ENDUR)',
        'Web Technologies',
        'Networking services',
        'App Developments',

    ]
}
const footer = {
    title: '',
    subTitle: ' ',
    contactUs: [
        {
            href: '+44 2030062716 / +44 7535029430',
            type: 'tel',
        },
        {
            href: 'mani.ramanathan@sclsystems.co.uk',
            type: 'mail-to',
        },

    ],
    social: [
        {
            href: 'twitter.com',
            type: 'Twitter',
        },
        {
            href: 'Linkedin.com',
            type: 'LinkedIn',
        },
        {
            href: 'Insta.com',
            type: 'Instagram',
        },
        {
            href: 'YouTube.com',
            type: 'YouTube',
        },
        {
            href: 'FaceBook.com',
            type: 'FaceBook',
        },
    ]
}

export async function getHomePageData() {
    return {
        services: services,
        technologies: technologies,
        clients: clients,
        partners: partners,
        footer: footer,
    }
}