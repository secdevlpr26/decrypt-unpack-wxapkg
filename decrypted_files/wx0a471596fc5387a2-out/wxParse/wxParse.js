function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

function i(e) {
    var t = this, i = e.target.dataset.from, r = e.target.dataset.idx;
    void 0 !== i && i.length > 0 && a(e, r, t, i);
}

function a(e, i, a, n) {
    var o, d = a.data[n];
    if (d && 0 != d.images.length) {
        var s = d.images, l = r(e.detail.width, e.detail.height, a, n), g = s[i].index, h = "" + n, m = !0, u = !1, v = void 0;
        try {
            for (var f, w = g.split(".")[Symbol.iterator](); !(m = (f = w.next()).done); m = !0) h += ".nodes[" + f.value + "]";
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            u = !0, v = e;
        } finally {
            try {
                !m && w.return && w.return();
            } finally {
                if (u) throw v;
            }
        }
        var c = h + ".width", x = h + ".height";
        a.setData((o = {}, t(o, c, l.imageWidth), t(o, x, l.imageheight), o));
    }
}

function r(e, t, i, a) {
    var r = 0, n = 0, o = 0, l = {}, g = i.data[a].view.imagePadding;
    return r = d - 2 * g, s, e > r ? (o = (n = r) * t / e, l.imageWidth = n, l.imageheight = o) : (l.imageWidth = e, 
    l.imageheight = t), l;
}

var n = e(require("../4E070A33668F5ADF28616234E97911A5.js")), o = e(require("../92780CC2668F5ADFF41E64C51C5911A5.js")), d = 0, s = 0;

wx.getSystemInfo({
    success: function(e) {
        d = e.windowWidth, s = e.windowHeight;
    }
}), module.exports = {
    wxParse: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', r = arguments[3], d = arguments[4], s = r, l = {};
        if ("html" == t) l = o.default.html2json(a, e), console.log(JSON.stringify(l, " ", " ")); else if ("md" == t || "markdown" == t) {
            var g = new n.default.Converter().makeHtml(a);
            l = o.default.html2json(g, e), console.log(JSON.stringify(l, " ", " "));
        }
        l.view = {}, l.view.imagePadding = 0, void 0 !== d && (l.view.imagePadding = d);
        var h = {};
        h[e] = l, s.setData(h), s.wxParseImgLoad = i;
    },
    wxParseTemArray: function(e, t, i, a) {
        for (var r = [], n = a.data, o = null, d = 0; d < i; d++) {
            var s = n[t + d].nodes;
            r.push(s);
        }
        e = e || "wxParseTemArray", (o = JSON.parse('{"' + e + '":""}'))[e] = r, a.setData(o);
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", i = arguments[2];
        o.default.emojisInit(e, t, i);
    }
};