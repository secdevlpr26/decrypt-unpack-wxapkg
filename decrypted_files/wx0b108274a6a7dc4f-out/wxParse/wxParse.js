function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    e.target.dataset.src, e.target.dataset.from;
}

function a(e) {
    var t = this, a = e.target.dataset.from, r = e.target.dataset.idx;
    void 0 !== a && a.length > 0 && i(e, r, t, a);
}

function i(e, t, a, i) {
    var s = a.data[i];
    if (0 != s.images.length) {
        var o = s.images, g = r(e.detail.width, e.detail.height, a, i);
        o[t].width = g.imageWidth, o[t].height = g.imageheight, s.images = o;
        var l = {};
        l[i] = s, a.setData(l);
    }
}

function r(e, t, a, i) {
    var r = 0, s = 0, o = 0, g = 0, l = {};
    return wx.getSystemInfo({
        success: function(n) {
            var d = a.data[i].view.imagePadding;
            r = n.windowWidth - 2 * d, s = n.windowHeight, console.log("windowWidth" + r), e > r ? (o = r, 
            console.log("autoWidth" + o), g = o * t / e, console.log("autoHeight" + g), l.imageWidth = o, 
            l.imageheight = g) : (l.imageWidth = e, l.imageheight = t);
        }
    }), l;
}

var s = e(require("./showdown.js")), o = e(require("./html2json.js")), g = e(require("./wxDiscode.js")), l = getApp();

module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', n = arguments[3], d = arguments[4], h = n;
        r = g.default.strcharacterDiscode(r);
        var m = {};
        if (console.log(m), "html" == i) {
            for (m = o.default.html2json(r, e), v = 0; v < m.images.length; v++) {
                var c = m.images[v];
                "img" === c.tag && -1 === c.attr.src.indexOf("https") && (c.attr.src = "https://syb.qhkltn.com" + c.attr.src);
            }
            l.globalData.imageUrls = [];
            for (var v = 0; v < m.imageUrls.length; v++) {
                var u = {};
                m.imageUrls[v] = "https://syb.qhkltn.com" + m.imageUrls[v], u.src = m.imageUrls[v], 
                l.globalData.imageUrls.push(u), console.log(l.globalData.imageUrls);
            }
        } else if ("md" == i || "markdown" == i) {
            var f = new s.default.Converter().makeHtml(r);
            m = o.default.html2json(f, e), console.log(JSON.stringify(m, " ", " "));
        }
        m.view = {}, m.view.imagePadding = 0, void 0 !== d && (m.view.imagePadding = d);
        var w = {};
        w[e] = m, h.setData(w), h.wxParseImgLoad = a, h.wxParseImgTap = t;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var r = [], s = i.data, o = null, g = 0; g < a; g++) {
            var l = s[t + g].nodes;
            r.push(l);
        }
        e = e || "wxParseTemArray", (o = JSON.parse('{"' + e + '":""}'))[e] = r, i.setData(o);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        o.default.emojisInit(e, t, a);
    }
};