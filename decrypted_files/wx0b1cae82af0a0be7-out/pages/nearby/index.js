function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/api"));

t(require("../../common/refresher/refresher")), getApp();

Page({
    data: {
        page: 1,
        page_size: 10,
        serveList: [],
        currIndex: 0,
        finishReach: !1,
        scrollTop: 0,
        getDataStatus: !0
    },
    onLoad: function() {
        var t = this;
        e.default.nearbyMenus("/serviceMenu/getNearlyServices").then(function(e) {
            t.data.menus = e.result.menus, t.setData({
                menus: e.result.menus,
                currIndex: 0
            }), t.selectMenu(0);
        });
    },
    getData: function(t) {
        var a = this, s = this;
        this.data.getDataStatus = !1, wx.showLoading({
            title: "加载中",
            mask: !0
        }), e.default.nearbyMenusList("/serviceMenu/getServiceByFirstCategory", {
            firstCategoryId: s.data.menus[t].id,
            page: this.data.page,
            page_size: this.data.page_size
        }).then(function(t) {
            a.data.getDataStatus = !0, setTimeout(function() {
                wx.hideLoading();
            }, 300), t.result.page >= t.result.total_pages || 0 == t.result.total_pages ? s.data.finishReach = !0 : s.data.page++, 
            s.data.serveList = s.data.serveList.concat(t.result.list), s.setData({
                serveList: s.data.serveList
            });
        }, function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300);
        });
    },
    lower: function() {
        this.data.finishReach || this.data.getDataStatus && this.getData(this.data.currIndex);
    },
    selectMenu: function(t) {
        var e = 0;
        t.currentTarget && (e = t.currentTarget.dataset.index), this.data.serveList = [], 
        this.data.page = 1, this.data.finishReach = !1, this.getData(e), this.setData({
            currIndex: e,
            scrollTop: 0
        });
    }
});