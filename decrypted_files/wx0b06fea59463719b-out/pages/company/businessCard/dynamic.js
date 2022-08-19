var t = getApp();

Page({
    isloading: !1,
    path: "",
    data: {
        isDynamic: !0,
        baseUrl: t.globalData.siteBaseUrl,
        dynamicBlank: !1,
        dynamicList: [],
        scrollCurrent: 0,
        pagesize: 10,
        recordcount: 99,
        falgAjax: !0,
        currentIndex: 0,
        showPopFlag: !1,
        showForm: !1,
        commentcontent: "",
        modelType: !0,
        canhold: !0
    },
    onLoad: function(a) {
        var e = this;
        e.setData({
            optionsObj: a
        }), a.BusinessCardID && wx.setStorageSync("businessCardId", a.BusinessCardID), a.userid && wx.setStorageSync("shareID", a.userid), 
        t.registerGlobalFunctions(e), e.getHeight(), this.setData({
            businessCardID: a.BusinessCardID ? a.BusinessCardID : t.globalData.businessCardInfo.businessCardID
        }), wx.getSystemInfo({
            success: function(t) {
                "iOS" === t.system.split(" ")[0] ? e.setData({
                    modelType: !0
                }) : "Android" === t.system.split(" ")[0] && e.setData({
                    modelType: !1
                });
            }
        });
    },
    onShow: function() {
        t.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        });
    },
    initData: function() {
        var a = this;
        a.getDynmicList(!0), a.setData({
            companyName: t.globalData.baseInfo.Name,
            siteLogo: t.globalData.baseInfo.SiteLogo
        });
    },
    getHeight: function() {
        this.setData({
            height: parseInt(wx.getSystemInfoSync().windowHeight - wx.getSystemInfoSync().windowWidth / 750 * 96)
        });
    },
    getDynmicList: function(a) {
        var e = this;
        a && (e.data.recordcount = 99, e.data.dynamicList = []);
        var s = e.data.recordcount, n = e.data.dynamicList.length;
        if (s > n && e.data.falgAjax) {
            e.setData({
                falgAjax: !1
            });
            var i = Math.ceil(n / e.data.pagesize) + 1;
            t.sendRequest({
                url: "/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getDynmicList&page=" + i + "&pageSize=" + e.data.pagesize,
                method: "GET",
                success: function(t) {
                    if (t.success) {
                        1 == t.checkCount && e.setData({
                            showMaterial: !0
                        }), 0 === t.list.length ? e.setData({
                            dynamicBlank: !0
                        }) : e.setData({
                            dynamicBlank: !1
                        });
                        for (var a = t.list, s = 0; s < a.length; s++) a[s].showPop = !1, e.data.dynamicList.push(a[s]);
                        e.setData({
                            dynamicList: e.data.dynamicList,
                            falgAjax: !0,
                            recordcount: t.count
                        });
                    } else console.log("getDynmicList fail" + t.msg);
                }
            });
        } else e.setData({
            shape: !0
        });
    },
    loadMoreData: function() {
        this.getDynmicList();
    },
    errArticleImg: function(t) {
        var a = this, e = t.target.dataset.errImg, s = t.target.dataset.errIndex, n = a.data.dynamicList;
        n[s].ImgBig = e, a.setData({
            dynamicList: n
        });
    },
    toNewsDetails: function(a) {
        this.setData({
            showPopFlag: !1
        });
        var e = a.currentTarget.dataset.articleid, s = t.globalData.WebUserID;
        wx.navigateTo({
            url: "/pages/company/newsdetail?id=" + e + "&userid=" + s
        });
    },
    sharetoFriend: function() {},
    onShareAppMessage: function(a) {
        var e = this, s = e.data.optionsObj;
        s.BusinessCardID = e.data.businessCardID, s.userid = t.globalData.WebUserID;
        var n = "", i = "";
        if (a.target) {
            var o = a.target.dataset.articleid;
            n = a.target.dataset.title, i = "" + e.data.baseUrl + a.target.dataset.img, e.path = "/pages/company/newsdetail?id=" + o + "&businessid=" + t.globalData.businessCardInfo.businessCardID + "&userid=" + t.globalData.WebUserID, 
            e.addTranspond(o);
        } else e.path = t.getPageUrl(e, s);
        return t.shareAppMessage({
            url: e.path,
            title: n,
            imageUrl: i
        });
    },
    addTranspond: function(a) {
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addTranspond",
            method: "POST",
            data: {
                ArticleID: a
            },
            success: function(t) {},
            fail: function(t) {}
        });
    },
    TouchDiscuss: function(t) {
        var a = this, e = a.data.dynamicList;
        a.data.currentIndex == t.currentTarget.dataset.index && (e[a.data.currentIndex].showPop = !1);
        for (var s = 0; s < e.length; s++) e[s].showPop = !1, t.currentTarget.dataset.index == s && (e[s].showPop = !0);
        a.setData({
            canhold: !0,
            dynamicList: e
        }), a.data.currentIndex == t.currentTarget.dataset.index ? a.setData({
            currentIndex: t.currentTarget.dataset.index,
            showPopFlag: !a.data.showPopFlag
        }) : a.setData({
            currentIndex: t.currentTarget.dataset.index,
            showPopFlag: !0
        });
    },
    clickLove: function(a) {
        var e = this, s = a.currentTarget.dataset.articleid, n = t.globalData.WebUserID ? t.globalData.WebUserID : 0;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addLike",
            method: "POST",
            data: {
                ArticleID: s,
                UserID: n
            },
            success: function(a) {
                if (a.success) {
                    var n = e.data.dynamicList;
                    n.forEach(function(a) {
                        a.ArticleID == s && (a.showPop = !1, "" != a.NickNameText ? a.NickNameText = a.NickNameText + "," + t.globalData.userInfo.nickName : a.NickNameText = a.NickNameText + t.globalData.userInfo.nickName);
                    }), e.setData({
                        dynamicList: n,
                        showPopFlag: !1
                    });
                } else t.showToast({
                    title: a.msg,
                    icon: "none"
                }), e.setData({
                    showPopFlag: !1
                });
            },
            fail: function(t) {}
        });
    },
    toComment: function(a) {
        var e = this, s = a.currentTarget.dataset.articleid, n = t.globalData.WebUserID ? t.globalData.WebUserID : 0;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getUserCommentCount&ArticleID=" + s + "&UserID=" + n,
            method: "GET",
            success: function(a) {
                e.setData({
                    showPopFlag: !1
                }), a.success ? 0 == a.IsComment ? e.setData({
                    showForm: !0,
                    articleID: s
                }) : t.showToast({
                    title: "文章评论不能超过10条",
                    icon: "none"
                }) : t.showToast({
                    title: a.msg,
                    icon: "none"
                });
            },
            fail: function(t) {}
        });
    },
    sendComment: function(t) {
        var a = t.detail.value.commentcontent;
        "" != a && this.addComment(a);
    },
    inputComment: function(t) {
        this.setData({
            commentcontent: t.detail.value
        });
    },
    sendclose: function(t) {
        var a = this, e = t.detail.value;
        "" == e ? a.setData({
            canhold: !0
        }) : (a.setData({
            canhold: !1
        }), a.addComment(e));
    },
    addComment: function(a) {
        var e = this, s = e.data.articleID, n = e.data.currentIndex, i = t.globalData.WebUserID ? t.globalData.WebUserID : 0, o = e.data.dynamicList;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/Dynamic/Dynamic&a=getArticleconfig",
            method: "GET",
            success: function(c) {
                c.success && t.sendRequest({
                    url: "/index.php?c=Front/WxApp/Dynamic/Dynamic&a=addComment",
                    method: "POST",
                    data: {
                        ArticleID: s,
                        UserID: i,
                        Content: a
                    },
                    success: function(s) {
                        if (s.success) if (1 == c.info.EnableCommentReviewMobile) {
                            if (0 != i) {
                                var r = t.globalData.userInfo.nickName;
                                o[n].CommentList.push({
                                    nickname: r,
                                    comment: a
                                });
                            } else o[n].CommentList.push({
                                nickname: "游客",
                                comment: a
                            });
                            e.setData({
                                dynamicList: o,
                                showForm: !1,
                                commentcontent: ""
                            });
                        } else t.showToast({
                            title: "审核通过后显示",
                            icon: "none"
                        }), e.setData({
                            showForm: !1,
                            commentcontent: ""
                        }); else ;
                    },
                    fail: function(t) {}
                });
            },
            fail: function(t) {}
        });
    },
    touchstart: function(t) {
        var a = this;
        "" == t.target.id ? t.target.dataset.index || t.target.dataset.isone ? a.setData({
            showForm: !1,
            commentcontent: ""
        }) : a.setData({
            showPopFlag: !1,
            showForm: !1,
            commentcontent: ""
        }) : a.setData({
            showForm: !0
        });
    }
});