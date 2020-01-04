var postsData=require('../../data/posts-data.js')
// 只能用相对路径，不能用绝对路径:/data/post-data.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"曲晓昆",
    posts_key:[

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_date=[
      {
          date:"Sep 18 2018",
      },
      {
          date:"Nov 28 2018",
      }
    ]
    var post_content1={
      data:"Sep 18 2018",
      content:"guihun曲晓昆",
      gh:{
        content:"曲晓昆guihun",
      },
      a: 1,
      b: 2,
      c: 3,
    }
    this.setData({posts_key:posts_date});
    this.setData(post_content1);
    this.setData({posts_keys: postsData.postList });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})