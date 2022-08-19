var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, e = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : a(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
}, t = getApp(), r = t.requirejs("jquery"), i = t.requirejs("core"), n = t.requirejs("foxui");

module.exports = {
    getIndex: function(a, e) {
        if ("" == r.trim(a) || !r.isArray(e)) return [ 0, 0, 0 ];
        var t = a.split(" "), i = [ 0, 0, 0 ];
        for (var n in e) if (e[n].name == t[0]) {
            i[0] = Number(n);
            for (var f in e[n].city) if (e[n].city[f].name == t[1]) {
                i[1] = Number(f);
                for (var d in e[n].city[f].area) if (e[n].city[f].area[d].name == t[2]) {
                    i[2] = Number(d);
                    break;
                }
                break;
            }
            break;
        }
        return i;
    },
    onConfirm: function(a, e) {
        var t = a.data.pval, i = a.data.bindAreaField, n = r.isEmptyObject(a.data.diyform.f_data) ? {} : a.data.diyform.f_data, f = a.data.areas;
        n[i] = n[i] || {}, n[i].province = f[t[0]].name, n[i].city = f[t[0]].city[t[1]].name, 
        a.data.noArea || (n[i].area = f[t[0]].city[t[1]].area[t[2]].name), a.setData({
            "diyform.f_data": n,
            showPicker: !1,
            bindAreaField: !1
        });
    },
    onCancel: function(a, e) {
        a.setData({
            showPicker: !1
        });
    },
    onChange: function(a, e) {
        var t = e.detail.value, n = i.pdata(e).type, f = a.data.postData;
        f[n] = r.trim(t), a.setData({
            postData: f
        });
    },
    bindChange: function(a, e) {
        var t = a.data.pvalOld, r = e.detail.value;
        t[0] != r[0] && (r[1] = 0), t[1] != r[1] && (r[2] = 0), a.setData({
            pval: r,
            pvalOld: r
        });
    },
    selectArea: function(a, e) {
        var t = e.currentTarget.dataset.area, r = e.currentTarget.dataset.field, i = 1 != e.currentTarget.dataset.hasarea, n = a.getIndex(t, a.data.areas);
        a.setData({
            pval: n,
            pvalOld: n,
            showPicker: !0,
            noArea: i,
            bindAreaField: r
        });
    },
    DiyFormHandler: function(a, t) {
        var n = t.target.dataset, f = n.type, d = n.field, o = n.datatype, s = a.data.diyform.f_data;
        (r.isArray(s) || "object" != (void 0 === s ? "undefined" : e(s))) && (s = {});
        var l = a.data.diyform.fields;
        if ("input" == f || "textarea" == f || "checkbox" == f || "date" == f || "datestart" == f || "dateend" == f) if ("datestart" == f) r.isArray(s[d]) || (s[d] = []), 
        s[d][0] = t.detail.value; else if ("dateend" == f) r.isArray(s[d]) || (s[d] = []), 
        s[d][1] = t.detail.value; else if ("checkbox" == f) {
            s[d] = {};
            for (var m in t.detail.value) {
                var u = t.detail.value[m];
                s[d][u] = 1;
            }
        } else 10 == o ? (r.isEmptyObject(s[d]) && (s[d] = {}), s[d][n.name] = t.detail.value) : s[d] = t.detail.value; else if ("picker" == f) {
            for (var y in s) if (y == d) {
                for (var p in l) if (l[p].diy_type == d) {
                    s[d] = [ t.detail.value, l[p].tp_text[t.detail.value] ];
                    break;
                }
                break;
            }
        } else if ("image" == f) i.upload(function(e) {
            for (var t in s) if (t == d) {
                s[d] || (s[d] = {}), s[d].images || (s[d].images = []), s[d].images.push({
                    url: e.url,
                    filename: e.filename
                });
                break;
            }
            s[d].count = s[d].images.length, a.setData({
                "diyform.f_data": s
            });
        }); else if ("image-remove" == f) {
            for (var y in s) if (y == d) {
                var c = {
                    images: []
                };
                for (var p in s[d].images) s[d].images[p].filename != n.filename && c.images.push(s[d].images[p]);
                c.count = c.images.length, s[d] = c;
                break;
            }
        } else if ("image-preview" == f) for (var y in s) if (y == d) {
            var v = [];
            for (var p in s[d].images) v.push(s[d].images[p].url);
            wx.previewImage({
                current: v[n.index],
                urls: v
            });
            break;
        }
        a.setData({
            "diyform.f_data": s
        });
    },
    verify: function(a, e) {
        for (var t in e.fields) {
            var i = e.fields[t], f = i.diy_type;
            if (1 == i.tp_must) if (5 == i.data_type) {
                if (!e.f_data[f] || e.f_data[f].count < 1) return n.toast(a, "请选择" + i.tp_name), 
                !1;
            } else if (9 == i.data_type) {
                if (r.isEmptyObject(e.f_data[f]) || !e.f_data[f].province || !e.f_data[f].city) return n.toast(a, "请选择" + i.tp_name), 
                !1;
            } else if (10 == i.data_type) {
                if (r.isEmptyObject(e.f_data[f]) || !e.f_data[f].name1) return n.toast(a, "请填写" + i.tp_name), 
                !1;
                if (!e.f_data[f].name2 || "" == e.f_data[f].name2) return n.toast(a, "请填写" + i.tp_name2), 
                !1;
            } else if (!e.f_data[f] || "" == e.f_data[f]) return n.toast(a, "请填写" + i.tp_name), 
            !1;
            if (0 == i.data_type && 3 == i.tp_is_default && !/^1[34578]\d{9}$/.test(e.f_data[f])) return n.toast(a, i.tp_name + "格式错误"), 
            !1;
            if (6 == i.data_type && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e.f_data[f])) return n.toast(a, i.tp_name + "格式错误"), 
            !1;
            if (10 == i.data_type && (r.isEmptyObject(e.f_data[f]) || e.f_data[f].name1 != e.f_data[f].name2)) return n.toast(a, i.tp_name + "与" + i.tp_name2 + "不一致"), 
            !1;
        }
        return !0;
    }
};