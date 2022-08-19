function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var t, o = getApp(), a = o.globalData.config.base;

Page((t = {
    data: {
        imageList: [],
        uploadIng: [],
        comment: "",
        isComplete: !0
    },
    onLoad: function(e) {
        var t = e.orderId;
        this.getGoods(t);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: o.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    getGoods: function(e) {
        var t = o.globalData.userKey, n = this;
        wx.request({
            url: a + "Mobile/UserApi/getCommentGoods",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: t,
                rec_id: e
            },
            success: function(e) {
                n.setData({
                    goods: e.data
                });
            }
        });
    },
    delImage: function(e) {
        var t = e.currentTarget.dataset.showimgurl, o = e.currentTarget.dataset.dataimgurl, a = this, n = a.data.imageList, i = a.data.uploadIng, s = [], c = [];
        for (var d in n) t !== n[d] && s.push(n[d]);
        for (var d in i) o !== i[d] && c.push(i[d]);
        a.setData({
            imageList: s
        }), a.setData({
            uploadIng: c
        });
    },
    chooseImage: function() {
        var e = this;
        console.log("chooseImage"), e.data.uploadIng.length >= 4 || wx.chooseImage({
            count: 4,
            sizeType: [ "compressed" ],
            sourceType: [ "album" ],
            success: function(t) {
                var o = t.tempFilePaths, n = e.data.imageList || [];
                n.push(o[0]), e.setData({
                    imageList: n
                }), o.forEach(function(t, o) {
                    e.setData({
                        isComplete: !1
                    }), wx.uploadFile({
                        url: a + "Mobile/Api/uploadfile",
                        filePath: t,
                        name: "file",
                        formData: {
                            act: "comment"
                        },
                        success: function(t) {
                            var o = t.data, a = e.data.uploadIng;
                            a.push(o), e.setData({
                                uploadIng: a,
                                isComplete: !0
                            });
                        }
                    });
                });
            }
        });
    },
    submit: function() {
        var t = o.globalData.userKey, n = this.data.goods.goods_id, i = this.data.goods.order_id, s = this.data.uploadIng.join(","), c = this.data.comment;
        if (this.data.isComplete) {
            var d;
            wx.request({
                url: a + "Mobile/UserApi/add_comment",
                method: "GET",
                header: {
                    "content-type": "application"
                },
                data: (d = {
                    userkey: t,
                    goods_id: n,
                    order_id: i,
                    content: i,
                    img: s
                }, e(d, "content", c), e(d, "hide_username", 0), d),
                success: function(e) {
                    console.log("测试", e), 0 == e.data.error ? wx.showModal({
                        title: "商品评论",
                        content: "评论成功",
                        success: function(e) {
                            e.confirm ? (console.log("用户点击确定"), setTimeout(function() {
                                wx.navigateBack();
                            }, 3e3)) : e.cancel && console.log("用户点击取消");
                        }
                    }) : 1 == e.data.error && "您已经评论过该商品" == e.data.msg && wx.showModal({
                        title: "商品评论",
                        content: "您已经评论过该商品",
                        success: function(e) {
                            e.confirm ? (console.log("用户点击确定"), setTimeout(function() {
                                wx.navigateBack();
                            }, 3e3)) : e.cancel && console.log("用户点击取消");
                        }
                    });
                }
            });
        }
    }
}, e(t, "submit", function() {
    var t = o.globalData.userKey, n = this.data.goods.goods_id, i = this.data.goods.order_id, s = this.data.uploadIng.join(","), c = this.data.comment;
    if (this.data.isComplete) {
        var d;
        wx.request({
            url: a + "Mobile/UserApi/add_comment",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: (d = {
                userkey: t,
                goods_id: n,
                order_id: i,
                content: i,
                img: s
            }, e(d, "content", c), e(d, "hide_username", 0), d),
            success: function(e) {
                console.log("测试", e), 0 == e.data.error ? wx.showModal({
                    title: "商品评论",
                    content: "评论成功",
                    success: function(e) {
                        e.confirm ? (console.log("用户点击确定"), setTimeout(function() {
                            wx.navigateBack();
                        }, 3e3)) : e.cancel && console.log("用户点击取消");
                    }
                }) : 1 == e.data.error && "您已经评论过该商品" == e.data.msg && wx.showModal({
                    title: "商品评论",
                    content: "您已经评论过该商品",
                    success: function(e) {
                        e.confirm ? (console.log("用户点击确定"), setTimeout(function() {
                            wx.navigateBack();
                        }, 3e3)) : e.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    }
}), e(t, "editComment", function(e) {
    var t = e.detail.value;
    this.setData({
        comment: t
    });
}), t));