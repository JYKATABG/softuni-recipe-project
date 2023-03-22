export async function requester(method, url, data) {

    const options = {}

    if (method !== "GET") {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            }

            options.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, options)

    try {
        const result = await response.json();

        return result;
    } catch (error) {
        return {}
    }
}

export const get = requester.bind(null, 'get');
export const post = requester.bind(null, 'post');
export const put = requester.bind(null, 'put');
export const del = requester.bind(null, 'delete');