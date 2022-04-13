<template>
  <div class="app-container">
    <breadcrumb class="breadcrumb-container" />
    <div class="shopinfobox">
      <div class="title">账号信息</div>
      <tablewrp :tabledata="tabledata"  />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import tablewrp from './components/tablewrp'

export default {
  components:{Breadcrumb,tablewrp},
  data() {
    return {
      tabledata:[{
        type:"AppID(小程序ID)",
        content:"wx8f854e75f008c2a4",
        tips:"",
        isCopy:true
      },{
        type:"原始ID",
        content:"gh_b432e7c9da16",
        tips:"",
        isCopy:true
      }]
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.app-container{
  .shopinfobox{
    width: 100%;
    background: #fff;
    padding: 0 32px;
    border-radius: 8px;
    .title{
      padding: 32px 0 20px 0;
      font-weight: 400;
      font-size: 20px;
    }
  }
  & .breadcrumb-container {
    padding-bottom: 32px;
  }
}
</style>