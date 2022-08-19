var a = getApp(), t = "", r = "";

Page({
    data: {
        totalPrice: 0,
        cartData: [],
        cartList: [],
        cartNull: !1
    },
    onLoad: function(a) {
        r = a.from;
    },
    onShow: function() {
        var t = this;
        if (t.data.totalPrice = 0, this.setData({
            cartData: wx.getStorageSync("cartData" + a.globalData.autoId) || []
        }), (wx.getStorageSync("cartData" + a.globalData.autoId) || []).length > 0) {
            var r = wx.getStorageSync("cartData" + a.globalData.autoId);
            t.splitArr(r);
        } else wx.removeStorageSync("cartData" + a.globalData.autoId), wx.removeStorageSync("cartDataList" + a.globalData.autoId), 
        t.setData({
            cartNull: !0
        });
    },
    splitArr: function(t) {
        for (var r = 0, e = function(a) {
            for (var t, e = [], c = {}, o = 0; null != (t = a[o]); o++) c[t.branchInfoId] || (e.push(t.branchInfoId), 
            c[t.branchInfoId] = !0), 1 == a[o].isSelected && (r += parseInt(a[o].count) * parseFloat(a[o].price));
            return e;
        }(t), c = [], o = 0; o < e.length; o++) for (var d = [], n = {}, i = 0; i < t.length; i++) t[i].branchInfoId == e[o] && (d.push(t[i]), 
        n.branchInfoId = t[i].branchInfoId, n.branchName = t[i].branchName, n.pro = d, 1 == t[i].isSelected && (n.isSelected = !0), 
        c[o] = n);
        wx.setStorageSync("cartDataList" + a.globalData.autoId, c), this.setData({
            totalPrice: r.toFixed(2),
            cartList: c,
            cartNull: !1
        });
    },
    arrowuptap: function(t) {
        var r = this;
        if (r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count > 1) {
            r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count = r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count - 1;
            for (var e = 0; e < r.data.cartData.length; e++) r.data.cartData[e].moduleId == t.currentTarget.dataset.modleid && (r.data.cartData[e].count = r.data.cartData[e].count - 1);
            this.setData({
                cartList: r.data.cartList,
                cartData: r.data.cartData
            }), wx.setStorageSync("cartData" + a.globalData.autoId, r.data.cartData), r.splitArr(this.data.cartData);
        }
    },
    arrowdowntap: function(t) {
        var r = this;
        r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count = r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count + 1;
        for (var e = 0; e < r.data.cartData.length; e++) r.data.cartData[e].moduleId == t.currentTarget.dataset.modleid && (r.data.cartData[e].count = r.data.cartData[e].count + 1);
        this.setData({
            cartList: r.data.cartList,
            cartData: r.data.cartData
        }), wx.setStorageSync("cartData" + a.globalData.autoId, r.data.cartData), r.splitArr(r.data.cartData);
    },
    bindCountInput: function(t) {
        var r = this;
        parseInt(t.detail.value);
        if (parseInt(t.detail.value) >= 1) {
            r.data.cartList[t.currentTarget.dataset.index].pro[t.currentTarget.dataset.proindex].count = parseInt(t.detail.value);
            for (var e = 0; e < r.data.cartData.length; e++) r.data.cartData[e].moduleId == t.currentTarget.dataset.modleid && (r.data.cartData[e].count = parseInt(t.detail.value));
            return this.setData({
                cartList: r.data.cartList,
                cartData: r.data.cartData
            }), wx.setStorageSync("cartData" + a.globalData.autoId, r.data.cartData), r.splitArr(this.data.cartData), 
            parseInt(t.detail.value);
        }
        return 1;
    },
    delPro: function(t) {
        var r = this;
        wx.showModal({
            title: "确定删除该商品？",
            success: function(e) {
                if (e.confirm) {
                    for (var c = [], o = 0; o < r.data.cartData.length; o++) r.data.cartData[o].moduleId != t.currentTarget.dataset.modelid && c.push(r.data.cartData[o]);
                    r.setData({
                        cartData: c
                    }), wx.setStorageSync("cartData" + a.globalData.autoId, r.data.cartData), r.splitArr(r.data.cartData);
                } else e.cancel;
            }
        });
    },
    toClearing: function() {
        if ("" == (t = wx.getStorageSync("memberId" + a.globalData.autoId) || "")) wx.navigateTo({
            url: "../../login/login"
        }); else {
            for (var r = 0, e = 0; e < this.data.cartData.length; e++) this.data.cartData[e].isSelected && r++;
            if (0 == r) return void a.hint("请选择产品");
            var c = this;
            a.globalData.isPerson ? wx.redirectTo({
                url: "../../order/order?proPrice=" + c.data.totalPrice
            }) : wx.navigateTo({
                url: "../../order/order?proPrice=" + c.data.totalPrice
            });
        }
    },
    checkboxTap: function(t) {
        var r = this;
        console.log(t.currentTarget.dataset.proid);
        for (var e = 0; e < r.data.cartData.length; e++) t.currentTarget.dataset.proid == r.data.cartData[e].productId && (1 == r.data.cartData[e].isSelected ? r.data.cartData[e].isSelected = !1 : r.data.cartData[e].isSelected = !0);
        wx.setStorageSync("cartData" + a.globalData.autoId, r.data.cartData), r.splitArr(r.data.cartData);
    },
    toProList: function() {
        wx.switchTab({
            url: "../../product/product"
        });
    },
    toProDetail: function(a) {
        wx.navigateTo({
            url: "../../product/pro-detail/pro-detail?productId=" + a.currentTarget.dataset.pid
        });
    }
});