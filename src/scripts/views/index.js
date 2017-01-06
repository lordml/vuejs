var vue = require('../lib/vue.js');
var Swiper = require('../lib/swiper.js');
//new vue一个实例
new vue({
  el: '#m-index',//挂载的跟节点
  data:{
    swiper:null,
    navIndex:0,
    nav:['足球现场','足球生活','足球美女'],
    list:[]
  },

methods:{
    changeTab: function(index){
    this.swiper.slideTo(index);
    this.navIndex = index;
    }
  },
mounted: function (){
  fetch('/api/list').then(response => response.json())
  .then(res =>{
    var that = this;
    this.list = res;
    this.swiper = new Swiper('.swiper-container',{
      loop:false,
      onSlideChangeStart: function (swiper) {
        that.navIndex = swiper.activeIndex;
      }
    })
  })
  .catch(e => console.log("0ops, error",e));
}
});
