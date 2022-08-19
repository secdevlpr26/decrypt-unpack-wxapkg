function t() {
    var t = {};
    1 === arguments.length && "string" != typeof arguments[0] ? t = arguments[0] : (t.url = arguments[0], 
    "object" === o(arguments[1]) ? (t.data = arguments[1], t.success = arguments[2]) : t.success = arguments[1]);
    var e = getApp();
    return 0 === t.url.indexOf("http://") && 0 === t.url.indexOf("https://") || (t.url = e.globalUrl + "/index.php/WXAPI" + t.url), 
    t;
}

function e(t, e) {
    e.method = t, e.header = {
        "content-type": "application/json"
    }, wx.request(e);
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = {
    getJSON: function() {
        e("GET", t.apply(this, arguments));
    },
    postJSON: function() {
        e("POST", t.apply(this, arguments));
    },
    sendTemplate: function(t, e, o, n) {
        var s = getApp();
        this.getJSON({
            url: "/WxAppApi/sendTemplate",
            data: {
                rd_session: s.rd_session,
                form_id: t,
                data: e
            },
            success: o,
            fail: n
        });
    }
};