function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../utils/api")), s = t(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        searchStatus: !1,
        page: 1,
        page_size: 10,
        serveList: [],
        historyList: [],
        searchWord: "",
        finishReach: !1,
        lowerStatus: !0,
        scrollTop: 0
    },
    onLoad: function(t) {},
    onShow: function() {
        this.data.historyList = wx.getStorageSync("historyList") || [], console.log(this.data.historyList), 
        this.setData({
            historyList: this.data.historyList
        });
    },
    back: function() {
        wx.navigateBack();
    },
    backSearch: function(t) {
        this.setData({
            searchStatus: !1
        });
        var a = t.detail.value;
        return (a = a.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "")).replace(/(^\s+)|\s+$/g, "");
    },
    search: function(t) {
        var a = t.detail.value;
        this.data.searchWord = a, a.trim() ? (this.data.serveList = [], this.data.page = 1, 
        this.setData({
            searchStatus: !0,
            scrollTop: 0,
            serveList: []
        }), this.getData(a)) : s.default.show({
            type: "text",
            timer: 1500,
            text: "请输入要搜索的服务"
        });
    },
    lower: function() {
        this.data.finishReach || this.data.lowerStatus && this.getData(this.data.searchWord);
    },
    searchHistory: function(t) {
        this.setData({
            searchWord: t.currentTarget.dataset.value
        }), this.data.serveList = [], this.data.page = 1, this.setData({
            searchStatus: !0,
            scrollTop: 0,
            serveList: []
        }), this.getData(t.currentTarget.dataset.value);
    },
    getData: function(t) {
        var s = this;
        this.data.lowerStatus = !1, wx.showLoading({
            title: "加载中",
            mask: !0
        }), a.default.serveSearch("/service/search", {
            page: this.data.page,
            page_size: this.data.page_size,
            keyword: t,
            cityName: wx.getStorageSync("currCity") || wx.getStorageSync("gpsCity")
        }).then(function(a) {
            setTimeout(function() {
                wx.hideLoading();
            }, 200);
            var e = !0;
            s.data.historyList.forEach(function(a) {
                t.trim() != a.trim() || (e = !1);
            }), e && (s.data.historyList.push(t), wx.setStorageSync("historyList", s.data.historyList), 
            s.setData({
                historyList: s.data.historyList
            })), a.result.page >= a.result.total_pages || 0 == a.result.total_pages ? s.data.finishReach = !0 : s.data.page++, 
            s.data.lowerStatus = !0, s.data.serveList = s.data.serveList.concat(a.result.list), 
            s.setData({
                serveList: s.data.serveList
            });
        }, function(t) {
            wx.hideLoading();
        });
    },
    delete: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "确定删除历史纪录？",
            confirmColor: "#2173d6",
            success: function(a) {
                a.confirm && (t.setData({
                    historyList: []
                }), wx.removeStorageSync("historyList"));
            }
        });
    }
});