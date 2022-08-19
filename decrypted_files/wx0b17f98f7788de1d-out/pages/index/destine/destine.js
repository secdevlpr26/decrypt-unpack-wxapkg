var e, t = require("../../../utils/util.js"), a = getApp(), o = a.globalData.httpUrl;

Page({
    data: {
        storeName: "",
        storeTel: "",
        storeAddress: "",
        httpUrl: o,
        dates: "",
        times: "",
        tableCut: "",
        tableId: "",
        personNum: "",
        contractName: "",
        contractTel: "",
        textDesc: "",
        array: [],
        index: "",
        ydFlag: !1,
        date: "",
        opacity: .3,
        dateStart: t.formatDate(new Date()),
        dateEnd: t.formatDate(new Date()),
        dingdanFlg: !1,
        brandSlideUrls: [ {
            imgurl: "/images/swiper1.jpg"
        }, {
            imgurl: "/images/swiper1.jpg"
        }, {
            imgurl: "/images/swiper1.jpg"
        } ],
        swiperCurrent: 0
    },
    chkUserFlag: function(t) {
        var a = e.data.menus, o = !0;
        for (var r in a) a[r].buttonName == t && "N" == a[r].menuStorePowerisUser && (console.log(a[r].buttonName + " , " + a[r].menuStorePowerisUser), 
        o = !1);
        return o;
    },
    onLoad: function(a) {
        e = this, t.getShareInfos(e, o), t.setCompanyId(e, a), "1" == a.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var r = decodeURIComponent(a.scene);
        if ("undefined" != r && void 0 != r && null != r && "null" != r) {
            var s = r.split(",")[0].replace('"', "");
            r.split(",")[1].replace('"', "");
            e.setData({
                scene: r,
                saoma: !0
            }), wx.request({
                url: o + "skstoremodel/findStoreById",
                data: {
                    pid: s
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(a) {
                    e.setData({
                        storeInfo: a.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: a.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: a.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: a.data.storeInfoName
                    });
                    var r = a.data.storeInfoStoreId;
                    e.setData({
                        storeId: r
                    }), wx.setStorageSync("storeId", r), t.getShareInfos(e, o), e.resendIndex(r);
                }
            });
        } else {
            var d = new Date(), n = new Date(d);
            n.setDate(d.getDate() + 30), console.log("=======date2========"), console.log(n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate()), 
            console.log(d > n), console.log("=======date2========"), e.setData({
                dateEnd: n
            }), wx.getStorage({
                key: "storeInfo",
                success: function(t) {
                    wx.setNavigationBarTitle({
                        title: t.data.storeInfoName
                    });
                    var a = t.data.storeInfoBusinessStartTime.split(":")[0] + t.data.storeInfoBusinessStartTime.split(":")[1], o = t.data.storeInfoBusinessEndTime.split(":")[0] + t.data.storeInfoBusinessEndTime.split(":")[1];
                    e.setData({
                        storeInfoHeadImgUrl: t.data.storeInfoHeadImgUrl,
                        storeName: t.data.storeInfoName,
                        storeTel: t.data.storeInfoTelephoneNum,
                        storeAddress: t.data.storeInfoAddress,
                        timeStrat: t.data.storeInfoBusinessStartTime,
                        timeEnd: t.data.storeInfoBusinessEndTime,
                        time1: a,
                        time2: o
                    });
                }
            }), wx.getStorage({
                key: "storeId",
                success: function(t) {
                    e.setData({
                        storeId: t.data
                    });
                }
            }), wx.getStorage({
                key: "storeId",
                success: function(t) {
                    wx.request({
                        url: o + "skstoremodel/getTableDate",
                        data: {
                            tableTypeStoreInfoStoreid: t.data
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            e.setData({
                                array: t.data
                            });
                        }
                    });
                }
            });
        }
        if (e.setData({
            queuingNumber: !0
        }), a.orderId) {
            var i = a.orderId;
            wx.request({
                url: o + "skordermodel/getOrderById",
                data: {
                    orderType: "Y",
                    id: i
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    console.log(t.data), wx.setStorage({
                        key: "orderId",
                        data: t.data.id
                    });
                    var a = t.data.reservedEstimatedTime.split(" ");
                    console.log(a);
                    var o = a[0];
                    console.log(o);
                    var r = a[1];
                    e.setData({
                        dates: o,
                        times: r,
                        tableCut: t.data.tableName,
                        personNum: t.data.reservedCount,
                        contractName: t.data.reservedName,
                        contractTel: t.data.reservedPhoneNum,
                        textDesc: t.data.orderRemarke,
                        orderCreateTimes: t.data.orderCreateTimes
                    });
                }
            }), e.setData({
                dingdanFlg: !0
            });
        }
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    loadOthers: function(a, r) {
        wx.getStorage({
            key: "connectedSocket",
            success: function(e) {
                e.data ? console.log("============已有socket不连接=============") : t.conSocket(r, o);
            }
        });
        var s = new Date(), d = new Date(s);
        d.setDate(s.getDate() + 30), console.log("=======date2========"), console.log(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()), 
        console.log(s > d), console.log("=======date2========"), e.setData({
            dateEnd: d
        }), wx.getStorage({
            key: "storeInfo",
            success: function(t) {
                wx.setNavigationBarTitle({
                    title: t.data.storeInfoName
                });
                var a = t.data.storeInfoBusinessStartTime.split(":")[0] + t.data.storeInfoBusinessStartTime.split(":")[1], o = t.data.storeInfoBusinessEndTime.split(":")[0] + t.data.storeInfoBusinessEndTime.split(":")[1];
                e.setData({
                    storeInfoHeadImgUrl: t.data.storeInfoHeadImgUrl,
                    storeName: t.data.storeInfoName,
                    storeTel: t.data.storeInfoTelephoneNum,
                    storeAddress: t.data.storeInfoAddress,
                    timeStrat: t.data.storeInfoBusinessStartTime,
                    timeEnd: t.data.storeInfoBusinessEndTime,
                    time1: a,
                    time2: o
                });
            }
        }), wx.getStorage({
            key: "storeId",
            success: function(t) {
                e.setData({
                    storeId: t.data
                });
            }
        }), wx.getStorage({
            key: "storeId",
            success: function(t) {
                wx.request({
                    url: o + "skstoremodel/getTableDate",
                    data: {
                        tableTypeStoreInfoStoreid: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        e.setData({
                            array: t.data
                        });
                    }
                });
            }
        }), wx.setStorage({
            key: "ydFlg",
            data: !0
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "carArray",
            data: []
        }), console.log("222-------------------------"), wx.getStorage({
            key: "userId",
            success: function(t) {
                console.log("userid------------------------------", t.data), wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.request({
                            url: o + "skordermodel/selUnpaidOrder",
                            data: {
                                wechatUserId: t.data,
                                orderType: "Y",
                                storeId: a.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                "操作成功！" == t.data.msg ? t.data.count > 0 && (wx.setStorage({
                                    key: "orderId",
                                    data: t.data.orderId
                                }), wx.request({
                                    url: o + "skordermodel/getOrderById",
                                    data: {
                                        orderType: "Y",
                                        id: t.data.orderId
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        console.error(e);
                                        var t = "destine/destine";
                                        "1" == e.data.orderState ? t = "/pages/index/destine/waitReceipt/waitReceipt?orderId=" + e.data.id + "&orderState=1&orderType=Y" : "2" == e.data.orderState && (t = e.data.foodList.length > 0 ? "/pages/index/takeOut/takeOut?flag=Y&orderId=" + e.data.id + "&editType=N" : "/pages/index/destine/Receipt/Receipt?flag=Y&orderId=" + e.data.id + "&editType=N&orderState=2"), 
                                        wx.redirectTo({
                                            url: t
                                        });
                                    }
                                })) : e.setData({
                                    displayy: "block",
                                    titlename: "获取未支付订单操作失败",
                                    carname: "请联系后台管理员"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    resendIndex: function(t) {
        e.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: o + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: a.globalData.appId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                wx.setStorage({
                    key: "companyInfo",
                    data: e.data
                }), wx.setStorage({
                    key: "companyId",
                    data: e.data.companyInfoId
                });
            }
        }), e.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(a) {
                var o = a.data;
                e.loadOthers(t, o);
            }
        }) : wx.getStorage({
            key: "code",
            success: function(r) {
                if ("" != r.data && null != r.data && void 0 != r.data && "undefined" != r.data && "null" != r.data) {
                    e.setData({
                        code: r.data
                    });
                    var s = r.data;
                    wx.getSetting({
                        success: function(r) {
                            if (r.authSetting["scope.userInfo"]) console.log("============已授权==============="), 
                            wx.getUserInfo({
                                success: function(r) {
                                    e.setData({
                                        userInfo: r.userInfo
                                    }), wx.setStorage({
                                        key: "userName",
                                        data: r.userInfo.nickName
                                    }), wx.request({
                                        url: o + "skmembermodel/getOpenidS",
                                        data: {
                                            code: s,
                                            AppID: a.globalData.appId,
                                            Secret: a.globalData.Secret,
                                            storeUuid: t,
                                            wxUserNickName: r.userInfo.nickName,
                                            headImgUrl: e.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(a) {
                                            var o = a.data.wechatUser.wechatUserId;
                                            if (null != a.data.openid && "" != a.data.openid) {
                                                var r = a.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: r
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: a.data.session_key
                                                }), wx.setStorage({
                                                    key: "openId",
                                                    data: a.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: o
                                                }), wx.setStorage({
                                                    key: "storeId",
                                                    data: t
                                                }), e.loadOthers(t, o);
                                            } else wx.showToast({
                                                title: "登录失败"
                                            });
                                        }
                                    });
                                },
                                fali: function(e) {}
                            }); else {
                                console.log("==============未授权=================");
                                var d = "";
                                d = e.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../../welcome/accredit/accredit?data=" + s + "&store_uuid=" + t + "&imgurl=" + d + "&goYuding=true&scene=" + e.data.scene,
                                    success: function(e) {},
                                    fail: function(e) {}
                                });
                            }
                        },
                        fail: function(e) {}
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        if (a.data) {
                            var o = a.data;
                            e.loadOthers(t, o);
                        } else e.resendIndex(t);
                    },
                    fail: function() {
                        e.resendIndex(t);
                    }
                });
            },
            fail: function(a) {
                e.resendIndex(t);
            }
        });
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this, wx.onSocketMessage(function(a) {
            console.log("===========接收到服务器信息=============="), console.log(a.data), t.getTkInfos(e, a), 
            t.playMusic(e, a);
        }), console.log("onshow"), e.consocket();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), e = this, setTimeout(function() {
            e.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: e.data.shareTitle,
            desc: "",
            imageUrl: e.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + e.data.storeId + "&companyId=" + e.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    consocket: function() {
        console.log("111111"), wx.onSocketOpen(function(e) {
            wx.setStorage({
                key: "connectedSocket",
                data: !0
            }), console.log("WebSocket连接已打开！"), console.log(e);
        }), wx.onSocketClose(function(e) {
            console.log("WebSocket连接已关闭！"), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, o);
                },
                fail: function() {
                    console.log("连接socket失败"), wx.setStorage({
                        key: "connectedSocket",
                        data: !1
                    });
                }
            });
        }), wx.onSocketError(function(e) {
            console.log("WebSocket连接打开失败，请检查！"), console.log(e), wx.setStorage({
                key: "connectedSocket",
                data: !1
            });
        });
    },
    bindDateChange: function(t) {
        console.log("============", t), this.setData({
            dates: t.detail.value
        }), e.checkToClick();
    },
    bindTimeChange: function(t) {
        this.setData({
            times: t.detail.value
        }), e.checkToClick();
    },
    bindCasPickerChange: function(t) {
        this.setData({
            index: t.detail.value,
            tableCut: this.data.array[t.detail.value].tableTypeName,
            tableId: this.data.array[t.detail.value].tableTypeId
        }), e.checkToClick();
    },
    bindInputNum: function(t) {
        this.setData({
            personNum: t.detail.value
        }), e.checkToClick();
    },
    bindInputName: function(t) {
        this.setData({
            contractName: t.detail.value
        }), e.checkToClick();
    },
    bindInputTel: function(t) {
        this.setData({
            contractTel: t.detail.value
        }), a.globalData.contractTel = t.detail.value, e.checkToClick();
    },
    bindTextAreaBlur: function(t) {
        this.setData({
            textDesc: t.detail.value
        }), e.checkToClick();
    },
    checkToClick: function() {
        "" != e.data.dates && "" != e.data.contractName && "" != e.data.times && "" != e.data.tableCut && "" != e.data.contractTel ? e.setData({
            opacity: 1
        }) : e.setData({
            opacity: .3
        });
    },
    waitReceipt: function(t) {
        if (e.data.queuingNumber) if (e.setData({
            queuingNumber: !1
        }), 1 == e.data.dingdanFlg) {
            var a = e.data.dates, s = (p = e.data.times).split(":")[0] + p.split(":")[1];
            console.log("==============="), console.log(s), console.log(e.data.time1), console.log(e.data.time2), 
            console.log("================");
            var d = e.data.tableCut, n = e.data.personNum, i = e.data.contractName, c = e.data.contractTel, u = (e.data.textDesc, 
            r(new Date()));
            console.log("Riqi ==>" + u);
            w = a + " " + p;
            console.log("ShiJian ==>" + w);
            var l = /^\d{0,2}$/, g = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/, m = /^[1-9]\d*$/;
            null == a || "" == a ? (e.setData({
                popErrorMsg: "请选择日期",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == p || "" == p ? (e.setData({
                popErrorMsg: "请选择时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : u >= w ? (e.setData({
                popErrorMsg: "预定时间已过",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : e.data.time1 > e.data.time2 && e.data.time1 > s && e.data.time2 < s ? (e.setData({
                popErrorMsg: "不在营业时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : e.data.time1 < e.data.time2 && e.data.time1 > s ? (e.setData({
                popErrorMsg: "不在营业时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : e.data.time1 < e.data.time2 && e.data.time2 < s ? (e.setData({
                popErrorMsg: "不在营业时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == d || "" == d ? (e.setData({
                popErrorMsg: "请选择桌型",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == n || "" == n ? (e.setData({
                popErrorMsg: "用餐人数不能为空",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : m.test(n) ? l.test(n) ? null == i || "" == i ? (e.setData({
                popErrorMsg: "联系人不能为空",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == c || "" == c ? (e.setData({
                popErrorMsg: "联系电话不能为空",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : g.test(c) ? wx.getStorage({
                key: "orderId",
                success: function(t) {
                    var a = t.data;
                    wx.request({
                        url: o + "skordermodel/updReservedOrder",
                        data: {
                            orderState: "1",
                            id: t.data,
                            reservedEstimatedTime: e.data.dates + " " + e.data.times,
                            orderTableId: e.data.tableId,
                            reservedCount: e.data.personNum,
                            reservedName: e.data.contractName,
                            reservedPhoneNum: e.data.contractTel,
                            orderRemarke: e.data.textDesc
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            wx.setStorage({
                                key: "orderId",
                                data: a
                            }), wx.setStorage({
                                key: "orderDate",
                                data: e.data.dates
                            }), wx.setStorage({
                                key: "orderTime",
                                data: e.data.times
                            }), wx.setStorage({
                                key: "orderTable",
                                data: e.data.tableCut
                            }), wx.setStorage({
                                key: "orderPersonNumber",
                                data: e.data.personNum
                            }), wx.setStorage({
                                key: "orderContractName",
                                data: e.data.contractName
                            }), wx.setStorage({
                                key: "orderContractTel",
                                data: e.data.contractTel
                            }), wx.setStorage({
                                key: "orderDesc",
                                data: e.data.textDesc
                            }), wx.redirectTo({
                                url: "waitReceipt/waitReceipt"
                            });
                        }
                    });
                }
            }) : (e.setData({
                popErrorMsg: "电话号码错误",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : (e.setData({
                popErrorMsg: "用餐人数填写2位以内",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : (e.setData({
                popErrorMsg: "用餐人数必须是数字",
                queuingNumber: !0
            }), e.ohShitfadeOut());
        } else {
            var a = e.data.dates, p = e.data.times, f = p.split(":")[0] + p.split(":")[1];
            console.log("==============="), console.log(f), console.log(e.data.time1), console.log(e.data.time2), 
            console.log("================");
            var d = e.data.tableCut, n = e.data.personNum, i = e.data.contractName, c = e.data.contractTel, u = (e.data.textDesc, 
            r(new Date()));
            console.log("Riqi ==>" + u);
            var w = a + " " + p;
            console.log("ShiJian ==>" + w);
            var l = /^\d{0,2}$/, g = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/, m = /^[1-9]\d*$/;
            null == a || "" == a ? (e.setData({
                popErrorMsg: "请选择正确日期",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == p || "" == p ? (e.setData({
                popErrorMsg: "请选择正确时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : e.data.time1 > e.data.time2 && e.data.time1 > f && e.data.time2 < f ? (e.setData({
                popErrorMsg: "不在营业时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : e.data.time1 < e.data.time2 && e.data.time1 > f ? (e.setData({
                popErrorMsg: "不在营业时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : e.data.time1 < e.data.time2 && e.data.time2 < f ? (e.setData({
                popErrorMsg: "不在营业时间",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : u >= w ? (e.setData({
                popErrorMsg: "预定时间已过",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == d || "" == d ? (e.setData({
                popErrorMsg: "请选择桌型",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == n || "" == n ? (e.setData({
                popErrorMsg: "用餐人数不能为空",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : m.test(n) ? l.test(n) ? null == i || "" == i ? (e.setData({
                popErrorMsg: "联系人不能为空",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : null == c || "" == c ? (e.setData({
                popErrorMsg: "联系电话不能为空",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : g.test(c) ? wx.getStorage({
                key: "storeId",
                success: function(t) {
                    wx.getStorage({
                        key: "userId",
                        success: function(a) {
                            wx.request({
                                url: o + "skordermodel/insertReservedOrder",
                                data: {
                                    wechatUserId: a.data,
                                    storeId: t.data,
                                    reservedEstimatedTime: e.data.dates + " " + e.data.times,
                                    orderTableId: e.data.tableId,
                                    reservedCount: e.data.personNum,
                                    reservedName: e.data.contractName,
                                    reservedPhoneNum: e.data.contractTel,
                                    orderRemarke: e.data.textDesc
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    wx.setStorage({
                                        key: "orderId",
                                        data: t.data.jsonEntity
                                    }), wx.setStorage({
                                        key: "orderDate",
                                        data: e.data.dates
                                    }), wx.setStorage({
                                        key: "orderTime",
                                        data: e.data.times
                                    }), wx.setStorage({
                                        key: "orderTable",
                                        data: e.data.tableCut
                                    }), wx.setStorage({
                                        key: "orderPersonNumber",
                                        data: e.data.personNum
                                    }), wx.setStorage({
                                        key: "orderContractName",
                                        data: e.data.contractName
                                    }), wx.setStorage({
                                        key: "orderContractTel",
                                        data: e.data.contractTel
                                    }), wx.setStorage({
                                        key: "orderDesc",
                                        data: e.data.textDesc
                                    }), wx.redirectTo({
                                        url: "waitReceipt/waitReceipt"
                                    });
                                }
                            });
                        }
                    });
                }
            }) : (e.setData({
                popErrorMsg: "电话号码错误",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : (e.setData({
                popErrorMsg: "用餐人数填写2位以内",
                queuingNumber: !0
            }), e.ohShitfadeOut()) : (e.setData({
                popErrorMsg: "用餐人数必须是数字",
                queuingNumber: !0
            }), e.ohShitfadeOut());
        }
    },
    ohShitfadeOut: function() {
        var t = setTimeout(function() {
            e.setData({
                popErrorMsg: ""
            }), clearTimeout(t);
        }, 3e3);
    }
});

var r = function(e) {
    var t = e.getFullYear(), a = e.getMonth() + 1, o = e.getDate(), r = e.getHours(), d = e.getMinutes();
    return [ t, a, o ].map(s).join("-") + " " + [ r, d ].map(s).join(":");
}, s = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: r
};