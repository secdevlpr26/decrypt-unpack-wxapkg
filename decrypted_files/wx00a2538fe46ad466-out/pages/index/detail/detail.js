var t = getApp();

Page({
    data: {
        footlist: [ {
            thumb: "/images/tongcheng/icon-heart.png",
            title: "收藏",
            bind: "tocollect"
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
        picture: [],
        pinglun: [],
        make: {},
        list: {},
        infolist: {},
        header_openuser: {},
        timestamp: "",
        vid: "",
        collect: "",
        stickobj: {
            stickhidden: !0,
            selecthidden: !0,
            checkedday: 1,
            price: ""
        },
        selectday: [],
        user: {}
    },
    toadvisory: function() {
        var e = this, a = e.data.header_openuser, i = e.data.infolist;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=liaotian&openid=" + i.openid,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                1 == t.data.status ? wx.navigateTo({
                    url: "/pages/index/chatting/chatting?openid=" + i.openid + "&nickname=" + a.nickname
                }) : wx.showModal({
                    title: "提示",
                    content: t.data.result.message,
                    showCancel: !1
                });
            }
        });
    },
    touserinfo: function(t) {
        var e = this.data.header_openuser.uid;
        wx.redirectTo({
            url: "/pages/index/user-detail/user-detail?uid=" + e
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
        var t = this.data.infolist, e = this.data.user;
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
        var e = this;
        this.tostickclear(), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=pay_four&top_type=1&info_top_days=" + e.data.stickobj.checkedday + "&vid=" + e.data.vid,
            header: {
                Cookie: t.globalData.session_login_id,
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
    tofloat: function() {
        var t = this, e = t.data.bindhidden;
        1 == e.hidden ? e.thumb = "/images/tongcheng/icon-top.png" : e.thumb = "/images/tongcheng/icon-bottom.png", 
        e.hidden = !e.hidden, t.setData({
            bindhidden: e
        });
    },
    toinform: function() {
        this.commentList("jubao");
    },
    tocomment: function() {
        this.commentList("pinglun");
    },
    commentList: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=jubao&vid=" + a.data.vid + "&type=info",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                1 == t.data.status ? wx.navigateTo({
                    url: "/pages/index/comment/comment?type=info&vid=" + a.data.vid + "&status=" + e
                }) : wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-failed.png"
                });
            }
        });
    },
    tocollect: function() {
        var e = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=collect",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                collect_type: "view",
                collect_vid: e.data.vid
            },
            success: function(t) {
                1 == t.data.status ? (wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-nomore.png",
                    duration: 2e3
                }), e.getList(e.data.vid)) : wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-failed.png",
                    duration: 2e3
                });
            }
        });
    },
    tophone: function() {
        var t = this, e = t.data.infolist, a = t.data.user;
        3 == a.upid || a.openid == e.openid ? wx.showModal({
            title: "提示",
            content: "确定要拨打" + e.info_tel + "吗？",
            success: function(t) {
                t.confirm && wx.makePhoneCall({
                    phoneNumber: e.info_tel,
                    success: function(t) {},
                    fail: function() {
                        console.log("拨打电话失败！");
                    }
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "此信息的联系方式只有VIP会员才能查看，是否升级VIP？",
            success: function(t) {
                t.confirm && wx.redirectTo({
                    url: "/pages/mine/vip/vip"
                });
            }
        });
    },
    getList: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=view&vid=" + e,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                if (1 == e.data.status) {
                    var i = e.data.result.infolist, o = e.data.result.list, n = e.data.result.make, s = e.data.result.picture, c = e.data.result.pinglun, l = e.data.result.header_openuser, d = e.data.result.timestamp, r = e.data.result.user, u = e.data.result.collect, g = a.data.footlist;
                    0 == u ? (g[0].thumb = "/images/tongcheng/icon-heart.png", g[0].title = "收藏", g[0].bind = "tocollect") : (g[0].thumb = "/images/tongcheng/icon-collect.png", 
                    g[0].title = "已收藏", g[0].bind = ""), i.info_time = new Date(1e3 * i.info_time).toLocaleDateString().replace(/['/']/g, "-") + " " + new Date(1e3 * i.info_time).toTimeString().substr(0, 8), 
                    i.info_validity = new Date(1e3 * i.info_validity).toLocaleDateString().replace(/['/']/g, "-") + " " + new Date(1e3 * i.info_validity).toTimeString().substr(0, 8);
                    for (p = 0; p < s.length; p++) s[p].picture_url = t.globalData.imgurl + s[p].picture_url;
                    var h = [], m = a.data.stickobj;
                    m.price = o.list_top_money;
                    for (var p = 1; p < 366; p++) h.push(p);
                    a.setData({
                        infolist: i,
                        list: o,
                        make: n,
                        pinglun: c,
                        header_openuser: l,
                        timestamp: d,
                        picture: s,
                        footlist: g,
                        collect: u,
                        selectday: h,
                        stickobj: m,
                        user: r
                    });
                }
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
        var t = this.data.vid;
        wx.showLoading({
            title: "正在加载"
        }), this.getList(t);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});