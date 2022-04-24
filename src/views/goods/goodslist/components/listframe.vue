<template>
  <div>
    <div class="typebox">
      <div class="tablist">
        <template v-for="(item, index) in typelist">
          <div
            class="tab"
            :class="active == index ? 'active' : ''"
            :key="index"
          >
            <a @click.prevent="choose(index)">{{
              item.name + `${item.number != 0 ? `(${item.number})` : ""}`
            }}</a>
          </div>
        </template>
      </div>
      <div class="form">
        <div class="oneline">
          <div class="input-content">
            <div class="text">商品编号</div>
            <div class="input-item">
              <input
                type="text"
                placeholder="填写商品编号"
                class="weui-desktop-form__input"
              />
            </div>
          </div>
          <div class="input-content">
            <div class="text">商品名称</div>
            <div class="input-item">
              <input
                type="text"
                placeholder="填写商品名称"
                class="weui-desktop-form__input"
              />
            </div>
          </div>
          <div class="input-content">
            <div class="text">价格区间</div>
            <div class="input-item price">
              <input
                type="text"
                placeholder="￥ 最小价格"
                class="weui-desktop-form__input"
              />
              <span></span>
              <input
                type="text"
                placeholder="￥ 最大价格"
                class="weui-desktop-form__input"
              />
            </div>
          </div>
        </div>
        <div class="oneline" style="margin-top: 25px">
          <div class="input-content">
            <div class="text">商品名称</div>
            <div class="input-item search">
              <input
                type="text"
                placeholder="填写商品名称"
                class="weui-desktop-form__input"
              />
            </div>
            <div class="sub-btn-wrp">
              <div class="sub-btn">重置</div>
            </div>
            <div class="sub-btn-wrp">
              <div class="sub-btn red">查询</div>
            </div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="header">
          <div class="operation">
            <div class="item">删除</div>
            <div class="item operation_item">上架</div>
            <div class="item operation_item">下架</div>
            <div class="item operation_item">新增</div>
          </div>
          <goodslist :goodslist="goodslist" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goodslist from "./goodslist";
export default {
  name: "listframe",
  components: { goodslist },
  data() {
    return {
      active: 0,
      typelist: [
        {
          name: "全部",
          number: 1,
        },
        {
          name: "上架销售中",
          number: 0,
        },
        {
          name: "已下架",
          number: 0,
        },
        { name: "待上架", number: 0 },
        { name: "最近删除", number: 0 },
      ],
      goodslist: [
        {
          goods_name:"洗衣机清洗",
          goods_img:
            "https://store.mp.video.tencent-cloud.com/161/20304/snscosdownload/SZ/reserved/60cc99cd00006a9e00000000386f5609000000a000004f50?imageView2/1/w/53/format/webp=",
            spuId:"SpuId",
            price:0,
            stock:0,
            sales_number:0,
            check_time:"2021/06/18",
            state:0,
            active:true
        },
        {
          goods_name:"洗衣机清洗",
          goods_img:
            "https://store.mp.video.tencent-cloud.com/161/20304/snscosdownload/SZ/reserved/60cc99cd00006a9e00000000386f5609000000a000004f50?imageView2/1/w/53/format/webp=",
            spuId:"SpuId",
            price:0,
            stock:0,
            sales_number:0,
            check_time:"2021/06/18",
            state:0,
            active:false
        },{
          goods_name:"洗衣机清洗",
          goods_img:
            "https://store.mp.video.tencent-cloud.com/161/20304/snscosdownload/SZ/reserved/60cc99cd00006a9e00000000386f5609000000a000004f50?imageView2/1/w/53/format/webp=",
            spuId:"SpuId",
            price:0,
            stock:0,
            sales_number:0,
            check_time:"2021/06/18",
            state:0,
            active:false
        }
      ],
    };
  },
  computed: {},
  methods: {
    choose(index) {
      this.active = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.breadcrumb-container {
  padding-bottom: 32px;
}
.typebox {
  background: #ffffff;
  box-shadow: 0 1px 6px 0 rgba(228, 232, 235, 0.2);
  border-radius: 8px;
  padding: 32px;
  padding-top: 20px;
  .form {
    margin-bottom: 52px;
    .oneline {
      display: flex;
      .input-content:not(:first-child) {
        margin-left: 56px;
      }
      .input-content {
        display: flex;
        position: relative;
        z-index: 2;
        .text {
          width: 80px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          font-weight: 400;
          color: #000000;
          text-align: left;
        }
        .input-item {
          width: 200px;
          .weui-desktop-form__input::placeholder {
            color: #b2b2b2;
            font-size: 14px;
            // font-weight: 00;
          }
          .weui-desktop-form__input {
            display: table-cell;
            width: 100%;
            padding: 0.62857143em 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background: #fff;
            border: 1px solid #e3e4e5;
            border-radius: 8px;
          }
        }
        .price {
          width: auto;
          display: flex;
          .weui-desktop-form__input {
            width: 120px;
          }
          span {
            margin: 19px 10px 0 10px;
            width: 8px;
            height: 1px;
            background: rgba(0, 0, 0, 0.3);
          }
        }
        .search {
          width: 402px;
        }
        .sub-btn-wrp {
          display: flex;
          :first-child {
            margin-left: 56px;
          }
          .sub-btn {
            width: 116px;
            height: 40px;
            line-height: 40px;
            // margin-right: 12px;
            background: rgba(0, 0, 0, 0.03);
            border-radius: 8px;
            font-size: 16px;
            color: #ff6146;
            letter-spacing: 1px;
            text-align: center;
            font-weight: 500;
            cursor: pointer;
          }
          .red {
            background-color: #ff6146;
            color: #ffffff;
            margin-left: 12px;
          }
        }
      }
    }
  }
  .list {
    .header {
      .operation {
        background-color: #f8fafb;
        border-radius: 8px 8px 0 0;
        padding: 16px 24px;
        display: flex;
        justify-content: flex-end;
        .item {
          padding: 3px 16px;
          color: #ff6146;
          position: relative;
          cursor: pointer;
          font-size: 14px;
          line-height: 1.6;
          font-weight: 500;
        }
        .operation_item::before {
          content: " ";
          position: absolute;
          top: 8px;
          bottom: 0;
          left: 0;
          display: block;
          width: 1px;
          height: 14px;
          background-color: #d8d8d8;
        }
      }
    }
  }
}
.tablist {
  margin-bottom: 32px;
  border-bottom: 1px solid #e0e1e2;
  .tab {
    margin-right: 32px;
    max-width: 80px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #1a1b1c;
    font-weight: 500;
  }
  .active {
    border-bottom: 2px solid #1a1b1c;
  }
}
</style>