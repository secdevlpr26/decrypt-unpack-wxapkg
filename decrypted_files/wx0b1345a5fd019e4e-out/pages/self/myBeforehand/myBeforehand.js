var t = getApp(), a = 1, e = 1;

Page({
    data: {
        bookingList: [],
        styleConfig: t.globalData.styleConfig
    },
    onLoad: function(t) {
        this.getBookingList();
    },
    onShow: function() {},
    getBookingList: function() {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getFlexiFormValueList.action",
            data: {
                customizeTabId: t.globalData.customizeTabId["Flexi-Form-Booking"],
                current: e,
                memberId: t.getMemberId()
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                a = o.pages;
                var s = i.search(o.pageList[0], "branchName"), r = i.search(o.pageList[0], "status"), n = i.search(o.pageList[0], "productName"), c = i.search(o.pageList[0], "就餐日期"), g = i.search(o.pageList[0], "就餐时间"), l = i.search(o.pageList[0], "入住日期"), u = i.search(o.pageList[0], "离店日期"), h = i.search(o.pageList[0], "预约日期"), d = i.search(o.pageList[0], "预约时间");
                o.pageList.shift();
                var p = [], L = !0, b = !1, f = void 0;
                try {
                    for (var m, v = o.pageList[Symbol.iterator](); !(L = (m = v.next()).done); L = !0) {
                        var k = m.value, y = {
                            branchName: k[s],
                            status: k[r],
                            productName: k[n],
                            id: k[0]
                        }, x = "";
                        x = null != k[c] && k[c] ? x + k[c] + " " : x, x = null != k[g] && k[g] ? x + k[g] + " " : x, 
                        x = null != k[l] && k[l] ? x + k[l] + "至" : x, x = null != k[u] && k[u] ? x + k[u] + " " : x, 
                        x = null != k[h] && k[h] ? x + k[h] + " " : x, x = null != k[d] && k[d] ? x + k[d] + " " : x, 
                        y.date = x, p.push(y);
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    b = !0, f = t;
                } finally {
                    try {
                        !L && v.return && v.return();
                    } finally {
                        if (b) throw f;
                    }
                }
                i.setData({
                    bookingList: i.data.bookingList.concat(p)
                });
            }
        });
    },
    search: function(t, a) {
        for (var e = 0; e < t.length; e++) if (t[e] == a) return e;
    },
    bhtap: function(t) {
        wx.navigateTo({
            url: "../../product/beforehand/bh-detail/bh-detail?id=" + t.currentTarget.dataset.id
        });
    },
    onReachBottom: function() {
        e < a && (e++, this.getBookingList());
    }
});