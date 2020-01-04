var util=require('../../utils/util.js')
var app = getApp();

Page({

  data:{
    inTheaters:{},
    comingSoon:{},
    top250:{}

  },





  onLoad: function(event) {
    // var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters";
    // var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon";
    // var top250Url = app.globalData.doubanBase + "/v2/movie/top250";

    var inTheatersUrl = app.globalData.doubanBase +
      "/v2/movie/in_theaters" + "?start=0&count=3";
    var comingSoonUrl = app.globalData.doubanBase +
      "/v2/movie/coming_soon" + "?start=0&count=3";
    var top250Url = app.globalData.doubanBase +
      "/v2/movie/top250" + "?start=0&count=3";

    // this.getMovieListData("http://v.juhe.cn/movie/movies.today?key=bae7431b0dc5c5c0df1228074c03d627&cityid=2");

    // this.getMovieListData("http://www.douban.com/j/app/radio/channels");

    
    // this.getMovieListData("http://www.douban.com/j/app/radio/channels");


    this.getMovieListData(inTheatersUrl,"inTheaters","正在上映");  
    this.getMovieListData(comingSoonUrl,"comingSoon","即将上映"); 
    this.getMovieListData(top250Url,"top250","豆瓣Top250"); 
    

  },
  getMovieListData: function (url, settedKey, catetoryTitle) {
    var that =this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": ""
      },
      success: function(res) {
        console.log(res);
        that.processDoubanData(res.data, settedKey, catetoryTitle);
      },
      fail: function(error) {
        console.log(error);
      }
    })
  },
  processDoubanData:function(moviesDouban,settedKey,catetoryTitle){
    var movies=[];
    for(var idx in moviesDouban.subjects){
      var subject=moviesDouban.subjects[idx];
      var title=subject.title;
      if(title.length>=6){
        title=title.substring(0,6)+"...";
      }
      // [1,1,1,1,1]
      var temp={
        stars: util.convertToStarsArray(subject.rating.stars),
        title:title,
        average:subject.rating.average,
        coverageUrl:subject.images.large,
        movieId:subject.id
      }
      movies.push(temp)
    }
    var readyData={};
    readyData[settedKey]={
      catetoryTitle:catetoryTitle,
      movies:movies
      };
    this.setData(readyData)
  }
})