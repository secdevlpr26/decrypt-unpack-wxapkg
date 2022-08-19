var a = getApp();

Page({
    data: {
        anliList: [],
        pageindex: 0,
        size: 10,
        loadState: "",
        msg: "",
        leftPageHover: !1,
        rightPageHover: !1,
        info: "",
        nodata: !1,
        nodataTips: "暂未上传案例",
        year: 2018
    },
    onLoad: function(t) {
        this.setData({
            info: a.globalData.info,
            year: new Date().getFullYear()
        }), this.getAnliList();
    },
    onReady: function() {},
    onPullDownRefresh: function() {
        this.getAnliList();
    },
    getAnliList: function() {
        if ("loading" != this.data.loadState) {
            this.setData({
                loadState: "loading"
            }), wx.showNavigationBarLoading();
            var t = this;
            a.apiRequestGet({
                urlMethod: "api/Article/getAnliList",
                data: {
                    lawyerId: a.globalData.lawyerId,
                    page: this.data.pageindex,
                    size: this.data.size
                },
                success: function(a) {
                    if (wx.hideNavigationBarLoading(), a.data.list) {
                        var e = a.data, i = t.data.pageindex > 0, n = t.data.pageindex + 1 < e.pageCount;
                        e.list.length > 0 && (t.data.nodata = !1), t.setData({
                            pageindex: e.page,
                            anliList: e.list,
                            leftPageHover: i,
                            rightPageHover: n,
                            loadState: "success",
                            nodata: t.data.nodata
                        });
                    } else t.setData({
                        loadState: "fail",
                        msg: "加载失败，下拉重试"
                    });
                },
                fail: function() {
                    wx.hideNavigationBarLoading(), t.setData({
                        loadState: "fail",
                        msg: "加载失败，下拉重试"
                    });
                },
                complete: function() {
                    wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), t.setData({
                        loadState: "success"
                    });
                }
            });
        }
    },
    leftPageTap: function() {
        this.data.leftPageHover && (this.setData({
            pageindex: this.data.pageindex - 1
        }), wx.startPullDownRefresh());
    },
    rightPageTap: function() {
        this.data.rightPageHover && (this.setData({
            pageindex: this.data.pageindex + 1
        }), wx.startPullDownRefresh());
    },
    goback: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});