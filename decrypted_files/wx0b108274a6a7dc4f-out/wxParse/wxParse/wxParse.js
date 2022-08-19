function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    var t = this, a = e.target.dataset.src, i = e.target.dataset.from;
    void 0 !== i && i.length > 0 && wx.previewImage({
        current: a,
        urls: t.data[i].imageUrls
    });
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
        var n = {};
        n[i] = s, a.setData(n);
    }
}

function r(e, t, a, i) {
    var r = 0, s = 0, o = 0, g = 0, n = {};
    return wx.getSystemInfo({
        success: function(l) {
            var d = a.data[i].view.imagePadding;
            r = l.windowWidth - 2 * d, s = l.windowHeight, console.log("windowWidth" + r), e > r ? (o = r, 
            console.log("autoWidth" + o), g = o * t / e, console.log("autoHeight" + g), n.imageWidth = o, 
            n.imageheight = g) : (n.imageWidth = e, n.imageheight = t);
        }
    }), n;
}

var s = e(require("./showdown.js")), o = e(require("./html2json.js")), g = e(require("./wxDiscode.js")), n = getApp();

module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', l = arguments[3], d = arguments[4], h = l;
        console.log(r), r = g.default.strcharacterDiscode(r), console.log(r);
        var m = {};
        if ("html" == i) {
            for (m = o.default.html2json(r, e), console.log(JSON.stringify(m, " ", " ")), c = 0; c < m.images.length; c++) {
                var v = m.images[c];
                "img" === v.tag && -1 === v.attr.src.indexOf("https") && (v.attr.src = "https://syb.qhkltn.com" + v.attr.src);
            }
            for (var c = 0; c < m.imageUrls.length; c++) {
                var u = {};
                m.imageUrls[c] = "https://syb.qhkltn.com" + m.imageUrls[c], u.src = m.imageUrls[c], 
                n.globalData.imageUrls.push(u);
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
            var n = s[t + g].nodes;
            r.push(n);
        }
        e = e || "wxParseTemArray", (o = JSON.parse('{"' + e + '":""}'))[e] = r, i.setData(o);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        o.default.emojisInit(e, t, a);
    }
};