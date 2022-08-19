var t = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET", e = arguments[1], n = arguments[2], o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r = null, i = null;
    try {
        r = wx.getStorageSync("xToken"), i = wx.getStorageSync("uniqueid");
    } catch (t) {}
    var u = Object.assign({
        uniqueid: i
    }, n), s = "https://wx.rainbowclass.cn/" + e;
    return o && wx.showLoading({
        title: "加载中...",
        mask: !0
    }), new Promise(function(e, n) {
        wx.request({
            url: s,
            method: t,
            data: u,
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-token": r
            },
            success: function(t) {
                if (console.log("res===>", t), 0 == t.data.code) e(t.data); else {
                    if (2 == t.data.code || "无效的token!" == t.data.err_msg) return wx.clearStorageSync(), 
                    wx.showToast({
                        title: "用户凭证已失效，请重新登录",
                        icon: "none"
                    }), void wx.redirectTo({
                        url: "../login/login"
                    });
                    e(t.data);
                }
            },
            fail: function(t) {
                console.log("error===>", t), n(t), wx.showToast({
                    title: res.data.err_msg,
                    icon: "none",
                    duration: 2e3
                });
            },
            complete: function(t) {
                o && wx.hideLoading();
            }
        });
    });
};

module.exports = {
    request: t,
    getUserGroupList: function(e) {
        return t("GET", "group/getUserGroupList", e);
    },
    adminLogin: function(e) {
        return t("POST", "admin/login", e);
    },
    getGroupClassInfo: function(e) {
        return t("GET", "comment/getGroupClassInfo", e);
    },
    getCommentTasks: function(e) {
        return t("GET", "comment/getCommentTasks", e);
    },
    putComment: function(e) {
        return t("POST", "comment/putComment", e);
    },
    miniAppOssSign: function(e) {
        return t("get", "sts/miniAppOssSign", e);
    },
    getVideoList: function(e) {
        return t("get", "learning/getWebcastList", e);
    },
    teacherLogin: function(e) {
        return t("POST", "review/login", e);
    },
    tearchStat: function(e) {
        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return t("get", "review/user/stat", e, n);
    },
    getCommentItem: function(e) {
        return t("get", "review/comment/get", e);
    },
    putTeacherComment: function(e) {
        return t("POST", "review/comment/" + e.comment_id + "/report", e);
    },
    miniAppOssSign2: function(e) {
        return t("get", "c/sts/mini", e);
    }
};