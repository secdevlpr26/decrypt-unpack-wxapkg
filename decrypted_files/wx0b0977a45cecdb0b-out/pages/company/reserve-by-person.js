var a = getApp(), e = require("../../common.js");

Page({
    isloading: !1,
    url: !1,
    onShareAppMessage: function() {
        return a.shareAppMessage({
            url: this.url,
            title: "预约" + this.data.PersonInfo.Name
        });
    },
    onLoad: function(e) {
        var t = this;
        t.url = a.getPageUrl(t, e), a.registerGlobalFunctions(t), t.setData({
            queryparams: e
        });
    },
    onShow: function() {
        a.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        });
    },
    initData: function() {
        var a = this;
        e.initCommonModules(), a.loadPerson(), a.loadProduct();
    },
    onPageScroll: function() {},
    data: {
        plugNavFlag: !0
    },
    loadPerson: function() {
        var e = this;
        if (!e.isloading) {
            e.isloading = !0;
            var t = 0;
            e.data.queryparams.personid && (t = e.data.queryparams.personid), a.sendRequest({
                url: "/index.php?c=Front/WxApp/ServiceApi&a=getPersonInfo&id=" + t,
                method: "GET",
                success: function(t) {
                    e.isloading = !1, t.success ? (wx.setNavigationBarTitle({
                        title: "预约" + t.info.Name
                    }), a.globalData.subscribeFormData.SubmitText = "立即预约", t.info.HeadImg = a.globalData.siteBaseUrl + "/comdata/" + t.info.SiteID + "/serviceperson/" + t.info.HeadImg, 
                    e.setData({
                        PersonInfo: t.info
                    })) : console.log("getPersonInfo fail：" + t.msg);
                },
                fail: function(a) {
                    e.isloading = !1, console.log("getPersonInfo fail");
                }
            });
        }
    },
    loadProduct: function() {
        var e = this;
        a.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getProductList&pagesize=9999",
            method: "GET",
            success: function(t) {
                if (t.success) {
                    var s = {};
                    s.ValueType = 1, s.Values = [], s.ID = "ProductID", s.Name = "服务项目", s.FieldType = 3, 
                    s.IsRequire = 1;
                    for (var o = 0; o < t.productlist.length; o++) s.Values.push({
                        value: t.productlist[o].ProductID,
                        text: t.productlist[o].Name
                    });
                    var i = a.cloneObj(a.globalData.subscribeFormData);
                    i.fields.unshift(s), e.setData({
                        subscribeFormData: i
                    });
                } else console.log("getProductList fail：" + t.msg);
            },
            fail: function(a) {
                console.log("getProductList fail");
            }
        });
    },
    onCustomFormSubmit: function(e) {
        var t = this;
        a.validateForm(null, e.detail.value) && (e.detail.value.PersonID = t.data.queryparams.personid, 
        a.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=saveReserve",
            method: "POST",
            data: e.detail.value,
            success: function(e) {
                if (e.success) {
                    a.showModal({
                        title: "提示",
                        content: "预约成功，请在 会员中心->我的预约 里查看预约详情"
                    });
                    var s = t.data.msgformdata;
                    t.setData({
                        msgformdata: s,
                        customformvalues: null,
                        resetvalues: null
                    });
                } else a.showModal({
                    title: "提示",
                    content: "预约失败：" + e.msg
                });
            },
            fail: function(e) {
                a.showModal({
                    title: "提示",
                    content: "预约失败：" + e
                });
            }
        }));
    },
    navBtnShowAndHide: function() {
        var a = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: a
        });
    }
});