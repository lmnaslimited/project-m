export function imagePrefix(url) {
    const prod = process.env.NODE_ENV === 'production'
    const pages_url = prod ? 'https://raw.githubusercontent.com/lmnaslimited/project-m/gh-pages' : ''
    const imageUrl = `${url.startsWith('/') ? pages_url : ''
        }${url}`
    return imageUrl
}