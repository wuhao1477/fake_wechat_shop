<template>
  <div>
    <div class="header">
      <div class="box" style="padding: 15px 0 15px 15px">
        <input type="checkbox" />
      </div>
      <div class="box"><div class="title item">商品名称</div></div>
      <div class="box"><div class="SpuId item">SpuId</div></div>
      <div class="box"><div class="SpuId item">价格</div></div>
      <div class="box"><div class="SpuId item">库存</div></div>
      <div class="box"><div class="SpuId item">销量</div></div>
      <div class="box"><div class="checktime item">修改时间</div></div>
      <div class="box"><div class="checktime item">商品状态</div></div>
      <div class="box"><div class="operation item">操作</div></div>
    </div>
    <div class="goods-item">
      <template v-for="(item, index) of goodslist">
        <div class="goodslist" :key="index">
          <div class="box" style="padding: 15px 0 15px 15px">
            <input type="checkbox" :checked="item.active" />
          </div>
          <div class="box">
            <div class="title item">
              <img
                class="goods-img"
                :src="item.goods_img"
                alt=""
              />
              <div class="goods-name"><div>{{item.goods_name}}</div></div>
            </div>
          </div>
          <div class="box"><div class="SpuId item" style="">{{item.spuId}}</div></div>
          <div class="box"><div class="SpuId item">{{item.price}}</div></div>
          <div class="box"><div class="SpuId item">{{item.stock}}</div></div>
          <div class="box"><div class="SpuId item">{{item.sales_number}}</div></div>
          <div class="box"><div class="checktime item">{{item.check_time}}</div></div>
          <div class="box"><div class="checktime item">{{item.state==0?'待发布':'已发布'}}</div></div>
          <div class="box">
            <div class="operation item">
              <a class="edit">编辑</a>
              <a class="edit">上架</a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslist",
  components: {},
  props: ["goodslist"],
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
  font-size: 14px;
  border-bottom: 1px solid #e3e4e5;
}
.box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 24px;
  .item {
    height: 24px;
    display: inline-flex;
    align-items: center;
    font-size: 15px;
  }
  .title {
    width: 235px;
  }
  .SpuId {
    width: 46px;
  }
  .checktime {
    width: 93px;
  }
  .operation {
    width: 140px;
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
  align-items: center;
  .box {
    .item {
      height: 48px;
      font-size: 14px;
      .goods-img {
        float: left;
        width: 48px;
        height: 48px;
        border-radius: 4px;
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
  }
}
</style>