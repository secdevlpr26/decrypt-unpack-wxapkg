Object.defineProperty(exports, "__esModule", {
    value: !0
});

getApp();

var t = require("./cgi.js");

exports.getList = function(e, n, o, i, c) {
    t.get({
        url: "/bizmall/myorder?action=get_list&status=" + e.orderStatus + "&begin=" + e.begin + "&count=" + e.count,
        hideLoading: !0,
        success: function(t) {
            n && n(t);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            i && i();
        },
        complete: function() {
            c && c();
        }
    });
}, exports.getDetail = function(e, n, o, i, c) {
    t.get({
        url: "/bizmall/myorder?action=get_detail&order_id=" + e,
        hideLoading: !1,
        success: function(t) {
            var e = t.express_content;
            if (e) try {
                t.express_content = JSON.parse(e.replace(/callback\((.*)\)$/g, "$1"));
            } catch (t) {}
            n && n(t);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            i && i();
        },
        complete: function() {
            c && c();
        }
    });
}, exports.getCount = function(e, n, o, i, c) {
    t.get({
        url: "/bizmall/myorder?action=get_count&status=" + e.status,
        hideLoading: !0,
        success: function(t) {
            n && n(t);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            i && i();
        },
        complete: function() {
            c && c();
        }
    });
};