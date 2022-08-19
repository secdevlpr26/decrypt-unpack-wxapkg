var t = getApp();

Page({
    data: {
        week: [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ],
        comeDateInfo: "",
        leaveDateInfo: "",
        isSelectEnd: !0,
        isSelectStart: !0,
        differDays: 0
    },
    onShow: function() {
        this.dateData();
    },
    dateData: function() {
        for (var a = [], e = [], s = [], i = new Date(), d = i.getFullYear(), h = (i.getDay(), 
        []), n = i.getMonth() + 1, r = i.getDate(), o = 0, f = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], D = [], l = n; l < 13; l++) D.push(l);
        for (var c = [ d ], v = 0; v < 150 / 365 + 2; v++) c.push(d + v + 1);
        for (var I = function(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
        }, g = 0; g < c.length; g++) {
            var m = void 0;
            m = c[g] == d ? D : f;
            for (var u = 0; u < m.length; u++) {
                s = [];
                var k = [ 31, 28 + I(c[g]), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], S = [];
                if (c[g] == d) {
                    for (var p = 0; p < D.length; p++) S.push(k[m[p] - 1]);
                    k = S;
                } else k = [ 31, 28 + I(c[g]), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
                for (var w = 0; w < k[u]; w++) {
                    var y = void 0;
                    if (!(++o < 150)) break;
                    var b = w + 1;
                    if (b < 10 && (b = "0" + b), c[g] == d && m[u] == n) {
                        if (w + 1 >= r && (y = {
                            year: c[g],
                            month: m[u],
                            day: w + 1,
                            date: m[u] + "月" + b + "日",
                            start: 0,
                            end: 0,
                            center: 0,
                            re: c[g] + "-" + m[u] + "-" + b
                        }, s.push(y), w + 1 == r)) {
                            var E = new Date(c[g], m[u] - 1, w + 1).getDay();
                            h.push(E);
                        }
                    } else if (y = {
                        year: c[g],
                        month: m[u],
                        day: w + 1,
                        date: m[u] + "月" + b + "日",
                        selected: 0,
                        re: c[g] + "-" + m[u] + "-" + b
                    }, s.push(y), 0 == w) {
                        var W = new Date(c[g], m[u] - 1, w + 1).getDay();
                        h.push(W);
                    }
                }
                a.push(s);
            }
        }
        for (var x = 0; x < a.length; x++) 0 != a[x].length && e.push(a[x]);
        a[0].length > 1 ? (a[0][0].start = 1, a[0][1].end = 1, this.data.comeDateInfo = a[0][0], 
        this.data.leaveDateInfo = a[0][1], this.data.comeDateInfo.week = this.getWeek(this.data.comeDateInfo.re), 
        this.data.leaveDateInfo.week = this.getWeek(this.data.leaveDateInfo.re), this.setData({
            comeDateInfo: this.data.comeDateInfo,
            leaveDateInfo: this.data.leaveDateInfo
        })) : (a[0][0].start = 1, a[1][0].end = 1, this.data.comeDateInfo = a[0][0], this.data.leaveDateInfo = a[1][0], 
        this.data.comeDateInfo.week = this.getWeek(this.data.comeDateInfo.re), this.data.leaveDateInfo.week = this.getWeek(this.data.leaveDateInfo.re), 
        this.setData({
            comeDateInfo: this.data.comeDateInfo,
            leaveDateInfo: this.data.leaveDateInfo
        })), this.setData({
            date: e,
            weeks: h,
            differDays: t.DateDiff(this.data.leaveDateInfo.re, this.data.comeDateInfo.re)
        });
    },
    daytap: function(a) {
        var e = a.currentTarget.dataset.midx, s = a.currentTarget.dataset.didx;
        if (this.data.isSelectEnd) {
            this.clearCenterData();
            for (var i = 0; i < this.data.date.length; i++) {
                for (var d = this.data.date[i], h = !1, n = 0; n < d.length; n++) if (d[n].start && (this.data.date[i][n].start = 0, 
                this.data.date[e][s].start = 1, this.setData({
                    isSelectStart: !0
                }), this.data.comeDateInfo = this.data.date[e][s]), d[n].end) {
                    this.data.date[i][n].end = 0, this.setData({
                        isSelectEnd: !1
                    }), h = !0;
                    break;
                }
                if (h) break;
            }
            this.setData({
                date: this.data.date
            });
        } else if (this.data.isSelectStart && !this.data.isSelectEnd) {
            for (var r = 0; r < this.data.date.length; r++) {
                for (var o = this.data.date[r], f = !1, D = 0; D < o.length; D++) if (o[D].start) {
                    r > e ? (this.data.date[r][D].start = 0, this.data.date[e][s].start = 1, this.data.comeDateInfo = this.data.date[e][s]) : r == e ? D > s ? (this.data.date[r][D].start = 0, 
                    this.data.date[e][s].start = 1, this.data.comeDateInfo = this.data.date[e][s]) : D < s && (this.data.date[e][s].end = 1, 
                    this.data.leaveDateInfo = this.data.date[e][s], this.setData({
                        isSelectEnd: !0
                    })) : (this.data.date[e][s].end = 1, this.data.leaveDateInfo = this.data.date[e][s], 
                    this.setData({
                        isSelectEnd: !0
                    })), f = !0;
                    break;
                }
                if (f) break;
            }
            if (this.data.isSelectEnd) {
                for (var l = 0; l < this.data.date.length; l++) for (var c = this.data.date[l], v = 0; v < c.length; v++) {
                    var I = this.CompareDate(c[v].re, this.data.comeDateInfo.re), g = this.CompareDate(this.data.leaveDateInfo.re, c[v].re);
                    I && g && (this.data.date[l][v].center = 1);
                }
                this.data.comeDateInfo.week = this.getWeek(this.data.comeDateInfo.re), this.data.leaveDateInfo.week = this.getWeek(this.data.leaveDateInfo.re), 
                this.setData({
                    differDays: t.DateDiff(this.data.leaveDateInfo.re, this.data.comeDateInfo.re),
                    comeDateInfo: this.data.comeDateInfo,
                    leaveDateInfo: this.data.leaveDateInfo
                });
            }
            this.setData({
                date: this.data.date
            });
        }
    },
    sure: function() {
        this.data.isSelectStart && this.data.isSelectEnd ? (wx.setStorageSync("comeDate" + t.globalData.autoId, this.data.comeDateInfo), 
        wx.setStorageSync("leaveDate" + t.globalData.autoId, this.data.leaveDateInfo), wx.navigateBack({
            beta: 1
        })) : t.hint("请选择退房日期");
    },
    clearCenterData: function() {
        for (var t = 0; t < this.data.date.length; t++) for (var a = this.data.date[t], e = 0; e < a.length; e++) this.data.date[t][e].center = 0;
        this.setData({
            date: this.data.date
        });
    },
    CompareDate: function(t, a) {
        t = t.replace(/-/g, "/"), a = a.replace(/-/g, "/");
        var e = new Date(t), s = new Date(a);
        return e.getTime() > s.getTime();
    },
    getWeek: function(t) {
        var a, e = t.split("-");
        return a = new Date(e[0], parseInt(e[1] - 1), e[2]), "星期" + "日一二三四五六".charAt(a.getDay());
    }
});