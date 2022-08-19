var t = getApp(), a = t.globalData.customizeTabId, e = [], r = [], i = "", o = "", d = "", c = "";

Page({
    data: {
        remainTime: "00:00:00",
        groupDetail: {},
        memberList: [],
        likeProductList: [],
        activityStatus: "",
        activityId: "",
        groupOrderNo: "",
        productId: "",
        isJoin: !1,
        showCurAttr: !0,
        showProAttr: !1,
        count: 1,
        styleConfig: t.globalData.styleConfig,
        modelName: "",
        price: "",
        activityPrice: ""
    },
    onLoad: function(a) {
        t.loginVzSystem();
        this.setData({
            activityId: a.activityId,
            groupOrderNo: a.groupOrderNo,
            productId: a.productId
        }), this.getGroupDetail(), t.getMemberId() || t.loginVzSystem();
    },
    getLikeProduct: function(e) {
        var r = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getLikeProductByPage.action",
            data: {
                customizeTabId: a.LynxProductList,
                bigCateGoryCode: e,
                status: 2,
                actType: 5,
                current: 1
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                console.log(e), r.setData({
                    likeProductList: e.pageList
                });
            }
        });
    },
    getGroupDetail: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "activityOrder_getGroupDetail.action",
            data: {
                activityId: a.data.activityId,
                appId: t.globalData.projectInfo.appId,
                groupOrderNo: a.data.groupOrderNo,
                productId: a.data.productId
            },
            success: function(e) {
                for (var i = t.getJsonData(e.data), o = 0; o < i.attributeKeyVOList.length; o++) {
                    r[o] = [];
                    for (var d = 0; d < i.attributeKeyVOList[o].valueList.length; d++) r[o][d] = !1;
                }
                if (a.setData({
                    price: i.productModelList[0].price,
                    activityPrice: i.productModelList[0].activityPrice,
                    active: r,
                    stock: i.productModelList[0].stock
                }), "1" == i.activityStatus) var c = setInterval(function() {
                    i.remainTime--, a.leftTimer(i.remainTime), i.remainTime <= 0 && (clearInterval(c), 
                    a.getGroupDetail());
                }, 1e3);
                for (var n = 0; n < i.memberList.length; n++) i.memberList[n].memberId == t.getMemberId() && a.setData({
                    receiver: i.memberList[n].receiver + " " + i.memberList[n].personMobilePhone,
                    personAddress: i.memberList[n].personAddress,
                    isJoin: !0
                });
                a.setData({
                    groupDetail: i,
                    proInfoDetail: i,
                    memberList: i.memberList,
                    activityStatus: i.activityStatus
                }), a.getLikeProduct(i.bigCateGoryCode);
            },
            fail: function(t) {}
        });
    },
    toProDetail: function(t) {
        wx.redirectTo({
            url: "../../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    leftTimer: function(t) {
        var a = Math.floor(t / 3600), e = Math.floor(t / 60 % 60), r = Math.floor(t % 60);
        a = this.checkTime(a), e = this.checkTime(e), r = this.checkTime(r), this.setData({
            remainTime: a + ":" + e + ":" + r
        });
    },
    checkTime: function(t) {
        return t < 10 && (t = "0" + t), t;
    },
    countAdd: function() {
        this.data.count++, this.setData({
            count: this.data.count
        });
    },
    countSubtract: function() {
        this.data.count > 1 && (this.data.count--, this.setData({
            count: this.data.count
        }));
    },
    bindCountInput: function(t) {
        this.setData({
            count: t.detail.value
        });
    },
    getModelInfo: function(t) {
        var a = this;
        if (!r[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex]) {
            for (var d = 0; d < r[t.currentTarget.dataset.index].length; d++) e[t.currentTarget.dataset.index] = [], 
            r[t.currentTarget.dataset.index][d] = !1;
            r[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex] = !t.currentTarget.dataset.status, 
            e[t.currentTarget.dataset.index] = t.currentTarget.dataset.typeid, i = e.join(";"), 
            "" != (o = a.getModuleId(i)) && a.setData({
                showCurAttr: !1
            }), a.setData({
                active: r
            });
        }
    },
    getModuleId: function(t) {
        for (var a = this, e = t.split(";"), r = a.data.proInfoDetail.productModelList, i = e[1] + ";" + e[0], n = 0; n < r.length; n++) if (r[n].valueIds == t || r[n].valueIds == i) {
            o = r[n].id, d = r[n].originalAttr, c = r[n].modelName, a.setData({
                stock: r[n].stock,
                price: r[n].price,
                activityPrice: r[n].activityPrice,
                originalPrice: r[n].originalprice,
                modelName: r[n].modelName
            }), a.data.proInfoDetail.productImageVOList.length > 0 && a.setData({
                pic_url: a.data.proInfoDetail.productImageVOList[0].imageURL
            });
            break;
        }
        return o;
    },
    toggleProAttrFrame: function() {
        this.setData({
            showProAttr: !this.data.showProAttr,
            count: 1
        });
    },
    changeProAttrFrame: function() {
        "" != o ? (this.setData({
            showProAttr: !this.data.showProAttr
        }), this.addCart("joinGroup")) : t.hint("请选择商品属性");
    },
    addCart: function(a) {
        var e = this;
        if (e.data.stock <= 0 || e.data.count > e.data.stock) this.setData({
            showProAttr: !0
        }), t.hint("该商品库存不足"); else {
            var r = {
                productId: e.data.proInfoDetail.id,
                productName: e.data.proInfoDetail.productName,
                productCode: e.data.proInfoDetail.productCode,
                count: e.data.count,
                pic_url: e.data.pic_url,
                price: e.data.activityPrice,
                moduleId: o,
                proAttrName: d,
                modelName: e.data.modelName,
                branchInfoId: e.data.proInfoDetail.branchInfoId,
                branchName: e.data.proInfoDetail.branchName,
                isSelected: !0
            }, i = [], c = [], n = {};
            i.push(r), n.branchInfoId = r.branchInfoId, n.isSelected = !0, n.branchName = r.branchName, 
            n.groupOrderNo = e.data.groupOrderNo, n.pro = i, c.push(n), wx.setStorageSync("groupProDataList" + t.globalData.autoId, c), 
            wx.setStorageSync("groupProData" + t.globalData.autoId, i), t.getMemberId() ? wx.navigateTo({
                url: "../../order/order?proPrice=" + e.data.activityPrice * e.data.count + "&status=" + a + "&activityId=" + e.data.proInfoDetail.activityId
            }) : wx.navigateTo({
                url: "../../login/login"
            });
        }
    },
    joinGroup: function() {
        this.setData({
            showProAttr: !0
        });
    },
    onShareAppMessage: function(t) {
        var a = this;
        return "1" == a.data.activityStatus ? {
            title: "",
            path: "pages/group/group-detail/group-detail?activityId=" + a.data.activityId + "&groupOrderNo=" + a.data.groupOrderNo + "&productId=" + a.data.productId
        } : {
            title: "",
            path: "pages/product/pro-detail/pro-detail?productId=" + a.data.groupDetail.id
        };
    }
});