var t = getApp();

Page({
    pageurl: "",
    onLoad: function(a) {
        var i = this;
        i.pageurl = t.getPageUrl(i, a), t.registerGlobalFunctions(i), i.setData({
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
        var t = this;
        t.loadCouponList(), t.loadMyList(!0);
    },
    data: {
        mypagesize: 9999,
        myrecordcount: 99,
        mylist: [],
        list: [],
        currentTab: "1",
        sortcol: "",
        sort: "",
        scrollHeight: t.windowHeight * t.pixelRatio - 47 * t.pixelRatio - 50 * t.pixelRatio,
        plugNavFlag: !0
    },
    getCoupon: function(a) {
        var i = this;
        t.getCoupon(a.currentTarget.dataset.couponid, function() {
            i.loadCouponList(), i.loadMyList(!0);
        });
    },
    loadCouponList: function(a) {
        var i = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getCouponListWithUserNum",
            method: "GET",
            success: function(o) {
                if (o.success) {
                    if (!a) for (var e = 0; e < o.list.length; e++) console.log(o.list[e].Title, o.list[e].CanGet), 
                    0 == o.list[e].CanGet && (t.removeArrayItem(o.list, e), e--);
                    i.setData({
                        list: o.list
                    });
                } else console.log("getCouponListWithUserNum fail：" + o.msg), 1 == o.needLogin && t.login(function() {
                    wx.reLaunch({
                        url: "/" + i.pageurl
                    });
                });
            },
            fail: function(t) {
                console.log("getCouponListWithUserNum fail");
            }
        });
    },
    loadMyList: function(a) {
        var i = this;
        a && (i.data.myrecordcount = 99, i.data.mylist = []);
        var o = i.data.myrecordcount, e = i.data.mylist.length;
        if (o > e) {
            var s = Math.ceil(e / i.data.mypagesize) + 1, n = "";
            i.data.sortcol && (n = "&sortcol=" + i.data.sortcol + "&sort=" + i.data.sort), t.sendRequest({
                url: "/index.php?c=Front/WxApp/ServiceApi&a=getUserCouponList&page=" + s + "&pagesize=" + i.data.mypagesize + n,
                method: "GET",
                success: function(a) {
                    if (a.success) {
                        for (var o = 0; o < a.list.length; o++) i.data.mylist.push(a.list[o]);
                        i.setData({
                            mylist: i.data.mylist,
                            myrecordcount: a.myrecordcount
                        });
                    } else console.log("getUserCouponList fail：" + a.msg), 1 == a.needLogin && t.login(function() {
                        wx.reLaunch({
                            url: "/" + i.pageurl
                        });
                    });
                },
                fail: function(t) {
                    console.log("getUserCouponList fail");
                }
            });
        }
    },
    switchNavbar: function(t) {
        if (this.data.currentTab == t.currentTarget.dataset.idx) return !1;
        this.setData({
            currentTab: t.currentTarget.dataset.idx
        });
    },
    onListScroll: function(t) {},
    onMyListScroll: function(t) {
        this.loadMyList();
    },
    navBtnShowAndHide: function() {
        var t = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: t
        });
    }
});