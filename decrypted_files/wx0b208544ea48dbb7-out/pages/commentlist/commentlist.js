var t = getApp(), a = t.globalData.config.base;

Page({
    data: {
        commentList: [],
        isload: !0,
        page: 1,
        type: "待评论"
    },
    onLoad: function(t) {
        this.getComment(this.data.page);
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            page: 1,
            type: "待评论"
        }), this.getComment(this.data.page);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    getComment: function(e) {
        var n = t.globalData.userKey, o = this, i = this.data.type;
        switch (i) {
          case "待评论":
            i = 0;
            break;

          case "已评论":
            i = 1;
        }
        if (this.data.isload) {
            var s = this.data.page;
            o.setData({
                isload: !1
            }), wx.request({
                url: a + "Mobile/UserApi/comment",
                method: "GET",
                header: {
                    "content-type": "application"
                },
                data: {
                    userkey: n,
                    status: i,
                    page: s
                },
                success: function(t) {
                    var a = [];
                    0 != t.data.orderStatus && s++, 1 != s && (a = o.data.commentList), o.setData({
                        commentList: a.concat(t.data.result)
                    });
                }
            });
        }
    },
    toComment: function(t) {
        var a = t.currentTarget.dataset.goods.rec_id;
        wx.navigateTo({
            url: "../comment/comment?order=" + a
        });
    },
    handoverType: function(t) {
        var a = t.currentTarget.dataset.type;
        this.setData({
            type: a,
            page: 1,
            isload: !0
        }), this.getComment(this.data.page);
    },
    loadMore: function() {
        this.getComment(this.data.page);
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    }
});