const prod = process.env.NODE_ENV === 'production'

module.exports = {

    'process.env.NEXT_PUBLIC_GH_PAGES_URL': prod ? 'https://github.com/lmnaslimited/project-m/blob/gh-pages' : '',
    'process.env.BACKEND_URL': prod ? '/project-m' : '',
}
