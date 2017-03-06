<template>
  <div>
    <div class="header">
      <div class="header-left">
        <rounter-link to="/index">
        <label :class="['item',{ 'item-selected':0 === selectedIndex}]" @click="switchItem(0)">首页</label>
        </rounter-link>
        <router-link to="/programmer">
        <label :class="['item', {'item-selected':1 === selectedIndex}]" @click="switchItem(1)">程序员</label>
        </router-link>
        <label><input placeholder="搜索你感兴趣的作品"></label>
      </div>
      <div class="header-right">
        <label class="item">登录</label>
        <label class="item">注册</label>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  @hover-color:#37a1f9;
  *{
    margin: 0px;
    padding: 0px;
  }
  .item(){
    width: 80px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    cursor: pointer;
  }
  .item-selected{
    color: @hover-color;
    border-bottom: 3px solid @hover-color;
  }
  .header{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  & .header-left .item{
    .item
    }
  & .header-left .item:hover{
      color: @hover-color;
      border-bottom: 3px solid @hover-color;
    }
  }
  .item-right(){
    width: 60px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    cursor: pointer;
  }
  .header-right {
    margin-top:10px;
  .item:nth-child(1) {
  .item-right;
    color: #fff;
    background-color:  @hover-color;
    border-radius: 5px;
    margin-right: 5px
  }
  .item:nth-child(2) {
  .item-right;
  }
  }
</style>
<script>
  export default{
    data: function () {
      return {
        selectedIndex: 0
      }
    },
    methods: {
      switchItem: function (index) {
        this.selectedIndex = index;
        console.log(this.selectedIndex);
        this.$router.push('/'+index);
      }
    }
  }
</script>