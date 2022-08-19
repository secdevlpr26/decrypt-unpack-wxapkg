var t = getApp(), a = 1, e = 1;

Page({
    data: {
        commentList: [],
        productId: "",
        bigImage: "",
        hideBigImg: !0
    },
    onLoad: function(t) {
        this.setData({
            productId: t.productId
        }), this.getCommentList();
    },
    getCommentList: function() {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getCommentList.action",
            data: {
                current: a,
                productId: i.data.productId
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                e = o.pages, i.setData({
                    commentList: i.data.commentList.concat(o.pageList)
                });
            }
        });
    },
    pictap: function(t) {
        this.setData({
            bigImage: t.currentTarget.dataset.pic,
            hideBigImg: !1
        });
    },
    exitBigImg: function() {
        this.setData({
            hideBigImg: !0
        });
    },
    onReachBottom: function() {
        a < e && (a++, this.getCommentList());
    }
});