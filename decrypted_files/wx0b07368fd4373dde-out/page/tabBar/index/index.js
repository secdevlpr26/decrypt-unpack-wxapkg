function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e, i = getApp(), s = 0, n = {
    member: i.globalData.pages.mine_index,
    "member.favorite": "/page/shop/pages/focus/focus",
    "member.history": "/page/shop/pages/footprint/footprint",
    "member.recharge": "/page/shop/pages/recharge/recharge",
    "member.address": "/page/shop/pages/select-address/index",
    "member.cart": "/page/shop/pages/shop-cart/index",
    goods: "/page/shop/pages/search/index",
    "goods.detail": "/page/shop/pages/goods-details/index",
    "shop.category": "/page/tabBar/classify/index",
    "groups.category": "/page/tabBar/pintuan-index/index",
    order: "/page/shop/pages/order-list/index",
    article: "/page/shop/pages/article-details/index",
    "article.list": "/page/shop/pages/article/index",
    "article.list.wxapp_getlist": "/page/shop/pages/article/index",
    creditshop: "/page/shop/pages/credit-index/credit-index",
    sign: "/page/shop/pages/credit-sign/credit-sign",
    "sale.coupon": "/page/shop/pages/coupon/index",
    commission: "/page/shop/pages/distribution/index",
    applyForMulti: "/page/tabBar/pintuan-index/index",
    merches: "/page/shop/pages/merch-list/index",
    groups: "/page/shop/pages/applyForMulti-business/index",
    "groups.orders": "/page/shop/pages/order-list/index",
    seckill: "/page/shop/pages/pintuan-miaosha/index1",
    aboutme: "/page/shop/pages/aboutme/aboutme",
    universalform: "/page/shop/pages/testDIY/test",
    bargain: "/page/bargain/pages/list/index",
    "creditshop.creditlog": "/page/shop/pages/credit-record/credit-record",
    all_merches: "/page/shop/pages/merch-list/index",
    "shop.notice": "/page/shop/pages/announcement-list/index",
    "sale.coupon.my": "/page/shop/pages/my-coupon/my-coupon"
}, o = [ "/page/tabBar/index/index", "/page/tabBar/classify/index", "/page/tabBar/pintuan-index/index", "/page/tabBar/shop-cart/index", "/page/tabBar/mine/index" ];

Page({
    onShareAppMessage: function(a) {
        return a.from, {
            title: i.globalData.mallName,
            path: i.globalData.index_url,
            success: function(a) {
                wx.showToast({
                    title: "转发成功!",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "转发失败!",
                    icon: "success",
                    duration: 2e3
                });
            }
        };
    },
    data: (t = {
        grant: !0,
        flag_card: !1,
        photo_url: i.globalData.fileimg,
        isPopping: !0,
        animPlus: {},
        animCollect: {},
        animTranspond: {},
        animInput: {},
        imgurl: i.globalData.imgurl,
        indicatorDots: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        hiddenLoading: !0,
        userInfo: {},
        images: [],
        swiperCurrent: 0,
        selectCurrent: 0,
        categories: [],
        activeCategoryId: 0,
        goods: [],
        scrollTop: "0",
        loadingMoreHidden: !0,
        list: [],
        loadingMoreHidden_more: !1
    }, a(t, "loadingMoreHidden", !0), a(t, "networkType", !0), a(t, "lists", []), a(t, "indicatorDots", !1), 
    a(t, "autoplays", !0), a(t, "intervals", 5e3), a(t, "durations", 500), a(t, "detail", ""), 
    a(t, "page", 1), a(t, "flag_new", !1), a(t, "localcity", ""), t),
    tapSearch: function() {
        wx.navigateTo({
            url: "/page/shop/pages/search/index"
        });
    },
    tabClick: function(a) {
        this.setData({
            activeCategoryId: a.currentTarget.id
        }), this.getGoodsList(this.data.activeCategoryId);
    },
    plus: function() {
        this.data.isPopping ? (this.popp(), this.setData({
            isPopping: !1
        })) : this.data.isPopping || (this.takeback(), this.setData({
            isPopping: !0
        }));
    },
    Locations: function() {
        wx.openLocation({
            latitude: Number(this.data.shop.lat),
            longitude: Number(this.data.shop.lng),
            scale: 18,
            name: this.data.shop.address
        });
    },
    phones: function() {
        var a = this;
        wx.makePhoneCall({
            phoneNumber: a.data.shop.phone,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    popp: function() {
        var a = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        }), t = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        }), e = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        }), i = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        });
        a.rotateZ(180).step(), t.translate(0, -128).rotateZ(360).opacity(1).step(), e.translate(0, -85).rotateZ(360).opacity(1).step(), 
        i.translate(0, -42).rotateZ(360).opacity(1).step(), this.setData({
            animPlus: a.export(),
            animCollect: t.export(),
            animTranspond: e.export(),
            animInput: i.export()
        });
    },
    takeback: function() {
        var a = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        }), t = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        }), e = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        }), i = wx.createAnimation({
            duration: 600,
            timingFunction: "lease-out"
        });
        a.rotateZ(0).step(), t.translate(0, 0).rotateZ(0).opacity(0).step(), e.translate(0, 0).rotateZ(0).opacity(0).step(), 
        i.translate(0, 0).rotateZ(0).opacity(0).step(), this.setData({
            animPlus: a.export(),
            animCollect: t.export(),
            animTranspond: e.export(),
            animInput: i.export()
        });
    },
    swiperchange: function(a) {
        this.setData({
            swiperCurrent: a.detail.current
        });
    },
    pintuan: function() {
        wx.navigateTo({
            url: "../pintuan-index/index"
        });
    },
    cartList: function(a) {
        wx.navigateTo({
            url: "/page/shop/pages/article-details/index?aid=" + a.currentTarget.dataset.id
        });
    },
    spiker_more: function(a) {
        wx.navigateTo({
            url: "/page/shop/pages/pintuan-miaosha/index1"
        });
    },
    sroup_more: function() {
        wx.switchTab({
            url: "/page/tabBar/pintuan-index/index"
        });
    },
    toDetailsTap: function(a) {
        if (a.currentTarget.dataset.isindex) wx.navigateTo({
            url: "../../groups/pages/pintuan_goods-details/index?id=" + a.currentTarget.dataset.id
        }); else {
            if (0 != a.currentTarget.dataset.bargain && void 0 != a.currentTarget.dataset.bargain && null != a.currentTarget.dataset.bargain) t = "/page/bargain/pages/details/index?id=" + a.currentTarget.dataset.bargain_id; else var t = "/page/shop/pages/goods-details/index?id=" + a.currentTarget.dataset.id + "&merchid=" + a.currentTarget.dataset.merchid;
            wx.request({
                url: i.globalData.url + i.globalData.parameter + "&r=member.info.wxapp_main",
                header: {
                    Cookie: i.globalData.session_login_id
                },
                success: function(a) {
                    1 == a.data.status && (1 == a.data.result.member.isagent && (t += "&mid=" + a.data.result.member.id), 
                    wx.navigateTo({
                        url: t
                    }));
                }
            });
        }
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    bindTypeTap: function(a) {
        this.setData({
            selectCurrent: a.index
        });
    },
    scroll: function(a) {
        var t = this;
        t.data.scrollTop;
        t.setData({
            scrollTop: a.detail.scrollTop
        });
    },
    navigate: function() {
        wx.navigateTo({
            url: "/page/shop/pages/announcement-list/index"
        });
    },
    parseURL: function(a) {
        var t = this, e = "", i = t.getUrlParam(a, "r");
        for (var s in n) if (s == i) {
            if (e = n[s], "order" == s && (o = t.getUrlParam(a, "status")) && (e += "?status=" + o), 
            "goods" == s) {
                o = "";
                2 == a.split("r=goods").length && (e += "?" + (o = a.split("r=goods")[1]).substring(1));
            }
            if ("universalform" == s && (e += "?id=" + (o = t.getUrlParam(a, "id"))), "goods.detail" == s && (e += "?id=" + (o = t.getUrlParam(a, "id"))), 
            "article" == s) {
                o = "";
                2 == a.split("r=article").length && (e += "?" + (o = a.split("r=article")[1]).substring(1));
            }
            if ("article.list.wxapp_getlist" == s) {
                var o = "";
                2 == a.split("r=article.list.wxapp_getlist").length && (e += "?" + (o = a.split("r=article.list.wxapp_getlist")[1]).substring(1));
            }
            return e;
        }
    },
    getInfo: function(a) {
        var t = a.currentTarget.id, e = a.currentTarget.dataset.type, s = "";
        "adv" == e && (s = i.globalData.url + i.globalData.parameter + "&r=getadvDetail"), 
        "banner" == e && (s = i.globalData.url + i.globalData.parameter + "&r=getbannerDetail"), 
        "nav" == e && (s = i.globalData.url + i.globalData.parameter + "&r=getnavDetail"), 
        wx.request({
            url: s,
            data: {
                id: t
            },
            success: function(t) {
                var e = t.data.result.info;
                if (null != e) if (2 == e.linktype) wx.navigateToMiniProgram({
                    appId: e.wx_mininfo.wx_minappid,
                    path: e.wx_mininfo.wx_minpath
                }); else if (3 == e.linktype) wx.makePhoneCall({
                    phoneNumber: e.phonecall
                }); else {
                    var i = a.currentTarget.dataset.navurl;
                    "" != i && "indexpage" != i && (o.indexOf(i) >= 0 ? (i.indexOf("?") >= 0 ? i += "&type=tonavs" : i += "?type=tonavs", 
                    wx.reLaunch({
                        url: a.currentTarget.dataset.navurl
                    })) : (i.indexOf("?") >= 0 ? i += "&type=tonavs" : i += "?type=tonavs", wx.navigateTo({
                        url: i + "&url=" + i
                    })));
                }
            }
        });
    },
    getUrlParam: function(a, t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), i = a.split("mobile&")[1].match(e);
        return null != i ? unescape(i[2]) : null;
    },
    need_program: function() {
        wx.navigateTo({
            url: "/page/shop/pages/need-program/index"
        });
    },
    zixun_more: function() {
        wx.navigateTo({
            url: "/page/shop/pages/article/index?cateid=0"
        });
    },
    onLoad: function(a) {
        var t = this;
        if ("" == wx.getStorageSync("fatherid" + i.globalData.publicid) || null == wx.getStorageSync("fatherid" + i.globalData.publicid) || !wx.getStorageSync("fatherid" + i.globalData.publicid)) {
            for (var e in a) var s = a[e];
            wx.setStorageSync("fatherid" + i.globalData.publicid, s);
        }
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                wx.request({
                    url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + a.latitude + "," + a.longitude + "&key=J3XBZ-4HWWX-EF74I-7VMXU-DR3ZF-MPFU3",
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(a) {
                        t.setData({
                            local_city: a.data.result.address_component.city
                        });
                    }
                });
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=sale.coupon.getActivities",
            header: {
                Cookie: i.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                1 == a.data.status && a.data.result.coupons.length > 0 && (i.globalData.session_login_id || t.setData({
                    grant: !1
                }));
            },
            fail: function(a) {},
            complete: function(a) {}
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=getnewvpscard",
            header: {
                Cookie: i.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                1 == a.data.status ? (i.globalData.session_login_id ? t.setData({
                    grant: !0
                }) : t.setData({
                    grant: !1
                }), t.setData({
                    card: a.data.result.vpscard
                })) : t.setData({
                    grant: !0
                });
            },
            fail: function(a) {},
            complete: function(a) {}
        }), this.setData({
            copyright: wx.getStorageSync("copyright")
        }), (t = this).data.page = 1, wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=getshop&uniacid=" + i.globalData.publicid,
            success: function(a) {
                1 == a.data.status && t.setData({
                    shop: a.data.result.shop
                });
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=getcube",
            success: function(a) {
                if (1 == a.data.status) {
                    var e = a.data.result.cubes;
                    if (e.length > 0) for (var i = 0; i < e.length; i++) if ("" == e[i].url) e[i].navigate_url = ""; else if ("" == e[i].url.split("mobile")[1]) e[i].navigate_url = "indexpage"; else {
                        var s = t.parseURL(e[i].url);
                        e[i].navigate_url = s;
                    }
                    t.setData({
                        cubes: a.data.result.cubes,
                        cubes_length: a.data.result.cubes.length
                    });
                }
            },
            fail: function() {},
            complete: function() {}
        }), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    winWidth: a.windowWidth,
                    winHeight: a.windowHeight,
                    cubsHeight: .965 * a.windowWidth / 2,
                    cubsHeights: .965 * a.windowWidth / 4,
                    goods_width: .49 * a.windowWidth
                });
            }
        }), this.GetList(t);
    },
    cube: function(a) {
        var t = a.currentTarget.dataset.navigate_url;
        "" != t && "indexpage" != t && (o.indexOf(t) >= 0 ? (t.indexOf("?") >= 0 ? t += "&type=tonavs" : t += "?type=tonavs", 
        wx.reLaunch({
            url: a.currentTarget.dataset.navigate_url
        })) : (t.indexOf("?") >= 0 ? t += "&type=tonavs" : t += "?type=tonavs", wx.navigateTo({
            url: t
        })));
    },
    GetList: function(a) {
        (a = this).setData({
            hiddenLoading: !1
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=get_recommand&merchid=0&_=1496454304187",
            data: {
                pagesize: 10,
                page: a.data.page
            },
            success: function(t) {
                if (1 == t.data.status) {
                    s = t.data.result.list.length;
                    for (var e = a.data.list, i = 0; i < t.data.result.list.length; i++) e.push(t.data.result.list[i]);
                    for (i = 0; i < e.length; i++) "string" == typeof e[i].sales && (e[i].sales = Number(e[i].sales)), 
                    "string" == typeof e[i].salesreal && (e[i].salesreal = Number(e[i].salesreal));
                    var n = t.data.result.list.length, o = t.data.result.pagesize, r = Number(t.data.result.total), l = t.data.result.page;
                    a.setData({
                        loadingMoreHidden_more: !0,
                        loadingMoreHidden: !1
                    }), n <= o && o * l == r && a.setData({
                        loadingMoreHidden_more: !1,
                        loadingMoreHidden: !0
                    }), a.setData({
                        hiddenLoading: !0,
                        goods_recommend: e
                    });
                }
            },
            complete: function(a) {
                wx.stopPullDownRefresh(), wx.hideLoading && wx.hideLoading();
            }
        });
    },
    getNavDetail: function(a) {
        var t = a.currentTarget.dataset.id.split("&"), e = "", i = (e = t[t.length - 1]).split("=")[0], s = e.split("=")[1];
        wx.navigateTo({
            url: "/pages/mine/search?type=tonavs&&valname=" + i + "&&val=" + s
        });
    },
    getGoodsList: function(a) {
        0 == a && (a = "");
        var t = this;
        wx.request({
            url: "https://api.it120.cc/" + i.globalData.subDomain + "/shop/goods/list",
            data: {
                categoryId: a
            },
            success: function(a) {
                t.setData({
                    goods: [],
                    loadingMoreHidden: !0
                });
                var e = [];
                if (0 == a.data.code && 0 != a.data.data.length) {
                    for (var i = 0; i < a.data.data.length; i++) e.push(a.data.data[i]);
                    t.setData({
                        goods: e
                    });
                } else t.setData({
                    loadingMoreHidden: !1
                });
            }
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        a.data.page = 1, a.setData({
            list: []
        }), a.GetList(a);
    },
    onReachBottom: function() {
        var a = this;
        s > 0 ? (a.data.page++, a.setData({
            more: "加载更多"
        }), a.GetList(a)) : (a.setData({
            more: "没有更多啦"
        }), wx.showToast({
            title: "没有更多了亲",
            icon: "",
            image: "../../../images/nomore.png",
            duration: 500
        }));
    },
    merchNav: function() {
        wx.navigateTo({
            url: "/page/shop/pages/merch-nav/index"
        });
    },
    getshops: function() {
        var a = this;
        wx.getStorageSync("localCity") && wx.getStorageSync("localCity"), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=merch.list.ajaxmerchuser&merchid=0",
            header: {
                Cookie: i.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                page: 1,
                keyword: "",
                cateid: 0,
                range: 2e3,
                sorttype: 1,
                localcity: this.data.local_city
            },
            method: "POST",
            success: function(t) {
                1 == t.data.status && a.setData({
                    merchList: t.data.result.list
                });
            }
        });
    },
    toshops: function(a) {
        wx.navigateTo({
            url: "../../shop/pages/merch-index/index?id=" + a.currentTarget.dataset.id
        }), i.globalData.merchid = a.currentTarget.dataset.id, wx.setStorage({
            key: "merchid",
            data: a.currentTarget.dataset.id
        });
    },
    toLocation: function() {
        this.data.local_city ? wx.navigateTo({
            url: "../../shop/pages/current-city/current-city?local_city=" + this.data.local_city
        }) : wx.navigateTo({
            url: "../../shop/pages/current-city/current-city?local_city=北京市"
        });
    },
    onShow: function() {
        var a = this;
        i.globalData.session_login_id ? a.setData({
            userInfos: 1
        }) : a.setData({
            userInfos: 0
        }), wx.getLocation({
            success: function(t) {
                wx.request({
                    url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + t.latitude + "," + t.longitude + "&key=J3XBZ-4HWWX-EF74I-7VMXU-DR3ZF-MPFU3",
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(t) {
                        if (wx.getStorageSync("localCity")) {
                            var e = wx.getStorageSync("localCity");
                            a.setData({
                                local_city: e
                            });
                        } else a.setData({
                            local_city: t.data.result.address_component.city
                        });
                        a.getshops();
                    }
                });
            }
        }), wx.onNetworkStatusChange(function(t) {
            "none" == t.networkType ? a.setData({
                networkType: !1
            }) : a.setData({
                networkType: !0
            });
        }), wx.setNavigationBarTitle({
            title: wx.getStorageSync("mallName")
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=getadv",
            success: function(t) {
                if (1 == t.data.status) {
                    var e = t.data.result.advs;
                    if (e.length > 0) {
                        for (var i = 0; i < e.length; i++) if ("" == e[i].link) e[i].navigate_url = ""; else if ("" == e[i].link.split("mobile")[1]) e[i].navigate_url = "indexpage"; else {
                            var s = a.parseURL(e[i].link);
                            e[i].navigate_url = s;
                        }
                        a.setData({
                            images: e,
                            hiddenLoading: !0
                        });
                    }
                }
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=getbanner",
            success: function(t) {
                if (1 == t.data.status) {
                    var e = t.data.result.banners;
                    if (e.length > 0) for (var i = 0; i < e.length; i++) if ("" == e[i].link) e[i].navigate_url = ""; else if ("" == e[i].link.split("mobile")[1]) e[i].navigate_url = "indexpage"; else {
                        var s = a.parseURL(e[i].link);
                        e[i].navigate_url = s;
                    }
                    a.setData({
                        banners: e
                    });
                }
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=getnav_slider",
            success: function(t) {
                if (1 == t.data.status) {
                    var e = t.data.result.nav_page;
                    e.length > 1 ? a.setData({
                        dots: !0
                    }) : a.setData({
                        dots: !1
                    });
                    for (var i = 0; i < e.length; i++) for (var s = 0; s < e[i].length; s++) if ("" == e[i][s].url) e[i][s].navigate_url = ""; else if ("" == e[i][s].url.split("mobile")[1]) e[i][s].navigate_url = "indexpage"; else {
                        var n = a.parseURL(e[i][s].url);
                        e[i][s].navigate_url = n;
                    }
                    a.setData({
                        navs: e
                    });
                }
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=shop.notice.get_list",
            success: function(t) {
                t.data.status && a.setData({
                    lists: t.data.result.list
                });
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=seckill.wxapp_main",
            success: function(t) {
                if (1 == t.data.status) for (var s = 0; s < t.data.result.times.length; s++) if (0 == t.data.result.times[s].status && ("" != (e = s) || null != e)) {
                    Date.parse(new Date());
                    1e3;
                    var n = t.data.result.times[s].endtime;
                    setInterval(function() {
                        a.getCountDown(n);
                    }, 1e3), wx.request({
                        url: i.globalData.url + i.globalData.parameter + "&r=seckill.get_goods",
                        data: {
                            taskid: t.data.result.taskid,
                            roomid: t.data.result.rooms[0].id,
                            timeid: t.data.result.times[s].id
                        },
                        success: function(t) {
                            1 == t.data.status && a.setData({
                                spike_goods: t.data.result.goods
                            });
                        }
                    });
                }
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=groups.wxapp_index",
            data: {
                page: a.data.page,
                pagesize: 2
            },
            success: function(t) {
                1 == t.data.status && a.setData({
                    goods_recommends: t.data.result.recgoods
                });
            }
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=article.list.wxapp_getlist&show_index=1",
            header: {
                Cookie: i.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                1 == t.data.status && (t.data.result.articles.length > 3 ? a.setData({
                    articles: t.data.result.articles.slice(0, 3)
                }) : a.setData({
                    articles: t.data.result.articles
                }));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    knows: function() {
        var a = this;
        a.setData({
            flag: !1,
            flag_new: !1
        }), wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=getnewvpscard",
            header: {
                Cookie: i.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                1 == t.data.status ? a.setData({
                    flag: !0,
                    flag_new: !1,
                    flag_card: !0,
                    card: t.data.result.vpscard
                }) : a.setData({
                    flag: !1,
                    flag_new: !1,
                    flag_card: !1
                });
            },
            fail: function(a) {},
            complete: function(a) {}
        });
    },
    get_newcard: function() {
        var a = this;
        wx.request({
            url: i.globalData.url + i.globalData.parameter + "&r=vpscard.receivevpcard",
            header: {
                Cookie: i.globalData.session_login_id
            },
            data: {
                vpsid: a.data.card.id
            },
            success: function(t) {
                1 == t.data.status && (a.setData({
                    flag_card: !1,
                    flag: !1,
                    flag_new: !1
                }), wx.showLoading({
                    title: t.data.result.message
                }));
            },
            fail: function(a) {},
            complete: function(a) {
                setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
            }
        });
    },
    card_close: function() {
        this.setData({
            flag_card: !1,
            flag: !1
        });
    },
    getUserInfo: function(a) {
        var t = this;
        "getUserInfo:ok" == a.detail.errMsg && (t.setData({
            grant: !0
        }), wx.getSetting({
            success: function(e) {
                1 == e.authSetting["scope.userInfo"] && i.userLogin(a.detail, {
                    success: function() {
                        t.setData({
                            userInfos: 1,
                            typestatus: "location",
                            loading: !1,
                            flag_new: !1,
                            flag_card: !1,
                            flag: !1,
                            grant: !0
                        }), 1 == wx.getStorageSync("isnew") && wx.request({
                            url: i.globalData.url + i.globalData.parameter + "&r=sale.coupon.getActivities",
                            header: {
                                Cookie: i.globalData.session_login_id,
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                if (1 == a.data.status && a.data.result.coupons.length > 0) {
                                    t.setData({
                                        flag: !0,
                                        flag_new: !0
                                    });
                                    for (var e = 0; e < a.data.result.coupons.length; e++) {
                                        var s = function(a) {
                                            var t = new Date(1e3 * a);
                                            return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + (t.getDate() + 1 < 10 ? "0" + (t.getDate() + 1) : t.getDate() + 1);
                                        };
                                        a.data.result.coupons[e].timeslot = s(a.data.result.coupons[e].timestart) + "至" + s(a.data.result.coupons[e].timeend);
                                    }
                                    t.setData({
                                        newbag: a.data.result.coupons,
                                        winHeighttop: (t.data.winHeight - 134 - 66 * a.data.result.coupons.length) / 2
                                    });
                                } else wx.request({
                                    url: i.globalData.url + i.globalData.parameter + "&r=getnewvpscard",
                                    header: {
                                        Cookie: i.globalData.session_login_id,
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(a) {
                                        1 == a.data.status ? t.setData({
                                            flag: !0,
                                            flag_new: !1,
                                            flag_card: !0,
                                            card: a.data.result.vpscard
                                        }) : t.setData({
                                            flag: !1,
                                            flag_new: !1,
                                            flag_card: !1
                                        });
                                    },
                                    fail: function(a) {},
                                    complete: function(a) {}
                                });
                            },
                            fail: function(a) {},
                            complete: function(a) {}
                        });
                    }
                });
            }
        }));
    },
    getCountDown: function(a) {
        var t = this, e = new Date(1e3 * a).getTime() - new Date().getTime(), i = Math.floor(e / 1e3 / 60 / 60 / 24), s = Math.floor(e / 1e3 / 60 / 60 % 24), n = Math.floor(e / 1e3 / 60 % 60), o = Math.floor(e / 1e3 % 60);
        i < 10 && 0 != i && (i = "0" + i), s < 10 && 0 != s && (s = "0" + s), n < 10 && 0 != n && (n = "0" + n), 
        o < 10 && 0 != o && (o = "0" + o);
        var r = {
            day: i,
            hour: s,
            min: n,
            sec: o
        };
        t.setData({
            day: i,
            hour: s,
            min: n,
            sec: o,
            Count_down: r
        });
    }
});