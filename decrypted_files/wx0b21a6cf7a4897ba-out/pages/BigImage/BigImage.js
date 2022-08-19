Page({
    data: {
        picUrl: "",
        txt: "",
        picWidth: 0,
        picHeight: 0
    },
    onLoad: function(t) {
        this.setData({
            picUrl: t.picUrl,
            txt: t.txt
        });
    },
    imageLoad: function(t) {
        this.setData({
            picWidth: t.detail.width,
            picHeight: t.detail.height
        });
    }
});