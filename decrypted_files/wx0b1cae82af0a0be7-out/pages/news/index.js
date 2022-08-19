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
        newsList: [],
        finishReach: !1
    },
    onLoad: function(t) {
        this.getData();
    },
    getData: function(a) {
        var e = this;
        wx.showLoading({
            title: "加载中"
        }), t.default.newsList("/notice/list", {
            page: this.data.page,
            page_size: this.data.page_size
        }).then(function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300), a && wx.stopPullDownRefresh(), t.result.page >= t.result.total_pages || 0 == t.result.total_pages ? e.data.finishReach = !0 : e.data.page++, 
            e.data.newsList = e.data.newsList.concat(t.result.list), e.setData({
                newsList: e.data.newsList
            });
        }, function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300);
        });
    },
    onPullDownRefresh: function() {
        console.log("1111"), this.data.page = 1, this.data.newsList = [], this.data.finishReach = !1, 
        this.getData(!0);
    },
    onReachBottom: function() {
        this.data.finishReach || this.getData();
    }
});