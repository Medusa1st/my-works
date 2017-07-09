<template>
  <div class="cp-works">
    <div class="work-list">
      <div class="item" v-bind:id="item.id" @click="showWorkPage(item)" v-for="item of items">
        <div class="item-image">
          <img :src="item.imgSrc">
        </div>
        <div class="item-detail">
          <p>{{item.name}}</p>
          <p>{{item.intro}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'works',
  data () {
    return {
      title: '我的作品',
      items: [
      {
        name: '作品1-智能停车页面设计', 
        id: 'work-item1', 
        imgSrc: 'http://medusa1st.me/images/works/work1.png', 
        url: 'http://www.liveparkchina.com', 
        intro: '基于高德地图js-sdk的手机微信web页面，实现微信登录、用户定位、停车位标记、停车位选择、路线导航、支付等功能。请使用微信扫描二维码打开链接。'
      },{
        name: '作品2', 
        id: 'work-item2', 
        imgSrc: 'http://medusa1st.me/images/works/work-default.png', 
        url: '', 
        intro: '制作中，敬请期待……'
      },{
        name: '作品3', 
        id: 'work-item3', 
        imgSrc: 'http://medusa1st.me/images/works/work-default.png', 
        url: '', 
        intro: '制作中，敬请期待……'
      }
      ],
      selectedItemName: ''
    }
  },
  methods: {
    showWorkPage(item){
      if(item.url != ''){
        window.open(item.url);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cp-works{
  position:fixed;
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url("http://medusa1st.me/images/bg-wooden-style.jpg");
  background-size:100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-y:scroll;
}
.work-list{
  /*width: 80vw;*/
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.item{
  margin: 10px 10px;
  height: 300px;
  width: 300px;
  /*flex-grow: 1;*/
  border:1px solid #fff;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 1px 1px 1px rgba(0,0,0,.4);
  transition: all .5s ease;
}
.item-image{
  width: calc(100% - 20px);
  height: 70%;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
}
.item img{
  width: 100%;
  height: 100%;
}
 #work-item2 img,#work-item3 img{
  width:70%;
} 
.item-detail{
  height: 180px;
  position: relative;
  top: 0px;
  background-color: rgba(255,255,255,.8);
  padding: 10px;
  transition: top .5s ease;
}
.item-detail p:first-child{
  padding-top: 15px;
  margin-bottom: 40px;
}
.item:hover > .item-detail{
  top: -124px;
}
.item:hover{
  border:1px solid #888888;
  box-shadow: 10px 10px 5px rgba(0,0,0,.4);
  height: 320px;
  width: 320px;
}
</style>
