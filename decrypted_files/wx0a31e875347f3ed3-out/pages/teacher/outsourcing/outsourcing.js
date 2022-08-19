function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../../utils/api.js").getCommentItem, a = require("../../../utils/api.js").putTeacherComment, n = require("../../../utils/api.js").tearchStat, o = require("../../../utils/uploadVoice.js").uploadVoice, i = wx.getRecorderManager(), c = wx.createInnerAudioContext(), s = 0, r = getApp();

Page({
    data: {
        teacherName: "rainbow",
        teacher_id: "",
        schedule_id: 0,
        maskHidden: !0,
        isRecord: !1,
        is_start: !1,
        iphoneX: !1,
        teacherText: "",
        tempFilePath: "",
        tempVoiceTime: 0,
        teacherHaveComment: !1,
        status_text: "",
        comment_done: !1,
        comment_item: null,
        current_month_comment_num: 0,
        last_month_comment_num: 0,
        all_comment_num: 0,
        today_comment: 0,
        income: 0,
        btn_next_text: "下一个"
    },
    getCommentTask: function(t) {
        var a = this, n = {
            teacher_id: this.data.teacher_id,
            skip: t
        };
        this.setData({
            comment_item: null
        }), e(n).then(function(t) {
            if (console.log(t), 0 == t.code && t.data && t.data.comment && t.data.picBookData) {
                var e = t.data;
                a.setData({
                    comment_item: e,
                    comment_done: !1
                }), r.slideupshow(a, "slide_up", 0, 1);
            } else wx.showToast({
                title: t.err_msg,
                icon: "none"
            });
            null == t.data.comment || void 0 == t.data.comment.id || null == t.data.comment.id ? (a.setData({
                status_text: "目前没有可点评的数据，稍后可以点击刷新按钮。",
                btn_next_text: "刷 新"
            }), wx.showToast({
                title: "没有数据了～",
                icon: "none"
            })) : a.setData({
                status_text: "",
                btn_next_text: "下一个"
            });
        }, function(t) {
            console.log(t);
        });
    },
    getTearchStat: function() {
        var t = this, e = {
            teacher_id: this.data.teacher_id
        };
        n(e, !1).then(function(e) {
            if (0 == e.code && e.data) {
                var a = e.data;
                t.setData({
                    current_month_comment_num: a.current_month,
                    last_month_comment_num: a.last_month,
                    all_comment_num: a.total,
                    income: a.income
                });
            }
        }, function(t) {
            console.log(t);
        });
    },
    showModel: function(t) {
        c.pause();
        var e = t.currentTarget.dataset, a = e.commentid, n = e.textcomment, o = e.useraudiourl, i = e.istext;
        a ? (i ? this.setData({
            teacherText: n,
            istext: i
        }) : this.setData({
            useraudiourl: o,
            istext: i,
            tempFilePath: "",
            teacherHaveComment: !1
        }), this.setData({
            maskHidden: !1,
            comment_id: a
        })) : wx.showToast({
            title: "commentid为空",
            icon: "none"
        });
    },
    cancel: function() {
        this.data.istext || (i.stop(), c && c.pause()), this.setData({
            maskHidden: !0,
            is_start: !1
        });
    },
    confirm: function(t) {
        var e = this, a = {
            comment_id: this.data.comment_id,
            teacher_id: this.data.teacher_id
        };
        if (this.data.istext) {
            if (!this.data.teacherText) return void wx.showToast({
                title: "点评内容为空",
                icon: "none"
            });
            a.text_content = this.data.teacherText, this.putCommentWrapper(a);
        } else {
            c && c.pause();
            var n = this.data.tempFilePath;
            if (!n) return void wx.showToast({
                title: "没有录音点评",
                icon: "none"
            });
            o(n, a.teacher_id).then(function(t) {
                console.log("res", t), a.audio_url = t, a.audio_duration = s, e.putCommentWrapper(a);
            }, function(t) {});
        }
    },
    inputFn: function(t) {
        this.data.teacherText = t.detail.value;
    },
    putCommentWrapper: function(e) {
        var n = this;
        a(e).then(function(e) {
            if (0 != e.code) void 0 != e.data.debug && null != e.data.debug && e.data.debug.toString().length > 0 ? wx.showToast({
                title: e.data.debug,
                icon: "none"
            }) : wx.showToast({
                title: e.err_msg,
                icon: "none"
            }); else {
                n.setData(t({
                    comment_done: !0
                }, "comment_item.comment.text_comment", n.data.teacherText)), wx.showToast({
                    title: "点评提交成功",
                    icon: "success"
                }), n.cancel();
                var a = "";
                a = n.data.istext ? "文字点评已提交，可以继续修改点评" : "语音点评已提交，可以继续修改点评", n.setData({
                    status_text: a
                });
            }
        }, function(t) {
            n.setData({
                maskHidden: !0
            }), wx.showToast({
                title: t.err_msg,
                icon: "none"
            });
        });
    },
    next_item: function(t) {
        if (this.data.comment_done) this.loadCommentData(); else {
            var e = this;
            "刷 新" == this.data.btn_next_text ? e.loadCommentData(1) : wx.showModal({
                title: "提示",
                content: "当前跟读尚未点评，确认要跳过吗？",
                success: function(t) {
                    t.confirm && e.loadCommentData(1);
                }
            });
        }
    },
    startRecord: function(t) {
        var e = this;
        wx.authorize({
            scope: "scope.record",
            success: function() {
                var t = {
                    duration: 6e4,
                    sampleRate: 8e3,
                    numberOfChannels: 2,
                    encodeBitRate: 48e3,
                    format: "mp3",
                    audioSource: "auto"
                };
                e.setData({
                    isRecord: !0,
                    is_start: !0
                }), i.start(t);
            }
        });
    },
    stopRecord: function(t) {
        i.stop(), this.setData({
            is_start: !1
        });
    },
    handleTouchMove: function(t) {},
    playTemp: function() {
        c.paused ? c.play() : c.pause();
    },
    againRecord: function() {
        this.setData({
            teacherHaveComment: !1,
            tempFilePath: null,
            is_start: !1
        }), c.pause(), this.startRecord();
    },
    playAlreadyVoice: function(t) {
        c.src = t.target.dataset.alreadyVoice, c.play();
    },
    playStudentVoice: function(t) {
        c.src = t.currentTarget.dataset.userAudioUrl, c.play();
    },
    logout: function() {
        wx.showModal({
            title: "提示",
            content: "确定要退出登录吗？",
            success: function(t) {
                t.confirm && wx.clearStorage({
                    complete: function() {
                        wx.redirectTo({
                            url: "../login/login"
                        });
                    }
                });
            }
        });
    },
    loadCommentData: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        r.slideupshow(this, "slide_up", 450, 0), this.getTearchStat(), this.getCommentTask(t);
    },
    onLoad: function(t) {
        var e = this;
        try {
            wx.getStorageSync("xToken") || wx.redirectTo({
                url: "/pages/teacher/login/login"
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return;
        }
        this.setData({
            iphoneX: getApp().globalData.isIphoneX
        }), i.onStop(function(t) {
            console.log("onStop"), t.duration && t.tempFilePath && (c.src = t.tempFilePath, 
            s = Math.ceil(t.duration / 1e3), e.setData({
                tempFilePath: t.tempFilePath,
                tempVoiceTime: s,
                teacherHaveComment: !0,
                is_start: !1,
                isRecord: !1,
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            }));
        }), i.onError(function(t) {
            e.data.is_start && wx.showToast({
                title: "录音失败",
                icon: "none"
            });
        }), i.onInterruptionBegin(function(t) {
            wx.showToast({
                title: "录音暂停",
                icon: "none"
            });
        }), c.onPlay(function(t) {
            e.setData({
                playText: "点击暂停",
                iconSrc: "../../../image/teacher/pause.png"
            });
        }), c.onStop(function(t) {
            e.setData({
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            });
        }), c.onPause(function(t) {
            e.setData({
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            });
        }), c.onEnded(function(t) {
            e.setData({
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            });
        }), null != wx.getStorageSync("teacher_id") && parseInt(wx.getStorageSync("teacher_id")) > 0 && this.setData({
            teacherName: wx.getStorageSync("teacherName"),
            teacher_id: wx.getStorageSync("teacher_id")
        }), this.loadCommentData();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        console.log("正在下拉刷新");
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "title",
            desc: "desc",
            path: "path"
        };
    }
});