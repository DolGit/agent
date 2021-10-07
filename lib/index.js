'use strict';

exports.__esModule = true;
exports.agent = exports.fileUpload = exports.post = exports.put = exports.get = exports.del = undefined;

var _superagentPromise = require('superagent-promise');

var _superagentPromise2 = _interopRequireDefault(_superagentPromise);

var _superagent2 = require('superagent');

var _superagent3 = _interopRequireDefault(_superagent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var superagent = (0, _superagentPromise2.default)(_superagent3.default, global.Promise);

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
exports.del = del;
exports.get = get;
exports.put = put;
exports.post = post;
exports.fileUpload = fileUpload;
var agent = exports.agent = { del: del, get: get, put: put, post: post, fileUpload: fileUpload };

exports.default = {
    requests: requests,
    del: del,
    get: get,
    put: put,
    post: post,
    fileUpload: fileUpload
};