for (var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../we7/resource/js/loan")), a = (getApp(), []), t = 1; t <= 10; t++) {
    var l = {
        name: t + "年(循环贷)",
        value: t
    };
    a.push(l);
}

Page({
    data: {
        years: a,
        yearIndex: null,
        tableIndex: null,
        lilv: null,
        loan: null,
        houseCount: null,
        scrollTop: 0,
        form: {
            monthBack: "00.00",
            totalBack: "00.00",
            decrease: "00.00",
            totalInterest: "00.00"
        },
        table: [ {
            pledge: "<75%",
            data: [ {
                price: 100,
                lilv: 6.525
            }, {
                price: 200,
                lilv: 6.7425
            }, {
                price: 300,
                lilv: 6.96
            } ]
        }, {
            pledge: "75%-85%",
            data: [ {
                price: 100,
                lilv: 6.7425
            }, {
                price: 200,
                lilv: 6.96
            }, {
                price: 300,
                lilv: 7.1775
            } ]
        }, {
            pledge: "85%-90%",
            data: [ {
                price: 100,
                lilv: 6.96
            }, {
                price: 200,
                lilv: 7.1775
            }, {
                price: 300,
                lilv: 7.395
            } ]
        } ]
    },
    onShow: function() {
        var e = this;
        wx.getStorage({
            key: "houseCount",
            success: function(a) {
                var t = a.data, l = parseInt(e.data.loan), n = parseInt(.9 * t);
                if (l && n) {
                    l = l > n ? n : l;
                    var o = e._lvCount(t, l);
                    e.setData({
                        houseCount: t,
                        loan: l,
                        lilv: o,
                        "form.monthBack": "00.00",
                        "form.decrease": "00.00",
                        "form.totalBack": "00.00",
                        "form.totalInterest": "00.00"
                    });
                } else e.setData({
                    houseCount: t
                });
            }
        });
    },
    onLoan: function() {
        wx.switchTab({
            url: "../loan/index"
        });
    },
    yearChange: function(e) {
        this.setData({
            yearIndex: e.detail.value
        });
    },
    onHoseCount: function(e) {
        var a = parseInt(e.detail.value);
        this.setData({
            houseCount: a,
            tableIndex: null,
            lilv: null,
            loan: null
        });
    },
    oninput: function(e) {
        var a = parseInt(e.detail.value), t = parseInt(.9 * this.data.houseCount);
        isNaN(t) && a > 300 && (a = 300), (!isNaN(t) && a > t || a >= 300) && (a = t >= 300 ? 300 : t), 
        a < 0 && (a = 0);
        var l = this._lvCount(this.data.houseCount, a);
        this.setData({
            loan: a,
            lilv: l
        });
    },
    _lvCount: function(e, a) {
        if (!e || !a) return !1;
        e = parseInt(e), a = parseInt(a);
        var t = void 0, l = function() {
            var t = a / e;
            return console.log("gl", t), t > .75 && t <= .85 ? 1 : t > .85 && t <= .9 ? 2 : 0;
        }();
        this.setData({
            tableIndex: l
        });
        var n = this.data.table[l].data;
        switch (!0) {
          case a <= n[0].price:
            t = n[0].lilv;
            break;

          case a <= n[1].price:
            t = n[1].lilv;
            break;

          case a <= n[2].price:
            t = n[2].lilv;
        }
        return t;
    },
    formReset: function() {
        console.log("reset触发"), this.setData({
            loan: null,
            houseCount: null,
            yearIndex: null,
            tableIndex: null,
            lilv: null
        });
    },
    onCompute: function() {
        var a = this.data;
        if (!a.loan || !a.yearIndex || !a.houseCount) return wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "您有选项未填写"
        }), !1;
        var t = a.years[a.yearIndex].value;
        console.log("loan", a.lilv, a.loan, t);
        var l = e.default.Floan(a.lilv, a.loan, t);
        wx.setStorage({
            key: "houseCount",
            data: a.houseCount
        }), this.setData({
            "form.monthBack": l[0],
            "form.decrease": l[1],
            "form.totalBack": l[2],
            "form.totalInterest": l[3],
            scrollTop: 0
        });
    }
});