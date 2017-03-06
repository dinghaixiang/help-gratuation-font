<template>
  <div class="big-box">
    <div class="small-box" v-for="(num,index) in boxList" @click="changeIndex(index,num)">
      <label>{{num}}</label>
    </div>
  </div>
</template>
<style scope lang="less">
  .big-box{
    width: 500px;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    margin:100px auto;
  }
  .small-box{
    background-color: darkgray;
    text-align: center;
    line-height: 100px;
    border: 1px solid gray;
    width: 100px;
    height: 100px;
    border-right: none;
    &:nth-child(4n){
       border-right: 1px solid gray;
     }
  }

</style>
<script>
   export default{
     data: function () {
       return{
         boxList:['']
       }
     },
     mounted:function () {
       for(let i=1;i<16;i++){
         this.boxList.push(i);
       }
       this.boxList.sort((a,b)=>0.5 - Math.random());
     },
     methods: {
        changeIndex: function (index,num) {
           console.log(index);
           let arrIndex=[index-1,index+1,index-4,index+4];
           let list=this.boxList;
           let spaceIndex= arrIndex.filter((a) => list[a]=='');
           console.log('spaceIndex'+spaceIndex);
           if(spaceIndex.length){
             this.boxList.splice(index,1,'');
             this.boxList.splice(spaceIndex,1,num);
             this.checkSuccess();
           }
        },
       checkSuccess: function () {
         let arr=[...this.boxList];
         let index= arr.findIndex((value)=>value=='');
         console.log('index'+ index);
         arr.splice(index,1);
         let arr2=[...arr];
         if(arr.sort().join()==arr2.join()){
           console.log('comein');
           alert('success');
         }
       }
     },
     computed: {
     }
   }
</script>