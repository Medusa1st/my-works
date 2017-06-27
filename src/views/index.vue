<template>
  <div class="cp-works">
    <div class="work-list">
      <div class="item" v-bind:id="item.id" @click="showWorkPage(item)" v-for="item of items">
        <img src="../assets/work1.png">
        <div class="item-detail">
          <p>{{item.name}}</p>
          <p>这是一段介绍文字啦啦啦，这是一段介绍文字啦啦啦，这是一段介绍文字啦啦啦，这是一段介绍文字啦啦啦，这是一段介绍文字啦啦啦，这是一段介绍文字啦啦啦。</p>
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
        {name: '作品1', id: 'work-item1', url: 'http://medusa1st.me/livepark/'},
        {name: '作品2', id: 'work-item2', url: 'http://medusa1st.me/livepark/'},
        {name: '作品3', id: 'work-item3', url: 'http://medusa1st.me/livepark/'},
      ],
      selectedItemName: ''
    }
  },
  methods: {
    showWorkPage(item){
      window.open(item.url);
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
.item img{
  width: calc(100% - 20px);
  height: 70%;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
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
  border:1px solid limegreen;
  box-shadow: 10px 10px 5px rgba(0,0,0,.4);
  height: 320px;
  width: 320px;
}
</style>
