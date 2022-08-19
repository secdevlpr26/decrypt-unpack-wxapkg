var t = getApp();

Page({
    pageurl: "",
    onLoad: function(a) {
        this.pageurl = t.getPageUrl(this, a), t.registerGlobalFunctions(this), this.setData({
            queryparams: a
        }), this.loadMyList(!0);
    },
    data: {
        mypagesize: 9999,
        myrecordcount: 99,
        mylist: [],
        baseUrl: t.globalData.siteBaseUrl,
        list: [],
        currentTab: "1",
        sortcol: "",
        sort: "",
        scrollHeight: t.windowHeight * t.pixelRatio - 40 * t.pixelRatio,
        plugNavFlag: !0,
        use: ""
    },
    getCoupon: function(a) {
        var e = this;
        t.getCoupon(a.currentTarget.dataset.couponid, function() {
            e.loadMyList(!0);
        });
    },
    loadMyList: function(a) {
        var e = this;
        a && (e.data.myrecordcount = 99);
        var o = e.data.myrecordcount, s = e.data.mylist.length;
        if (o > s) {
            var u = Math.ceil(s / e.data.mypagesize) + 1, n = "";
            e.data.sortcol && (n = "&sortcol=" + e.data.sortcol + "&sort=" + e.data.sort), e.data.queryparams.use && (e.data.use = e.data.queryparams.use), 
            t.sendRequest({
                url: "/index.php?c=Front/WxApp/ServiceApi&a=getUserCouponList&page=" + u + "&pagesize=" + e.data.mypagesize + n,
                method: "GET",
                success: function(a) {
                    console.log(a, 666), a.success ? (e.setData({
                        mylist: []
                    }), a.list.forEach(function(t) {
                        "0" === t.Type ? t.Amount < 100 && t.Amount > 10 ? 0 == t.Amount.split("")[1] ? t.Amount = t.Amount.split("")[0] : t.Amount = t.Amount.split("").join(".") : (console.log(t), 
                        100 == t.Amount ? t.Amount = t.Amount.split("")[0] + t.Amount.split("")[1] : t.Amount < 10 && t.Amount > 0 ? t.Amount = "0." + t.Amount : t.Amount = t.Amount) : t.Amount = t.Amount, 
                        "0" === t.Status && 0 === t.Expired && 0 == e.data.use ? e.data.mylist.push(t) : "1" === t.Status && 0 === t.Expired && 1 == e.data.use ? e.data.mylist.push(t) : "1" === t.Expired && 2 == e.data.use && e.data.mylist.push(t);
                    }), e.setData({
                        mylist: e.data.mylist,
                        myrecordcount: a.myrecordcount
                    }), e.data.queryparams.use = null) : (console.log("getUserCouponList fail：" + a.msg), 
                    1 == a.needLogin && t.login(function() {
                        wx.reLaunch({
                            url: "/" + e.pageurl
                        });
                    }));
                },
                fail: function(t) {
                    console.log("getUserCouponList fail");
                }
            });
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
    }
});