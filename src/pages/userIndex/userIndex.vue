<template>
  <div>
    <div>这是首页</div>
  </div>
</template>
<style scoped lang="less">

</style>
<script>
  import UserHeader from "../../components/Header.vue";
  export default{
    data: function () {
      return {
        payWayShow: [false, true],
        families: [{'code': '0', 'name': '我的家庭'}, {'code': '1', 'name': '朋友的家庭'}],
        familyNumList: [{'code': '0', 'num': '18261811000'}, {'code': '0', 'num': '18261811001'}],
        currentFamilyIndex: 0,
        editIsShow: false,
        currentNumIndex: 0,
        num: '18261811000'
      }
    },
    methods: {
      switchPayWay: function (index) {
        for (var i = 0; i < this.payWayShow.length; i++) {
          this.payWayShow.splice(i, 1, false)
        }
        this.payWayShow.splice(index, 1, true)
      },
      switchFamilyType: function (index) {
        this.currentFamilyIndex = index;
        index === 0 ? this.editIsShow = false : this.editIsShow = true;
      },
      switchFamilyNum: function (index) {
        this.currentNumIndex = index;
        this.num = this.familyNumList[index].num;
      }
    },
    components: {
      UserHeader
    }
  }

</script>