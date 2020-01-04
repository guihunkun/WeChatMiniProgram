Page({
    onTap: function (event) {
        wx.navigateTo({
            url:"../movies/movies"
        });
        
        // wx.switchTab({
        //     url: "../movies/movies"
        // });
    }
})