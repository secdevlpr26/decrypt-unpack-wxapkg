function e(e) {
    return new Array(2 - e.toString().length + 1).join("0") + e;
}

var i = function(e) {
    var i = this;
    this.page = e.page, this.height = void 0 != e.height ? e.height : 600, this.success = void 0 != e.success ? e.success : function() {};
    this.page.setData({
        pickerViewHeight: this.height - 100
    }), this.pickerTimeout = null, "slide" == e.animation || "fade" == e.animation ? (this.animationType = "slide", 
    this.duration = void 0 != e.duration ? e.duration : 500, this.TimingFunction = void 0 != e.timingFunction ? e.timingFunction : "linear", 
    this.thisDelay = void 0 != e.delay ? e.delay : 0, this.animation = e.animation, 
    this.page.pickerClear = function() {
        var e = {};
        e[i.pickerName] = "", e.pickerAnimation = i.pickerHideAnimation.export(), clearTimeout(i.pickerTimeout), 
        i.pickerTimeout = setTimeout(function() {
            i.page.setData({
                pickerViewShow: !1
            });
        }, i.duration), this.setData(e), i.onClear && i.onClear(i.page, i.pickerName);
    }, this.page.pickerCancel = function() {
        var e = {};
        e.pickerAnimation = i.pickerHideAnimation.export(), clearTimeout(i.pickerTimeout), 
        i.pickerTimeout = setTimeout(function() {
            i.page.setData({
                pickerViewShow: !1
            });
        }, i.duration), this.setData(e);
    }, this.page.pickerOk = function() {
        var e = {};
        e.pickerAnimation = i.pickerHideAnimation.export(), this.setData(e), clearTimeout(i.pickerTimeout), 
        i.pickerTimeout = setTimeout(function() {
            i.page.setData({
                pickerViewShow: !1
            });
        }, i.duration), i.success(), i.onSure && i.onSure(i.page, i.pickerName);
    }) : (this.animation = "", this.page.pickerClear = function() {
        var e = {};
        e[i.pickerName] = "", e.pickerViewShow = !1, this.setData(e), i.onClear && i.onClear(i.page, i.pickerName);
    }, this.page.pickerCancel = function() {
        var e = {};
        e.pickerViewShow = !1, this.setData(e);
    }, this.page.pickerOk = function() {
        this.setData({
            pickerViewShow: !1
        }), i.success(), i.onSure && i.onSure(i.page, i.pickerName);
    });
};

i.prototype.setPicker = function(i, t, a) {
    var r = this;
    t && (r.onSure = t), a && (r.onClear = a);
    if (void 0 == this.page.data[i] || "" == this.page.data[i]) {
        var n = (u = new Date()).getFullYear(), s = u.getMonth() + 1, o = u.getDate(), c = u.getHours(), p = u.getMinutes(), h = new Object();
        h[i] = n + "年" + s + "月" + o + "日 " + e(c) + ":" + e(p), this.page.setData(h);
    } else var u = new Date(Date.parse(this.page.data[i].replace("年", "/").replace("月", "/").replace("日", "/"))), n = u.getFullYear(), s = u.getMonth() + 1, o = u.getDate(), c = u.getHours(), p = u.getMinutes();
    this.pickerName = i, this.pickerDateTextArr = [], this.pickerDateValueArr = [], 
    this.pickerHourTextArr = [], this.pickerHourValueArr = [], this.pickerMinuteTextArr = [], 
    this.pickerMinuteValueArr = [];
    var k = new Date(), g = k.getFullYear();
    k.getHours(), k.getMinutes();
    new Date(g - 1, 2, 0).getDate();
    for (var m = k.getMonth() + 1, l = k.getDate(), D = [ "日", "一", "二", "三", "四", "五", "六" ], A = 0, w = 0, d = 0, T = g - 1; T <= g + 1; T++) for (var v = 1; v <= 12; v++) for (var f = new Date(T, v, 0).getDate(), V = 1; V <= f; V++) {
        var x = D[new Date(T, v - 1, V).getDay()];
        V == o && v == s && T == n && (A = parseInt((new Date(T + "/" + v + "/" + V) - new Date(g - 1 + "/1/1")) / 1e3 / 60 / 60 / 24)), 
        V == l && v == m && T == g ? this.pickerDateTextArr.push("今日") : this.pickerDateTextArr.push(v + "月" + V + "日 星期" + x), 
        this.pickerDateValueArr.push(T + "年" + v + "月" + V + "日");
    }
    for (var S = 0; S < 24; S++) this.pickerHourValueArr.push(S), this.pickerHourTextArr.push(e(S) + "时"), 
    c == S && (w = S);
    for (var y = 0; y < 60; y++) this.pickerMinuteValueArr.push(y), this.pickerMinuteTextArr.push(e(y) + "分"), 
    p == y && (d = y);
    var H = {};
    if (H.pickerDateTextArr = this.pickerDateTextArr, H.pickerHourTextArr = this.pickerHourTextArr, 
    H.pickerMinuteTextArr = this.pickerMinuteTextArr, H.pickDatetimeValue = [ A, w, d ], 
    this.page.setData(H), "" == this.animation) this.page.setData({
        pickerViewShow: !0
    }); else {
        var M = wx.createAnimation({
            duration: r.duration,
            timingFunction: r.thisTimingFunction,
            delay: r.thisDelay,
            transformOrigin: "50% 50% 0",
            success: function(e) {}
        }), C = wx.createAnimation({
            duration: r.duration,
            timingFunction: r.TimingFunction,
            delay: r.Delay,
            transformOrigin: "50% 50% 0",
            success: function(e) {}
        });
        clearTimeout(this.pickerTimeout), "slide" == this.animation ? (this.pickerShowAnimation = M.height(this.height + "rpx").step(), 
        this.pickerHideAnimation = C.height(0).step(), this.page.setData({
            pickerViewShow: !0,
            pickerViewStyle: "height:0;"
        })) : (this.pickerShowAnimation = M.opacity(1).step(), this.pickerHideAnimation = C.opacity(0).step(), 
        this.page.setData({
            pickerViewShow: !0,
            pickerViewStyle: "opacity:0;"
        })), this.page.setData({
            pickerAnimation: r.pickerShowAnimation.export()
        });
    }
    this.page.bindDateTimeChange = function(t) {
        var a = t.detail.value, n = {};
        n[i] = r.pickerDateValueArr[a[0]] + " " + e(r.pickerHourValueArr[a[1]]) + ":" + e(r.pickerMinuteValueArr[a[2]]), 
        this.setData(n);
    };
}, module.exports = {
    pickerDatetime: i
};