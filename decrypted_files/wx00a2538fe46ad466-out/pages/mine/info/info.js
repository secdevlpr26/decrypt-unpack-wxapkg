var t = require("../../template-cart/template-form2/template-form.js"), e = getApp();

Page({
    data: {
        gender: {
            list: [ {
                title: "女",
                value: 2
            }, {
                title: "男",
                value: 1
            } ],
            index: 1
        },
        birth: {
            year: "",
            month: "",
            date: ""
        },
        constellation: "",
        zodiac: "",
        field: ""
    },
    placeholder: function(e) {
        t.placeholder(this, e);
    },
    txtInput: function(e) {
        t.txtInput(this, e);
    },
    picIns: function(e) {
        t.picIns(this, e, function(t, e, a) {
            var n = "该图临时路径为" + t + "，该组列表长度为" + e + "，剩余长度为" + a;
            console.log(n);
        });
    },
    genderChange: function(t) {
        this.genderSet(t.detail.value);
    },
    genderSet: function(t) {
        var e = this.data.gender;
        e.index = t, this.setData({
            gender: e
        });
    },
    picker: function(e) {
        t.picker(this, e);
    },
    setConstellation: function(t, e) {
        var a = [ 20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22 ], n = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * t - (e < a[t - 1] ? 2 : 0), 2) + "座";
        this.setData({
            constellation: n
        });
    },
    setZodiac: function(t) {
        var e = "猴鸡狗猪鼠牛虎兔龙蛇马羊".substr(t % 12, 1);
        this.setData({
            zodiac: e
        });
    },
    birthChange: function(t) {
        var e = this, a = this.data.birth;
        a.year = t.detail.value.split("-")[0], a.month = t.detail.value.split("-")[1], a.date = t.detail.value.split("-")[2], 
        this.setData({
            birth: a
        }, function() {
            e.setConstellation(a.month, a.date), e.setZodiac(a.year);
        });
    },
    fieldChange: function(t) {
        this.fieldSet(t.detail.value);
    },
    fieldSet: function(t) {
        this.setData({
            field: t
        });
    },
    getUserInfo: function() {
        var a = this;
        e.globalData.session_login_id && (wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.request({
            url: e.globalData.url + e.globalData.parameter + "&do=member",
            header: {
                Cookie: e.globalData.session_login_id
            },
            success: function(e) {
                if (1 == e.data.status) {
                    var n = e.data.result.member;
                    wx.hideLoading();
                    var i = a.data.birth, o = new Date();
                    i.end = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate(), "" == i.year ? (i.year = o.getFullYear(), 
                    i.month = o.getMonth() + 1, i.date = o.getDate()) : (i.year = n.year, i.month = n.month, 
                    i.date = n.date), a.setData({
                        birth: i
                    }, function() {
                        a.setConstellation(i.month, i.date), a.setZodiac(i.year);
                    }), a.fieldSet(n.field ? n.field.split(",") : [ "北京市", "北京市", "东城区" ]), a.genderSet("0" != n.sex ? n.sex : 2), 
                    t.init(a, {
                        education: {
                            mode: "picker",
                            list: [ "中专及以下", "高中", "大专", "本科", "硕士", "博士" ],
                            current: n.education ? n.education : "中专及以下"
                        },
                        nickname: {
                            mode: "txt",
                            value: n.nickname,
                            maxLength: 20
                        },
                        realname: {
                            mode: "txt",
                            value: n.name,
                            maxLength: 20
                        },
                        phone: {
                            mode: "txt",
                            value: n.tel,
                            maxLength: 11
                        },
                        wechat: {
                            mode: "txt",
                            value: n.wechat,
                            maxLength: 20
                        },
                        alipay: {
                            mode: "txt",
                            value: n.alipay,
                            maxLength: 50
                        },
                        height: {
                            mode: "txt",
                            value: n.height,
                            maxLength: 4
                        },
                        weight: {
                            mode: "txt",
                            value: n.weight,
                            maxLength: 4
                        },
                        occupation: {
                            mode: "txt",
                            value: n.occupation,
                            maxLength: 20
                        },
                        income: {
                            mode: "txt",
                            value: n.income,
                            maxLength: 20
                        }
                    });
                }
            }
        }));
    },
    setUserInfo: function() {
        if (e.globalData.session_login_id) {
            var t = function() {
                var t = a.data.txt, n = a.data.picker, i = a.data.birth, o = a.data.field, l = a.data.gender, s = a.data.constellation, d = a.data.zodiac;
                wx.showLoading({
                    title: "提交中",
                    mask: !0
                }), wx.request({
                    url: e.globalData.url + e.globalData.parameter + "&do=member",
                    header: {
                        Cookie: e.globalData.session_login_id,
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    data: {
                        nickname: t.nickname.value,
                        name: t.realname.value,
                        tel: t.phone.value,
                        wechat: t.wechat.value,
                        alipay: t.alipay.value,
                        height: t.height.value,
                        weight: t.weight.value,
                        occupation: t.occupation.value,
                        income: t.income.value,
                        education: n.education.current,
                        constellation: s,
                        zodiac: d,
                        year: i.year,
                        month: i.month,
                        day: i.date,
                        field: o.join(),
                        sex: l.index
                    },
                    success: function(t) {
                        wx.hideLoading();
                        var e = t.data.result.message, a = 0 == t.data.status ? "error" : "success";
                        wx.redirectTo({
                            url: "/pages/template-cart/template-complate/template-complate?type=" + a + "&text=" + e + "&path=/pages/mine/index/index&button=返回&nav=switchTab"
                        });
                    }
                });
            }, a = this;
            "" != this.data.txt.realname.value ? this.data.init ? wx.showModal({
                title: "注意",
                content: "姓名、性别、出生日期填写后不能更改！",
                success: function(e) {
                    e.confirm && t();
                }
            }) : t() : wx.showModal({
                title: "提示",
                content: "请填写姓名",
                showCancel: !1
            });
        }
    },
    onLoad: function(t) {
        this.getUserInfo();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});