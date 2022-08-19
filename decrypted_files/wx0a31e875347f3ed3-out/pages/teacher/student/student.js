var t = require("../../../utils/util.js").formatDate, e = require("../../../utils/api.js").getCommentTasks, a = require("../../../utils/api.js").putComment, i = require("../../../utils/uploadVoice.js").uploadVoice, s = require("../../../utils/api.js").getGroupClassInfo, n = wx.getRecorderManager(), o = wx.createInnerAudioContext(), c = t(new Date()), r = (t(new Date(Date.now() - 1728e5)), 
"");

Page({
    data: {
        teacherName: "rainbow",
        teacher_id: "",
        groupInfo: {},
        startDate: c,
        endDate: c,
        group_ids: "",
        class_ids: "",
        schedule_id: 0,
        user_id: "",
        is_finish: 2,
        offset: 0,
        userList: [],
        scheduleDateList: [],
        scheduleDateListIndex: 0,
        maskHidden: !0,
        isRecord: !1,
        is_start: !1,
        teacherText: "",
        tempFilePath: "",
        teacherHaveComment: !1
    },
    getClass: function() {
        var t = this;
        s().then(function(e) {
            if (0 == e.code && e.data) {
                var a = e.data, i = a.default_class_ids, s = a.default_group_ids, n = (a.groupClassInfo, 
                a.teacher);
                "" == s && (s = 0), "" == i && (i = 0), t.setData({
                    group_ids: s,
                    class_ids: i
                }), n && (t.setData({
                    teacherName: n.name,
                    teacher_id: n.id
                }), wx.setStorage({
                    key: "teacherName",
                    data: n.name
                }), wx.setStorage({
                    key: "teacher_id",
                    data: n.id
                })), t.getList();
            }
        }, function(t) {
            console.log(t);
        });
    },
    onLoad: function(t) {
        var e = this;
        try {
            wx.getStorageSync("xToken") || this.logout();
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return;
        }
        n.onStop(function(t) {
            console.log("onStop"), t.duration && t.tempFilePath && (o.src = t.tempFilePath, 
            r = Math.ceil(t.duration / 1e3), e.setData({
                tempFilePath: t.tempFilePath,
                tempVoiceTime: r,
                teacherHaveComment: !0,
                is_start: !1,
                isRecord: !1,
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            }));
        }), n.onError(function(t) {
            wx.showToast({
                title: "录音失败",
                icon: "none"
            });
        }), n.onInterruptionBegin(function(t) {
            wx.showToast({
                title: "录音暂停",
                icon: "none"
            });
        }), o.onPlay(function(t) {
            e.setData({
                playText: "点击暂停",
                iconSrc: "../../../image/teacher/pause.png"
            });
        }), o.onStop(function(t) {
            e.setData({
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            });
        }), o.onPause(function(t) {
            e.setData({
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            });
        }), o.onEnded(function(t) {
            e.setData({
                playText: "点击播放",
                iconSrc: "../../../image/teacher/play.png"
            });
        }), this.setData({
            teacherName: wx.getStorageSync("teacherName")
        }), null != wx.getStorageSync("teacher_id") && parseInt(wx.getStorageSync("teacher_id")) > 0 && this.setData({
            teacher_id: wx.getStorageSync("teacher_id")
        }), 0 != Object.keys(t).length ? (this.setData({
            group_ids: t.group_ids,
            class_ids: t.class_ids
        }), this.getList()) : this.getClass();
    },
    bingStartDateChange: function(e) {
        this.setData({
            startDate: e.detail.value
        });
        var a = new Date(e.detail.value).getTime(), i = new Date(this.data.endDate).getTime(), s = t(new Date(a + 1728e5));
        (a - i > 0 || i - a > 1728e5) && this.setData({
            endDate: s
        }), this.getList();
    },
    bingEndDateChange: function(e) {
        this.setData({
            endDate: e.detail.value
        });
        var a = new Date(e.detail.value).getTime(), i = new Date(this.data.startDate).getTime(), s = t(new Date(a - 1728e5));
        (a - i > 1728e5 || i - a > 0) && this.setData({
            startDate: s
        }), this.getList();
    },
    userIdInput: function(t) {
        console.log(t), this.setData({
            user_id: t.detail.value
        });
    },
    search: function() {
        this.data.user_id ? this.getList() : wx.showToast({
            title: "学号为空",
            icon: "none"
        });
    },
    selectClass: function() {
        wx.navigateTo({
            url: "../class/class",
            complete: function() {},
            success: function(t) {}
        });
    },
    logout: function() {
        wx.clearStorage({
            complete: function() {
                wx.redirectTo({
                    url: "../login/login"
                });
            }
        });
    },
    bingClassDateChange: function(t) {
        this.setData({
            scheduleDateListIndex: t.detail.value,
            schedule_id: this.data.scheduleDateList[t.detail.value].schedule_id
        }), this.getList();
    },
    switchChange: function(t) {
        t.detail.value ? this.setData({
            is_finish: 1
        }) : this.setData({
            is_finish: 2
        }), this.getList();
    },
    getList: function(t) {
        var a = this, i = {
            start_date: this.data.startDate,
            end_date: this.data.endDate,
            schedule_id: this.data.schedule_id,
            user_id: this.data.user_id,
            is_finish: this.data.is_finish,
            offset: "concat" == t ? this.data.offset : 0,
            limit: 10,
            class_ids: this.data.class_ids,
            group_ids: this.data.group_ids
        };
        console.log("请求的参数", i), e(i).then(function(e) {
            if (console.log(e), 0 == e.code && e.data.data && e.data.data.picBookData) {
                var i = e.data.data.picBookData;
                console.log("userList", i), "concat" == t ? a.setData({
                    userList: a.data.userList.concat(i)
                }) : a.setData({
                    userList: i
                }), Array.isArray(i) && 0 == i.length && wx.showToast({
                    title: "没有数据了～",
                    icon: "none"
                });
            }
            if (0 == e.code && e.data.scheduleDate) {
                var s = e.data.scheduleDate;
                s.unshift({
                    schedule_id: 0,
                    class_date: "选择课程时间"
                }), a.setData({
                    scheduleDateList: s
                });
            }
        }, function(t) {
            console.log(t);
        });
    },
    showModel: function(t) {
        o.pause();
        var e = t.target.dataset, a = e.commentid, i = e.textcomment, s = e.useraudiourl, n = e.istext;
        a ? (n ? this.setData({
            text_comment: i,
            istext: n
        }) : this.setData({
            useraudiourl: s,
            istext: n,
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
        n.stop(), this.setData({
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
            var s = this.data.tempFilePath;
            if (!s) return void wx.showToast({
                title: "没有录音点评",
                icon: "none"
            });
            i(s, a.teacher_id).then(function(t) {
                console.log("res", t), a.audio_url = t, a.audio_duration = r, e.putCommentWrapper(a);
            }, function(t) {});
        }
    },
    inputFn: function(t) {
        this.data.teacherText = t.detail.value;
    },
    putCommentWrapper: function(t) {
        var e = this;
        a(t).then(function(a) {
            if (0 != a.code) wx.showToast({
                title: err.err_msg,
                icon: "none"
            }); else {
                var i = e.data.userList.map(function(e) {
                    return e.comment.id == t.comment_id ? (e.comment = a.data, e) : e;
                });
                e.setData({
                    userList: i,
                    maskHidden: !0
                });
            }
        }, function(t) {
            e.setData({
                maskHidden: !0
            }), wx.showToast({
                title: err.err_msg,
                icon: "none"
            });
        });
    },
    startRecord: function(t) {
        var e = this;
        wx.authorize({
            scope: "scope.record",
            success: function() {
                var t = {
                    duration: 6e4,
                    sampleRate: 32e3,
                    numberOfChannels: 2,
                    encodeBitRate: 192e3,
                    format: "mp3",
                    audioSource: "auto"
                };
                e.setData({
                    isRecord: !0,
                    is_start: !0
                }), n.start(t);
            }
        });
    },
    stopRecord: function(t) {
        n.stop(), this.setData({
            is_start: !1
        });
    },
    handleTouchMove: function(t) {},
    playTemp: function() {
        o.paused ? o.play() : o.pause();
    },
    againRecord: function() {
        this.setData({
            teacherHaveComment: !1,
            tempFilePath: null,
            is_start: !1
        }), o.pause();
    },
    playAlreadyVoice: function(t) {
        o.src = t.target.dataset.alreadyVoice, o.play();
    },
    playStudentVoice: function(t) {
        o.src = t.currentTarget.dataset.userAudioUrl, o.play();
    },
    refesh: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function(t) {
        console.log("pulldownrefresh"), this.getList();
    },
    onReachBottom: function() {
        console.log("onreachbottom"), this.setData({
            offset: this.data.offset + 10
        }), this.getList("concat");
    },
    onShareAppMessage: function() {}
});