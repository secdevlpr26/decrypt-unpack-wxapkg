var t = getApp();

Page({
    isloading: !1,
    pageurl: "",
    onLoad: function(a) {
        this.pageurl = t.getPageUrl(this, a), t.registerGlobalFunctions(this), this.setData({
            queryparams: a
        });
    },
    onShow: function() {
        t.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        });
    },
    initData: function() {
        this.loadMyList(!0);
    },
    data: {
        pagesize: 10,
        recordcount: 1e3,
        mylist: [],
        baseUrl: t.globalData.siteBaseUrl,
        currentTab: "1",
        sortcol: "",
        sort: "",
        scrollHeight: t.windowHeight * t.pixelRatio - 40 * t.pixelRatio,
        use: "",
        total: 0
    },
    loadMyList: function(a) {
        var e = this;
        if (a || !e.isloading) {
            e.isloading = !0;
            var o = e.data.total;
            a ? (e.data.recordcount = 500, e.data.mylist = []) : void 0 != o && (e.data.recordcount = o);
            var s = e.data.recordcount, i = e.data.mylist.length;
            if (s > i) {
                var r = Math.ceil(i / e.data.pagesize) + 1;
                e.data.queryparams.use && (e.data.use = e.data.queryparams.use), t.sendRequest({
                    url: "/index.php?c=Front/WxApp/ShopApi&a=getProductCoupon&type=" + e.data.use + "&page=" + r + "&pagesize=" + e.data.pagesize,
                    method: "GET",
                    success: function(a) {
                        if (e.isloading = !1, a.success) {
                            var o = e.data.recordcount;
                            e.setData({
                                total: a.count,
                                recordcount: o
                            }), a.data.forEach(function(t) {
                                "0" === t.Type ? t.Amount = (t.Amount / 10).toString().replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, "") : t.Amount = t.Amount.replace(/([\.[1-9])0+$/, "$1").replace(/\.$/, "");
                            });
                            for (var s = 0; s < a.data.length; s++) e.data.mylist.push(a.data[s]);
                            e.setData({
                                mylist: e.data.mylist,
                                recordcount: a.count,
                                pagesize: a.pageSize
                            }), e.data.queryparams.use = null;
                        } else console.log("getUserCouponList fail：" + a.msg), 1 == a.needLogin && t.login(function() {
                            wx.reLaunch({
                                url: "/" + e.pageurl
                            });
                        });
                    },
                    fail: function(t) {
                        console.log("getUserCouponList fail");
                    }
                });
            }
        }
    },
    switchNavbar: function(t) {
        var a = this;
        a.data.currentTab === t.currentTarget.dataset.idx && a.data.use === t.currentTarget.dataset.use || (this.setData({
            currentTab: t.currentTarget.dataset.idx,
            use: t.currentTarget.dataset.use,
            mylist: []
        }), this.loadMyList(!0));
    },
    goTocouponCenter: function() {
        wx.navigateTo({
            url: "couponcenter"
        });
    },
    onProductListScroll: function(t) {
        this.loadMyList();
    }
});