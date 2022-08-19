var e, a = require("../../../utils/util.js"), t = getApp().globalData.httpUrl;

Page({
    data: {
        chengedColor: "#666",
        items: [ {
            name: "man",
            value: "男",
            checked: "true"
        }, {
            name: "woman",
            value: "女"
        } ],
        cardName: "",
        httpUrl: t,
        cardNumber: "",
        date: "",
        time: "",
        userName: "",
        tele: "",
        age: 0,
        displayy: "none"
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var o = Date.parse(a.formatTime(new Date()));
        this.setData({
            date: t.detail.value,
            time: o
        });
        var s = Date.parse(t.detail.value);
        e.setData({
            age: Math.floor((o - s) / 31104e6)
        });
    },
    bindKeyInput: function(a) {
        e.setData({
            userName: a.detail.value
        }), console.log(e.data.userName);
    },
    bindKeyInput1: function(a) {
        e.setData({
            tele: a.detail.value
        }), console.log(e.data.tele);
    },
    waitReceipt: function(a) {
        console.log("===waitReceipt start===");
        var o = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/, s = /[0-9_-]/, r = e.data.tele, n = e.data.date, c = e.data.sex, d = e.data.userName, l = e.data.age;
        return null == r || "" == r ? (e.setData({
            popErrorMsg: "联系电话不能为空"
        }), void e.ohShitfadeOut()) : o.test(r) ? "" == d || null == d ? (e.setData({
            popErrorMsg: "用户名不能为空"
        }), void e.ohShitfadeOut()) : s.test(d) ? (e.setData({
            popErrorMsg: "用户名不能为数字下划线等字符"
        }), void e.ohShitfadeOut()) : "" == c || null == c ? (e.setData({
            popErrorMsg: "请选择性别"
        }), void e.ohShitfadeOut()) : "请选择您的生日" == n ? (e.setData({
            popErrorMsg: "请选择出生日期"
        }), void e.ohShitfadeOut()) : l < 0 ? (e.setData({
            popErrorMsg: "请选择正确出生日期"
        }), void e.ohShitfadeOut()) : void wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.request({
                    url: t + "skmembermodel/updateWechatUser",
                    data: {
                        wechatUserId: a.data,
                        wechatUserName: e.data.userName,
                        wechatUserAge: e.data.age,
                        wechatUserPhoneNum: e.data.tele,
                        wechatUserBirthday: e.data.date,
                        wechatUserSex: e.data.sex
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        e.setData({
                            displayy: "block",
                            titlename: "提示",
                            carname: "修改成功"
                        });
                    }
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "获取信息失败"
                });
            }
        }) : (e.setData({
            popErrorMsg: "电话号码错误"
        }), void e.ohShitfadeOut());
    },
    chkOrder: function(e) {
        wx.switchTab({
            url: "../../user/user"
        });
    },
    ohShitfadeOut: function() {
        var a = setTimeout(function() {
            e.setData({
                popErrorMsg: ""
            }), clearTimeout(a);
        }, 3e3);
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value), console.log("e.detail.value：", a.detail.value), 
        e.setData({
            sex: a.detail.value
        });
    },
    onLoad: function(o) {
        e = this, a.getShareInfos(e, t), a.setCompanyId(e, o), a.setStoreId(e), a.setStoreInfo(e);
        var s = a.formatDate(new Date());
        e.setData({
            zuijiao: s
        }), wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(o) {
                        wx.request({
                            url: t + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: o.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                var t = e.data.items;
                                console.log(a.data.wechatUserSex);
                                for (var o in t) console.log(t[o].value), console.log(a.data.wechatUserSex), t[o].value == a.data.wechatUserSex ? t[o].checked = !0 : t[o].checked = !1;
                                console.log(t), e.setData({
                                    cardInfo: a.data,
                                    items: t,
                                    age: a.data.wechatUserAge,
                                    date: a.data.wechatUserBirthday,
                                    tele: a.data.wechatUserPhoneNum,
                                    userName: a.data.wechatUserName,
                                    sex: a.data.wechatUserSex
                                }), e.data.isVip ? e.setData({
                                    vipColor: "#ffbf20"
                                }) : e.setData({
                                    vipColor: "#ccc"
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "companyId",
            success: function(a) {
                a.data;
                wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        var o = a.data;
                        wx.getStorage({
                            key: "cardId",
                            success: function(a) {
                                wx.getStorage({
                                    key: "storeId",
                                    success: function(s) {
                                        wx.request({
                                            url: t + "skmembermodel/findVipCardById",
                                            data: {
                                                cardId: a.data,
                                                userId: o,
                                                storeId: s.data
                                            },
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            success: function(a) {
                                                var t = a.data.color;
                                                e.chengeColor(t), e.setData({
                                                    cardInfos: a.data
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
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
                    a.conSocket(e.data, t);
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
    }
});