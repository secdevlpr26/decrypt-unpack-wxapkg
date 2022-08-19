function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../../utils/util.js"), a = e.randomColor, o = require("../../../utils/api.js").getGroupClassInfo, n = [], s = [];

Page({
    data: {
        teacherName: "RainBow",
        lessonList: []
    },
    onLoad: function(t) {
        n = [], s = [];
        try {
            wx.getStorageSync("xToken") || wx.redirectTo({
                url: "/pages/teacher/login/login"
            });
        } catch (t) {}
        this.getClass();
    },
    getClass: function() {
        var t = this;
        o().then(function(e) {
            if (0 == e.code && e.data) {
                var o = e.data, n = o.groupClassInfo, s = o.teacher;
                if (s && (t.setData({
                    teacherName: s.name
                }), wx.setStorage({
                    key: "teacherName",
                    data: s.name
                }), wx.setStorage({
                    key: "teacher_id",
                    data: s.id
                })), n && n.data) {
                    var r = e.data.groupClassInfo.data;
                    (r = Array.isArray(r) ? r : []).forEach(function(t) {
                        t.bgColor = a(), t.class.forEach(function(t) {
                            t.selstatus = 0;
                        });
                    }), t.setData({
                        lessonList: r
                    });
                }
            }
        }, function(t) {
            console.log(t);
        });
    },
    checkboxChange: function(t) {
        console.log(t.detail.value);
    },
    logout: function() {
        wx.redirectTo({
            url: "../student/student?class_ids=" + s + "&group_ids=" + n
        });
    },
    gotoWithLesson: function(t) {
        console.log(t.target);
    },
    gotoWithClass: function(a) {
        console.log(a.target);
        var o = a.currentTarget.dataset.index, r = a.currentTarget.dataset.groupindex, i = this.data.lessonList[r].class[o].selstatus, u = a.target.dataset, c = u.classinfo;
        u.groupname, u.bgcolor;
        0 == i ? (i = 1, n.push(c.group_id), s.push(c.id)) : (i = 0, e.removeArrayItem(n, c.group_id), 
        e.removeArrayItem(s, c.id)), n = n.filter(function(t, e, a) {
            return a.indexOf(t) == e;
        });
        var l = "lessonList[" + r + "].class[" + o + "].selstatus";
        this.setData(t({}, l, i));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getClass();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});