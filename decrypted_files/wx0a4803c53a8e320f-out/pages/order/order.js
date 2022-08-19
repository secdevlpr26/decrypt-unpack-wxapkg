var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = "", r = !0, s = !1, i = 0, n = 0;

Page({
    data: {
        addressInfo: "",
        orderList: [],
        proPrice: [],
        transportFee: [],
        totalPrice: 0,
        tempTotalPrice: 0,
        payType: "",
        myOrderInfo: {},
        productNames: "",
        remark: "",
        bill: "",
        openid: "",
        failReason: [],
        isSupport: !1,
        hasWxPay: !1,
        status: "",
        date: "",
        time: "",
        bookingInfo: {},
        branchCouponList: [],
        platformCouponList: [],
        hiddenCouponList: !0,
        isSelectBraCou: !1,
        curBranchCouponIdx: 0,
        platformCouponInfo: {},
        coupontype: 1,
        memberActivityId: "",
        branchInfoIds: "",
        activityId: "",
        mtype: t.globalData.ext.hotel,
        totalDays: 1,
        nowDate: "",
        comeDateInfo: "",
        leaveDateInfo: "",
        offlinePayHidden: "",
        loadCount: 1,
        isShowPrePay: t.globalData.isShowPrePay,
        cardNo: "",
        preMoney: "",
        totalMoney: "",
        orderInfo: {},
        isWeb: t.globalData.isWeb
    },
    onLoad: function(o) {
        this.setData({
            offlinePayHidden: t.globalData.topayHidden
        }), console.log(this.data.offlinePayHidden), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, 
        i = o.proPrice, console.log(t.globalData.moduleList), o.status && this.setData({
            status: o.status
        }), o.activityId && this.setData({
            activityId: o.activityId
        }), t.globalData.setting.hasWxPay ? this.setData({
            hasWxPay: !0
        }) : this.setData({
            hasWxPay: !1
        }), this.setData({
            totalPrice: 0
        });
        var r = this;
        "1" == r.data.isShowPrePay && r.getUserInfo();
        var s = [];
        s = "booking" == o.status ? wx.getStorageSync("bookingDataList" + t.globalData.autoId) : "51" == o.status || "52" == o.status || "3" == o.status || "6" == o.status ? wx.getStorageSync("groupProDataList" + t.globalData.autoId) : wx.getStorageSync("cartDataList" + t.globalData.autoId);
        for (var n = [], d = 0; d < s.length; d++) if (s[d].isSelected) {
            var c = s[d];
            r.data.transportFee[d] = (0).toFixed(2);
            for (var l = [], u = 0, p = 0; p < c.pro.length; p++) s[d].pro[p].isSelected && (u += parseFloat(s[d].pro[p].price) * parseInt(s[d].pro[p].count), 
            l.push(s[d].pro[p]));
            r.data.proPrice = r.data.proPrice.concat(u), s[d].pro = l, n.push(s[d]), r.data.totalPrice += r.data.transportFee[d], 
            r.data.branchInfoIds += s[d].branchInfoId + ",";
        }
        r.data.branchInfoIds = r.data.branchInfoIds + "-1,-2", s = n, r.setData({
            branchInfoIds: r.data.branchInfoIds,
            orderList: s,
            transportFee: r.data.transportFee,
            proPrice: r.data.proPrice,
            totalPrice: (parseFloat(r.data.totalPrice) + parseFloat(i)).toFixed(2),
            tempTotalPrice: (parseFloat(r.data.totalPrice) + parseFloat(i)).toFixed(2)
        }), r.getAddressInfo().then(function() {
            r.data.addressInfo.contactPerson ? r.getTransportFee() : "51" != r.data.status && "52" != r.data.status && "3" != r.data.status && "6" != r.data.status ? r.getCouponInfo(r.data.orderList) : wx.hideLoading();
        });
    },
    onShow: function() {
        var t = this;
        t.getComeAndGoTime(), 1 != t.data.loadCount ? t.getAddressInfo().then(function(a) {
            t.setData({
                tempTotalPrice: i
            }), 1 == t.data.mtype && t.setData({
                tempTotalPrice: t.data.tempTotalPrice * t.data.totalDays
            }), a.id ? t.getTransportFee() : ("51" != t.data.status && "52" != t.data.status && "3" != t.data.status && "6" != t.data.status && t.getCouponInfo(t.data.orderList), 
            wx.hideLoading());
        }) : t.setData({
            loadCount: t.data.loadCount + 1
        });
    },
    getUserInfo: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getMember.action",
            data: {
                memberId: t.getMemberId(),
                customizetabId: e.LynxApplyFor_About_Merchant,
                checkBranch: 1
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                console.log(o), a.setData({
                    cardNo: o.cardNo,
                    preMoney: o.preMoney
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getComeAndGoTime: function() {
        if (1 == this.data.mtype) {
            var a = wx.getStorageSync("comeDate" + t.globalData.autoId), e = wx.getStorageSync("leaveDate" + t.globalData.autoId), o = new Date();
            if (a && e) this.setData({
                nowDate: o.getMonth() + 1 + "月" + o.getDate() + "日",
                comeDateInfo: a,
                leaveDateInfo: e,
                totalDays: t.DateDiff(e.re, a.re)
            }); else {
                var r = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate(), s = t.calculatDateBydays(r, 1), i = s.split("-");
                a = {
                    date: o.getMonth() + 1 + "月" + o.getDate() + "日",
                    week: t.getWeek(r)
                }, e = {
                    date: i[1] + "月" + i[2] + "日",
                    week: t.getWeek(s)
                }, this.setData({
                    nowDate: o.getMonth() + 1 + "月" + o.getDate() + "日",
                    comeDateInfo: a,
                    leaveDateInfo: e
                });
            }
        }
    },
    getAddressInfo: function() {
        var a = this;
        return wx.showLoading({
            title: "加载中..."
        }), new Promise(function(e, o) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getCustomerAddressList.action",
                data: {
                    current: 1,
                    memberId: t.getMemberId()
                },
                success: function(o) {
                    var r = t.getJsonData(o.data);
                    if (r.pageList.length > 0) {
                        for (var s = 0; s < r.pageList.length; s++) if (1 == r.pageList[s].isdefault) {
                            a.setData({
                                addressInfo: r.pageList[s]
                            }), e(r.pageList[s]);
                            break;
                        }
                    } else a.setData({
                        addressInfo: ""
                    }), e("");
                }
            });
        });
    },
    remarkInput: function(t) {
        this.setData({
            remark: t.detail.value
        });
    },
    billInput: function(t) {
        this.setData({
            bill: t.detail.value
        });
    },
    getCouponInfo: function(a) {
        var e = this;
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), wx.request({
            url: t.globalData.comUrl + "act_getMemberActivityListByBranch.action",
            data: {
                memberId: t.getMemberId(),
                customizetabId: t.getCustomizeId("Activity"),
                memberStatus: 0,
                status: 0,
                branchInfoIds: e.data.branchInfoIds
            },
            success: function(o) {
                wx.hideToast(), e.data.platformCouponList = [];
                var r = t.getJsonData(o.data);
                console.log(r);
                for (var s = 0; s < a.length; s++) a[s].couponList = [];
                if (r.length) {
                    for (var i = 0; i < r.length; i++) {
                        var n = r[i];
                        "1" == n.type ? (n.amountReachedName = "满" + n.amountReached + "元可用", n.tipName = "满" + n.amountReached + "减" + n.discountAmount) : n.tipName = "优惠" + n.discountAmount + "元", 
                        n.tip = n.instructure && "" != n.instructure && "null" != n.instructure ? n.instructure : "", 
                        n.beginTime = n.beginTime.substring(0, 10), n.endTime = n.endTime.substring(0, 10);
                        for (var d = 0; d < a.length; d++) {
                            for (var c = 0, l = 0; l < a[d].pro.length; l++) c += a[d].pro[l].price * a[d].pro[l].count;
                            a[d].branchInfoId == n.branchInfoId && c >= n.amountReached && (a[d].couponList = a[d].couponList.concat(n));
                        }
                        if (-1 == n.branchInfoId || -2 == n.branchInfoId) for (var u = 0; u < e.data.proPrice.length; u++) if (n.amountReached <= e.data.proPrice[u]) {
                            e.data.platformCouponList = e.data.platformCouponList.concat(n);
                            break;
                        }
                    }
                    var p = e.data.tempTotalPrice, m = "";
                    if (a.length > 0) for (var f = 0; f < a.length; f++) {
                        var h = 0, g = 0;
                        if (a[f].couponList.length > 0) {
                            for (var I = 0; I < a[f].couponList.length; I++) {
                                a[f].couponList[I].isSelected = !1;
                                var b = a[f].couponList[I].discountAmount;
                                b > g && (h = I, g = b);
                            }
                            var y = a[f].couponList[h].memberActivityId.split(",");
                            m += y[0] + ",", a[f].couponList[h].isSelected = !0, a[f].couponInfo = a[f].couponList[h].tipName, 
                            a[f].memberActivityId = y[0], a[f].couponPrice = a[f].couponList[h].discountAmount;
                        } else m += ",", a[f].couponPrice = 0, a[f].memberActivityId = "";
                        a[f].couponPrice > 0 && e.setData({
                            isSelectBraCou: !0
                        }), p -= a[f].couponPrice;
                    }
                    if (!e.data.isSelectBraCou) {
                        for (var v = 0, D = 0, L = 0; L < e.data.platformCouponList.length; L++) if (e.data.platformCouponList[L].isSelected = !1, 
                        e.data.platformCouponList[L].discountAmount > D) for (var w = 0; w < e.data.proPrice.length; w++) v = L, 
                        D = e.data.platformCouponList[L].discountAmount;
                        if (e.data.platformCouponList.length > 0) {
                            if ("-2" == e.data.platformCouponList[v].branchInfoId) {
                                var C = e.data.platformCouponList[v].memberActivityId.split(",");
                                e.data.platformCouponList[v].memberActivityId = C[0];
                            }
                            m = e.data.platformCouponList[v].branchInfoId + e.data.platformCouponList[v].memberActivityId + ",", 
                            e.data.platformCouponList[v].isSelected = !0, p -= e.data.platformCouponList[v].discountAmount, 
                            e.setData({
                                platformCouponInfo: {
                                    tipName: e.data.platformCouponList[v].tipName,
                                    couponPrice: e.data.platformCouponList[v].discountAmount
                                }
                            });
                        }
                    }
                    e.setData({
                        totalPrice: parseFloat(p).toFixed(2),
                        orderList: a,
                        platformCouponList: e.data.platformCouponList,
                        memberActivityId: m.substring(0, m.length - 1)
                    }), console.log(e.data.memberActivityId);
                } else e.setData({
                    totalPrice: e.data.tempTotalPrice
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    branchCoupontap: function(t) {
        n = t.currentTarget.dataset.index, this.setData({
            coupontype: 1,
            curBranchCouponIdx: n,
            hiddenCouponList: !1,
            branchCouponList: this.data.orderList[n].couponList
        });
    },
    closebranchCoupon: function() {
        this.setData({
            hiddenCouponList: !0
        });
    },
    selectCoupon: function(t) {
        var a = "";
        if (1 == this.data.coupontype) {
            for (var e = this.data.orderList[n], o = this.data.tempTotalPrice, r = 0; r < e.couponList.length; r++) e.couponList[r].isSelected = !1;
            if ("" === t.currentTarget.dataset.cidx) e.couponInfo = "不使用优惠", e.couponPrice = 0, 
            e.memberActivityId = ""; else {
                var s = e.couponList[t.currentTarget.dataset.cidx].memberActivityId.split(",");
                e.couponList[t.currentTarget.dataset.cidx].isSelected = !0, e.couponInfo = e.couponList[t.currentTarget.dataset.cidx].tipName, 
                e.couponPrice = e.couponList[t.currentTarget.dataset.cidx].discountAmount, e.memberActivityId = s[0];
            }
            this.data.orderList[n] = e, this.data.isSelectBraCou = !1;
            for (var i = 0; i < this.data.orderList.length; i++) o -= this.data.orderList[i].couponPrice, 
            this.data.orderList[i].couponPrice > 0 && (this.data.isSelectBraCou = !0), a += this.data.orderList[i].memberActivityId + ",";
            if (!this.data.isSelectBraCou) {
                for (var d = 0, c = 0, l = 0; l < this.data.platformCouponList.length; l++) {
                    var u = this.data.platformCouponList[l];
                    this.data.platformCouponList[l].isSelected = !1;
                    var p = u.discountAmount;
                    p > c && (d = l, c = p);
                }
                this.data.platformCouponList.length > 0 ? (a = this.data.platformCouponList[d].branchInfoId + this.data.platformCouponList[d].memberActivityId + ",", 
                this.data.platformCouponList[d].isSelected = !0, o -= this.data.platformCouponList[d].discountAmount, 
                this.setData({
                    platformCouponList: this.data.platformCouponList,
                    platformCouponInfo: {
                        tipName: this.data.platformCouponList[d].tipName,
                        couponPrice: this.data.platformCouponList[d].discountAmount
                    }
                })) : a = ",";
            }
            this.setData({
                orderList: this.data.orderList,
                branchCouponList: this.data.orderList[n].couponList,
                totalPrice: o,
                isSelectBraCou: this.data.isSelectBraCou,
                memberActivityId: a.substring(0, a.length - 1)
            });
        } else {
            for (var m = t.currentTarget.dataset.cidx, f = 0; f < this.data.platformCouponList.length; f++) this.data.platformCouponList[f].isSelected = !1;
            if ("" === m) this.setData({
                memberActivityId: "",
                platformCouponList: this.data.platformCouponList,
                totalPrice: this.data.tempTotalPrice,
                platformCouponInfo: {
                    tipName: "不使用优惠",
                    couponPrice: 0,
                    memberActivityId: ""
                }
            }); else {
                this.data.platformCouponList[m].isSelected = !0;
                var h = this.data.platformCouponList[m], g = parseFloat(this.data.tempTotalPrice) - parseFloat(h.discountAmount);
                console.log(h), this.setData({
                    totalPrice: g.toFixed(2),
                    platformCouponList: this.data.platformCouponList,
                    memberActivityId: h.branchInfoId + h.memberActivityId,
                    platformCouponInfo: {
                        tipName: h.tipName,
                        couponPrice: h.discountAmount
                    }
                });
            }
        }
        this.setData({
            hiddenCouponList: !0
        }), console.log(this.data.memberActivityId);
    },
    platformCouTap: function() {
        this.data.isSelectBraCou ? wx.showModal({
            title: "",
            content: "商家和平台优惠券不可同时用，请先取消商家优惠券"
        }) : this.setData({
            coupontype: 2,
            hiddenCouponList: !1
        });
    },
    selectBookingTime: function() {
        wx.navigateTo({
            url: "calendar/calendar"
        });
    },
    getTransportFee: function() {
        var e = this;
        if (!s && "" != e.data.addressInfo.contactPerson) {
            for (var o = "", r = "", i = "", n = 0; n < e.data.orderList.length; n++) for (var d = 0; d < e.data.orderList[n].pro.length; d++) o += e.data.orderList[n].pro[d].productId + "=", 
            r += e.data.orderList[n].pro[d].moduleId + "=", i += e.data.orderList[n].pro[d].count + "=";
            o = o.substring(0, o.length - 1), r = r.substring(0, r.length - 1), i = i.substring(0, i.length - 1), 
            wx.request({
                url: t.globalData.comUrl + "tabs_culculateTransportFee.action",
                data: {
                    appId: a.appId,
                    productIds: o,
                    cityId: e.data.addressInfo.city,
                    modelIds: r,
                    amounts: i
                },
                success: function(a) {
                    for (var o = t.getJsonData(a.data), r = [], i = 0; i < o.data.length; i++) r[i] = o.data[i].code, 
                    e.data.transportFee[i] = parseFloat(o.data[i].totalTransportFee).toFixed(2), e.data.tempTotalPrice = parseFloat(e.data.tempTotalPrice) + parseFloat(e.data.transportFee[i]);
                    "0" == o.isSuccess ? e.setData({
                        transportFee: e.data.transportFee,
                        tempTotalPrice: parseFloat(e.data.tempTotalPrice).toFixed(2),
                        isSupport: !1,
                        failReason: r
                    }) : e.setData({
                        transportFee: e.data.transportFee,
                        tempTotalPrice: parseFloat(e.data.tempTotalPrice).toFixed(2),
                        isSupport: !0,
                        failReason: r
                    }), "51" != e.data.status && "52" != e.data.status && e.getCouponInfo(e.data.orderList), 
                    s = !1, wx.hideLoading();
                },
                fail: function() {
                    t.hint("获取运费失败"), wx.hideLoading();
                }
            });
        }
    },
    toAddress: function() {
        wx.navigateTo({
            url: "../address/address"
        });
    },
    wxPay: function(a) {
        var e = this;
        1 == a.currentTarget.dataset.type ? e.setData({
            payType: 4
        }) : e.setData({
            payType: 2
        }), e.data.addressInfo.contactPerson ? r && e.data.isSupport ? (r = !1, this.submitOrder()) : e.data.isSupport || t.hint("订单中有商品不支持配送") : t.hint("请填写收货地址");
    },
    offlinePay: function() {
        var a = this;
        a.setData({
            payType: 3
        }), a.data.addressInfo.contactPerson ? r && a.data.isSupport ? (r = !1, this.submitOrder()) : a.data.isSupport || t.hint("订单中有商品不支持配送") : t.hint("请填写收货地址");
    },
    submitOrder: function() {
        var e = this;
        "" != e.data.addressInfo.contactPerson || "booking" == e.data.status ? "51" == e.data.status || "52" == e.data.status ? wx.request({
            url: t.globalData.comUrl + "activityProduct_checkActivityStatus.action",
            data: {
                appId: a.appId,
                productId: e.data.orderList[0].pro[0].productId,
                activityId: e.data.activityId
            },
            success: function(a) {
                0 == a.data.code ? (r = !0, t.hint("活动已经结束")) : 2 == a.data.code ? (r = !0, t.hint("产品已经退出该活动")) : e.startSubmitOrder();
            }
        }) : "3" == e.data.status ? wx.request({
            url: t.globalData.comUrl + "activityProduct_checkActivityStatus.action",
            data: {
                appId: a.appId,
                productId: e.data.orderList[0].pro[0].productId,
                activityId: e.data.activityId,
                memberId: t.getMemberId()
            },
            success: function(a) {
                0 == a.data.code ? t.hint("活动已经结束") : 2 == a.data.code ? t.hint("产品已经退出该活动") : e.startSubmitOrder();
            }
        }) : e.startSubmitOrder() : wx.showModal({
            title: "提示",
            content: "请填写收货地址",
            showCancel: !1
        });
    },
    startSubmitOrder: function() {
        var e = this;
        wx.showToast({
            title: "正在提交...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        });
        var s = {}, i = [];
        if ("booking" == e.data.status) i = wx.getStorageSync("bookingData" + t.globalData.autoId); else if ("51" == e.data.status || "52" == e.data.status || "3" == e.data.status || "6" == e.data.status) i = wx.getStorageSync("groupProData" + t.globalData.autoId); else {
            i = wx.getStorageSync("cartData" + t.globalData.autoId);
            for (var n = [], d = 0; d < i.length; d++) i[d].isSelected && n.push(i[d]);
            i = n;
        }
        for (var c = function(t) {
            for (var a, e = [], o = {}, r = 0; null != (a = t[r]); r++) o[a.productId] || (e.push(a.productId), 
            o[a.productId] = !0);
            return e;
        }(i), l = [], u = 0; u < c.length; u++) for (var p = [], m = {}, f = 0; f < i.length; f++) i[f].productId == c[u] && (p.push(i[f]), 
        m.productId = i[f].productId, m.productName = i[f].productName, m.pro = p, l[u] = m);
        for (var h = "", g = "", I = "", b = "", y = "", v = "", D = "", L = 0; L < l.length; L++) {
            h += l[L].productId + "=", g += l[L].productName + ",";
            for (var w = 0; w < l[L].pro.length; w++) h += l[L].pro[w].moduleId + ",", I += l[L].pro[w].productCode + ",", 
            v += l[L].pro[w].count + ",", y += l[L].pro[w].price + ",", b += l[L].pro[w].modelName + ",";
            h = h.substring(0, h.length - 1) + ";", v = v.substring(0, v.length - 1), y = y.substring(0, y.length - 1), 
            b = b.substring(0, b.length - 1), v += "=", y += "=", b += "=";
        }
        for (var C = 0; C < e.data.orderList.length; C++) D += e.data.orderList[C].branchInfoId + ",";
        s.productIds = h.substring(0, h.length - 1), s.productNames = g.substring(0, g.length - 1), 
        s.productCodes = I.substring(0, I.length - 1), s.amount = v.substring(0, v.length - 1), 
        s.prices = y.substring(0, y.length - 1), s.modelName = b.substring(0, b.length - 1), 
        s.branchInfoIds = D.substring(0, D.length - 1), s.businessId = c, o = wx.getStorageSync("memberId" + t.globalData.autoId), 
        s.projectId = a.appId, s.memberId = o, e.data.addressInfo ? (s.personName = e.data.addressInfo.contactPerson, 
        s.personMobilePhone = e.data.addressInfo.mobilePhone, s.personAddress = e.data.addressInfo.proName + e.data.addressInfo.cityName + e.data.addressInfo.disName + e.data.addressInfo.address) : (s.personName = "暂无", 
        s.personMobilePhone = "暂无", s.personAddress = "暂无"), (e.data.mtype = 1) && (s.days = e.data.totalDays), 
        s.postCode = e.data.addressInfo.postCode, s.payType = e.data.payType, s.totalMoney = e.data.tempTotalPrice, 
        s.transportCost = e.data.transportFee.join(","), s.memberActivityId = e.data.memberActivityId, 
        s.remark = e.data.remark, s.invoiceTitle = e.data.bill, "6" == e.data.status && (s.isDistribute = "1"), 
        "51" != e.data.status && "52" != e.data.status || (s.groupOrderNo = "51" == e.data.status ? "0" : e.data.orderList[0].groupOrderNo), 
        e.setData({
            productNames: s.productNames,
            totalMoney: s.totalMoney,
            orderInfo: s
        }), console.log(s), wx.request({
            url: t.globalData.comUrl + "tabs_saveTSCBranchInfoOrderWithQuantity.action",
            data: s,
            success: function(a) {
                var o = t.getJsonData(a.data);
                e.setData({
                    myOrderInfo: o
                }), wx.showToast({
                    title: "订单提交成功",
                    icon: "success",
                    duration: 2e3,
                    mask: !0,
                    success: function() {
                        if ("booking" != e.data.status && "51" != e.data.status && "52" != e.data.status && "3" != e.data.status && "6" != e.data.status) {
                            for (var a = wx.getStorageSync("cartData" + t.globalData.autoId), s = [], i = 0; i < a.length; i++) a[i].isSelected || s.push(a[i]);
                            wx.setStorageSync("cartData" + t.globalData.autoId, s);
                            for (var n = wx.getStorageSync("cartDataList" + t.globalData.autoId), d = [], c = 0; c < n.length; c++) if (!n[c].isSelected) {
                                for (var l = [], u = 0; u < n[c].pro.length; u++) n[c].pro[u].isSelected || l.push(n[c].pro[u]);
                                n[c].pro = l, d.push(n[c]);
                            }
                            wx.setStorageSync("cartDataList" + t.globalData.autoId, d);
                        }
                        3 == e.data.payType ? (r = !0, wx.redirectTo({
                            url: "../self/myOrder/myOrder"
                        })) : (r = !0, wx.showToast({
                            title: "加载中...",
                            icon: "loading",
                            duration: 1e4,
                            mask: !0
                        }), "https://beta-mg.vzmapp.com/wc_mg/" == t.globalData.comUrl ? e.payTest(o) : 4 == e.data.payType ? e.data.isWeb ? e.onLinePay(o) : e.pay(o) : 2 == e.data.payType && e.prePay());
                    }
                });
            },
            fail: function() {
                r = !0, t.hint("订单提交失败");
            }
        });
    },
    payTest: function(t) {
        wx.request({
            url: "https://beta-mg.vzmapp.com/WechatAlipay/PayNotifcationTest",
            data: {
                attach: t.orderNO + "_" + a.appId,
                total_fee: 1,
                transaction_id: 1,
                trade_type: "JSAPI"
            },
            success: function(t) {
                wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3,
                    mask: !0
                }), setTimeout(function() {
                    wx.redirectTo({
                        url: "../self/myOrder/myOrder?index=1"
                    });
                }, 2e3);
            }
        });
    },
    prePay: function() {
        var a = this;
        a.data.preMoney < a.data.totalMoney ? wx.showToast({
            title: "余额不足！",
            icon: "none",
            duration: 2e3,
            mask: !0
        }) : (wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), wx.request({
            url: t.globalData.paymentUrl + "/WechatAlipay/PrePayNotifcation",
            data: {
                memberId: t.getMemberId(),
                projectId: a.data.orderInfo.projectId,
                nonce_str: "lfksf" + Math.round(1e5 * Math.random()),
                body: a.data.orderInfo.productName,
                attach: a.data.myOrderInfo.orderNO + "_" + a.data.orderInfo.projectId + "%2B",
                out_trade_no: a.data.myOrderInfo.orderNO + new Date().valueOf(),
                total_fee: (100 * a.data.totalMoney).toFixed(0),
                trade_type: "",
                device_info: "156151"
            },
            success: function(t) {
                console.log(t.data), wx.hideToast(), "success" == t.data ? wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3,
                    mask: !0
                }) : wx.showModal({
                    title: "支付失败",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && a.onShow();
                    }
                });
            }
        }));
    },
    pay: function(e) {
        var o = this;
        wx.login({
            success: function(r) {
                r.code ? wx.request({
                    url: t.globalData.paymentUrl + "/WechatAlipay/MiniPayService2?jsoncallback=?",
                    data: {
                        projectId: a.appId,
                        nonce_str: "lfksf" + Math.round(1e5 * Math.random()),
                        body: o.data.productNames,
                        attach: e.orderNO + "_" + a.appId,
                        out_trade_no: e.orderNO + new Date().valueOf(),
                        total_fee: (100 * o.data.totalPrice).toFixed(0),
                        trade_type: "JSAPI",
                        device_info: "888",
                        code: r.code
                    },
                    success: function(a) {
                        if (wx.hideToast(), "" != a.data) {
                            var e = o.getJsonData(a.data);
                            wx.requestPayment({
                                timeStamp: e.timeStamp,
                                nonceStr: e.nonceStr,
                                package: "prepay_id=" + e.prepay_id,
                                signType: "MD5",
                                paySign: e.sign,
                                success: function(a) {
                                    "booking" == o.data.status ? wx.request({
                                        url: t.globalData.comUrl + "tabs_saveFlexiForm",
                                        data: o.data.bookingInfo,
                                        success: function(a) {
                                            1 == o.data.mtype && (wx.removeStorageSync("come\b\bDate" + t.globalData.autoId), 
                                            wx.removeStorageSync("leaveDate" + t.globalData.autoId)), wx.showToast({
                                                title: "预约成功",
                                                icon: "success",
                                                duration: 2e3,
                                                mask: !0
                                            }), setTimeout(function() {
                                                wx.redirectTo({
                                                    url: "../self/myOrder/myOrder"
                                                });
                                            }, 2e3);
                                        },
                                        fail: function() {
                                            t.hint("预约失败");
                                        }
                                    }) : (wx.showToast({
                                        title: "支付成功",
                                        icon: "success",
                                        duration: 2e3,
                                        mask: !0
                                    }), setTimeout(function() {
                                        wx.redirectTo({
                                            url: "../self/myOrder/myOrder?index=1"
                                        });
                                    }, 2e3));
                                },
                                fail: function(t) {
                                    wx.showModal({
                                        title: "支付失败",
                                        showCancel: !1,
                                        success: function(t) {
                                            t.confirm && wx.redirectTo({
                                                url: "../self/myOrder/myOrder"
                                            });
                                        }
                                    });
                                }
                            });
                        } else wx.showModal({
                            title: "支付失败",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm && wx.redirectTo({
                                    url: "../self/myOrder/myOrder"
                                });
                            }
                        });
                    }
                }) : t.hint("获取用户登录态失败！" + r.errMsg);
            }
        });
    },
    getJsonData: function(t) {
        return JSON.parse(t.substring(1, t.length - 1));
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            date: t.detail.value
        });
    },
    bindTimeChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            time: t.detail.value
        });
    },
    formSubmit: function(a) {
        var e = this;
        console.log(a.detail.value);
        var o = /^1[3|4|5|8|7][0-9]\d{4,8}$/;
        if (1 != e.data.mtype) {
            if ("" == a.detail.value.date) return void t.hint("请选择预约日期!");
            if ("" == a.detail.value.time) return void t.hint("请选择预约时间!");
        }
        if ("" != a.detail.value.name && 0 !== a.detail.value.name.trim().length) if ("" != a.detail.value.phone) if (o.test(a.detail.value.phone)) {
            e.setData({
                payType: 4
            });
            var s = "", i = "";
            1 == e.data.mtype ? "" == a.detail.value.remarks ? (s = "姓名,电话,入住日期,离店日期", i = a.detail.value.name + "," + a.detail.value.phone + "," + e.data.comeDateInfo.re + "," + e.data.leaveDateInfo.re) : (s = "姓名,电话,入住日期,离店日期,留言", 
            i = a.detail.value.name + "," + a.detail.value.phone + "," + e.data.comeDateInfo.re + "," + e.data.leaveDateInfo.re + "," + a.detail.value.remarks) : "" == a.detail.value.remarks ? (s = "姓名,电话,预约日期,预约时间", 
            i = a.detail.value.name + "," + a.detail.value.phone + "," + a.detail.value.date + "," + a.detail.value.time) : (s = "姓名,电话,预约日期,预约时间,留言", 
            i = a.detail.value.name + "," + a.detail.value.phone + "," + a.detail.value.date + "," + a.detail.value.time + "," + a.detail.value.remarks);
            var n = e.data.orderList[0].pro[0], d = {
                projectId: t.globalData.projectInfo.appId,
                customizeTabId: t.globalData.customizeTabId["Flexi-Form-Booking"],
                token: "html5",
                fieldKey: s,
                fieldValue: i,
                productName: n.productName + " " + n.modelName,
                branchName: e.data.orderList[0].branchName,
                branchId: e.data.orderList[0].branchInfoId,
                memberId: t.getMemberId()
            };
            this.setData({
                bookingInfo: d
            }), console.log(e.data.orderList), console.log(n), console.log(this.data.bookingInfo), 
            r && (r = !1, e.submitOrder());
        } else t.hint("请输入正确的电话号码"); else t.hint("请输入电话号码!"); else t.hint("预约人姓名不能为空!");
    },
    onLinePay: function(e) {
        var o = this, r = {
            myOrderInfo: e,
            projectInfo: a,
            productNames: o.data.productNames,
            totalPrice: o.data.totalPrice,
            paymentUrl: t.globalData.paymentUrl
        };
        window.localStorage.setItem("payInfos", JSON.stringify(r));
        var s = -1 != window.navigator.userAgent.toLowerCase().indexOf("micromessenger"), i = window.location.href.split("#")[0] + "paymament.html";
        s && (i = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + t.globalData.wxAppId + "&redirect_uri=" + encodeURIComponent(i) + "&response_type=code&scope=snsapi_userinfo&state=12345#wechat_redirect"), 
        window.location.href = i;
    }
});