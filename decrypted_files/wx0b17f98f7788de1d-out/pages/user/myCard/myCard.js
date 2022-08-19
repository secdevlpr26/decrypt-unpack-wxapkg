var e, a = require("../../../utils/util.js"), t = (require("../../../module/getPhone"), 
getApp()), o = t.globalData.httpUrl;

t.globalData.testhttpUrl;

Page({
    data: {
        displayy_0: "none",
        cartArr: [ {
            name: "man",
            value: "男",
            checked: "true"
        }, {
            name: "woman",
            value: "女"
        } ],
        age: 0,
        date: "请选择您的生日",
        time: "",
        sex: "男",
        userName: "",
        tele: "",
        cardName: "",
        cardNumber: "",
        cardId: "",
        httpUrl: o,
        hasClickedButton: !1,
        phone: ""
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var o = Date.parse(a.formatTime(new Date()));
        e.setData({
            date: t.detail.value,
            time: o
        });
        var r = Date.parse(t.detail.value);
        e.setData({
            age: Math.floor((o - r) / 31104e6)
        });
    },
    getUserPhone: function(a) {
        "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg || wx.getStorage({
            key: "session_key",
            success: function(r) {
                console.log(r.data + "_key"), wx.request({
                    url: o + "skmembermodel/decrypt",
                    data: {
                        encryptedData: a.detail.encryptedData,
                        iv: a.detail.iv,
                        appId: t.globalData.appId,
                        sessionKey: r.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        e.setData({
                            phone: a.data + ""
                        });
                    },
                    fail: function(e) {
                        console.log("Error decrypt", e);
                    }
                });
            },
            fail: function(e) {
                console.log("=====getStorage session_key err====="), console.log(e);
            }
        });
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value), console.log("e.detail.value：", a.detail.value), 
        e.setData({
            sex: a.detail.value
        });
    },
    bindKeyInputName: function(a) {
        e.setData({
            userName: a.detail.value
        }), console.log(e.data.userName);
    },
    goDetail: function(a) {
        a.detail.userInfo && (e.setData({
            shouquan: !1
        }), e.onLoad());
    },
    onLoad: function(t) {
        console.log("====onLoad====", t);
        var r = wx.getStorageSync("phone");
        this.setData({
            phone: r
        }), e = this, a.getShareInfos(e, o), a.setStoreInfo(e), a.setStoreName(e), "0" == t.toGotoChuZhi && e.setData({
            toGotoChuZhi: !0,
            saoma: t.saoma
        }), "0" == t.toGotoActive ? e.setData({
            toGotoActive: !0,
            toGoTuanGou: !1,
            saoma: t.saoma
        }) : "0" == t.toGoTuanGou ? e.setData({
            toGoTuanGou: !0,
            toGotoActive: !1
        }) : e.setData({
            toGotoActive: !1,
            toGoTuanGou: !1
        }), "1" == t.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var s = decodeURIComponent(t.scene);
        if ("undefined" != s && void 0 != s && null != s && "null" != s) {
            console.log("呵呵呵俄俄呵呵恶化");
            var n = s.split(",")[0].replace('"', "");
            s.split(",")[1].replace('"', "");
            e.setData({
                scene: s,
                saoma: !0
            }), wx.request({
                url: o + "skstoremodel/findStoreById",
                data: {
                    pid: n
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    e.setData({
                        storeInfo: t.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: t.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: t.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: t.data.storeInfoName
                    });
                    var r = t.data.storeInfoStoreId;
                    e.setData({
                        storeId: r
                    }), wx.setStorageSync("storeId", r), a.getShareInfos(e, o), e.resendIndex(r);
                }
            });
        }
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: o + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                "v" == a.data.wechatUserStoreIdentity ? wx.redirectTo({
                                    url: "receiveMyCard/receiveMyCard"
                                }) : wx.request({
                                    url: o + "skcouponmodel/selCouponByReceive",
                                    data: {
                                        userId: a.data,
                                        applyStoreId: t.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(a) {
                                        console.log(a.data), e.setData({
                                            couponCnt: a.data.length
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "companyId",
            success: function(a) {
                e.setData({
                    companyId: a.data
                }), wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        e.setData({
                            storeId: t.data
                        }), wx.request({
                            url: o + "skmembermodel/findVipCardBy",
                            data: {
                                companyId: a.data,
                                storeId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                e.setData({
                                    cardInfos: a.data,
                                    cardId: a.data.id
                                });
                                var t = a.data.id;
                                wx.setStorage({
                                    key: "cardId",
                                    data: t
                                });
                                var o = a.data.color;
                                e.chengeColor(o);
                            }
                        });
                    }
                });
            }
        });
        var d = a.formatDate(new Date()), c = "1950-" + a.formatDate(new Date()).split("-")[1] + "-" + a.formatDate(new Date()).split("-")[2];
        e.setData({
            zuijiao: d,
            startTime: c
        }), wx.getStorage({
            key: "cardId",
            success: function(a) {
                e.setData({
                    cardId: a.data
                });
            }
        }), wx.getStorage({
            key: "vipCard",
            success: function(a) {
                console.log("++zheza", a), e.setData({
                    cardId: a.data.cardId
                });
            }
        }), e.initMemberInfo();
    },
    resendIndex: function(a) {
        e.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: o + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: t.globalData.appId
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
            success: function(e) {
                e.data;
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
                                            AppID: t.globalData.appId,
                                            Secret: t.globalData.Secret,
                                            storeUuid: a,
                                            wxUserNickName: r.userInfo.nickName,
                                            headImgUrl: e.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            var t = e.data.wechatUser.wechatUserId;
                                            if (null != e.data.openid && "" != e.data.openid) {
                                                var o = e.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: o
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: e.data.session_key
                                                }), wx.setStorage({
                                                    key: "openId",
                                                    data: e.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: t
                                                }), wx.setStorage({
                                                    key: "storeId",
                                                    data: a
                                                });
                                            } else wx.showToast({
                                                title: "登录失败"
                                            });
                                        }
                                    });
                                },
                                fali: function(e) {}
                            }); else {
                                console.log("==============未授权=================");
                                var n = "";
                                n = e.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../../welcome/accredit/accredit?data=" + s + "&store_uuid=" + a + "&imgurl=" + n + "&goHuiyuan=true&scene=" + e.data.scene,
                                    success: function(e) {},
                                    fail: function(e) {}
                                });
                            }
                        },
                        fail: function(e) {}
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(t) {
                        if (t.data) t.data; else e.resendIndex(a);
                    },
                    fail: function() {
                        e.resendIndex(a);
                    }
                });
            },
            fail: function(t) {
                e.resendIndex(a);
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
        e = this, wx.onSocketMessage(function(t) {
            console.log("===========接收到服务器信息=============="), console.log(t.data), a.getTkInfos(e, t), 
            a.playMusic(e, t);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    a.conSocket(e.data, o);
                }
            });
        });
    },
    onHide: function() {},
    onUnload: function() {
        a.closeSock();
    },
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
    receiveMyCard: function(a) {
        console.log("========开始提交会员信息==========="), console.log("======ee==");
        var t = a.detail.formId;
        console.log(t, "=======提交的手机号======", e.data.phone);
        var r = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/, s = /[0-9]/, n = e.data.phone, d = e.data.date, c = e.data.sex, i = e.data.userName, l = e.data.age;
        if (!e.data.hasClickedButton) {
            if (null == n || "" == n) return e.setData({
                popErrorMsg: "联系电话不能为空"
            }), void e.ohShitfadeOut();
            if (!r.test(n)) return e.setData({
                popErrorMsg: "电话号码错误"
            }), void e.ohShitfadeOut();
            if ("" == i || null == i) return e.setData({
                popErrorMsg: "用户名不能为空"
            }), void e.ohShitfadeOut();
            if (s.test(i)) return e.setData({
                popErrorMsg: "用户名不能为数字"
            }), void e.ohShitfadeOut();
            if ("" == c || null == c) return e.setData({
                popErrorMsg: "请选择性别"
            }), void e.ohShitfadeOut();
            if ("请选择您的生日" == d) return e.setData({
                popErrorMsg: "请选择出生日期"
            }), void e.ohShitfadeOut();
            if (l < 0) return e.setData({
                popErrorMsg: "请选择正确出生日期"
            }), void e.ohShitfadeOut();
            e.setData({
                hasClickedButton: !0
            }), console.log("=======开始获取缓存========"), wx.getStorage({
                key: "userId",
                success: function(a) {
                    wx.getStorage({
                        key: "storeId",
                        success: function(r) {
                            console.log("=======获取缓存完成========"), wx.request({
                                url: o + "skmembermodel/updateWechatUserBecomeMember",
                                data: {
                                    wechatUserId: a.data,
                                    wechatUserName: e.data.userName,
                                    wechatUserAge: e.data.age,
                                    wechatUserPhoneNum: e.data.phone,
                                    wechatUserBirthday: e.data.date,
                                    wechatUserSex: e.data.sex,
                                    vipCardId: e.data.cardId,
                                    wechatUserStoreStoreInfoStoreId: r.data,
                                    formId: t
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(a) {
                                    console.log("========领取成功======="), console.log(a), 1 == a.data ? wx.showToast({
                                        title: "领取成功",
                                        duration: 2e3,
                                        icon: "success",
                                        success: function() {
                                            e.setData({
                                                hasClickedButton: !1
                                            }), e.data.toGotoActive ? (console.log("======判断扫码======", e.data.saoma), e.data.saoma ? wx.redirectTo({
                                                url: "../../active/active?saoma=0&secondIn=1"
                                            }) : wx.redirectTo({
                                                url: "../../active/active?secondIn=1"
                                            })) : e.data.toGotoChuZhi ? e.data.saoma && wx.redirectTo({
                                                url: "/pages/user/myCash/myCash?saoma=0&secondIn=1"
                                            }) : e.data.toGoTuanGou ? (wx.navigateToMiniProgram({
                                                appId: "wxe89bfe0adae77728"
                                            }), wx.redirectTo({
                                                url: "../myCard/receiveMyCard/receiveMyCard?hasReceived=1"
                                            })) : wx.redirectTo({
                                                url: "../myCard/receiveMyCard/receiveMyCard?hasReceived=1"
                                            });
                                        }
                                    }) : e.setData({
                                        displayy_0: "block",
                                        carname_0: "领取失败,请刷新网络再试试哦 ！",
                                        titlename_0: "提示信息"
                                    });
                                }
                            });
                        }
                    });
                }
            }), console.log("========开始提交会员信息结束===========");
        }
    },
    chkOrder_0: function() {
        e.onLoad();
    },
    chkOrde_0: function() {},
    ohShitfadeOut: function() {
        var a = setTimeout(function() {
            e.setData({
                popErrorMsg: ""
            }), clearTimeout(a);
        }, 3e3);
    },
    chengeColor: function(a) {
        "Color010" == a && e.setData({
            chengedColor: "#63b359"
        }), "Color020" == a && e.setData({
            chengedColor: "#2c9f67"
        }), "Color030" == a && e.setData({
            chengedColor: "#509fc9"
        }), "Color040" == a && e.setData({
            chengedColor: "#5885cf"
        }), "Color050" == a && e.setData({
            chengedColor: "#9062c0"
        }), "Color060" == a && e.setData({
            chengedColor: "#d09a45"
        }), "Color070" == a && e.setData({
            chengedColor: "#e4b138"
        }), "Color080" == a && e.setData({
            chengedColor: "#ee903c"
        }), "Color081" == a && e.setData({
            chengedColor: "#f08500"
        }), "Color082" == a && e.setData({
            chengedColor: "#a9d92d"
        }), "Color090" == a && e.setData({
            chengedColor: "#dd6549"
        }), "Color100" == a && e.setData({
            chengedColor: "#cc463d"
        }), "Color101" == a && e.setData({
            chengedColor: "#cf3e36"
        }), "Color102" == a && e.setData({
            chengedColor: "#5E6671"
        });
    },
    initMemberInfo: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(r) {
                        wx.request({
                            url: o + "skmembermodel/selEquitycardByWX",
                            data: {
                                userId: t.data,
                                storeId: r.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                if (t.data.isExistence) wx.getStorage({
                                    key: "userId",
                                    success: function(a) {
                                        wx.getStorage({
                                            key: "storeId",
                                            success: function(t) {
                                                wx.request({
                                                    url: o + "skmembermodel/findWechatUserById",
                                                    data: {
                                                        wechatUserId: a.data,
                                                        wechatUserStoreStoreInfoStoreId: t.data
                                                    },
                                                    method: "POST",
                                                    header: {
                                                        "content-type": "application/x-www-form-urlencoded"
                                                    },
                                                    success: function(a) {
                                                        var t = e.data.cartArr;
                                                        e.setData({
                                                            cartArr: t,
                                                            age: a.data.wechatUserAge,
                                                            date: a.data.wechatUserBirthday,
                                                            tele: a.data.wechatUserPhoneNum,
                                                            userName: a.data.wechatUserName,
                                                            sex: a.data.wechatUserSex
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }); else {
                                    var r = e.data.cartArr, s = Date.parse(a.formatTime(new Date()));
                                    e.setData({
                                        date: "1990-01-01",
                                        time: s
                                    });
                                    var n = Date.parse(e.data.date);
                                    e.setData({
                                        cartArr: r,
                                        age: Math.floor((s - n) / 31104e6),
                                        date: "1990-01-01",
                                        tele: "",
                                        userName: "",
                                        sex: "男"
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
    },
    goToUser: function() {
        wx.switchTab({
            url: "../user"
        });
    }
});