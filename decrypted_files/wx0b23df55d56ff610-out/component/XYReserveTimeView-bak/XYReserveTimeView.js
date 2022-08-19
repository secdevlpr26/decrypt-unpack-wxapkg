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
}(require("component")), a = function() {
    function a(e) {
        t(this, a), this.states = e;
    }
    return i(a, [ {
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
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = Object.assign(this.setDefaults(), i);
            this.component = new n.default({
                scope: "$wux.picker." + t,
                data: a,
                methods: {
                    hide: function(e) {
                        this.setHidden([ "weui-animate-slide-down", "weui-animate-fade-out" ]);
                    },
                    show: function() {
                        this.setVisible([ "weui-animate-slide-up", "weui-animate-fade-in" ]);
                    },
                    dateCellClicked: function(i) {
                        for (var n, a = this.getComponentData().dateList, r = 0; r < a.length; r++) a[r].selected = 0;
                        var o = a[i.currentTarget.dataset.idx];
                        o.selected = 1, this.setData((n = {}, e(n, "$wux.picker." + t + ".dateList", a), 
                        e(n, "$wux.picker." + t + ".periodList", o.periods), e(n, "$wux.picker." + t + ".selectedDate", o), 
                        e(n, "$wux.picker." + t + ".scrollTop", 0), n));
                    },
                    periodCellClicked: function(e) {
                        var t = this.getComponentData().selectedDate, i = this.getComponentData().periodList[e.currentTarget.dataset.idx], n = t.dateStr + i.start_time;
                        "function" == typeof a.onChange && a.onChange(n, i.start_timestamp, i.next_timestamp), 
                        this.hide();
                    },
                    render: function() {
                        var i, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = n[0].periods, r = n[0];
                        n[0].selected = 1, this.setData((i = {}, e(i, "$wux.picker." + t + ".dateList", n), 
                        e(i, "$wux.picker." + t + ".periodList", a), e(i, "$wux.picker." + t + ".selectedDate", r), 
                        i));
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
    } ]), a;
}();

exports.XYReserveTimeView = a;