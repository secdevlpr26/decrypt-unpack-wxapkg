var n = "https://syb.qhkltn.com/index.php/Api", e = 85;

getApp();

module.exports = {
    API_IMG: "https://syb.qhkltn.com/",
    BASE_ID: e,
    getBanner: function() {
        return n + "/index/turn?admin_id=" + e;
    },
    getTab: function() {
        return n + "/index/courseCategory?admin_id=" + e;
    },
    getFunctional: function() {
        return n + "/index/edu?admin_id=" + e;
    },
    getImg: function() {
        return n + "/Yu/image?admin_id=" + e;
    },
    getBannerDetail: function(i) {
        return n + "/index/turnDetail?admin_id=" + e + "&id=" + i;
    },
    getAddress: function() {
        return n + "/address/address?admin_id=" + e;
    },
    getVideoList: function() {
        return n + "/index/courseIndex?admin_id=" + e;
    },
    getFuncdetail: function(i, t) {
        return n + "/index/eduDetail?admin_id=" + e + "&cid=" + i + "&openid=" + t;
    },
    getVideiDetail: function(i, t) {
        return n + "/index/course?admin_id=" + e + "&id=" + i + "&openid=" + t;
    },
    like: function(i, t) {
        return n + "/index/eduCategoryZan?admin_id=" + e + "&openid=" + t + "&category_id=" + i;
    },
    getOpenid: function(i, t, d) {
        return n + "/user/openid?appid=" + i + "&secret=" + t + "&code=" + d + "&admin_id=" + e;
    },
    getcode: function(e) {
        return n + "/user/smsSend2?phone=" + e;
    },
    yuyue: function(i, t, d, r) {
        return n + "/Yu/yuyue?admin_id=" + e + "&order_name=" + i + "&phone=" + t + "&yuyue_time=" + d + "&openid=" + r;
    },
    isLogin: function(i) {
        return n + "/user/isLogin?admin_id=" + e + "&openid=" + i;
    },
    saveUser: function(i, t, d) {
        return n + "/user/saveUser?admin_id=" + e + "&openid=" + i + "&nickname=" + t + "&headimgurl=" + d;
    },
    login: function(e, i) {
        return n + "/user/login?phone=" + e + "&password=" + i;
    },
    register: function(i, t, d) {
        return n + "/user/registers?admin_id=" + e + "&openid=" + i + "&phone=" + t + "&password=" + d;
    },
    video_zan: function(i, t) {
        return n + "/index/courseZan?admin_id=" + e + "&openid=" + i + "&course_id=" + t;
    },
    comment: function(i, t, d) {
        return n + "/course/comment?admin_id=" + e + "&openid=" + i + "&content=" + t + "&course_id=" + d;
    },
    commentList: function(i) {
        return n + "/course/commentList?admin_id=" + e + "&course_id=" + i;
    },
    commentZan: function(i, t) {
        return n + "/course/courseCommentZan?admin_id=" + e + "&openid=" + i + "&comment_id=" + t;
    },
    rankList: function() {
        return n + "/my/index";
    },
    allRankList: function() {
        return n + "/my/more";
    },
    resetPsd: function(e, i) {
        return n + "/user/forget_password?phone=" + e + "&password=" + i;
    },
    getRule: function() {
        return n + "/my/score_rule";
    },
    goodsList: function() {
        return n + "/my/exchange?admin_id=" + e;
    },
    getGoods: function(i, t, d, r) {
        return n + "/my/rightExchange?admin_id=" + e + "&openid=" + i + "&user_id=" + t + "&goods_id=" + d + "&num=" + r;
    },
    getUserScore: function(e) {
        return n + "/my/myScore?user_id=" + e;
    },
    getLog: function(i, t) {
        return n + "/my/exchangeRecord?admin_id=" + e + "&openid=" + i + "&user_id=" + t;
    },
    getUserLog: function(e) {
        return n + "/my/record?user_id=" + e;
    },
    qiandao: function(i, t) {
        return n + "/user/sign?admin_id=" + e + "&openid=" + i + "&user_id=" + t;
    },
    isQiandao: function(i, t) {
        return n + "/user/is_sign?admin_id=" + e + "&openid=" + i + "&user_id=" + t;
    },
    submit: function(i, t, d) {
        return n + "/comment/comment?admin_id=" + e + "&openid=" + i + "&user_id=" + t + "&content=" + d;
    },
    share: function(i, t) {
        return n + "/my/share_score?admin_id=" + e + "&openid=" + i + "&user_id=" + t + "&type=0";
    },
    nearList: function(i, t) {
        return n + "/address/fiveRange?wei=" + i + "&jing=" + t + "&admin_id=" + e;
    },
    message: function() {
        return n + "/Comment/commentList?admin_id=" + e;
    },
    isDone: function(i, t) {
        return n + "/my/unclaimed?admin_id=" + e + "&openid=" + i + "&user_id=" + t;
    },
    getScore: function(i, t, d, r) {
        return n + "/my/getScore?admin_id=" + e + "&openid=" + i + "&user_id=" + t + "&score_num=" + d + "&type=" + r;
    },
    isGet: function(i, t) {
        return n + "/comment/is_ling?admin_id=" + e + "&openid=" + i + "&user_id=" + t;
    },
    tuijian: function(e, i) {
        return n + "/user/registeScores?tuijian_phone=" + e + "&user_id=" + i;
    },
    isMake: function(e) {
        return n + "/user/is_tuijian?user_id=" + e;
    },
    cancel: function(i) {
        return n + "/my/del_exchangeAdd?admin_id=" + e + "&id=" + i;
    },
    addBrowser: function(e) {
        return n + "/index/courseBro?id=" + e;
    },
    addBrowser2: function(e) {
        return n + "/index/eduBrowser?id=" + e;
    },
    comment2: function(i, t, d) {
        return n + "/edu/comment?admin_id=" + e + "&openid=" + i + "&content=" + t + "&edu_id=" + d;
    },
    commentList2: function(i) {
        return n + "/edu/commentList?admin_id=" + e + "&edu_id=" + i;
    },
    like2: function(i, t) {
        return n + "/index/eduCategoryZan?admin_id=" + e + "&openid=" + i + "&edu_id=" + t;
    },
    getZan: function(e) {
        return n + "/index/update_zan?id=" + e;
    },
    getZan2: function(e) {
        return n + "/index/course_update?id=" + e;
    },
    getNscore: function(e, i) {
        return n + "/user/newUserScore?user_id=" + e + "&num=" + i;
    },
    getShare: function() {
        return n + "/address/appMa";
    },
    getVideoId: function() {
        return n + "/index/courseIndex?admin_id=" + e;
    },
    getSlqj: function(i, t) {
        return n + "/index/eduDetail?id=" + i + "&admin_id=" + e + "&openid=" + t;
    },
    getGg: function(e) {
        return n + "/active/active?admin_id=15&address_id=" + e;
    },
    getGgDetail: function(e) {
        return n + "/active/active_detail?id=" + e;
    },
    ggClick: function(e) {
        return n + "/active/click?id=" + e;
    },
    nearDetail: function(e) {
        return n + "/address/video?admin_id=" + e;
    },
    look1: function(i) {
        return n + "/view/viewIndex?admin_id=" + e + "&page=" + i;
    },
    look2: function(i, t) {
        return n + "/view/view?admin_id=" + e + "&id=" + i + "&openid=" + t;
    },
    look3: function(e) {
        return n + "/view/viewBro?id=" + e;
    },
    look4: function(i, t) {
        return n + "/view/viewZan?admin_id=" + e + "&openid=" + i + "&view_id=" + t;
    },
    look5: function(e) {
        return n + "/view/view_update?id=" + e;
    },
    look6: function(i, t, d) {
        return n + "/view/comment?openid=" + i + "&admin_id=" + e + "&view_id=" + t + "&content=" + d;
    },
    look7: function(i) {
        return n + "/view/commentList?admin_id=" + e + "&view_id=" + i;
    },
    look8: function(i, t) {
        return n + "/view/viewCommentZan?admin_id=" + e + "&openid=" + i + "&comment_id=" + t;
    },
    hasPin: function() {
        return n + "/common/is_active?admin_id=" + e;
    },
    myyuyeu: function(i) {
        return n + "/Yu/myYuyue?openid=" + i + "&admin_id=" + e;
    },
    newP: function() {
        return n + "/Active/tishi";
    },
    getBanner2: function() {
        return n + "/Index/pinCourse?admin_id=" + e;
    },
    getClass: function() {
        return n + "/index/module?admin_id=" + e;
    },
    getGame: function() {
        return n + "/Active/pinhanzi";
    },
    fujin: function() {
        return n + "/index/show_fujin?admin_id=" + e;
    }
};