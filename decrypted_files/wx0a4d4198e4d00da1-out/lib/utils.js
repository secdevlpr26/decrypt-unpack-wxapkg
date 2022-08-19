function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var c = t[o](a), i = c.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                if (!c.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
        });
    };
}

function accAdd(e, t) {
    var n, r, o;
    try {
        n = e.toString().split(".")[1].length;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        n = 0;
    }
    try {
        r = t.toString().split(".")[1].length;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r = 0;
    }
    return o = Math.pow(10, Math.max(n, r)), (e * o + t * o) / o;
}

function accSubtr(e, t) {
    var n, r, o, a;
    try {
        n = e.toString().split(".")[1].length;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        n = 0;
    }
    try {
        r = t.toString().split(".")[1].length;
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        r = 0;
    }
    return o = Math.pow(10, Math.max(n, r)), a = n >= r ? n : r, Number(((e * o - t * o) / o).toFixed(a));
}

function accMul(e, t) {
    var n = 0, r = e.toString(), o = t.toString();
    try {
        n += r.split(".")[1].length;
    } catch (e) {}
    try {
        n += o.split(".")[1].length;
    } catch (e) {}
    return Number(r.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, n);
}

function accDiv(e, t) {
    var n, r, o = 0, a = 0;
    try {
        o = e.toString().split(".")[1].length;
    } catch (e) {}
    try {
        a = t.toString().split(".")[1].length;
    } catch (e) {}
    return n = Number(e.toString().replace(".", "")), r = Number(t.toString().replace(".", "")), 
    n / r * Math.pow(10, a - o);
}

var _lodash = require("./lodash.get.js"), _lodash2 = _interopRequireDefault(_lodash), skin = [ {
    name: "蓝色",
    type: "skin_blue",
    color: "#ffffff",
    bgcolor: "#218CD7",
    sel: !0
}, {
    name: "粉色",
    type: "skin_pink",
    color: "#ffffff",
    bgcolor: "#FF5A9B",
    sel: !1
}, {
    name: "绿色",
    type: "skin_green",
    color: "#ffffff",
    bgcolor: "#1ACC8E",
    sel: !1
}, {
    name: "红色",
    type: "skin_red",
    color: "#ffffff",
    bgcolor: "#fe525f",
    sel: !1
}, {
    name: "白色",
    type: "skin_white",
    color: "#000000",
    bgcolor: "#ffffff",
    sel: !1
}, {
    name: "黑色",
    type: "skin_black1",
    color: "#ffffff",
    bgcolor: "#3a393f",
    sel: !1
}, {
    name: "红色1",
    type: "skin_red1",
    color: "#ffffff",
    bgcolor: "#f51455",
    sel: !1
}, {
    name: "红色2",
    type: "skin_red2",
    color: "#ffffff",
    bgcolor: "#e7475e",
    sel: !1
}, {
    name: "红色3",
    type: "skin_red3",
    color: "#ffffff",
    bgcolor: "#f65676",
    sel: !1
}, {
    name: "橙色1",
    type: "skin_orange1",
    color: "#ffffff",
    bgcolor: "#f7ad0a",
    sel: !1
}, {
    name: "橙色2",
    type: "skin_orange2",
    color: "#ffffff",
    bgcolor: "#f79d2d",
    sel: !1
}, {
    name: "橙色3",
    type: "skin_orange3",
    color: "#ffffff",
    bgcolor: "#f9c134",
    sel: !1
}, {
    name: "橙色4",
    type: "skin_orange4",
    color: "#ffffff",
    bgcolor: "#f78500",
    sel: !1
}, {
    name: "橙色5",
    type: "skin_orange5",
    color: "#ffffff",
    bgcolor: "#ef7030",
    sel: !1
}, {
    name: "橙色6",
    type: "skin_orange6",
    color: "#ffffff",
    bgcolor: "#f05945",
    sel: !1
}, {
    name: "绿色1",
    type: "skin_green1",
    color: "#ffffff",
    bgcolor: "#99cd4e",
    sel: !1
}, {
    name: "绿色2",
    type: "skin_green2",
    color: "#ffffff",
    bgcolor: "#7dc24b",
    sel: !1
}, {
    name: "绿色3",
    type: "skin_green3",
    color: "#ffffff",
    bgcolor: "#31b96e",
    sel: !1
}, {
    name: "紫色1",
    type: "skin_purple1",
    color: "#ffffff",
    bgcolor: "#6c49b8",
    sel: !1
}, {
    name: "紫色2",
    type: "skin_purple2",
    color: "#ffffff",
    bgcolor: "#86269b",
    sel: !1
}, {
    name: "蓝色1",
    type: "skin_blue1",
    color: "#ffffff",
    bgcolor: "#4472ca",
    sel: !1
}, {
    name: "蓝色2",
    type: "skin_blue2",
    color: "#ffffff",
    bgcolor: "#5e7ce2",
    sel: !1
}, {
    name: "蓝色3",
    type: "skin_blue3",
    color: "#ffffff",
    bgcolor: "#1098f7",
    sel: !1
}, {
    name: "蓝色4",
    type: "skin_blue4",
    color: "#ffffff",
    bgcolor: "#558ad8",
    sel: !1
}, {
    name: "蓝色5",
    type: "skin_blue5",
    color: "#ffffff",
    bgcolor: "#2a93d4",
    sel: !1
} ];

Number.prototype.add = function(e) {
    return accAdd(e, this);
}, Number.prototype.sub = function(e) {
    return accSubtr(this, e);
}, Number.prototype.mul = function(e) {
    return accMul(e, this);
}, Number.prototype.div = function(e) {
    return accDiv(this, e);
};

var req = {
    json: {
        url: "",
        data: {},
        method: "GET",
        header: {
            "content-type": "application/json"
        }
    },
    urlencoded: {
        url: "",
        data: {},
        method: "GET",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        }
    }
}, timeTools = {
    typeEnum: {
        date: "[object Date]",
        object: "[object Object]",
        number: "[object Number]",
        string: "[object String]",
        boolean: "[object Boolean]"
    },
    getType: function(e) {
        return Object.prototype.toString.call(e);
    },
    getTimeSpan: function(e) {
        timeTools.getType(e) == timeTools.typeEnum.string && (e = e.replace(/-/g, "/")), 
        e = new Date(e).getTime();
        var t = new Date().getTime();
        return e - t <= 0 ? 0 : e - t;
    },
    ChangeDateFormat: function(e) {
        var t = e.split("年"), n = t[1].split("月"), r = n[1].split("日"), o = r[1].split("时"), a = o[1].split("分");
        return t[0] + "-" + n[0] + "-" + r[0] + " " + o[0] + ":" + a[0] + ":00";
    },
    patchTime: function(e) {
        var t = (e || 0).toString();
        return t[1] ? t : "0" + t;
    },
    getRemainTimeQueue: function(e) {
        var t = parseInt(e / 1e3 / 60 / 60 / 24), n = parseInt(e / 1e3 / 60 / 60 % 24), r = parseInt(e / 1e3 / 60 % 60), o = parseInt(e / 1e3 % 60);
        return [ this.patchTime(t), this.patchTime(n), this.patchTime(r), this.patchTime(o) ];
    },
    formatMillisecond: function(e) {
        var t = Math.floor(e / 864e5), n = Math.floor(e % 864e5 / 36e5), r = Math.floor(e % 36e5 / 6e4), o = Math.floor(e % 6e4 / 1e3);
        return [ this.patchTime(t), this.patchTime(n), this.patchTime(r), this.patchTime(o) ];
    },
    formTimeSpan: function() {
        for (var e = new Date(), t = {
            years: [],
            months: this.timeSpan(12),
            days: this.timeSpan(31),
            hours: this.timeSpan(23),
            mins: this.timeSpan(60),
            nowYear: e.getFullYear(),
            nowMonth: e.getMonth() + 1,
            nowDay: e.getDate(),
            nowHour: e.getHours(),
            nowMin: e.getMinutes()
        }, n = 1900, r = e.getFullYear() + 1; n <= r; n++) t.years.push(n);
        return t.nowMonth = this.timeAdd(t.nowMonth), t.nowDay = this.timeAdd(t.nowDay), 
        t.nowHour = this.timeAdd(t.nowHour), t.nowMin = this.timeAdd(t.nowMin), {
            value: [ t.years.indexOf(t.nowYear), t.months.indexOf(t.nowMonth), t.days.indexOf(t.nowDay), t.hours.indexOf(t.nowHour), t.mins.indexOf(t.nowMin) ],
            years: t.years,
            months: t.months,
            days: t.days,
            hours: t.hours,
            mins: t.mins
        };
    },
    timeSpan: function(e) {
        for (var t = [], n = 0; n <= e; n++) n < 10 && (n = "0" + n), t.push(n);
        return t;
    },
    timeAdd: function(e) {
        return e = e < 10 ? "0" + e : e;
    }
}, canvasTools = {
    pathStatus: function() {
        function e(e, n, r) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n, r) {
            var o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    o = {}, o.status = t.StyleType, e.t0 = o.status, e.next = 0 === e.t0 ? 5 : 1 === e.t0 ? 29 : 2 === e.t0 ? 57 : 3 === e.t0 ? 81 : 4 === e.t0 ? 103 : 5 === e.t0 ? 115 : 6 === e.t0 ? 139 : 163;
                    break;

                  case 5:
                    return e.next = 7, this.downFile("https://wtapi.vzan.com/img/share1.png");

                  case 7:
                    return o.bg = e.sent, o.xstore = .045 * n, o.ystore = .031 * r, o.wstore = .91 * n, 
                    o.hstore = .97 * n, o.xng = .045 * n, o.yng = .6 * r, o.wng = .91 * n, o.hng = .18 * n, 
                    o.xname = .1 * n, o.yname = .65 * r, o.xcon = .1 * n, o.ycon = .7 * r, o.xqrcode = .15 * n, 
                    o.yqrcode = .75 * r, o.wqrcode = .23 * n, o.hqrcode = .23 * n, o.xtxt = .19 * n, 
                    o.ytxt = .95 * r, o.xtxt1 = .65 * n, o.ytxt1 = .95 * r, e.abrupt("break", 163);

                  case 29:
                    return e.next = 31, this.downFile("https://wtapi.vzan.com/img/share2.png");

                  case 31:
                    return o.bg = e.sent, o.xicon = .4 * n, o.yicon = 0, o.wicon = .2 * n, o.hicon = .2 * n, 
                    o.xstore = .11 * n, o.ystore = .17 * r, o.wstore = .78 * n, o.hstore = .78 * n, 
                    o.xng = .11 * n, o.yng = .63 * r, o.wng = .78 * n, o.hng = .14 * n, o.xname = .15 * n, 
                    o.yname = .67 * r, o.xcon = .15 * n, o.ycon = .71 * r, o.xqrcode = .15 * n, o.yqrcode = .75 * r, 
                    o.wqrcode = .23 * n, o.hqrcode = .23 * n, o.xtxt = .26 * n, o.ytxt = .95 * r, o.xtxt1 = .72 * n, 
                    o.ytxt1 = .95 * r, e.abrupt("break", 163);

                  case 57:
                    return e.next = 59, this.downFile("https://wtapi.vzan.com/img/share3.png");

                  case 59:
                    return o.bg = e.sent, o.xstore = .14 * n, o.ystore = .1 * r, o.wstore = .72 * n, 
                    o.hstore = .72 * n, o.xng = .14 * n, o.yng = .485 * r, o.wng = .72 * n, o.hng = .18 * n, 
                    o.xname = .18 * n, o.yname = .53 * r, o.xcon = .18 * n, o.ycon = .59 * r, o.xqrcode = .2 * n, 
                    o.yqrcode = .71 * r, o.wqrcode = .21 * n, o.hqrcode = .21 * n, o.xtxt = .23 * n, 
                    o.ytxt = .9 * r, o.xtxt1 = .61 * n, o.ytxt1 = .9 * r, e.abrupt("break", 163);

                  case 81:
                    return e.next = 83, this.downFile("https://wtapi.vzan.com/img/share4.png");

                  case 83:
                    return o.bg = e.sent, o.xstore = .16 * n, o.ystore = .05 * r, o.wstore = .68 * n, 
                    o.hstore = .68 * n, o.xng = .16 * n, o.yng = .423 * r, o.wng = .68 * n, o.hng = .16 * n, 
                    o.xname = .2 * n, o.yname = .47 * r, o.xcon = .2 * n, o.ycon = .51 * r, o.xqrcode = .355 * n, 
                    o.yqrcode = .66 * r, o.wqrcode = .3 * n, o.hqrcode = .3 * n, o.xtxt = .43 * n, o.ytxt = .95 * r, 
                    e.abrupt("break", 163);

                  case 103:
                    return e.next = 105, this.downFile("https://wtapi.vzan.com/img/share5.png");

                  case 105:
                    return o.bg = e.sent, o.xstore = 0, o.ystore = 0, o.wstore = n, o.hstore = 1.05 * n, 
                    o.xqrcode = .15 * n, o.yqrcode = .79 * r, o.wqrcode = .23 * n, o.hqrcode = .23 * n, 
                    e.abrupt("break", 163);

                  case 115:
                    return e.next = 117, this.downFile("https://wtapi.vzan.com/img/barShare.png");

                  case 117:
                    return o.bg = e.sent, o.xstore = .075 * n, o.ystore = .053 * r, o.wstore = .85 * n, 
                    o.hstore = .85 * n, o.xng = .075 * n, o.yng = .53 * r, o.wng = .85 * n, o.hng = .18 * n, 
                    o.xname = .1 * n, o.yname = .58 * r, o.xcon = .1 * n, o.ycon = .64 * r, o.xqrcode = .15 * n, 
                    o.yqrcode = .71 * r, o.wqrcode = .23 * n, o.hqrcode = .23 * n, o.xtxt = .19 * n, 
                    o.ytxt = .92 * r, o.xtxt1 = .61 * n, o.ytxt1 = .92 * r, e.abrupt("break", 163);

                  case 139:
                    return e.next = 141, this.downFile("https://wtapi.vzan.com/img/share1.png");

                  case 141:
                    return o.bg = e.sent, o.xstore = .045 * n, o.ystore = .031 * r, o.wstore = .91 * n, 
                    o.hstore = .97 * n, o.xng = .045 * n, o.yng = .6 * r, o.wng = .91 * n, o.hng = .18 * n, 
                    o.xname = .1 * n, o.yname = .65 * r, o.xcon = .1 * n, o.ycon = .7 * r, o.xqrcode = .15 * n, 
                    o.yqrcode = .75 * r, o.wqrcode = .23 * n, o.hqrcode = .23 * n, o.xtxt = .19 * n, 
                    o.ytxt = .95 * r, o.xtxt1 = .65 * n, o.ytxt1 = .95 * r, e.abrupt("break", 163);

                  case 163:
                    return e.next = 165, this.downFile(t.Qrcode ? t.Qrcode.replace(/^http:/, "https:") : "");

                  case 165:
                    return o.qrcode = e.sent, e.next = 168, this.downFile(t.ADImg.length ? t.ADImg[0].url.replace(/^http:/, "https:") : "");

                  case 168:
                    if (o.img = e.sent, 1 != o.status) {
                        e.next = 175;
                        break;
                    }
                    return e.next = 172, this.downFile(t.Logo.length ? t.Logo[0].url.replace(/^http:/, "https:").replace("i.vzan.cc", "icut.vzan.cc").replace("i2.vzan.cc", "i2cut.vzan.cc") + "?imageMogr2/thumbnail/130x130!/iradius/65/format/png" : "");

                  case 172:
                    e.t1 = e.sent, e.next = 176;
                    break;

                  case 175:
                    e.t1 = "";

                  case 176:
                    return o.icon = e.t1, o.name = t.StoreName, o.content = t.ADTitle, e.abrupt("return", o);

                  case 180:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    pathCanvas: function() {
        function e(e, n) {
            return t.apply(this, arguments);
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
            var r, o, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = {}, o = (0, _lodash2.default)(n, "vm", ""), a = (0, _lodash2.default)(n.vm, "goodInfo", ""), 
                    o && ("good" == o.type ? (r.title = o.name, r.img = o.img_fmt, r.disprice = o.priceStr, 
                    r.discount = o.discount, r.price = o.originalPrice) : "miaosha" == o.type ? (r.discount = 99, 
                    r.img = a.img, r.title = a.name, r.price = a.priceStr, r.disprice = a.discountPricestr) : (r.img = o.img, 
                    r.title = o.name, r.discount = o.discount, r.disprice = o.EntGroups.GroupPriceStr, 
                    r.price = o.EntGroups.OriginalPriceStr)), e.next = 6, this.downFile(r.img.replace(/^http:/, "https:"));

                  case 6:
                    return r.img = e.sent, e.next = 9, this.downFile(t.replace(/^http:/, "https:"));

                  case 9:
                    return r.qrcode = e.sent, e.abrupt("return", r);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return e;
    }(),
    downFile: function(e) {
        return new Promise(function(t, n) {
            wx.downloadFile({
                url: e,
                success: function(e) {
                    t(e);
                }
            });
        });
    }
}, un = {
    icon: function(e, t) {
        var n = {}, r = e.find(function(e) {
            return "share" == e.type;
        }), o = e.find(function(e) {
            return "bottomnav" == e.type;
        }), a = e.find(function(e) {
            return "contactShopkeeper" == e.type;
        }), c = e.find(function(e) {
            return "buy" == e.btnType && ("good" == e.type || "goodlist" == e.type);
        }), i = e.find(function(e) {
            return "yuyue" == e.btnType && ("good" == e.type || "goodlist" == e.type);
        });
        return n.sub = !!i, n.shop = !!c, n.share = !!r, n.homeStatus = void 0 == o && 0 != t, 
        a && (n.suspend = !!a.openServiceSuspend, n.custom = a.serverType, a.openTelSuspend && (n.phone = {
            show: !0,
            tel: a.phoneNum
        })), n.bgmusic = !0, n;
    }
};

module.exports = {
    un: un,
    req: req,
    skin: skin,
    timeTools: timeTools,
    canvasTools: canvasTools
};