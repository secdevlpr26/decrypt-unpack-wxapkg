function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function wxParse() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', i = (arguments[3], 
    arguments[4], {});
    if ("html" == t) i = _html2json2.default.html2json(a, e); else if ("md" == t || "markdown" == t) {
        var o = new _showdown2.default.Converter(), r = o.makeHtml(a);
        i = _html2json2.default.html2json(r, e);
    }
    return i;
}

function wxParseImgLoad(e) {
    var t = this, a = e.target.dataset.from, i = e.target.dataset.idx;
    void 0 !== a && a.length > 0 && calMoreImageInfo(e, i, t, a);
}

function calMoreImageInfo(e, t, a, i) {
    var o = a.data[i];
    if (0 != o.images.length) {
        var r = o.images, n = wxAutoImageCal(e.detail.width, e.detail.height, a, i);
        r[t].width = n.imageWidth, r[t].height = n.imageheight, o.images = r;
        var s = {};
        s[i] = o, a.setData(s);
    }
}

function wxAutoImageCal(e, t, a, i) {
    var o = 0, r = 0, n = 0, s = 0, d = {};
    return wx.getSystemInfo({
        success: function(h) {
            var m = a.data[i].view.imagePadding;
            o = h.windowWidth - 2 * m, r = h.windowHeight, e > o ? (n = o, s = n * t / e, d.imageWidth = n, 
            d.imageheight = s) : (d.imageWidth = e, d.imageheight = t);
        }
    }), d;
}

function wxParseTemArray(e, t, a, i) {
    for (var o = [], r = i.data, n = null, s = 0; s < a; s++) {
        var d = r[t + s].nodes;
        o.push(d);
    }
    e = e || "wxParseTemArray", n = JSON.parse('{"' + e + '":""}'), n[e] = o, i.setData(n);
}

function emojisInit() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", a = arguments[2];
    _html2json2.default.emojisInit(e, t, a);
}

var _showdown = require("./showdown.js"), _showdown2 = _interopRequireDefault(_showdown), _html2json = require("./html2json.js"), _html2json2 = _interopRequireDefault(_html2json);

module.exports = {
    wxParse: wxParse,
    wxParseTemArray: wxParseTemArray,
    emojisInit: emojisInit
};