var t = require("../../../wxParse/wxParse.js"), e = getApp();

Page({
    data: {
        photo_url: e.globalData.fileimg,
        maskhidden: !0,
        goodsList: {
            saveHidden: !0,
            totalPrice: 0,
            allSelect: !0,
            noSelect: !1,
            list: [],
            selectedInfo: []
        },
        delBtnWidth: 120
    },
    getEleWidth: function(t) {
        try {
            var e = wx.getSystemInfoSync().windowWidth, a = 375 / (t / 2);
            return Math.floor(e / a);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return !1;
        }
    },
    initEleWidth: function() {
        var t = this.getEleWidth(this.data.delBtnWidth);
        this.setData({
            delBtnWidth: t
        });
    },
    onLoad: function() {
        this.initEleWidth();
    },
    onShow: function() {
        var t = this;
        wx.showLoading({
            title: "正在加载"
        });
        var a = [];
        this.data.goodsList;
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&r=member.cart.get_listxcx",
            header: {
                Cookie: e.globalData.session_login_id
            },
            success: function(e) {
                if (e.data.result.list) {
                    e.data.result.list;
                    var i = e.data.result.merch, r = e.data.result.merch_user, o = [], s = [], l = [], n = [ {
                        merchname: "自有商品"
                    } ];
                    for (var d in i) o.push(d);
                    for (var d in r) l.push(d);
                    for (c = 0; c < o.length; c++) s.push(i[o[c]]);
                    for (var c = 0; c < l.length; c++) n.push(r[l[c]]);
                    for (var h = 0; h < s.length; h++) {
                        var u = {};
                        u.merch = s[h], u.merch_user = n[h], a.push(u);
                    }
                    if (null != e.data.result) {
                        if (setTimeout(function() {
                            wx.hideLoading(), wx.stopPullDownRefresh();
                        }, 500), null != a) for (var g = 0; g < a.length; g++) for (var m = 0; m < a[g].merch.length; m++) a[g].merch[m].shopindex = g, 
                        1 == a[g].merch[m].selected ? a[g].merch[m].active = !0 : a[g].merch[m].active = !1;
                        t.data.goodsList.list = a, t.setGoodsList(t.getSaveHide(), t.totalPrice(), t.allSelect(), t.noSelect(), a);
                    }
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    go_grouds: function(t) {
        wx.navigateTo({
            url: "/page/shop/pages/goods-details/index?id=" + t.currentTarget.dataset.id
        });
    },
    toIndexPage: function() {
        wx.switchTab({
            url: e.globalData.index_url
        });
    },
    touchS: function(t) {},
    touchM: function(t) {},
    touchE: function(t) {},
    getShopIndex: function(t) {
        var e = t.currentTarget.dataset.shopindex;
        this.setData({
            shopIndex: e
        });
    },
    selectTap: function(t) {
        var a, i = t.currentTarget.dataset.index, r = this.data.goodsList.list, o = t.currentTarget.dataset.shopindex;
        "" !== o && null != o && "" !== i && null != i && (a = r[o].merch[i].active ? 0 : 1), 
        r[parseInt(o)].merch[parseInt(i)].active = !r[parseInt(o)].merch[parseInt(i)].active, 
        this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), r), 
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&r=member.cart.select",
            header: {
                Cookie: e.globalData.session_login_id
            },
            data: {
                id: t.currentTarget.dataset.id,
                select: a
            }
        });
    },
    totalPrice: function() {
        for (var t = this.data.goodsList.list, e = 0, a = 0; a < t.length; a++) for (var i = 0; i < t[a].merch.length; i++) {
            var r = t[a].merch[i];
            r.active && (e += parseFloat(r.marketprice * r.total));
        }
        return Number(e).toFixed(2);
    },
    allSelect: function() {
        for (var t = this.data.goodsList.list, e = !1, a = 0; a < t.length; a++) {
            for (var i = 0; i < t[a].merch.length; i++) {
                if (!t[a].merch[i].active) {
                    e = !1;
                    break;
                }
                e = !0;
            }
            if (0 == e) break;
        }
        return e;
    },
    noSelect: function() {
        for (var t = this.data.goodsList.list, e = 0, a = 0, i = 0; i < t.length; i++) {
            for (var r = 0; r < t[i].merch.length; r++) t[i].merch[r].active || e++;
            a += t[i].merch.length;
        }
        return e == a;
    },
    setGoodsList: function(t, e, a, i, r) {
        this.data.selectedInfo = r, this.setData({
            goodsList: {
                saveHidden: t,
                totalPrice: e,
                allSelect: a,
                noSelect: i,
                list: r
            }
        });
    },
    bindAllSelect: function(t) {
        var a, i = this.data.goodsList.allSelect, r = this.data.goodsList.list;
        if (i) for (o = 0; o < r.length; o++) for (s = 0; s < r[o].merch.length; s++) {
            r[o].merch[s].active = !1;
            l = r[o].merch[s];
            a = 0, wx.request({
                url: e.globalData.url + e.globalData.parameter + "&r=member.cart.select",
                header: {
                    Cookie: e.globalData.session_login_id
                },
                data: {
                    id: l.id,
                    select: a
                },
                success: function(t) {}
            });
        } else for (var o = 0; o < r.length; o++) for (var s = 0; s < r[o].merch.length; s++) {
            r[o].merch[s].active = !0;
            var l = r[o].merch[s];
            a = 1, wx.request({
                url: e.globalData.url + e.globalData.parameter + "&r=member.cart.select",
                header: {
                    Cookie: e.globalData.session_login_id
                },
                data: {
                    id: l.id,
                    select: a
                },
                success: function(t) {}
            });
        }
        this.setGoodsList(this.getSaveHide(), this.totalPrice(), !i, this.noSelect(), r);
    },
    jiaBtnTap: function(t) {
        t.currentTarget.dataset.id;
        var a = this.data.goodsList.list, i = t.currentTarget.dataset.index, r = t.currentTarget.dataset.shopindex;
        if ("" !== r && null != r && "" !== i && null != i) {
            var o = a[r].merch[i].optionid;
            if (a[r].merch[i].total < 10) {
                a[r].merch[i].total++;
                var s = a[r].merch[i].total;
                this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), a);
            }
        }
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&r=member.cart.update",
            header: {
                Cookie: e.globalData.session_login_id
            },
            data: {
                id: t.currentTarget.dataset.id,
                optionid: o,
                total: s
            }
        });
    },
    jianBtnTap: function(t) {
        t.currentTarget.dataset.id;
        var a = this.data.goodsList.list, i = t.currentTarget.dataset.index, r = t.currentTarget.dataset.shopindex;
        if ("" !== r && null != r && "" !== i && null != i) {
            var o = a[r].merch[i].optionid;
            if (a[r].merch[i].total > 1) {
                a[r].merch[i].total--;
                var s = a[r].merch[i].total;
                this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), a);
            }
        }
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&r=member.cart.update",
            header: {
                Cookie: e.globalData.session_login_id
            },
            data: {
                id: t.currentTarget.dataset.id,
                optionid: o,
                total: s
            }
        });
    },
    editTap: function() {
        for (var t = this.data.goodsList.list, e = 0; e < t.length; e++) for (var a = 0; a < t[e].merch.length; a++) t[e].merch[a].active = !1;
        this.setGoodsList(!this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), t);
    },
    saveTap: function() {
        for (var t = this.data.goodsList.list, e = 0; e < t.length; e++) for (var a = 0; a < t[e].merch.length; a++) t[e].merch[a].active = !0;
        this.setGoodsList(!this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), t);
    },
    getSaveHide: function() {
        return this.data.goodsList.saveHidden;
    },
    deleteSelected: function() {
        for (var t = this, a = this.data.goodsList.list, i = {}, r = 0, o = 0; o < a.length; o++) for (var s = 0; s < a[o].merch.length; s++) {
            var l = a[o].merch[s];
            l.active && (i["ids[" + r + "]"] = l.id, r++);
        }
        wx.showModal({
            title: "亲，确定要删除吗？",
            content: "",
            success: function(a) {
                wx.request({
                    url: e.globalData.url + e.globalData.parameter + "&r=member.cart.wxapp_remove",
                    header: {
                        Cookie: e.globalData.session_login_id,
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    data: i,
                    success: function(e) {
                        t.onShow();
                    }
                });
            }
        });
    },
    toPayOrder: function() {
        for (var a = this, i = [], r = 0; r < this.data.selectedInfo.length; r++) this.data.selectedInfo[r].active && i.push(this.data.selectedInfo[r]);
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&r=member.cart.submit",
            header: {
                Cookie: e.globalData.session_login_id
            },
            success: function(e) {
                if (1 == e.data.status) wx.navigateTo({
                    url: "/page/shop/pages/to-pay-order/index?fromcart=1&merch=" + a.data.merchide
                }); else {
                    var i = e.data.result.message;
                    t.wxParse("article", "html", i, a, 5), a.setData({
                        maskhidden: !1
                    }), setTimeout(function() {
                        a.setData({
                            maskhidden: !0
                        });
                    }, 2e3);
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        }), wx.showLoading({
            title: "正在结算"
        });
    },
    navigateToPayOrder: function() {
        wx.hideLoading();
        var t = this;
        wx.navigateTo({
            url: "/page/shop/pages/to-pay-order/index?fromcart=1&merch=" + t.data.merchide
        });
    },
    onPullDownRefresh: function(t) {
        this.onShow();
    }
});