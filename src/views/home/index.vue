<template>
  <div class="home-container">
    <!-- <div class="home-text">name: {{ name }}</div> -->
    <div class="cardbox">
      <!-- <cardbox :title="'待处理'" /> -->
      <template v-for="(cardinfo,index) in cardList">
        <cardbox :cardinfo=cardinfo :key=index />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cardbox from "./components/Cardbox";

export default {
  name: "Home",
  components: { Cardbox },
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      cardList:[{
        title:"待处理",
        status:[{
          statusName:"待付款",
          number:0,
          path:"/index"
        },{
          statusName:"待付款",
          number:0,
          path:"/index"
        },{
          statusName:"待付款",
          number:0,
          path:"/index"
        }]
      },{
        title:"今日数据",
        status:[{
          statusName:"支付金额",
          number:0
        },{
          statusName:"订单数",
          number:0
        },{
          statusName:"访客数",
          number:0
        }]
      },{
        title:"商品管理",
        status:[{
          statusName:"销售中",
          number:0
        },{
          statusName:"待上传",
          number:0
        },{
          statusName:"新增商品",
          number:0
        }]
      }],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 1272px;
  padding: 0 24px;
  box-sizing: border-box;
  margin: 0 auto;
  .cardbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 200px;
  }
}
</style>
