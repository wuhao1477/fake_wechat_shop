<template>
  <div>
    <div class="typebox">
      <tablist :tablist="tablist" :choose_active="choose_active" />
      <div class="form">
        <div class="oneline">
          <div class="input-content">
            <div class="text">订单号</div>
            <div class="input-item">
              <input
                type="text"
                placeholder="填写订单号"
                class="weui-desktop-form__input"
              />
            </div>
          </div>
          <div class="input-content">
            <div class="text">价格区间</div>
            <div class="time-form">
              <div class="block">
                <el-date-picker
                  v-model="check_date"
                  type="datetimerange"
                  :picker-options="pickerOptions"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right"
                >
                </el-date-picker>
              </div>
            </div>
            <!-- <div class="input-item price">
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
            </div> -->
          </div>
        </div>
        <div class="oneline">
          <div class="input-content">
            <div class="text">配送方式</div>
            <div class="input-item">
              <input
                type="text"
                placeholder="选择配送方式"
                class="weui-desktop-form__input"
              />
            </div>
          </div>
          <div class="input-content">
            <div class="text">手机号</div>
            <div class="input-item">
              <input
                type="text"
                placeholder="填写下单手机号"
                class="weui-desktop-form__input"
              />
            </div>
          </div>
          <div class="input-content">
            <div class="text">收件人</div>
            <div class="input-item">
              <input
                type="text"
                placeholder="填写收件人姓名"
                class="weui-desktop-form__input"
              />
            </div>
          </div>
        </div>
        <div class="oneline">
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
        <orderlist :order_list="order_list" :check_all="check_all" />
      </div>
    </div>
  </div>
</template>

<script>
import orderlist from "./orderlist";
import tablist from "@/components/TabList";
export default {
  name: "listframe",
  components: { orderlist, tablist },
  data() {
    return {
      tablist: {
        active: 0,
        data: [
          {
            name: "全部",
            number: 1,
            active: true,
          },
          {
            name: "待付款",
            number: 0,
            active: false,
          },
          {
            name: "待发货",
            number: 0,
            active: false,
          },
          { name: "已发货", number: 0, active: false },
          { name: "已完成", number: 0, active: false },
          { name: "已取消", number: 0, active: false },
        ],
      },
      order_list: [
        {
          goodslist: [
            {
              goods_price: 10,
              amount: 1,
              goods_name: "二手数据线",
              goods_img:
                "https://store.mp.video.tencent-cloud.com/161/20304/snscosdownload/SZ/reserved/6266122e000bad9700000000600c950b000000a000004f50",
            },
            {
              goods_price: 100,
              amount: 1,
              goods_name: "小米无线充电器",
              goods_img:
                "https://store.mp.video.tencent-cloud.com/161/20304/snscosdownload/SZ/reserved/6268fed9000cf38e00000000b70c950b000000a000004f50",
            },
          ],
          price: {
            total: 10,
            freight: 0,
            Discount: 0,
          },
          orderId: "3202848619010458624",
          check_time: 1651048541,
          order_state: 0,
          order_tips: "",
          userinfo: {
            username: "张三",
          },
        },
        {
          goodslist: [
            {
              goods_price: 10,
              amount: 1,
              goods_name: "二手数据线",
              goods_img:
                "https://store.mp.video.tencent-cloud.com/161/20304/snscosdownload/SZ/reserved/6266122e000bad9700000000600c950b000000a000004f50",
            },
            // {
            //   goods_price: 100,
            //   amount: 1,
            //   goods_name: "小米无线充电器",
            //   goods_img:
            //     "https://store.mp.video.tencent-cloud.com/161/20304/snscosdownload/SZ/reserved/6268fed9000cf38e00000000b70c950b000000a000004f50",
            // },
          ],
          price: {
            total: 10,
            freight: 0,
            Discount: 0,
          },
          orderId: "3202848619010458624",
          check_time: 1651048541,
          order_state: 0,
          order_tips: "",
          userinfo: {
            username: "张三",
          },
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      check_date: "",
    };
  },
  computed: {},
  methods: {
    choose_active(index) {
      this.tablist.active = index;
    },
    check_all(e) {
      this.goodslist = this.goodslist.map((value) => {
        value.active = e.target.checked;
        return value;
      });
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
      margin-top: 25px;
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
.time-form .block .el-input__inner {
  border-radius: 8px;
}
</style>