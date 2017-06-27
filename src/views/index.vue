<template>
  <div class="cp-works">
    <div class="work-list">
      <div class="item" v-bind:id="item.id" v-for="item of items">
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
        {name: '作品1', id: 'work-item1'},
        {name: '作品2', id: 'work-item2'},
        {name: '作品3', id: 'work-item3'},
      ],
      selectedItemName: ''
    }
  },
  methods: {
    showContent(e){
      this.selectedItemName = e.target.innerHTML;
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
  background-color: #efefef;
}
.work-list{
  width: 80vw;
  margin: auto;
  display: flex;
  justify-content: center;
}
.item{
  height: 300px;
  margin: 0 10px;
  flex-grow: 1;
  border:1px solid green;
  padding: 10px;
  background-color: #fff;
}
.item img{
  width: 100%;
  height: 70%;
}
.item-detail{
  background-color: rgba(0,0,0,.2);
}
.item-detail p{
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
