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
    var t = this, a = e.target.dataset.from, o = e.target.dataset.idx;
    void 0 !== a && a.length > 0 && i(e, o, t, a);
}

function i(e, t, a, i) {
    var r = a.data[i];
    if (0 != r.images.length) {
        var n = r.images, s = o(e.detail.width, e.detail.height, a, i);
        n[t].width = s.imageWidth, n[t].height = s.imageheight, r.images = n;
        var d = {};
        d[i] = r, a.setData(d);
    }
}

function o(e, t, a, i) {
    var o = 0, r = 0, n = 0, s = 0, d = {};
    return wx.getSystemInfo({
        success: function(g) {
            var l = a.data[i].view.imagePadding;
            o = g.windowWidth - 2 * l, r = g.windowHeight, console.log("windowWidth" + o), e > o ? (n = o, 
            console.log("autoWidth" + n), s = n * t / e, console.log("autoHeight" + s), d.imageWidth = n, 
            d.imageheight = s) : (d.imageWidth = e, d.imageheight = t);
        }
    }), d;
}

var r = e(require("./showdown.js")), n = e(require("./html2json.js"));

module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', s = arguments[3], d = arguments[4], g = s, l = {};
        if ("html" == i) l = n.default.html2json(o, e), console.log(JSON.stringify(l, " ", " ")); else if ("md" == i || "markdown" == i) {
            var h = new r.default.Converter().makeHtml(o);
            l = n.default.html2json(h, e), console.log(JSON.stringify(l, " ", " "));
        }
        l.view = {}, l.view.imagePadding = 0, void 0 !== d && (l.view.imagePadding = d);
        var m = {};
        m[e] = l, g.setData(m), g.wxParseImgLoad = a, g.wxParseImgTap = t;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var o = [], r = i.data, n = null, s = 0; s < a; s++) {
            var d = r[t + s].nodes;
            o.push(d);
        }
        e = e || "wxParseTemArray", (n = JSON.parse('{"' + e + '":""}'))[e] = o, i.setData(n);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        n.default.emojisInit(e, t, a);
    }
};