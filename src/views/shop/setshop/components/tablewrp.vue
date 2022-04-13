<template>
  <div class="table_wrp">
    <template v-for="(item, index) in tabledata">
      <div class="table" :key="index">
        <div class="infotype">{{ item.type }}</div>
        <div class="infocontent line">{{ item.content }}</div>
        <div class="infocontent line">{{ item.tips }}</div>
        <div class="copy line" v-if="item.isCopy" @click.prevent="">
          <a href="">复制</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "tablewrp",
  props: {
    tabledata: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.table_wrp {
  width: 100%;
  font-size: 14px;
  text-align: left;
  .table {

    display: flex;
    & div{
      height: 80px;
      display: flex;
      align-items: center;
      padding: 12px 10px 12px 20px;
    }
    .line {
      border-bottom: 1px solid #e7e7eb;
    }
    .infotype {
      text-align: left;
      width: 15%;
      border-bottom: 0;
      color: #9a9a9a;
      font-size: 14px;
    }
    .infocontent {
      text-align: left;
      width: 35%;
    }
    .copy {
      width: 15%;
      text-align: right;
        flex-direction: row-reverse;
      a {
        color: #576b95;
        text-decoration: none;
        margin-right: 12px;
      }
    }
  }
}
</style>