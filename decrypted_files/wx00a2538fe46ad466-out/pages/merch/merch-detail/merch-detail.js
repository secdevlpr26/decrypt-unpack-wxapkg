var t = require("../../../wxParse/wxParse.js"), e = getApp();

Page({
    data: {
        picture: [],
        pulldownhidden: !0,
        footlist: [ {
            thumb: "/images/tongcheng/icon-heart.png",
            title: "关注",
            bind: ""
        }, {
            thumb: "/images/tongcheng/icon-tele.png",
            title: "电话",
            bind: "tophone"
        }, {
            thumb: "/images/tongcheng/public/comment.png",
            title: "评论",
            bind: "tocomment"
        } ],
        informer: [ {
            title: "咨询",
            bind: "toadvisory",
            color: "#51CB6A"
        }, {
            title: "置顶",
            bind: "tostick",
            color: "#6685E5"
        }, {
            title: "举报",
            bind: "toinform",
            color: "#FC2A21"
        } ],
        bindhidden: {
            thumb: "/images/tongcheng/icon-bottom.png",
            bind: "tofloat",
            hidden: !0
        },
        mall: {},
        make: {},
        hangye: {},
        juli: "",
        collect: "",
        vid: "",
        codehidden: !0,
        shop_user: {},
        pinglun: [],
        stickobj: {
            stickhidden: !0,
            selecthidden: !0,
            checkedday: 1,
            price: ""
        },
        selectday: [],
        address: [],
        currenttab: 0,
        tablist: [ {
            title: "店铺描述"
        }, {
            title: "店铺商品"
        }, {
            title: "店铺评价"
        } ],
        goods_recommend: [],
        user: {},
        userInfo: wx.getStorageSync("userInfo")
    },
    toadvisory: function() {
        var t = this, a = t.data.mall, o = t.data.shop_user;
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=liaotian&openid=" + a.openid,
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                1 == t.data.status ? wx.navigateTo({
                    url: "/pages/index/chatting/chatting?openid=" + a.openid + "&nickname=" + o.nickname
                }) : wx.showModal({
                    title: "提示",
                    content: t.data.result.message,
                    showCancel: !1
                });
            }
        });
    },
    toproduct: function(t) {
        var e = t.currentTarget.dataset.id, a = this.data.vid;
        wx.navigateTo({
            url: "/pages/merch/merch-product/merch-product?id=" + e + "&vid=" + a
        });
    },
    totabbar: function(t) {
        var e = this, a = t.currentTarget.dataset.index;
        e.setData({
            currenttab: a
        });
    },
    tomerchlist: function() {
        wx.navigateTo({
            url: "/pages/merch/merch-list/merch-list?vid=" + this.data.vid
        });
    },
    togetshow: function() {
        var t = this.data.pulldownhidden;
        this.setData({
            pulldownhidden: !t
        });
    },
    tocollect: function() {
        var t = this;
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=collect",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                collect_type: "mall",
                collect_vid: t.data.vid
            },
            success: function(e) {
                1 == e.data.status ? wx.showToast({
                    title: e.data.result.message,
                    image: "/images/tongcheng/icon-nomore.png",
                    duration: 2e3,
                    success: function() {
                        var e = wx.getStorageSync("location");
                        t.getList(t.data.vid, e.lat, e.lng);
                    }
                }) : wx.showToast({
                    title: e.data.result.message,
                    image: "/images/tongcheng/icon-failed.png",
                    duration: 2e3
                });
            }
        });
    },
    tofloat: function() {
        var t = this, e = t.data.bindhidden;
        1 == e.hidden ? e.thumb = "/images/tongcheng/icon-top.png" : e.thumb = "/images/tongcheng/icon-bottom.png", 
        e.hidden = !e.hidden, t.setData({
            bindhidden: e
        });
    },
    tostickclear: function() {
        var t = this.data.stickobj;
        t.stickhidden = !0, this.setData({
            stickobj: t
        });
    },
    topulldown: function() {
        var t = this.data.stickobj;
        t.selecthidden = !1, this.setData({
            stickobj: t
        });
    },
    toselect: function(t) {
        var e = t.currentTarget.dataset.title, a = this.data.stickobj;
        a.selecthidden = !0, a.checkedday = e, this.setData({
            stickobj: a
        });
    },
    tostick: function() {
        var t = this.data.mall, e = wx.getStorageSync("userInfo");
        if (t.openid == e.openid) {
            var a = this.data.stickobj;
            a.stickhidden = !1, this.setData({
                stickobj: a
            });
        } else wx.showModal({
            title: "提示",
            content: "该信息不属于本用户付费范畴",
            showCancel: !1
        });
    },
    topay: function() {
        var t = this;
        this.tostickclear();
        this.data.stickobj;
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=pay_four&top_type=2&shop_top_days=" + t.data.stickobj.checkedday + "&vid=" + t.data.vid,
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                1 == t.data.status ? (wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-nomore.png",
                    duration: 1e3
                }), t.data.result.order_num ? setTimeout(function() {
                    wx.navigateTo({
                        url: "/pages/merch/merch-pay/merch-pay?order_num=" + t.data.result.order_num
                    });
                }, 1e3) : setTimeout(function() {
                    wx.navigateBack();
                }, 1e3)) : wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-failed.png"
                });
            }
        });
    },
    toinform: function() {
        this.commentList("jubao");
    },
    tocomment: function() {
        this.commentList("pinglun");
    },
    commentList: function(t) {
        var a = this;
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=jubao&vid=" + a.data.vid + "&type=shop",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                1 == e.data.status ? wx.navigateTo({
                    url: "/pages/index/comment/comment?type=shop&vid=" + a.data.vid + "&status=" + t
                }) : wx.showToast({
                    title: e.data.result.message,
                    image: "/images/tongcheng/icon-failed.png"
                });
            }
        });
    },
    tophone: function() {
        var t = this.data.mall;
        wx.showModal({
            title: "提示",
            content: "确定要拨打" + t.shop_tel + "吗？",
            success: function(e) {
                e.confirm && wx.makePhoneCall({
                    phoneNumber: t.shop_tel,
                    success: function(t) {},
                    fail: function() {
                        console.log("拨打电话失败！");
                    }
                });
            }
        });
    },
    toaddress: function() {
        var t = this, e = t.data.address, a = t.data.mall;
        wx.openLocation({
            latitude: Number(e[0]),
            longitude: Number(e[1]),
            scale: 28,
            name: a.shop_name,
            address: a.shop_address,
            success: function(t) {}
        });
    },
    togetwechat: function() {
        this.data.mall.shop_wechat_qrcode ? this.setData({
            codehidden: !1
        }) : wx.showModal({
            title: "提示",
            content: "抱歉，商家暂无提供二维码",
            showCancel: !1
        });
    },
    bgclear: function() {
        this.setData({
            codehidden: !0
        });
    },
    toscan: function() {
        var t = [ this.data.mall.shop_wechat_qrcode ];
        wx.previewImage({
            urls: t
        });
    },
    touserinfo: function(t) {
        var e = t.currentTarget.dataset.uid;
        wx.redirectTo({
            url: "/pages/index/user-detail/user-detail?uid=" + e + "&tab=1"
        });
    },
    getList: function(a, o, i) {
        var n = this;
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=mall&vid=" + a + "&lat=" + o + "&lng=" + i,
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                var i = o.data.result.picture, s = o.data.result.mall, c = o.data.result.hangye, l = o.data.result.make, d = o.data.result.juli, r = o.data.result.shop_user, u = o.data.result.pinglun, h = o.data.result.address, g = o.data.result.goods_recommend, m = o.data.result.user, p = o.data.result.collect, w = n.data.footlist;
                0 == p ? (w[0].thumb = "/images/tongcheng/icon-heart.png", w[0].title = "关注", w[0].bind = "tocollect") : (w[0].thumb = "/images/tongcheng/icon-collect.png", 
                w[0].title = "已关注", w[0].bind = "");
                for (_ = 0; _ < i.length; _++) i[_].picture_url = e.globalData.imgurl + i[_].picture_url;
                for (var f = 0; f < g.length; f++) g[f].thumb_one = e.globalData.imgurl + g[f].thumb_one;
                t.wxParse("article", "html", s.shop_content, n, 5), s.shop_pic_small = e.globalData.imgurl + s.shop_pic_small, 
                s.shop_wechat_qrcode && (s.shop_wechat_qrcode = e.globalData.imgurl + s.shop_wechat_qrcode);
                var b = [], v = n.data.stickobj;
                v.price = c.hangye_top_money;
                for (var _ = 1; _ < 366; _++) b.push(_);
                n.setData({
                    picture: i,
                    mall: s,
                    hangye: c,
                    juli: d,
                    collect: p,
                    make: l,
                    footlist: w,
                    shop_user: r,
                    pinglun: u,
                    selectday: b,
                    stickobj: v,
                    vid: a,
                    goods_recommend: g,
                    user: m,
                    address: h
                });
            },
            complete: function() {
                wx.hideLoading && wx.hideLoading();
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            vid: t.vid
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this.data.vid, e = wx.getStorageSync("location");
        wx.showLoading({
            title: "正在加载"
        }), this.getList(t, e.lat, e.lng);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});