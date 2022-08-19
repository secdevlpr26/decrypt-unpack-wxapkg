var t = getApp().globalData.domain;

Page({
    data: {
        attachment: []
    },
    onLoad: function(t) {
        var e = t.eventId;
        "false" == t.handle ? this.setData({
            handle: !1
        }) : this.setData({
            handle: !0
        }), this.setData({
            eventId: e
        }), this.selectEventDetail(e);
    },
    selectEventDetail: function(e) {
        var a = this;
        wx.request({
            url: t + "/watch/selectEventDetailById",
            data: {
                eventId: e
            },
            success: function(t) {
                for (var e = t.data, n = e.enterAttachments, s = new Array(), i = 0; i < n.length; i++) s[s.length] = n[i].attachment_url;
                for (i = 0; i < n.length; i++) "图片" == n[i].dic_type ? n[i].dic_type = 0 : n[i].dic_type = 2;
                a.setData({
                    fileImgs: s,
                    event: e.eventDetails[0],
                    record: e.eventFlow,
                    attachment: n,
                    processedAttachment: e.processedAttachments
                });
            },
            fail: function(t) {}
        });
    },
    playVoice: function(t) {
        var e = t.target.dataset.src;
        wx.getSavedFileList({
            success: function(t) {
                console.log(t.fileList);
            }
        }), wx.downloadFile({
            url: e,
            success: function(t) {
                wx.playVoice({
                    filePath: t.tempFilePath
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "下载失败"
                });
            }
        });
    },
    previewImage: function(t) {
        var e = t.target.dataset.src;
        wx.previewImage({
            current: e,
            urls: this.data.fileImgs
        });
    }
});