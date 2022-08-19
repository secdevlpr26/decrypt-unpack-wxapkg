var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        serveList: [],
        page: 1,
        page_size: 7,
        finishReach: !1
    },
    onLoad: function(t) {
        this.data.menuId = t.id, this.getData();
    },
    getData: function(e) {
        var a = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), t.default.serveList("/service/list", {
            menuId: a.data.menuId,
            page: a.data.page,
            page_size: a.data.page_size
        }).then(function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 200), e && wx.stopPullDownRefresh(), t.result.page >= t.result.total_pages || 0 == t.result.total_pages ? a.data.finishReach = !0 : a.data.page++, 
            wx.setNavigationBarTitle({
                title: t.result.menuName
            }), a.data.serveList = a.data.serveList.concat(t.result.list), a.setData({
                serveList: a.data.serveList
            });
        }, function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 200);
        });
    },
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.serveList = [], this.data.finishReach = !1, this.getData(!0);
    },
    onReachBottom: function() {
        this.data.finishReach || this.getData();
    }
});