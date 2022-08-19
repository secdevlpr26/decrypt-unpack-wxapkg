var t = function(t, e) {
    var a = {};
    for (var r in e) {
        var c = e[r];
        "txt" == c.mode && (c.length = c.value.length, c.last = c.maxLength - c.length, 
        c.placeholder = c.value ? "form-item-active" : "", a[r] = c);
    }
    t.setData({
        txt: a
    });
}, e = function(t, e) {
    var a = {};
    for (var r in e) {
        var c = e[r];
        "pic" == c.mode && ("string" == typeof c.src && ("" == c.src ? c.src = [] : c.src = [ c.src ]), 
        c.length = c.src.length, c.last = c.maxLength - c.length, a[r] = c);
    }
    t.setData({
        pic: a
    });
}, a = function(t, e) {
    var a = {};
    for (var r in e) {
        var c = e[r];
        if ("picker" == c.mode) {
            e[r].index = 0;
            for (var n in e[r].list) if (e[r].list[n] == e[r].current) {
                e[r].index = n;
                break;
            }
            a[r] = c;
        }
    }
    t.setData({
        picker: a
    });
}, r = function(t) {
    var e = t.data.form;
    for (var a in e) !function(t) {
        var a = e[t];
        "multiPicker" == a.mode && (a.protoList = a.list, a.list = [], a.protoList.forEach(function(t, e, r) {
            var c = r[e - 1] ? r[e - 1][0][a.option.id] : null, n = t.filter(function(t, e, r) {
                return t[a.option.cid] == c;
            });
            a.list[e] = n;
        }));
    }(a);
    t.setData({
        form: e
    });
}, c = function(t, e) {
    var a = t.data.pic;
    a[e].length = a[e].src.length, a[e].last = a[e].maxLength - a[e].length, t.setData({
        pic: a
    });
}, n = function(t) {
    wx.chooseLocation({
        success: function(e) {
            var a = t.data.location;
            console.log(e), a = {
                longitude: e.longitude,
                latitude: e.latitude,
                name: e.name,
                address: e.address,
                switch: !0
            }, t.setData({
                location: a
            });
        }
    });
};

module.exports = {
    picker: function(t, e, a) {
        try {
            var r = e.currentTarget.dataset.formPicker, c = e.detail.value, n = t.data.picker, o = n[r];
            o.index = c, o.current = o.list[o.index], n[r] = o, t.setData({
                picker: n
            }), a && a(n[r].index, n[r].current);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或e", t);
        }
    },
    multiPicker: function(t, e) {
        try {
            var a = t.data.form, r = e.currentTarget.dataset.formKey, c = e.detail.value, n = e.detail.column, o = a[r], i = o.option.id ? "id" : o.option.id, l = o.option.cid ? "cid" : o.option.cid;
            o.option.title || o.option.title, !function t(e, a) {
                var r = e + 1;
                o.index[e] = a, r < o.list.length && (o.list[r] = o.protoList[r].filter(function(t, r, c) {
                    return t[l] == o.list[e][a][i];
                }), t(r, 0));
            }(n, c), t.setData({
                form: a
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或e"), console.error(t);
        }
    },
    placeholder: function(t, e) {
        var a = t.data.txt, r = e.currentTarget.dataset.formTxt;
        "focus" == e.type ? a[r].placeholder = "form-item-active" : "blur" == e.type ? "" == e.detail.value && (a[r].placeholder = "") : "change" == e.type && (a[r].placeholder = "form-item-active"), 
        t.setData({
            txt: a
        });
    },
    txtInput: function(t, e, a) {
        try {
            var r = e.target.dataset.formTxt, c = t.data.txt, n = e.detail.value;
            c[r].length = n.length, c[r].last = c[r].maxLength - n.length, c[r].value = n, t.setData({
                txt: c
            }), a && a(c[r].value, c[r].length, c[r].last);
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或e", t);
        }
    },
    txtSet: function(t, e, a) {
        try {
            var r = t.data.txt;
            r[e].value = a || "", r[e].length = r[e].value.length, r[e].last = r[e].maxLength - r[e].value.length, 
            r[e].placeholder = r[e].value ? "form-item-active" : "", t.setData({
                txt: r
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或key", t);
        }
    },
    picIns: function(t, e, a) {
        try {
            var r = t.data.pic, n = e.currentTarget.dataset.formPic;
            wx.chooseImage({
                count: r[n].last,
                sizeType: [ "compressed" ],
                success: function(e) {
                    var o = r[n].src.concat(e.tempFilePaths);
                    o.length <= r[n].maxLength && (r[n].src = o, c(t, n), a && a(e.tempFilePaths, r[n].length, r[n].last));
                }
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或e", t);
        }
    },
    picChange: function(t, e, a) {
        try {
            var r = t.data.pic, n = e.currentTarget.dataset.formPic, o = !!n && (e.currentTarget.dataset.formPicIndex ? e.currentTarget.dataset.formPicIndex : 0);
            "number" == typeof o && wx.chooseImage({
                count: 1,
                sizeType: [ "compressed" ],
                success: function(e) {
                    var i = e.tempFilePaths[0];
                    r[n].src[o] = i, c(t, n), a && a(e.tempFilePaths, r[n].length, r[n].last);
                }
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或e", t);
        }
    },
    picDel: function(t, e, a) {
        try {
            var r = e.currentTarget.dataset.formPic, n = !!r && (e.currentTarget.dataset.formPicIndex ? e.currentTarget.dataset.formPicIndex : 0);
            "number" == typeof n && wx.showModal({
                content: "是否删除该图片？",
                cancelText: "取消",
                confirmText: "删除",
                success: function(e) {
                    if (e.confirm) {
                        var o = t.data.pic;
                        o[r].src.splice(n, 1), c(t, r), a && a(n, o[r].length, o[r].last);
                    }
                }
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或e", t);
        }
    },
    picPreview: function(t, e) {
        try {
            var a = t.data.pic, r = e.currentTarget.dataset.formPic, c = !!r && (e.currentTarget.dataset.formPicIndex ? e.currentTarget.dataset.formPicIndex : 0);
            "number" == typeof c && wx.previewImage({
                current: a[r].src[c],
                urls: a[r].src
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            console.error("未正确设置page或e", t);
        }
    },
    locationSwich: function(t, e) {
        e.detail.value && (t.data.location.address || n(t));
    },
    location: n,
    init: function(c, n) {
        t(c, n), e(c, n), a(c, n), r(c, n);
    }
};