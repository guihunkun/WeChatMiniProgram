Page({
  onTap: function(event) {
    // console.log("onTap");



    wx.navigateTo({
      url: "../posts/post"
    });


    // wx.redirectTo({
    //   url: "../posts/post"
    // })


    // console.log("execute onTap");
  },
  onTextTap:function(event){
    console.log("execute onTextTap");//点击子节点的事件，父节点的事件也会响应  //冒泡事件
  },
})