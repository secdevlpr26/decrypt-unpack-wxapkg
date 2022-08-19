var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        balance: 0,
        billList: [],
        page: 1,
        page_size: 10,
        getDataStatus: !0,
        finishReach: !1
    },
    onLoad: function(t) {
        this.getData();
    },
    getData: function() {
        var a = this;
        this.data.getDataStatus = !1, t.default.memberBill("/memberBill/list", {
            page: this.data.page,
            page_size: this.data.page_size
        }).then(function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 500), t.result.page >= t.result.total_pages || 0 == t.result.total_pages ? a.data.finishReach = !0 : a.data.page++, 
            a.data.getDataStatus = !0, a.data.billList = a.data.billList.concat(t.result.list), 
            a.setData({
                balance: t.result.balance,
                billList: a.data.billList
            });
        });
    },
    lower: function() {
        this.data.finishReach || this.data.getDataStatus && (wx.showLoading({
            title: "加载中"
        }), this.getData());
    },
    upper: function() {
        this.data.getDataStatus && (this.data.page = 1, this.data.billList = [], this.data.finishReach = !1, 
        wx.showLoading({
            title: "加载中"
        }), this.getData());
    }
});