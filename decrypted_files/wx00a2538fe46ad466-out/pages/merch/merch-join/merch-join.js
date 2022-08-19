var e = getApp();

Page({
    data: {
        make: {},
        hangye: {},
        selectradio: [ {
            title: "一年 费用",
            money: "",
            selecthidden: !1
        }, {
            title: "二年 费用",
            money: "",
            selecthidden: !0
        }, {
            title: "三年 费用",
            money: "",
            selecthidden: !0
        } ],
        selectaddress: "",
        shop_year: 1,
        imgurls: "/images/tongcheng/icon-addimage.png",
        masterimg: [],
        adsimg: [],
        codeimg: [],
        hangyeid: "",
        lat: "",
        lng: ""
    },
    toselect: function(e) {
        for (var a = this, t = e.currentTarget.dataset.index, o = a.data.selectradio, i = 0; i < o.length; i++) o[i].selecthidden = t != i;
        this.setData({
            shop_year: t + 1,
            selectradio: o
        });
    },
    toselectaddress: function() {
        var e = this;
        wx.chooseLocation({
            success: function(a) {
                e.setData({
                    selectaddress: a.address,
                    lat: a.latitude,
                    lng: a.longitude
                });
            }
        });
    },
    getimginfo: function(a, t) {
        var o = this;
        wx.showLoading({
            title: "上传中..."
        }), wx.uploadFile({
            url: e.globalData.url + "i=" + e.globalData.publicid + "&c=utility&a=file&do=upload&type=image",
            filePath: a[0].path,
            name: "file",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "multipart/form-data"
            },
            success: function(e) {
                if (200 == e.statusCode && "uploadFile:ok" == e.errMsg) {
                    var i = JSON.parse(e.data);
                    a[0].id = i.id, a[0].filename = i.filename, a[0].path = i.url, "master" == t ? o.setData({
                        masterimg: a
                    }) : o.setData({
                        codeimg: a
                    });
                }
            },
            fail: function(e) {
                wx.showToast({
                    title: "图片上传失败",
                    image: "/images/tongcheng/icon-failed.png",
                    duration: 1500,
                    mask: !0
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    tomaster: function(e) {
        var a = this, t = e.currentTarget.dataset.type;
        a.data.masterimg, a.data.codeimg;
        wx.chooseImage({
            count: 1,
            success: function(e) {
                var o = e.tempFiles;
                a.getimginfo(o, t);
            }
        });
    },
    toads: function() {
        var a = this;
        wx.chooseImage({
            success: function(t) {
                for (var o = a.data.adsimg, i = t.tempFiles, s = 0; s < i.length; s++) !function(t) {
                    -1 == o.indexOf(i[t]) && (wx.showLoading({
                        title: "上传中..."
                    }), wx.uploadFile({
                        url: e.globalData.url + "i=" + e.globalData.publicid + "&c=utility&a=file&do=upload&type=image",
                        filePath: i[t].path,
                        name: "file",
                        header: {
                            Cookie: e.globalData.session_login_id,
                            "content-type": "multipart/form-data"
                        },
                        success: function(e) {
                            if (200 == e.statusCode && "uploadFile:ok" == e.errMsg) {
                                var s = JSON.parse(e.data);
                                i[t].id = s.id, i[t].filename = s.filename, i[t].path = s.url, o.push(i[t]), a.setData({
                                    adsimg: o
                                });
                            }
                        },
                        fail: function(e) {
                            wx.showToast({
                                title: "图片上传失败",
                                image: "/images/tongcheng/icon-failed.png",
                                duration: 1500,
                                mask: !0
                            });
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    }));
                }(s);
            }
        });
    },
    tolook: function(e) {
        var a = e.currentTarget.dataset.image, t = e.currentTarget.dataset.type, o = this.data.adsimg;
        "ads" == t ? wx.previewImage({
            current: a,
            urls: o
        }) : wx.previewImage({
            urls: [ a ]
        });
    },
    toimgdelete: function(a, t, o) {
        var i = this;
        wx.request({
            url: e.globalData.url + "i=" + e.globalData.publicid + "&c=utility&a=file&do=delete&type=image&id=" + o,
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "multipart/form-data"
            },
            success: function(e) {
                if (200 == e.statusCode && "request:ok" == e.errMsg) if ("0" == e.data.message.errno) if ("ads" == a) {
                    for (var o = i.data.adsimg, s = 0; s < o.length; s++) t == s && o.splice(s, 1);
                    i.setData({
                        adsimg: o
                    });
                } else "master" == a ? i.setData({
                    masterimg: []
                }) : i.setData({
                    codeimg: []
                }); else wx.showToast({
                    title: e.data.message.message,
                    icon: "success",
                    duration: 1e3,
                    mask: !0
                }); else wx.showToast({
                    title: "删除失败",
                    image: "/images/tongcheng/icon-failed.png",
                    duration: 1500,
                    mask: !0
                });
            }
        });
    },
    todelete: function(e) {
        var a = this, t = e.currentTarget.dataset.type, o = e.currentTarget.dataset.index, i = e.currentTarget.dataset.id;
        wx.showModal({
            title: "提示",
            content: "您确定删除该图片吗？",
            success: function(e) {
                e.confirm && a.toimgdelete(t, o, i);
            }
        });
    },
    tosetjoin: function(a) {
        for (var t = this, o = a.detail.value, i = this.data.shop_year, s = this.data.masterimg, n = this.data.adsimg, d = this.data.codeimg, l = [], r = 0; r < n.length; r++) l.push(n[r].filename);
        o.shop_address && o.shop_content && o.shop_name && o.shop_special && o.shop_tel && o.shop_wechat && o.shop_worktime && "" != s && "" != d && "" != l ? /^1[34578]\d{9}$|\d{3}-\d{8}|\d{4}-\d{7}/.test(o.shop_tel) ? wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=join",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                shop_address: o.shop_address,
                shop_content: o.shop_content,
                shop_name: o.shop_name,
                shop_special: o.shop_special,
                shop_tel: o.shop_tel,
                shop_wechat: o.shop_wechat,
                shop_wechat_qrcode: d[0].filename,
                shop_worktime: o.shop_worktime,
                shop_pic_small: s[0].filename,
                shop_year: i,
                picture: l,
                lat: t.data.lat,
                lng: t.data.lng,
                hangye: t.data.hangyeid
            },
            success: function(e) {
                var a = t.data.make;
                if (1 == e.data.status) if (2 == a.make_addshop_if) {
                    var o = e.data.result.order_num;
                    wx.showToast({
                        title: e.data.result.message,
                        image: "/images/tongcheng/icon-nomore.png",
                        duration: 1e3
                    }), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/merch/merch-pay/merch-pay?order_num=" + o
                        });
                    }, 1e3);
                } else if (1 == a.make_addshop_if) if (3 == a.make_shop_pid) {
                    var i = e.data.result.vid;
                    wx.showToast({
                        title: e.data.result.message,
                        image: "/images/tongcheng/icon-nomore.png",
                        duration: 1e3
                    }), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/merch/merch-detail/merch-detail?vid=" + i
                        });
                    }, 1e3);
                } else wx.showToast({
                    title: e.data.result.message,
                    image: "/images/tongcheng/icon-nomore.png",
                    duration: 1e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/merch/merch"
                    });
                }, 1e3);
            },
            complete: function() {}
        }) : wx.showToast({
            title: "请正确填写号码",
            image: "/images/tongcheng/icon-nomore.png"
        }) : "" == s || "" == d || "" == l ? wx.showToast({
            title: "请完整上传图片",
            image: "/images/tongcheng/icon-nomore.png"
        }) : wx.showToast({
            title: "请填写完整信息",
            image: "/images/tongcheng/icon-nomore.png"
        });
    },
    onLoad: function(a) {
        var t = this;
        wx.showLoading({
            title: "正在加载"
        }), wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=join&hangye=" + a.id,
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                if (1 == e.data.status) {
                    var o = e.data.result.make, i = e.data.result.hangye, s = t.data.selectradio;
                    2 == o.make_addshop_if ? (s[0].money = o.make_addshop_money + "元", s[1].money = o.make_addshop_money_two + "元", 
                    s[2].money = o.make_addshop_money_three + "元") : (s[0].money = "免费", s[1].money = "免费", 
                    s[2].money = "免费"), t.setData({
                        make: o,
                        hangye: i,
                        selectradio: s,
                        money: o.make_addshop_money,
                        hangyeid: a.id
                    });
                }
            },
            complete: function(e) {
                wx.hideLoading();
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});