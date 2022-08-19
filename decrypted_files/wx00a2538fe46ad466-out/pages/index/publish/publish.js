var t = getApp();

Page({
    data: {
        vid: null,
        list: {},
        imglist: [],
        inputval: 30,
        checkstatus: !1,
        listid: "",
        telvalue: "",
        date: "2017.11.20",
        time: "15：07",
        token: "",
        user: {}
    },
    topullimg: function() {
        var e = this, a = e.data.imglist;
        wx.chooseImage({
            count: 9,
            success: function(i) {
                for (var o = i.tempFiles, n = 0; n < o.length; n++) !function(i) {
                    wx.showLoading({
                        title: "上传中..."
                    }), wx.uploadFile({
                        url: t.globalData.url + "i=" + t.globalData.publicid + "&c=utility&a=file&do=upload&type=image",
                        filePath: o[i].path,
                        name: "file",
                        header: {
                            Cookie: t.globalData.session_login_id,
                            "content-type": "multipart/form-data"
                        },
                        success: function(t) {
                            if (200 == t.statusCode && "uploadFile:ok" == t.errMsg) {
                                var n = JSON.parse(t.data);
                                o[i].id = n.id, o[i].filename = n.filename, o[i].path = n.url, a.push(o[i]), e.setData({
                                    imglist: a
                                });
                            }
                        },
                        fail: function(t) {
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
                }(n);
            }
        });
    },
    toimgclear: function(e) {
        var a = this;
        e.currentTarget.dataset.index;
        if (this.data.vid) {
            var i = e.currentTarget.dataset.filename;
            wx.showModal({
                title: "图片删除",
                content: "此图片删除后将无法找回，是否确定删除？",
                success: function(e) {
                    e.confirm && wx.request({
                        url: t.globalData.url + t.globalData.parameter + "&do=del_images&id=" + i,
                        header: {
                            Cookie: t.globalData.session_login_id,
                            "content-type": "multipart/form-data"
                        },
                        success: function(t) {
                            if ("1" == t.data.status) {
                                for (var e = a.data.imglist, o = 0; o < e.length; o++) i == e[o].filename && e.splice(o, 1);
                                a.setData({
                                    imglist: e
                                });
                            } else wx.showToast({
                                title: "删除失败",
                                image: "/images/tongcheng/icon-failed.png",
                                duration: 1500,
                                mask: !0
                            });
                        }
                    });
                }
            });
        } else {
            var o = e.currentTarget.dataset.id;
            wx.showModal({
                title: "图片删除",
                content: "确定要删除该图片吗？",
                success: function(e) {
                    e.confirm && wx.request({
                        url: t.globalData.url + "i=" + t.globalData.publicid + "&c=utility&a=file&do=delete&type=image&id=" + o,
                        header: {
                            Cookie: t.globalData.session_login_id,
                            "content-type": "multipart/form-data"
                        },
                        success: function(t) {
                            if (200 == t.statusCode && "request:ok" == t.errMsg) if ("0" == t.data.message.errno) {
                                for (var e = a.data.imglist, i = 0; i < e.length; i++) o == e[i].id && e.splice(i, 1);
                                a.setData({
                                    imglist: e
                                });
                            } else wx.showToast({
                                title: t.data.message.message,
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
                complete: function() {}
            });
        }
    },
    tochoose: function(t) {
        for (var e = this.data.imglist, a = [], i = 0; i < e.length; i++) a.push(e[i].path);
        wx.previewImage({
            urls: a
        });
    },
    bindDateChange: function(t) {
        this.setData({
            date: t.detail.value
        });
    },
    bindTimeChange: function(t) {
        this.setData({
            time: t.detail.value
        });
    },
    formSubmit: function(e) {
        var a = this, i = a.data.vid, o = e.detail.value;
        o.info_top_days = !!i || o.info_top_days, o.info_validity = a.data.date + " " + a.data.time;
        for (var n = this.data.checkstatus, s = this.data.listid, l = this.data.imglist, d = this.data.token, r = this.data.list, u = this.data.user, c = [], f = 0; f < l.length; f++) c.push(l[f].filename);
        var g;
        g = n ? 2 : 1;
        for (var m = [], h = 0; h < r.list_custom_content.length; h++) m.push(o["list_custom_content" + h]);
        if (o.info_address && o.info_content && o.info_name && o.info_price && o.info_tel && o.info_title && o.info_top_days && o.info_validity && "" != c) if (/^1[34578]\d{9}$|\d{3}-\d{8}|\d{4}-\d{7}/.test(o.info_tel)) {
            var p = t.globalData.url + t.globalData.parameter + (i ? "&do=info_edit" : "&do=form&list=" + s), _ = {};
            i ? (_ = {
                vid: i,
                info_address: o.info_address,
                info_content: o.info_content,
                info_name: o.info_name,
                info_price: o.info_price,
                info_tel: o.info_tel,
                info_title: o.info_title,
                info_top_days: o.info_top_days,
                info_validity: o.info_validity
            }, m.forEach(function(t, e, a) {
                _["list_custom_content[" + e + "]"] = t;
            }), c.forEach(function(t, e, a) {
                _["picture[" + e + "]"] = t;
            })) : _ = {
                info_address: o.info_address,
                info_content: o.info_content,
                info_name: o.info_name,
                info_price: o.info_price,
                info_tel: o.info_tel,
                info_title: o.info_title,
                info_top_days: o.info_top_days,
                info_validity: o.info_validity,
                info_top: g,
                picture: c,
                list_custom_content: m,
                token: d
            }, wx.request({
                url: p,
                header: {
                    Cookie: t.globalData.session_login_id,
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: _,
                success: function(t) {
                    if (1 == t.data.status) if (2 == g && r.list_top_money > 0 || 3 != u.upid && r.list_addinfo_money > 0) {
                        var e = t.data.result.order_num;
                        wx.showToast({
                            title: t.data.result.message,
                            image: "/images/tongcheng/icon-nomore.png",
                            duration: 1e3
                        }), setTimeout(function() {
                            wx.redirectTo({
                                url: "/pages/merch/merch-pay/merch-pay?order_num=" + e
                            });
                        }, 1e3);
                    } else i = i || t.data.result.vid, wx.showToast({
                        title: t.data.result.message,
                        image: "/images/tongcheng/icon-nomore.png",
                        duration: 1e3
                    }), setTimeout(function() {
                        wx.redirectTo({
                            url: "/pages/index/detail/detail?vid=" + i
                        });
                    }, 1e3); else wx.showToast({
                        title: t.data.result.message,
                        image: "/images/tongcheng/icon-failed.png"
                    });
                }
            });
        } else wx.showToast({
            title: "请正确填写号码",
            image: "/images/tongcheng/icon-nomore.png"
        }); else "" == c ? wx.showToast({
            title: "请完整上传图片",
            image: "/images/tongcheng/icon-nomore.png"
        }) : wx.showToast({
            title: "请填写完整信息",
            image: "/images/tongcheng/icon-nomore.png"
        });
    },
    tocheck: function(t) {
        var e = this.data.checkstatus;
        this.setData({
            checkstatus: !e
        });
    },
    bindinput: function(t) {
        var e = this, a = t.detail.value;
        e.setData({
            inputval: a
        });
    },
    toaddday: function() {
        var t = this, e = t.data.inputval;
        e++, t.setData({
            inputval: e
        });
    },
    tolessday: function() {
        var t = this, e = t.data.inputval;
        1 == e || e--, t.setData({
            inputval: e
        });
    },
    getType: function(e) {
        var a = this;
        wx.showLoading({
            title: "正在加载"
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=form&list=" + e,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var i = t.data.result.list, o = t.data.result.token, n = t.data.result.user, s = new Date().toLocaleDateString().replace(/['/']/g, "-"), l = new Date().toTimeString().substr(0, 5);
                    if (new Date().getMonth() + 4 > 12) var d = new Date().getFullYear() + 1, r = new Date().getMonth() - 8; else var d = new Date().getFullYear(), r = new Date().getMonth() + 1;
                    var u = d + "-" + r + "-" + new Date().getDate();
                    a.setData({
                        list: i,
                        token: o,
                        date: s,
                        time: l,
                        user: n,
                        datefuture: u,
                        listid: e
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getInfo: function(e) {
        var a = this;
        this.setData({
            vid: e
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=info_edit&vid=" + e,
            header: {
                Cookie: t.globalData.session_login_id
            },
            success: function(e) {
                var i = e.data.result.list, o = [];
                e.data.result.picture.forEach(function(e, a, i) {
                    o[a] = {
                        id: e.picture_id,
                        path: t.globalData.imgurl + e.picture_url,
                        filename: e.picture_url
                    };
                });
                var n = new Date(e.data.result.info_validity), s = new Date(e.data.result.info_validity), l = new Date(e.data.result.info_validity);
                l.setMonth(l.getMonth() + 3), n = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate(), 
                l = l.getFullYear() + "-" + (l.getMonth() + 1) + "-" + l.getDate(), s = s.getHours() + ":" + s.getMinutes(), 
                a.setData({
                    list: i,
                    date: n,
                    datefuture: l,
                    time: s,
                    imglist: o
                });
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "网络连接失败，请稍后重试",
                    showCancel: !1
                });
            }
        });
    },
    onLoad: function(t) {
        var e = this;
        t.vid ? (wx.setNavigationBarTitle({
            title: "修改信息"
        }), e.getInfo(t.vid)) : (wx.setNavigationBarTitle({
            title: "发布" + t.title + "信息"
        }), e.getType(t.id));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});