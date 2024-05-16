export function randomSample (array) {
    return array[Math.floor(Math.random() * array.length)]
}

export function formatMessage (message, ...args) {
    return message.replace(/\{(0|[1-9]\d*)\}/g, (_, i) => args[i])
}

export function formatUrl (route, urlOptions) {
    const urlSearchParams = new URLSearchParams()
    for (const key in urlOptions) {
        if (urlOptions[key] == null) {
            continue
        }

        for (const value of [].concat(urlOptions[key])) {
            urlSearchParams.append(key, value)
        }
    }

    const url = new URL(route)
    url.search = urlSearchParams.toString()

    return url
}
