var t = getApp(), e = require("../../common.js");

Page({
    isloading: !1,
    url: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage({
            url: this.url,
            title: "预约" + this.data.ProductInfo.Name
        });
    },
    onLoad: function(e) {
        var a = this;
        a.url = t.getPageUrl(a, e), t.registerGlobalFunctions(a), a.setData({
            queryparams: e
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
        e.initCommonModules(), t.loadProduct(), t.loadPersonList();
    },
    data: {
        plugNavFlag: !0,
        currentRequest: !1
    },
    loadProduct: function() {
        var e = this;
        if (!e.isloading) {
            e.isloading = !0;
            var a = 0;
            e.data.queryparams.productid && (a = e.data.queryparams.productid), t.sendRequest({
                url: "/index.php?c=Front/WxApp/JsonApi&a=getProductInfo&id=" + a,
                method: "GET",
                success: function(a) {
                    if (e.isloading = !1, a.success) {
                        wx.setNavigationBarTitle({
                            title: "预约" + a.info.Name
                        });
                        for (var s = a.info.BigImages.split(","), o = 0; o < s.length; o++) s[o] = t.globalData.siteBaseUrl + "/comdata/" + a.info.SiteID + "/product/" + s[o];
                        var i = t.globalData.subscribeFormData;
                        i.SubmitText = "立即预约", a.info.ProductImgs = s, e.setData({
                            ProductInfo: a.info,
                            subscribeFormData: i
                        });
                    } else console.log("getProductInfo fail：" + a.msg);
                },
                fail: function(t) {
                    e.isloading = !1, console.log("getProductInfo fail");
                }
            });
        }
    },
    loadPersonList: function() {
        var e = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getPersonList&pagesize=9999",
            method: "GET",
            success: function(a) {
                if (a.success) {
                    var s = {};
                    s.ValueType = 1, s.Values = [], s.ID = "PersonID", s.Name = "发型师", s.FieldType = 3, 
                    s.IsRequire = 1;
                    for (var o = 0; o < a.personlist.length; o++) s.Values.push({
                        value: a.personlist[o].PersonID,
                        text: a.personlist[o].Name
                    });
                    var i = t.cloneObj(t.globalData.subscribeFormData);
                    i.fields.unshift(s), e.setData({
                        subscribeFormData: i
                    });
                } else console.log("getPersonList fail：" + a.msg);
            },
            fail: function(t) {
                console.log("getPersonList fail");
            }
        });
    },
    onCustomFormSubmit: function(e) {
        var a = this;
        a.data.currentRequest || (a.data.currentRequest = !0, t.validateForm(null, e.detail.value) ? (e.detail.value.ProductID = a.data.queryparams.productid, 
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=saveReserve",
            method: "POST",
            data: e.detail.value,
            success: function(e) {
                if (e.success) {
                    t.showModal({
                        title: "提示",
                        content: "预约成功，请在 会员中心->我的预约 里查看预约详情",
                        confirmText: "查看详情",
                        confirm: function() {
                            wx.navigateTo({
                                url: "myreserve"
                            }), a.data.currentRequest = !1;
                        }
                    });
                    var s = a.data.msgformdata;
                    a.setData({
                        msgformdata: s,
                        customformvalues: null,
                        resetvalues: null
                    });
                } else t.showModal({
                    title: "提示",
                    content: "预约失败：" + e.msg
                });
            },
            fail: function(e) {
                t.showModal({
                    title: "提示",
                    content: "预约失败：" + e
                }), a.data.currentRequest = !1;
            }
        })) : a.data.currentRequest = !1);
    },
    navBtnShowAndHide: function() {
        var t = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: t
        });
    }
});