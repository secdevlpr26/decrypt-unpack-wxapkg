var t = function(t, e) {
    var a = t.data.picture;
    a.current = a.maxLength - e, t.setData({
        picture: a
    });
}, e = function(t) {
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
    pickerRegion: function(t, e) {
        var a = t.data.region;
        a.current = e.detail.value;
        var c;
        c = 0 == e.detail.value ? 0 : 3, t.setData({
            region: a,
            quan_area: c
        });
    },
    placeholder: function(t, e) {
        t.data.placeholder || t.setData({
            placeholder: []
        }), "focus" == e.type ? t.data.placeholder[e.target.dataset.formIndex] = "active" : "blur" == e.type && "" == e.detail.value && (t.data.placeholder[e.target.dataset.formIndex] = ""), 
        t.setData({
            placeholder: t.data.placeholder
        });
    },
    textAreaCount: function(t, e) {
        var a = t.data.textArea;
        a.current = a.maxLength - e, t.setData({
            textArea: a
        });
    },
    pictureCount: t,
    pictureInsert: function(e, a) {
        wx.chooseImage({
            count: e.data.picture.current,
            sizeType: [ "compressed" ],
            success: function(c) {
                var r = e.data.picture;
                r.list = r.list.concat(c.tempFilePaths), t(e, r.list.length), a && a(c.tempFilePaths);
            }
        });
    },
    pictureDelete: function(e, a) {
        wx.showModal({
            content: "是否删除该图片？",
            cancelText: "取消",
            confirmText: "删除",
            success: function(c) {
                if (c.confirm) {
                    var r = e.data.picture;
                    r.list.splice(a.currentTarget.dataset.pictureIndex, 1), t(e, r.list.length);
                }
            }
        });
    },
    picturePreview: function(t, e) {
        wx.previewImage({
            current: e.currentTarget.dataset.src,
            urls: t.data.picture.list
        });
    },
    pictureChoose: function(t) {
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(e) {
                var a = t.data.picture;
                a.path = e.tempFilePaths, t.setData({
                    picture: a
                });
            }
        });
    },
    locationSwich: function(t, a) {
        a.detail.value && (t.data.location.address || e(t));
    },
    location: e
};