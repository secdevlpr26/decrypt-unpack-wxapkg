var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        page: 1,
        page_size: 10,
        currd: 0,
        flag: 1,
        couponsList: [],
        finishReach: !1,
        getDataStatus: !1,
        scrollTop: 0,
        canSelect: !1,
        check: 0,
        serviceld: "",
        serviceNum: "",
        currCoupon: {}
    },
    onLoad: function(t) {
        setTimeout(function() {
            wx.hideLoading();
        }, 2e3), "select" == t.select && (this.setData({
            canSelect: !0,
            serviceId: t.serviceid,
            serviceNum: t.serviceNum
        }), wx.getStorageSync("currCoupon") && (this.data.currCoupon = wx.getStorageSync("currCoupon"))), 
        this.getData();
    },
    getData: function(a) {
        var e = this, s = this;
        this.data.getDataStatus = !1, a && (this.data.page = 1, this.data.couponsList = [], 
        this.data.finishReach = !1), t.default.serveMenusList("/userCoupon/list", {
            page: this.data.page,
            page_size: this.data.page_size,
            flag: this.data.flag,
            serviceId: this.data.serviceId,
            serviceNum: this.data.serviceNum
        }).then(function(t) {
            e.data.getDataStatus = !0;
            for (var a = 0; a < t.result.list.length; a++) t.result.list[a].price = parseInt(t.result.list[a].price), 
            t.result.list[a].selected = t.result.list[a].id == e.data.currCoupon.id;
            t.result.page >= t.result.total_pages || 0 == t.result.total_pages ? s.data.finishReach = !0 : s.data.page++, 
            s.data.couponsList = s.data.couponsList.concat(t.result.list), s.setData({
                couponsList: s.data.couponsList,
                flag: s.data.flag
            });
        }, function(t) {});
    },
    lower: function() {
        this.data.finishReach || this.data.getDataStatus && this.getData();
    },
    changeCoupons: function(t) {
        this.data.flag != t.currentTarget.dataset.flag && (this.data.flag = t.currentTarget.dataset.flag, 
        this.setData({
            scrollTop: 0
        }), this.getData(!0));
    },
    selectCoupon: function(t) {
        if (1 == this.data.flag && this.data.canSelect) {
            var a = this.data.couponsList[t.currentTarget.dataset.index];
            wx.setStorageSync("currCoupon", {
                id: a.id,
                price: a.price
            }), wx.navigateBack();
        }
    },
    unUse: function() {
        wx.removeStorageSync("currCoupon"), wx.navigateBack();
    }
});