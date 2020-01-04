Page({
  onTap: function (event) {

    wx.navigateTo({
      url: "../movies/movies"
    });

    // wx.redirectTo({
    //   url: "../posts/post"
    // })
  },
  onTextTap: function (event) {
    console.log("execute onTextTap");//点击子节点的事件，父节点的事件也会响应  //冒泡事件
  },
})