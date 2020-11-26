import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const requests = {
    del: (url, body) => superagent.del(url).query(body),
    get: (url, body) => superagent.get(url).query(body),
    put: (url, body) => superagent.put(url, body),
    post: (url, body) => superagent.post(url, body),
    fileUpload: (url, body, { attr, file, onProgress }) => {
        return superagent.post(url)
            .field("body", JSON.stringify(body))
            .attach(attr, file)
            .on( 'progress', ( { percent } ) => onProgress({percent}))
    }
};

export const { del, get, put, post, fileUpload } = requests

export const agent = { del, get, put, post, fileUpload }

export default {
    requests,
    del,
    get,
    put,
    post,
    fileUpload
};
