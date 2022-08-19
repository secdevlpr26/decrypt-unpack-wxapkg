require("../../../utils/util");

var t = require("../../template-cart/template-form2/template-form.js"), a = require("../../../qqmap/qqmap-wx-jssdk.js"), e = getApp(), o = !1;

Page({
    data: {
        loading: !1,
        disabled: !0,
        location: {
            longitude: 0,
            latitude: 0,
            address: "所在位置"
        },
        photoInfo: {
            src: [],
            progress: []
        },
        requestList: []
    },
    placeholder: function(a) {
        t.placeholder(this, a);
    },
    txtInput: function(a) {
        var e = this;
        t.txtInput(this, a, function(t, a, i) {
            e.setData({
                disabled: !(a && !o)
            });
        });
    },
    picIns: function(a) {
        var e = this;
        setTimeout(function() {
            t.picIns(e, a, function(t, a, o) {
                t.forEach(function(t) {
                    e.uploadFile(t);
                });
            });
        }, 200);
    },
    uploadFile: function(t) {
        var a = this.data.requestList;
        a.push(t), this.setData({
            requestList: a
        }), o || (this.setData({
            disabled: !0
        }), this.requestFile(0));
    },
    requestFile: function(t) {
        var a = this, i = a.data.form, n = a.data.photoInfo, s = n.progress, l = s.push(0), c = n.src;
        (o = wx.uploadFile({
            url: e.globalData.url + "i=" + e.globalData.publicid + "&c=utility&a=file&do=upload&type=image",
            filePath: a.data.requestList[t],
            name: "file",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "multipart/form-data"
            },
            success: function(e) {
                var i = JSON.parse(e.data);
                c.push(i.filename), a.setData({
                    photoInfo: n
                }), a.data.requestList[t + 1] ? a.requestFile(t + 1) : (a.setData({
                    requestList: [],
                    disabled: !a.data.txt.talk.length
                }), o = !1);
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "网络连接失败，请稍后重试",
                    showCancel: !1,
                    success: function() {
                        var t = {
                            currentTarget: {
                                dataset: {
                                    formPic: "photo",
                                    formPicIndex: l - 1
                                }
                            }
                        };
                        i.picDel(t, function() {
                            a.setData({
                                photoInfo: n,
                                requestList: []
                            }), o = !1;
                        });
                    }
                });
            }
        })).onProgressUpdate(function(t) {
            s[l - 1] = t.progress, a.setData({
                photoInfo: n
            });
        });
    },
    picDel: function(a) {
        var e = this;
        o || t.picDel(this, a, function(t) {
            var a = e.data.pic, o = (a.photo, e.data.photoInfo);
            o.progress.splice(t, 1), o.src.splice(t, 1), e.setData({
                pic: a
            });
        });
    },
    picPreview: function(a) {
        t.picPreview(this, a);
    },
    formSubmit: function(t) {
        var a = this, o = {};
        o.talk_content = a.data.txt.talk.value, o.talk_weizhi = 1, o.talk_jingwei = a.data.location.longitude + "," + a.data.location.latitude, 
        o.talk_address = a.data.location.address ? a.data.location.address : "", o.type = 2, 
        a.data.photoInfo.src.forEach(function(t, a, e) {
            o["picture[" + a + "]"] = t;
        }), wx.showLoading({
            title: "提交中",
            mask: !0
        }), wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=talk_add",
            method: "POST",
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            data: o,
            success: function(t) {
                var a = t.data.result.message, e = 0 == t.data.status ? "error" : "success";
                wx.redirectTo({
                    url: "/pages/template-cart/template-complate/template-complate?type=" + e + "&text=" + a + "&info=说说发布成功，请等待审核&path=/pages/nearby/index/index&button=返回&nav=switchTab"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "网络连接失败"
                });
            }
        });
    },
    getLocation: function() {
        var t = this;
        wx.getLocation({
            success: function(e) {
                var o = wx.getStorageSync("make").make_key_qq ? wx.getStorageSync("make").make_key_qq : "B4YBZ-IS33V-3NWPV-URRKY-S7262-HSBD6";
                new a({
                    key: o
                }).reverseGeocoder({
                    location: {
                        latitude: e.latitude,
                        longitude: e.longitude
                    },
                    success: function(a) {
                        var e = t.data.location;
                        e.address = a.result.address, e.latitude = a.result.location.lat, e.longitude = a.result.location.lng, 
                        t.setData({
                            location: e
                        });
                    }
                });
            }
        });
    },
    onLoad: function(a) {
        t.init(this, {
            talk: {
                mode: "txt",
                value: "",
                maxLength: 200
            },
            photo: {
                mode: "pic",
                src: [],
                maxLength: 9
            }
        }), this.getLocation();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});