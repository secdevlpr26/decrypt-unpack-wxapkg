function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.XYReserveTimeView = void 0;

var i = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("component")), r = function() {
    function r(e) {
        t(this, r), this.states = e;
    }
    return i(r, [ {
        key: "setDefaults",
        value: function() {
            return {
                dateList: [],
                periodList: [],
                selelctedDate: {},
                scrollTop: 0
            };
        }
    }, {
        key: "init",
        value: function(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = Object.assign(this.setDefaults(), i);
            this.component = new n.default({
                scope: "$wux.picker." + t,
                data: r,
                methods: {
                    hide: function(e) {
                        this.setHidden([ "weui-animate-slide-down", "weui-animate-fade-out" ]);
                    },
                    show: function() {
                        this.setVisible([ "weui-animate-slide-up", "weui-animate-fade-in" ]);
                    },
                    dateCellClicked: function(i) {
                        for (var n, r = this.getComponentData().dateList, a = 0; a < r.length; a++) r[a].selected = 0;
                        var o = r[i.currentTarget.dataset.idx];
                        for (o.selected = 1, a = 0; a < o.periods.length; a++) o.periods[a].nightFeeTitle = "加收" + o.periods[a].night_fee + "元夜间服务费", 
                        o.periods[a].night_fee <= 0 ? o.periods[a].timeSubViewHeight = "100rpx" : o.periods[a].timeSubViewHeight = "50rpx";
                        this.setData((n = {}, e(n, "$wux.picker." + t + ".dateList", r), e(n, "$wux.picker." + t + ".periodList", o.periods), 
                        e(n, "$wux.picker." + t + ".selectedDate", o), e(n, "$wux.picker." + t + ".scrollTop", 0), 
                        n));
                    },
                    periodCellClicked: function(e) {
                        var t = this.getComponentData().selectedDate, i = this.getComponentData().periodList[e.currentTarget.dataset.idx], n = t.dateStr + i.start_time + "-" + i.next_time;
                        "function" == typeof r.onChange && r.onChange(n, i.start_timestamp, i.next_timestamp, i.night_fee), 
                        this.hide();
                    },
                    render: function() {
                        var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r = n[0].periods, a = n[0];
                        n[0].selected = 1;
                        for (var o = 0; o < r.length; o++) r[o].nightFeeTitle = "加收" + r[o].night_fee + "元夜间服务费", 
                        r[o].night_fee <= 0 ? r[o].timeSubViewHeight = "100rpx" : r[o].timeSubViewHeight = "50rpx";
                        this.setData((i = {}, e(i, "$wux.picker." + t + ".dateList", n), e(i, "$wux.picker." + t + ".periodList", r), 
                        e(i, "$wux.picker." + t + ".selectedDate", a), i));
                    },
                    formatDate_imprecise: function(e) {
                        var t = new Date(1e3 * e);
                        return t.getFullYear() + "-" + t.getMonth() + "1-" + t.getDate();
                    }
                }
            });
        }
    }, {
        key: "setViewData",
        value: function(e) {
            this.component.render(e);
        }
    }, {
        key: "show",
        value: function() {
            this.component.show();
        }
    } ]), r;
}();

exports.XYReserveTimeView = r;