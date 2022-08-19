function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i), a && e(t, a), t;
    };
}(), Wheel = function() {
    function e(t, i) {
        _classCallCheck(this, e), this.page = t, this.deg = 0, this.areaNumber = i.areaNumber, 
        this.speed = i.speed || 16, this.awardNumer = i.awardNumer, this.mode = i.mode || 2, 
        this.singleAngle = "", this.isStart = !1, this.endCallBack = i.callback, this.init(), 
        this.page.start = this.start.bind(this);
    }
    return _createClass(e, [ {
        key: "init",
        value: function() {
            var e = this.areaNumber, t = this.singleAngle, i = this.mode;
            t = 360 / e, this.singleAngle = t, this.page.wheel = {
                singleAngle: t,
                mode: i
            }, this.page.$apply();
        }
    }, {
        key: "start",
        value: function() {
            var e = this, t = this.deg, i = this.awardNumer, a = this.singleAngle, s = this.speed, n = this.isStart, r = this.mode;
            if (!n) {
                this.isStart = !0;
                var l = (i - 1) * a + a / 2 + 360, h = 360 * (Math.floor(4 * Math.random()) + 4), o = void 0;
                t = 0, this.timer = setInterval(function() {
                    t < h ? t += s : (o = (l + h - t) / s, o = o > s ? s : o < 1 ? 1 : o, (t += o) >= l + h && (t = l + h, 
                    e.isStart = !1, clearInterval(e.timer), e.endCallBack())), e.page.wheel = {
                        singleAngle: a,
                        deg: t,
                        mode: r
                    }, e.page.$apply();
                }, 1e3 / 60);
            }
        }
    }, {
        key: "reset",
        value: function(e) {
            var t = this.mode;
            this.deg = 0, e && (this.awardNumer = e), this.page.wheel = {
                singleAngle: this.singleAngle,
                deg: 0,
                mode: t
            }, this.page.$apply();
        }
    }, {
        key: "switch",
        value: function(e) {
            this.mode = e;
        }
    } ]), e;
}();

exports.default = Wheel;