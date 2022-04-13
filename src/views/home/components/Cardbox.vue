<template>
  <div class="mod_default_box">
    <div class="header">{{ cardinfo.title }}</div>
    <div class="content">
      <div class="item">
          <template v-for="(statusinfo,index) in cardinfo.status" >
            <div class="pending-status"  :key="index">
                <div class="pending-status-title" :class="'path' in statusinfo?'go-router':''">{{statusinfo.statusName}}</div>
                <div class="big-num">{{statusinfo.number}}</div>
            </div>
          </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cardbox",
  props: {
    cardinfo:{
        type:Object,
        required:true
    }
  },
  mounted() {
    console.log("#", this.cardinfo);
  },
};
</script>

<style lang="scss" scoped>
.mod_default_box {
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 32px;
  width: calc(50% - 12px);
  flex-shrink: 0;
  position: relative;
  & .header {
    margin-bottom: 50px;
  }
  & .content {
    position: relative;
    height: 165px;
    & .item {
      padding: 6px 0;
      display: flex;
      justify-content: space-between;
      & .pending-status {
        text-align: center;
        flex-grow: 1;
        position: relative;
        & .pending-status-title {
          font-size: 16px;
          padding-right: 16px;
          position: relative;
          display: inline-block;
          cursor: pointer;
          height: 24px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
        & .go-router:after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          vertical-align: middle;
          width: 12px;
          height: 24px;
          background-size: cover;
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='24' viewBox='0 0 12 24'%3E %3Cpath fill-rule='evenodd' d='M2.454 6.58l1.06-1.06 5.78 5.779a.996.996 0 0 1 0 1.413l-5.78 5.779-1.06-1.061 5.425-5.425-5.425-5.424z' opacity='.3'/%3E%3C/svg%3E");
        }
        & .big-num {
          font-size: 32px;
          padding-top: 16px;
          font-weight: 500;
          padding-right: 16px;
          height: 51px;
        }
      }
      & .pending-status:not(:last-child):after {
        content: " ";
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 42px;
        margin-top: -21px;
        background-color: #e3e4e5;
      }
    }
  }
}
</style>
