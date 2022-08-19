var t = getApp(), a = [];

Page({
    data: {
        tablist: [ {
            title: "地区",
            tabhidden: !0
        }, {
            title: "分类",
            tabhidden: !0
        }, {
            title: "排序",
            tabhidden: !0
        } ],
        currenttab: 99,
        sortlist: [ {
            title: "不限",
            type: 1,
            sort: 1,
            color: "#FF5F65"
        }, {
            title: "按时间",
            sort: 1,
            type: 1,
            color: ""
        }, {
            title: "按热度",
            sort: 2,
            type: 1,
            color: ""
        } ],
        sticklist: [],
        search_info: [],
        firstindex: 0,
        bghidden: !0,
        citydata: [],
        infolist: [],
        list: {},
        listyiji: [],
        listerji: [],
        firstbarid: 1,
        cityjihe: [],
        listid: "",
        hangye: "",
        hangyeyiji: "",
        hangyeerji: "",
        cityindex: "",
        navtitle: "",
        loadhidden: !0,
        page: 0,
        regionindex: 0,
        searchhidden: !1
    },
    toregion: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            regionindex: a
        });
    },
    goodsReset: function() {
        a = [];
        for (var t = this.data.search_info, e = 0; e < t.length; e++) for (var i = 0; i < t[e].list_content.length; i++) t[e].list_content[i].color = "#333", 
        t[e].list_content[i].bgcolor = "#fff";
        this.setData({
            search_info: t
        });
    },
    toclassify: function(t) {
        var e = this.data.search_info, i = t.currentTarget.dataset.title, s = t.currentTarget.dataset.index, r = t.currentTarget.dataset.upindex;
        a[r] = i;
        for (var n = 0; n < a.length; n++) a[n] || (a[n] = "");
        for (var l = 0; l < e[r].list_content.length; l++) s == l ? (e[r].list_content[l].color = "#fff", 
        e[r].list_content[l].bgcolor = "#FF5F65") : (e[r].list_content[l].color = "#333", 
        e[r].list_content[l].bgcolor = "#fff");
        this.setData({
            search_info: e
        });
    },
    goodsSure: function() {
        var t = this;
        t.data.page = 0;
        var e = wx.getStorageSync("list"), i = t.data.navtitle, s = a.join();
        "," == s.charAt(0) && (s = s.substring(1, s.length)), e.search_list = s, t.getList(e.cityid, e.listid, e.sort, e.type, "list", i, "", "", e.selectindex, e.search_list, "POST"), 
        wx.setStorageSync("list", e), t.tobghidden();
    },
    touserinfo: function(t) {
        var a = t.currentTarget.dataset.uid;
        wx.redirectTo({
            url: "/pages/index/user-detail/user-detail?uid=" + a
        });
    },
    todetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/index/detail/detail?vid=" + a
        });
    },
    tomerchdetail: function(t) {
        var a = t.currentTarget.dataset.vid;
        wx.navigateTo({
            url: "/pages/merch/merch-detail/merch-detail?vid=" + a
        });
    },
    totabbar: function(t) {
        for (var a = this, e = t.currentTarget.dataset.index, i = a.data.tablist, s = !1, r = 0; r < i.length; r++) i[r].tabhidden = e != r || !i[r].tabhidden;
        1 == i[e].tabhidden && (s = !0), a.setData({
            currenttab: e,
            tablist: i,
            bghidden: s
        });
    },
    tofirst: function(a) {
        var e, i = this, s = a.currentTarget.dataset.index, r = a.currentTarget.dataset.title, n = "", l = "";
        if (i.data.listid) {
            var o = a.currentTarget.dataset.listid;
            l = o, e = "&do=list&list=" + o;
        }
        i.data.hangye && (l = n = a.currentTarget.dataset.hangye, e = "&do=hangye"), wx.request({
            url: t.globalData.url + t.globalData.parameter + e,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                hangye: n
            },
            success: function(t) {
                if (1 == t.data.status) {
                    if (i.data.listid) {
                        var a = t.data.result.listerji;
                        i.setData({
                            listerji: a
                        });
                    }
                    if (i.data.hangye) {
                        var e = t.data.result.erji;
                        i.setData({
                            hangyeerji: e
                        });
                    }
                }
            }
        }), this.setData({
            firstindex: s,
            firstbarid: l,
            navtitle: r
        });
    },
    tosecond: function(t) {
        var a = this;
        a.data.page = 0;
        var e = t.currentTarget.dataset.sort, i = t.currentTarget.dataset.index, s = t.currentTarget.dataset.type, r = t.currentTarget.dataset.cityid, n = a.data.navtitle;
        t.currentTarget.dataset.title && (n = t.currentTarget.dataset.title);
        var l = wx.getStorageSync("list");
        if (r && (l.cityid = r), e && (l.sort = e), s && (l.type = s), void 0 !== i && (l.selectindex = i), 
        a.data.listid) {
            var o = t.currentTarget.dataset.listid;
            o && (l.listid = o), a.getList(l.cityid, l.listid, l.sort, l.type, "list", n, "", "", l.selectindex, l.search_list, "POST");
        }
        if (a.data.hangye) {
            var d = t.currentTarget.dataset.hangye, c = wx.getStorageSync("location");
            d && (l.hangye = d), a.getList(l.cityid, l.hangye, l.sort, l.type, "hangye", n, c.lat, c.lng, "", "", "GET");
        }
        a.tobghidden(), wx.setStorageSync("list", l);
    },
    tobghidden: function() {
        for (var t = this.data.tablist, a = 0; a < t.length; a++) t[a].tabhidden = !0;
        this.setData({
            bghidden: !0,
            tablist: t
        });
    },
    getList: function(a, e, i, s, r, n, l, o, d, c, g) {
        var h = this, y = h.data.page;
        wx.showLoading({
            title: "正在加载"
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&" + r + "=" + e + "&do=" + r,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: g,
            data: {
                city: a,
                sort: i,
                type: s,
                lat: l,
                lng: o,
                page: y + 1,
                search_list: c
            },
            success: function(i) {
                if (wx.setNavigationBarTitle({
                    title: n
                }), 1 == i.data.status) {
                    var l = i.data.result.citydata, o = h.data.infolist;
                    if ("list" == r) {
                        for (var c = i.data.result.list, g = i.data.result.info, u = 0; u < g.length; u++) g[u].info_list = g[u].getonename;
                        var f = i.data.result.listyiji, p = i.data.result.listerji, v = i.data.result.cityjihe;
                        h.setData({
                            list: c,
                            listyiji: f,
                            cityjihe: v,
                            listerji: p
                        });
                    }
                    if ("hangye" == r) {
                        for (var x = i.data.result.hangyeerji, b = i.data.result.hangyeyiji, g = i.data.result.shop, T = 0; T < g.length; T++) g[T].shop_pic_small = t.globalData.imgurl + g[T].shop_pic_small;
                        h.setData({
                            hangyeerji: x,
                            hangyeyiji: b
                        });
                    }
                    t.listpage(y, o, g, h);
                    for (var S = h.data.sortlist, _ = 0; _ < S.length; _++) S[_].color = d == _ ? "#FF5F65" : "#333";
                    var w = i.data.result.search_info, D = h.data.searchhidden;
                    w && 0 == D && h.setData({
                        search_info: w,
                        searchhidden: !0
                    });
                    for (var j = h.data.sticklist, m = 0; m < j.length; m++) j[m].color = s == m + 1 ? "#FF5F65" : "#333";
                    h.setData({
                        sortlist: S,
                        citydata: l,
                        sticklist: j,
                        cityindex: a,
                        firstindex: e - 1
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onLoad: function(t) {
        var a = {};
        a.sort = 1, a.type = 1, a.selectindex = 0, a.search_list = "", a.cityid = wx.getStorageSync("city").city_id;
        var e = wx.getStorageSync("location");
        if (t.listid) {
            a.listid = t.listid, this.getList(a.cityid, a.listid, a.sort, a.type, "list", t.title, "", "", a.selectindex, a.search_list, "POST");
            var i = this.data.tablist, s = this.data.sortlist;
            i.push({
                title: "筛选",
                tabhidden: !0
            }), s.push({
                title: "置顶",
                sort: "",
                type: 2,
                color: ""
            }), this.setData({
                listid: t.listid,
                tablist: i
            });
        }
        if (t.hangye) {
            a.hangye = t.hangye, this.getList(a.cityid, a.hangye, a.sort, a.type, "hangye", t.title, e.lat, e.lng, "", "", "GET");
            var r = [ {
                title: "不限",
                type: 1,
                sort: "1",
                color: "#FF5F65"
            }, {
                title: "置顶",
                sort: "",
                type: 2,
                color: ""
            }, {
                title: "不置顶",
                sort: "",
                type: 3,
                color: ""
            } ];
            (i = this.data.tablist).push({
                title: "置顶",
                tabhidden: !0
            }), this.setData({
                hangye: t.hangye,
                tablist: i,
                sticklist: r
            });
        }
        wx.setStorageSync("list", a), this.setData({
            navtitle: t.title
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        t.data.page = 0;
        var a = t.data.listid, e = t.data.hangye, i = t.data.navtitle, s = wx.getStorageSync("list"), r = wx.getStorageSync("location");
        a && this.getList(s.cityid, s.listid, s.sort, s.type, "list", i, "", "", s.selectindex, s.search_list, "POST"), 
        e && this.getList(s.cityid, s.hangye, s.sort, s.type, "hangye", i, r.lat, r.lng, "", "", "GET"), 
        t.setData({
            loadhidden: !0
        }), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        var t = this, a = t.data.listid, e = t.data.hangye, i = t.data.navtitle, s = wx.getStorageSync("list"), r = wx.getStorageSync("location");
        a && this.getList(s.cityid, s.listid, s.sort, s.type, "list", i, "", "", s.selectindex, s.search_list, "POST"), 
        e && this.getList(s.cityid, s.hangye, s.sort, s.type, "hangye", i, r.lat, r.lng, "", "", "GET");
    },
    onShareAppMessage: function() {}
});