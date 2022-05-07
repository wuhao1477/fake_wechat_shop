<template>
  <div>
    <div class="header">
      <div class="box">
        <div class="title item">订单</div>
      </div>
      <div class="box"><div class="SpuId item">单价/数量</div></div>
      <div class="box"><div class="Service item">退款/售后</div></div>
      <div class="box"><div class="Collection item">实收款</div></div>
      <div class="box"><div class="connect item">买家沟通</div></div>
      <div class="box"><div class="checktime item">订单状态</div></div>
    </div>
    <div class="goods-item">
      <template v-for="(item, index) of order_list">
        <div :key="index">
          <div class="orderinfo">
            <div>订单号：{{ item.orderId }}</div>
            <div>
              下单时间：{{ new Date(item.check_time * 1000).toLocaleString() }}
            </div>
          </div>
          <div class="goodslist">
            <div class="box" style="border-right: none">
              <div class="goods_box">
                <template v-for="(it, idx) of item.goodslist">
                  <div
                    class="title item goods"
                    style="padding-left: 24px"
                    :key="idx"
                  >
                    <div class="goods-img">
                      <img :src="it.goods_img" alt="" />
                    </div>
                    <div class="goods-name">
                      <div>{{ it.goods_name }}</div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="box" style="border-right: none">
              <div class="SpuId item several" style="">
                <template v-for="(it, idx) of item.goodslist">
                  <div class="number" :key="idx">
                    {{ it.amount }}
                  </div>
                </template>
              </div>
            </div>
            <div class="box">
              <div class="Service item several">
                <template v-for="(it, idx) of item.goodslist">
                  <div class="number" :key="idx">￥{{ it.goods_price }}</div>
                </template>
              </div>
            </div>
            <div class="box">
              <div class="Collection item">
                <div>
                  <div style="font-size: 16px">
                    ￥{{ item.price.total.toFixed(2) }}
                  </div>
                  <div style="color: #7e8081; padding-top: 6px">
                    运费：￥{{ item.price.freight.toFixed(2) }}
                  </div>
                  <div style="color: #7e8081; padding-top: 6px">
                    改价：-￥{{ item.price.Discount.toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="connect item">
                <div>
                  <div class="title"><div>买家：</div>{{ item.userinfo.username }}<a>联系买家</a></div>
                  <div class="title"><div>备注：</div>   {{ item.order_tips }}<a>修改</a></div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="checktime item">
                <div class="state">{{ item.state == 0 ? "待发布" : "已发布" }}<a href="">详情</a></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderlist",
  components: {},
  props: ["order_list", "check_all"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.header {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color: #7e8081;
  font-size: 13px;
  border-bottom: 1px solid #e3e4e5;
  background: #f7f9fa;
  text-indent: 10px;
  width: 100%;
  .box {
    height: 50px;
    .item {
      align-items: center;
    }
  }
}
.box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  .item {
    min-height: 24px;
    height: 100%;
    display: inline-flex;

    font-size: 15px;
  }
  .title {
    width: 350px;
  }
  .SpuId {
    width: 110px;
  }
  .Service {
    width: 130px;
  }
  .Collection {
    width: 150px;
  }
  .connect {
    width: 240px;
  }
  .checktime {
    width: 150px;
    display: flex;
    flex-direction: row-reverse;
    font-weight: bold;
    .state{
      display:flex;
      flex-direction: column;
      a{
        margin-top: 8px;
        color:#576b95;
        font-weight: 500;
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
  .operation {
    width: 150px;
  }
  input[type="checkbox"] {
    cursor: pointer;
    position: relative;
    width: 1rem;
    height: 1rem;
    font-size: 0.9rem;
    visibility: hidden;
  }
  input[type="checkbox"]::after {
    position: absolute;
    top: 0;
    background-color: #fff;
    border: 1px solid #c9cdd3;
    color: #fff;
    width: 16px;
    height: 16px;
    display: inline-block;
    visibility: visible;
    padding-left: 0px;
    text-align: center;
    content: " ";
    border-radius: 50%;
  }

  input[type="checkbox"]:checked::after {
    content: "✓";
    font-size: 0.4rem;
    text-align: center;
    font-weight: bold;
    background-color: #ff6146;
  }
}
.goodslist {
  border-bottom: 1px solid #e3e4e5;
  display: inline-flex;
  align-items: stretch;
  width: 100%;
  .box {
    height: inherit;
    .goods_box {
      display: flex;
      flex-direction: column;
      .goods {
        padding: 16px;
      }
      .goods:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }
    }
    .item {
      min-height: 48px;
      font-size: 14px;
      padding: 16px 0 24px 16px;
      .goods-img {
        float: left;
        width: 64px;
        height: 64px;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 64px;
        }
      }
      .goods-name {
        display: inline;
        height: 100%;
        width: 100%;
        margin-left: 10px;
        font-size: 14px;
      }
      .edit {
        color: #576b95;
      }
      .edit:first-child {
        margin-right: 24px;
      }
    }
    .several {
      display: flex;
      flex-direction: column;
      .number {
        height: 50%;
        width: 100%;
        display: flex;
      }
      .number:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }
    }
    .connect .title{
      display: flex;
      margin-bottom: 8px;
      a{
        color: #576b95;
        margin-left: 8px;
      }
      div{
        min-width: 56px;
        margin-right: 8px;
        flex-shrink: 0;
        color:#7e8081;
        
      }
    }
  }
  .box:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
  }
}
.orderinfo {
  display: flex;
  line-height: 38px;
  background-color: #fafbfc;
  color: #7e8081;
  font-size: 15px;
  div {
    padding-left: 15px;
  }
}
</style>