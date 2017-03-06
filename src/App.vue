<template>
  <div id="app">
    <UserHeader></UserHeader>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import UserHeader from './components/Header.vue'
export default {
  name: 'app',
  components:{
    UserHeader
  }
}
</script>

<style>
#app {
  font-family: tahoma,Helvetica,Arial,'Hiragino Sans GB',"Microsoft Yahei","\5FAE\8F6F\96C5\9ED1","\5b8b\4f53",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
