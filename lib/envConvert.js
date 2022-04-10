export function imagePrefix(url) {
    const prod = process.env.NODE_ENV === 'production'
    const pages_url = prod ? 'https://raw.githubusercontent.com/lmnaslimited/project-m/gh-pages' : ''
    console.log("URL from imagePrefix", url, process.env.NEXT_PUBLIC_GH_PAGES_URL)
    const imageUrl = `${url.startsWith('/') ? pages_url : ''
        }${url}`
    return imageUrl
}