var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, a = getApp(), e = wx.createInnerAudioContext(), o = wx.getRecorderManager();

Page({
    data: {
        timer: "",
        countDownNum: 5,
        id: 0,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        videoInfo: "",
        videoInfo2: "",
        video_url: "",
        isShowTopic: !0,
        showTopic: !1,
        showText: !0,
        showImg: !0,
        showImg1: !0,
        imgAttr: [],
        textAttr: [],
        img_url: "",
        showRecord: !0,
        showRecord1: !0,
        showTopicChoiceNoImg: !0,
        showText1: !0,
        active: "",
        topicNumber: !1,
        rightIcon: !0,
        errorIcon: !0,
        title: "",
        hadDisPlayQ: [],
        number: 0,
        isRecord: !1,
        recording: !0,
        tempFilePath: "",
        finish_time: 0,
        finish_time_cache: 0,
        aanswer_finish_time: 0,
        flag: !1,
        rocketAnimation: !0,
        result: "",
        isRecording: !1,
        closePopTimer: null,
        openModalTime: 0,
        curQuestion: {},
        awardMedal: {
            gold: 0,
            silver: 0,
            copper: 0
        },
        star: 0,
        evaluation: !0,
        evaluation1: !0,
        img_bg_hidden: !1,
        answer_index_icon: 0,
        avatarList: [ "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1548509200,3423898172&fm=26&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2277589014,3340794973&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1690146490,3031415891&fm=26&gp=0.jpg", "http://img2.imgtn.bdimg.com/it/u=2342918587,1779679087&fm=11&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=1833910202,2379898066&fm=11&gp=0.jpg" ],
        avatarRList: [],
        avatarRandom: "",
        avatarRandom1: "",
        isShowChampion: !0,
        showAvatarCount: 3,
        topic_star_img: !0,
        topic_star: !0,
        showChoiceTime: !0,
        showRecordTime: !0,
        showTitle: !0,
        showTitle1: !0,
        showClock: !0,
        now_star_attr: [],
        play_time_already: 0,
        audio_src: "",
        audio_url: "",
        isShowControls: !0,
        isShowGesture: !0,
        fullscreen: !0,
        reasure_box_url: "http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3",
        openPopTimeSt: 0,
        needPlayAudio: !1,
        playAudoErro: !1,
        isPlay: !1,
        isRecordSrc: !1,
        isRecordError: !1,
        videoPlay: !1,
        isChooseAnswer: !0
    },
    onLoad: function(t) {
        var a = this, o = wx.getStorageSync("userinfo");
        o ? (this.setData({
            userInfo: JSON.parse(o),
            hasUserInfo: !0
        }), this.reSortAvatar(1)) : (console.log(222), wx.getUserInfo({
            success: function(t) {
                a.setData({
                    userInfo: t.userInfo,
                    hasUserInfo: !0
                }), wx.setStorageSync("userinfo", JSON.stringify(t.userInfo)), a.reSortAvatar(1);
            }
        }));
        var i = wx.createVideoContext("live_class", this);
        wx.setInnerAudioOption({
            obeyMuteSwitch: !1
        }), this.init(), "undefined" != t.play_time_already && this.setData({
            play_time_already: t.play_time_already,
            isShowControls: !1,
            isShowGesture: !1,
            fullscreen: !1
        }), this.setData({
            id: t.id
        });
        var r = this;
        wx.getStorage({
            key: "videoInfo",
            success: function(t) {
                r.setData({
                    videoInfo: JSON.parse(t.data),
                    video_url: JSON.parse(t.data).video_url
                });
            }
        }), wx.getStorage({
            key: "videoInfo2",
            success: function(t) {
                r.setData({
                    videoInfo2: JSON.parse(t.data)
                });
            }
        });
        var s = Math.floor(Math.random() * (r.data.avatarList.length - 1)) + 0, n = s + 1 > r.data.avatarList.length ? s - 1 : s + 1;
        r.setData({
            avatarRandom: r.data.avatarList[s],
            avatarRandom1: r.data.avatarList[n]
        }), e.onEnded(function() {
            if (r.data.needPlayAudio) {
                r.answerTime("0");
                var t = new Date().getTime();
                r.setData({
                    openPopTimeSt: t,
                    isChooseAnswer: !0
                });
            }
            r.data.isRecordSrc && (r.setData({
                isChooseAnswer: !0
            }), r.countDown()), r.data.videoPlay && (r.setData({
                rocketAnimation: !0
            }), i.play());
        }), e.onError(function() {
            if (r.data.playAudoErro) {
                r.answerTime("0");
                var t = new Date().getTime();
                r.setData({
                    openPopTimeSt: t
                });
            }
            r.data.isRecordError && r.countDown();
        }), e.onPlay(function() {
            r.data.isPlay && r.setData({
                rocketAnimation: !1
            });
        });
    },
    getUserInfo: function(t) {
        var e = this;
        wx.getSetting({
            success: function(o) {
                o.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(o) {
                        a.globalData.userInfo = t.detail.userInfo, e.setData({
                            userInfo: t.detail.userInfo,
                            hasUserInfo: !0
                        }), e.reSortAvatar(1);
                    },
                    fail: function(t) {}
                });
            }
        });
    },
    getRAvatar: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = this.data.avatarList.filter(function(a) {
            return !t.find(function(t) {
                return t.url === a;
            });
        }), e = a.length;
        return a[Math.floor(Math.random() * (e - 1))];
    },
    reSortAvatarUpOrDown: function(t) {
        var a = this.data.avatarRList.filter(function(t) {
            return t.isUserAvatar;
        });
        "add" === t && a[0] && a[0].index >= 1 && this.reSortAvatar(a[0].index - 1), "minus" === t && a[0] && a[0].index > this.showAvatarCount - 1 && this.reSortAvatar(a[0].index + 1);
    },
    reSortAvatar: function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = new Array(3).fill("url"), e = 0; e < 3; e++) a[e] = {
            index: e,
            url: this.getRAvatar(a)
        };
        a[t] = {
            index: t,
            url: this.data.userInfo.avatarUrl,
            isUserAvatar: !0
        }, this.setData({
            avatarRList: a
        });
    },
    record: function() {
        this.data.isChooseAnswer && (this.data.isRecording || (this.setData({
            result: ""
        }), this.openSocket(), clearInterval(this.data.timer), this.setData({
            timer: null
        }), this.setData({
            isRecording: !0,
            recording: !1,
            showRecord: !0,
            showRecord1: !0,
            showChoiceTime: !0,
            showRecordTime: !1
        }), this.answerTime("")));
    },
    stop: function() {
        this.setData({
            isRecording: !1
        }), o.stop();
    },
    onCloseSocket: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.close && t.close();
    },
    openSocket: function(a) {
        var i = this;
        this.onCloseSocket(this.socket), this._sid = "uuid-t" + Date.now();
        this.socket = wx.connectSocket({
            url: "wss://wss-edu.hivoice.cn:443/ws/eval/mp3",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {},
            fail: function(t) {}
        }), this.socket.onOpen(function(t) {
            o.start({
                duration: 6e5,
                sampleRate: 16e3,
                numberOfChannels: 1,
                format: "mp3",
                frameSize: 2
            }), i.socket.send({
                data: JSON.stringify({
                    mode: "word",
                    appkey: "o4bp6doqksrcuerqrmj3zytd3hkzx2y2bc6edja7",
                    displayText: i.data.title,
                    audioFormat: "mp3",
                    eof: i._sid
                })
            });
        }), this.socket.onError(function(t) {
            i.onCloseSocket(i.socket);
        }), this.socket.onMessage(function(a) {
            var o = JSON.parse((a || {}).data || {});
            if ("61443" == o.errcode) wx.showToast({
                title: "网络出错，请重试",
                icon: "none"
            }), i.setData({
                evaluation: !0,
                rocketAnimation: !0,
                recording: !0,
                showRecord: !1,
                finish_timer: i.data.finish_time_cache
            }); else {
                var r = i.data.awardMedal, s = ((o || {}).result || {}).score || "0";
                if (parseInt(s) >= 60) {
                    i.reSortAvatar(0);
                    var n = r.gold + 1, c = i.data.star + 3;
                    i.setData({
                        awardMedal: t({}, r, {
                            gold: n
                        }),
                        isShowChampion: !1,
                        showRecord: !0,
                        evaluation: !0,
                        recording: !0,
                        topic_star: !1,
                        star: c,
                        now_star_attr: new Array(3).fill("star")
                    }), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/newperfect.mp3", 
                    e.play(), setTimeout(function() {
                        i.setData({
                            isPlay: !0,
                            videoPlay: !0
                        }), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3", 
                        e.play();
                    }, 3e3);
                } else if (parseInt(s) >= 30 && parseInt(s) < 60) {
                    i.reSortAvatar(1);
                    var d = i.data.star + 2, l = r.silver + 1;
                    i.setData({
                        awardMedal: t({}, r, {
                            silver: l
                        }),
                        star: d,
                        showRecord: !0,
                        evaluation: !0,
                        recording: !0,
                        topic_star: !1,
                        now_star_attr: new Array(2).fill("star")
                    }), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/raeding_excellent.mp3", 
                    e.play();
                } else if (parseInt(s) > 0 && parseInt(s) < 30) {
                    i.reSortAvatar(1);
                    var h = r.copper + 1, u = i.data.star + 1;
                    i.setData({
                        awardMedal: t({}, r, {
                            copper: h
                        }),
                        star: u,
                        showRecord: !0,
                        evaluation: !0,
                        recording: !0,
                        topic_star: !1,
                        now_star_attr: new Array(1).fill("star"),
                        audio_src: "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_niceTry.mp3"
                    }), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_niceTry.mp3", 
                    e.play();
                } else i.reSortAvatar(2), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_speckLoad.mp3", 
                e.play();
                setTimeout(function() {
                    i.setData({
                        evaluation: !0,
                        rocketAnimation: !0,
                        recording: !0,
                        showRecord: !0,
                        isShowTopic: !0,
                        videoPlay: !0
                    });
                }, 3e3);
            }
            if (i.onCloseSocket(i.socket), a.data) try {
                var w = JSON.parse(a.data);
                i.setData({
                    result: JSON.stringify(w, null, 4)
                });
            } catch (t) {}
        });
    },
    init: function() {
        var t = this;
        o.onStart(function() {}), o.onStop(function(a) {
            t.setData({
                tempFilePath: a.tempFilePath
            }), clearInterval(t.data.finish_timer), t.setData({
                finish_timer: null
            });
        }), o.onError(function(a) {
            t.setData({
                isRecording: !1
            }), t.onCloseSocket(t.socket);
        }), o.onFrameRecorded(function(a) {
            t.socket.send({
                data: a.frameBuffer,
                success: function(t) {},
                fail: function(t) {}
            }), a.isLastFrame && t.socket.send({
                data: t._sid,
                complete: function() {}
            });
        });
    },
    onShowTextQ: function(t) {
        this.setData({
            textAttr: t.option,
            imgAttr: [],
            showImg: !0,
            showRecord: !0,
            showRecord1: !0,
            showText: !1
        });
    },
    onShowRecordQ: function(t) {
        this.setData({
            isShowTopic: !1,
            showTopic: !1,
            showTopicChoiceNoImg: !0,
            showImg: !0,
            showText: !0,
            showRecord1: !0,
            showRecord: !1,
            img_url: t.img_url,
            finish_time: t.finish_time,
            finish_time_cache: t.finish_time,
            showText1: !0,
            showImg1: !0,
            showChoiceTime: !0,
            showRecordTime: !1
        });
    },
    onShowImageQ: function(t) {
        this.setData({
            imgAttr: t.option,
            textAttr: [],
            showText: !0,
            showRecord: !0,
            showRecord1: !0,
            showImg: !1
        });
    },
    onShowImageQNoImg: function(t) {
        this.setData({
            imgAttr: t.option,
            textAttr: [],
            showText: !0,
            showRecord: !0,
            showRecord1: !0,
            showImg: !0,
            showText1: !0,
            showImg1: !1
        });
    },
    onShowTextQNoImg: function(t) {
        this.setData({
            textAttr: t.option,
            imgAttr: [],
            showImg: !0,
            showImg1: !0,
            showRecord: !0,
            showRecord1: !0,
            showText: !0,
            showText1: !1
        });
    },
    onShowRecordQNoImg: function(t) {
        this.setData({
            isShowTopic: !1,
            showTopic: !0,
            showTopicChoiceNoImg: !1,
            showImg: !0,
            showText: !0,
            showRecord: !0,
            showRecord1: !1,
            img_url: t.img_url,
            finish_time: t.finish_time,
            finish_time_cache: t.finish_time,
            showText1: !0,
            showImg1: !0,
            showChoiceTime: !0,
            showRecordTime: !1
        });
    },
    bindtimeupdate: function(a) {
        var o = this, i = o.data.videoInfo2, r = i[parseInt(a.detail.currentTime)], s = wx.createVideoContext("live_class", this), n = parseInt(a.detail.currentTime), c = o.data.hadDisPlayQ.find(function(t) {
            return t === n;
        });
        if (r && r.practise_date && !c) {
            clearInterval(o.data.timer), clearInterval(o.data.finish_timer), o.setData({
                number: o.data.number + 1,
                topic_star: !0,
                rocketAnimation: !0,
                showClock: !0,
                timer: null,
                finish_timer: null
            }), o.setData({
                isShowTopic: !1,
                showTopicChoiceNoImg: !0,
                showTopic: !1,
                img_url: r.img_url,
                finish_time: r.finish_time,
                curQuestion: r,
                showRecordTime: !0,
                showChoiceTime: !1,
                answer_finish_time: r.finish_time,
                audio_url: r.audio_url,
                title: r.title
            }), s.pause();
            var d = new Date().getTime();
            o.data.hadDisPlayQ.push(n);
            var l = t({}, r, {
                openPopTime: d
            });
            i[n] = l, o.setData({
                videoInfo2: i
            }), r.img_url ? (o.setData({
                showTitle: !1,
                showTitle1: !0
            }), 0 == r.type ? (o.setData({
                isShowTopic: !1,
                showTopicChoiceNoImg: !0,
                showTopic: !1,
                img_url: r.img_url,
                finish_time: r.finish_time
            }), o.data.audio_url ? (e.src = r.audio_url, e.play(), o.setData({
                needPlayAudio: !0,
                playAudoErro: !0,
                isPlay: !1,
                isChooseAnswer: !1
            })) : (o.answerTime("0"), o.setData({
                isChooseAnswer: !0
            })), r.option.forEach(function(t) {
                "image" === t.type ? o.onShowImageQ(r) : "text" === t.type && o.onShowTextQ(r);
            })) : (o.onShowRecordQ(r), o.data.audio_url ? (e.src = r.audio_url, e.play(), o.setData({
                playAudoErro: !0,
                isRecordSrc: !0,
                isRecordError: !0,
                isPlay: !1,
                isChooseAnswer: !1
            })) : (o.countDown(), o.setData({
                isChooseAnswer: !0
            })))) : (o.setData({
                showTitle: !0,
                showTitle1: !1
            }), 0 == r.type ? (o.setData({
                isShowTopic: !1,
                showTopic: !0,
                showTopicChoiceNoImg: !1
            }), o.data.audio_url ? (e.src = r.audio_url, e.play(), o.setData({
                needPlayAudio: !0,
                playAudoErro: !0,
                isPlay: !1,
                isChooseAnswer: !1
            })) : (o.answerTime("0"), o.setData({
                isChooseAnswer: !0
            })), r.option.forEach(function(t) {
                "image" === t.type && o.onShowImageQNoImg(r), "text" === t.type && o.onShowTextQNoImg(r);
            })) : (o.onShowRecordQNoImg(r), o.data.audio_url ? (e.src = r.audio_url, e.play(), 
            o.setData({
                playAudoErro: !0,
                isRecordSrc: !0,
                isRecordError: !0,
                isPlay: !1,
                isChooseAnswer: !1
            })) : (o.countDown(), o.setData({
                isChooseAnswer: !0
            }))));
        }
    },
    bindended: function() {
        var t = this, a = t.data.star, e = JSON.stringify(t.data.awardMedal), o = t.data.id;
        wx.redirectTo({
            url: "/pages/liveclass/reminisce/reminisce?star=" + a + "&awardMedal=" + e + "&id=" + o
        });
    },
    choiceAnswer: function(a) {
        var o = this;
        if (o.data.isChooseAnswer) {
            var i = o.data.answer_finish_time, r = a.currentTarget.dataset.type, s = a.currentTarget.dataset.item, n = this.data.curQuestion;
            clearInterval(o.data.finish_timer), clearInterval(o.data.timer), o.setData({
                finish_timer: null,
                timer: null
            });
            var c = new Date().getTime(), d = o.data.videoInfo2;
            if (!d[n.practise_date].isAnswered) {
                d[n.practise_date] = t({}, d[n.practise_date], {
                    answerTimeStamp: c,
                    isAnswered: !0
                }), o.setData({
                    videoInfo2: d
                });
                var l = 0;
                l = o.data.videoInfo2[n.practise_date].audio_url ? o.data.openPopTimeSt : o.data.videoInfo2[n.practise_date].openPopTime;
                var h = (o.data.videoInfo2[n.practise_date].answerTimeStamp - l) % 6e4 / 1e3, u = a.currentTarget.dataset.index;
                if (o.setData({
                    answer_index_icon: u
                }), "text" == r) {
                    var w = o.data.textAttr.map(function(a, r) {
                        if (r === u) {
                            if (0 == s.is_crrect) o.reSortAvatar(2), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3", 
                            e.play(), a = t({}, a, {
                                background: "#ff8e8b",
                                color: "#fff",
                                border: "solid 1rpx #ff8e8b",
                                answer_index: u,
                                display: "none"
                            }), o.setData({
                                rightIcon: !0,
                                errorIcon: !1,
                                topicNumber: !0,
                                videoPlay: !0
                            }); else {
                                var n = o.data.star + 1, c = o.data.awardMedal;
                                if (h <= .5 * i) {
                                    var d = c.gold + 1;
                                    o.reSortAvatar(0), o.setData({
                                        awardMedal: t({}, c, {
                                            gold: d
                                        }),
                                        isShowChampion: !1
                                    });
                                } else if (h >= .5 * i && h <= .8 * i) {
                                    o.reSortAvatar(1);
                                    var l = c.silver + 1;
                                    o.setData({
                                        awardMedal: t({}, c, {
                                            silver: l
                                        }),
                                        rocketAnimation: !0
                                    });
                                } else if (h >= .8 * i && h <= 1 * i) {
                                    o.reSortAvatar(1);
                                    var w = c.copper + 1;
                                    o.setData({
                                        awardMedal: t({}, c, {
                                            copper: w
                                        }),
                                        rocketAnimation: !0
                                    });
                                }
                                e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_right.mp3", 
                                a = t({}, a, {
                                    background: "#65dfbb",
                                    color: "#fff",
                                    border: "solid 1rpx #65dfbb",
                                    answer_index: u,
                                    display: "none"
                                }), o.setData({
                                    errorIcon: !0,
                                    topicNumber: !0,
                                    rightIcon: !1,
                                    star: n,
                                    now_star_attr: new Array(1).fill("star")
                                }), e.play(), setTimeout(function() {
                                    o.setData({
                                        showText: !0,
                                        showText1: !0,
                                        topic_star: !1,
                                        audio_src: ""
                                    });
                                }, 2e3), setTimeout(function() {
                                    e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3", 
                                    e.play(), o.setData({
                                        isPlay: !0,
                                        videoPlay: !0
                                    });
                                }, 3e3);
                            }
                            setTimeout(function() {
                                o.setData({
                                    isShowTopic: !0,
                                    showTopic: !0,
                                    showTopicChoiceNoImg: !0,
                                    textAttr: [],
                                    rightIcon: !0,
                                    errorIcon: !0,
                                    topic_star: !0,
                                    videoPlay: !0
                                });
                            }, 3e3);
                        } else a = t({}, a, {
                            background: "",
                            color: "",
                            border: ""
                        });
                        return a;
                    });
                    o.setData({
                        textAttr: w
                    });
                } else if ("image" == r) {
                    var m = o.data.imgAttr.map(function(a, r) {
                        if (r === u) {
                            if (0 == s.is_crrect) o.reSortAvatar(2), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3", 
                            e.play(), a = t({}, a, {
                                background: "#ff8e8b",
                                color: "#fff",
                                border: "solid 1rpx #ff8e8b",
                                answer_index: u,
                                display: "none"
                            }), o.setData({
                                rightIcon: !0,
                                errorIcon: !1,
                                topicNumber: !0,
                                videoPlay: !0
                            }); else {
                                var n = o.data.star + 1;
                                a = t({}, a, {
                                    background: "#65dfbb",
                                    color: "#fff",
                                    border: "solid 1rpx #65dfbb",
                                    display: "none",
                                    answer_index: u
                                }), o.setData({
                                    errorIcon: !0,
                                    topicNumber: !0,
                                    rightIcon: !1,
                                    star: n,
                                    now_star_attr: new Array(1).fill("star")
                                }), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_right.mp3", 
                                e.play(), setTimeout(function() {
                                    o.setData({
                                        showImg: !0,
                                        showImg1: !0,
                                        topic_star: !1
                                    });
                                }, 2e3);
                                var c = o.data.awardMedal;
                                if (h <= .5 * i) {
                                    var d = c.gold + 1;
                                    o.reSortAvatar(0), o.setData({
                                        awardMedal: t({}, c, {
                                            gold: d
                                        }),
                                        isShowChampion: !1
                                    });
                                } else if (h >= .5 * i && h <= .8 * i) {
                                    o.reSortAvatar(1);
                                    var l = c.silver + 1;
                                    o.setData({
                                        awardMedal: t({}, c, {
                                            silver: l
                                        }),
                                        rocketAnimation: !0
                                    });
                                } else if (h > .8 * i && h <= 1 * i) {
                                    o.reSortAvatar(1);
                                    var w = c.copper + 1;
                                    o.setData({
                                        awardMedal: t({}, c, {
                                            copper: w
                                        }),
                                        rocketAnimation: !0
                                    });
                                }
                                setTimeout(function() {
                                    e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/treasure_box_open.mp3", 
                                    e.play(), o.setData({
                                        isPlay: !0,
                                        videoPlay: !0
                                    });
                                }, 2e3);
                            }
                            setTimeout(function() {
                                o.setData({
                                    isShowTopic: !0,
                                    showTopic: !0,
                                    showTopicChoiceNoImg: !0,
                                    imgAttr: [],
                                    rightIcon: !0,
                                    errorIcon: !0,
                                    topic_star: !0,
                                    videoPlay: !0
                                });
                            }, 3e3);
                        } else a = t({}, a, {
                            background: "",
                            color: "",
                            border: "",
                            display: ""
                        });
                        return a;
                    });
                    o.setData({
                        imgAttr: m
                    });
                }
            }
        }
    },
    onReady: function() {
        this.videoContexts = wx.createVideoContext("live_class", this), this.videoContexts.requestFullScreen({
            direction: 90
        });
    },
    closeFullscreen: function() {
        wx.redirectTo({
            url: "/pages/liveclass/videoList/videoList"
        });
    },
    answerTime: function(t) {
        var a = this;
        clearInterval(a.data.finish_timer), a.setData({
            finish_timer: null,
            needPlayAudio: !1,
            playAudoErro: !1,
            isPlay: !1,
            isRecordSrc: !1,
            isRecordError: !1,
            videoPlay: !1
        });
        var o = setInterval(function() {
            var o = a.data.finish_time;
            o--, a.setData({
                finish_time: o
            }), o <= 0 && (clearInterval(a.data.finish_timer), a.setData({
                finish_timer: null,
                videoPlay: !0
            }), a.reSortAvatar(2), a.stop(), "" != t ? (e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3", 
            e.play(), a.setData({
                isShowTopic: !0,
                showTopic: !0,
                showTopicChoiceNoImg: !0,
                textAttr: [],
                evaluation: !0
            })) : a.setData({
                recording: !0,
                showRecord: !0,
                evaluation: !1,
                showClock: !1,
                showChoiceTime: !0,
                showRecordTime: !0
            }));
        }, 1e3);
        a.setData({
            finish_timer: o
        });
    },
    countDown: function() {
        var t = this, a = t.data.countDownNum;
        clearInterval(t.data.timer), t.setData({
            timer: null,
            needPlayAudio: !1,
            playAudoErro: !1,
            isPlay: !1,
            isRecordSrc: !1,
            isRecordError: !1,
            videoPlay: !1
        });
        var o = setInterval(function() {
            a--, t.setData({
                countDownNum: a
            }), a <= 0 && (clearInterval(t.data.timer), t.setData({
                isShowTopic: !0,
                showTopic: !0,
                showTopicChoiceNoImg: !0,
                countDownNum: 5,
                timer: null,
                videoPlay: !0
            }), e.src = "http://static2.rainbowclass.cn/static/static-rainbow/media/reading_game3_wrong.mp3", 
            e.play(), t.reSortAvatar(2));
        }, 1e3);
        t.setData({
            timer: o
        });
    }
});