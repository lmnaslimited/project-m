const clients = {
    title: 'Trusted by Global Clients, Built by Us',
    subTitle: 'Our Client Speak our values.',
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
    subTitle: 'Our range of services help organizations succeed in this demanding environment by leveraging our technological and industry expertise, producing innovative and practical solutions',
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
const footer = {
    title: '',
    subTitle: 'A service-based company is the one that provides customers, clients the ultimate solution to their requirements or a service to another company.',
    contactUs: [
        {
            href: '+91 1234567890',
            type: 'tel',
        },
        {
            href: 'xyz123@gmail.com ',
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