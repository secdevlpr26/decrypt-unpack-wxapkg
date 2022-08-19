function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    var t = this, a = e.target.dataset.src, i = e.target.dataset.from;
    void 0 !== i && i.length > 0 && wx.previewImage({
        current: a,
        urls: t.bindData[i].imageUrls
    });
}

function a(e) {
    var t = this, a = e.target.dataset.from, o = e.target.dataset.idx;
    void 0 !== a && a.length > 0 && i(e, o, t, a);
}

function i(e, t, a, i) {
    var n = a.data[i];
    if (0 != n.images.length) {
        var r = n.images, d = o(e.detail.width, e.detail.height, a, i);
        r[t].width = d.imageWidth, r[t].height = d.imageheight, n.images = r;
        var s = {};
        s[i] = n, a.setData(s);
    }
}

function o(e, t, a, i) {
    var o = 0, n = 0, r = 0, d = 0, s = {};
    return wx.getSystemInfo({
        success: function(g) {
            var l = a.data[i].view.imagePadding;
            o = g.windowWidth - 2 * l, n = g.windowHeight, console.log("windowWidth" + o), e > o ? (r = o, 
            console.log("autoWidth" + r), d = r * t / e, console.log("autoHeight" + d), s.imageWidth = r, 
            s.imageheight = d) : (s.imageWidth = e, s.imageheight = t);
        }
    }), s;
}

var n = e(require("./showdown.js")), r = e(require("./html2json.js"));

module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', d = arguments[3], s = arguments[4], g = d, l = {};
        if ("html" == i) l = r.default.html2json(o, e), console.log(JSON.stringify(l, " ", " ")); else if ("md" == i || "markdown" == i) {
            var h = new n.default.Converter().makeHtml(o);
            l = r.default.html2json(h, e), console.log(JSON.stringify(l, " ", " "));
        }
        l.view = {}, l.view.imagePadding = 0, void 0 !== s && (l.view.imagePadding = s);
        var m = {};
        m[e] = l, g.setData(m), g.bindData = m, g.wxParseImgLoad = a, g.wxParseImgTap = t;
    },
    wxParseTemArray: function(e, t, a, i) {
        for (var o = [], n = i.data, r = null, d = 0; d < a; d++) {
            var s = n[t + d].nodes;
            o.push(s);
        }
        e = e || "wxParseTemArray", (r = JSON.parse('{"' + e + '":""}'))[e] = o, i.setData(r);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
        r.default.emojisInit(e, t, a);
    }
};