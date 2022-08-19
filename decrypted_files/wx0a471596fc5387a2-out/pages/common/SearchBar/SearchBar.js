module.exports = {
    init: function(a, t, e) {
        console.log("===init==before", t.data);
        var n = Object.assign({
            searchData: {
                searchContent: "",
                placeholder: a,
                showClearButton: !1
            }
        }, t.data);
        t.setData(n), console.log("===init==after", n, t.data), "function" == typeof e && e();
    },
    onSearchBarClearEvent: function(a, t, e) {
        console.log("===onSearchBarClearEvent==", t.data), t.data.searchData.showClearButton = !1, 
        t.data.searchData.searchContent = "", t.setData(t.data), "function" == typeof e && e();
    },
    onSearchBarChangedEvent: function(a, t, e) {
        console.log("===onSearchBarChangedEvent==", t.data), t.data.searchData.showClearButton = a.detail.value.length > 0, 
        t.data.searchData.searchContent = a.detail.value, t.setData(t.data), "function" == typeof e && e();
    }
};