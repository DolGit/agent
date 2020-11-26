import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

var superagent = superagentPromise(_superagent, global.Promise);

var requests = {
    del: function del(url, body) {
        return superagent.del(url).query(body);
    },
    get: function get(url, body) {
        return superagent.get(url).query(body);
    },
    put: function put(url, body) {
        return superagent.put(url, body);
    },
    post: function post(url, body) {
        return superagent.post(url, body);
    },
    fileUpload: function fileUpload(url, body, _ref) {
        var attr = _ref.attr,
            file = _ref.file,
            onProgress = _ref.onProgress;

        return superagent.post(url).field("body", JSON.stringify(body)).attach(attr, file).on('progress', function (_ref2) {
            var percent = _ref2.percent;
            return onProgress({ percent: percent });
        });
    }
};

var del = requests.del,
    get = requests.get,
    put = requests.put,
    post = requests.post,
    fileUpload = requests.fileUpload;
export { del, get, put, post, fileUpload };


export var agent = { del: del, get: get, put: put, post: post, fileUpload: fileUpload };

export default {
    requests: requests,
    del: del,
    get: get,
    put: put,
    post: post,
    fileUpload: fileUpload
};