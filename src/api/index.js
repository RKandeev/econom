

const parseApiUrl = (params = {}, url) => {

    if (!Object?.keys(params)) {
        return url
    }

    let baseUrl = new URL(`${process.env.REACT_APP_API_URL}${url}`)

    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
        const value = params[key];
        const isArray = Array.isArray(value)
        if (value && isArray) {
            value.join()
        }
        if (value) {
            searchParams.append(key, value);
        }
    }

    if (searchParams.toString().length) {
        // url += `?${searchParamsString}`

        baseUrl.searchParams = searchParams.toString().replace('%2C', ',')
    }

    return baseUrl.toString();
}

export const apiRequest = async ({url, params, headers, data, ...options}) => {
    try {
        const fullUrl = parseApiUrl(params, url);
        const isFormData = data instanceof FormData;
        const body = isFormData ? data : JSON.stringify(data);


        const response = await fetch(fullUrl, {
            headers: {
                ...(!isFormData && {'Content-Type': 'application/json'}),
                ...headers,
            },
            body: data ? body : null,
            ...options,
        });

        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

