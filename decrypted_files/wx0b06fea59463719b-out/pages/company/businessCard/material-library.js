var t = getApp();

Page({
    data: {
        nickName: null,
        avatarUrl: null,
        imgUrls: [],
        indicatorDots: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        isMaterial: !0,
        productPage: "1",
        pageCount: null,
        baseUrl: t.globalData.siteBaseUrl,
        materialList: [],
        tagNameList: [],
        tagList: [],
        canSave: !0,
        tagNameIndex: "",
        showMaterial: !0,
        showBlankFlag: !1
    },
    onLoad: function(a) {
        t.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        });
    },
    initData: function() {
        var a = this, e = t.globalData.userInfo;
        a.setData({
            nickName: e.nickName,
            avatarUrl: e.avatarUrl
        }), t.registerGlobalFunctions(a), a.getMaterialBannerList(), a.getALLRelease(), 
        a.getMaterialList(), a.getTagList();
    },
    onShow: function() {
        var t = this;
        wx.getSetting({
            success: function(a) {
                "" != wx.getStorageSync("authorize") && "false" == wx.getStorageSync("authorize") && (a.authSetting["scope.writePhotosAlbum"] ? t.setData({
                    canSave: !0
                }) : t.setData({
                    canSave: !1
                }));
            }
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            tagNameIndex: t.detail.value,
            productPage: "1"
        });
        var a = this.data.tagNameList[t.detail.value], e = "";
        this.data.tagList.forEach(function(t, i) {
            t.TagName == a && (e = t.TagID);
        }), this.getMaterialList(e);
    },
    getMaterialBannerList: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?c=Front/Material/Material&a=getMaterialBannerList",
            method: "GET",
            success: function(t) {
                a.isloading = !1, t.success && a.setData({
                    imgUrls: t.info.ImagePaths
                });
            },
            fail: function(t) {
                a.isloading = !1;
            }
        });
    },
    getALLRelease: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?c=Front/Material/Material&a=getALLRelease",
            method: "GET",
            success: function(t) {
                a.isloading = !1;
            },
            fail: function(t) {
                a.isloading = !1;
            }
        });
    },
    getMaterialList: function(a) {
        var e = this, i = "";
        a && (i = a), t.sendRequest({
            url: "/index.php?c=Front/Material/Material&a=getMaterialList&page=" + e.data.productPage + "&tagID=" + i + "&userID=",
            method: "GET",
            success: function(t) {
                if (e.isloading = !1, t.success) {
                    var i = [];
                    0 == t.list.length || (a ? i = t.list : (i = e.data.materialList, t.list.forEach(function(t) {
                        i.push(t);
                    })), e.setData({
                        materialList: i,
                        pageCount: t.pagecount,
                        showBlankFlag: !1
                    }));
                }
            },
            fail: function(t) {
                e.isloading = !1;
            }
        });
    },
    getTagList: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?c=Front/Material/Material&a=getTagList&isPagination=1",
            method: "GET",
            success: function(t) {
                if (a.isloading = !1, t.success) {
                    var e = [];
                    t.list.forEach(function(t, a) {
                        e[a] = t.TagName;
                    }), a.setData({
                        tagList: t.list,
                        tagNameList: e
                    });
                }
            },
            fail: function(t) {
                a.isloading = !1;
            }
        });
    },
    copyText: function(a) {
        var e = this, i = a.currentTarget.dataset.descriptor, s = e.data.materialList[i].Descriptor;
        wx.setClipboardData({
            data: s,
            success: function(a) {
                t.showToast({
                    title: "内容已复制",
                    icon: "none"
                });
            }
        });
    },
    saveImg: function(t) {
        var a = this;
        wx.getSetting({
            success: function(e) {
                if (e.authSetting["scope.writePhotosAlbum"]) {
                    var i = t.currentTarget.dataset.saveindex, s = [];
                    if (0 == (s = a.data.materialList[i].MaterialContent).length) return;
                    s.forEach(function(t, e) {
                        s[e].indexOf("https") < 0 && (s[e] = a.data.baseUrl + t);
                    });
                    var n = 0;
                    a.saveLoad(s[n], function(t) {
                        if (wx.showToast({
                            title: "第" + (n + 1) + "张" + (t ? "成功" : "失败"),
                            icon: "success",
                            mask: !0,
                            duration: 2e3
                        }), s.length !== n + 1) return n++, s[n];
                    });
                } else wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        wx.setStorageSync("authorize", "true");
                    },
                    fail: function() {
                        wx.setStorageSync("authorize", "false"), a.setData({
                            canSave: !1
                        });
                    }
                });
            }
        });
    },
    saveLoad: function(t, a) {
        var e = this;
        wx.showToast({
            title: "",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), wx.downloadFile({
            url: t,
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        var i = a && a(!0);
                        i && setTimeout(function() {
                            e.saveLoad(i, a);
                        }, 2e3);
                    },
                    fail: function(t) {
                        var i = a && a(!1);
                        i && e.saveLoad(i, a);
                    }
                });
            }
        });
    },
    bindClickImg: function(t) {
        var a = this, e = t.currentTarget.dataset.index, i = t.currentTarget.dataset.imagearr;
        i.forEach(function(t, e) {
            i[e] = a.data.baseUrl + t;
        }), wx.previewImage({
            current: i[e],
            urls: i
        });
    },
    onReachBottom: function() {
        Number(this.data.productPage) + 1 > this.data.pageCount || (this.data.productPage++, 
        this.getMaterialList());
    },
    openSet: function() {
        wx.getStorageSync("userSystemInfo") && this.compareVersion("2.0.7", wx.getStorageSync("userSystemInfo").SDKVersion) > -1 && wx.openSetting({});
    }
});