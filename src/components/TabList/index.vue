<template>
  <div class="tablist">
    <template v-for="(item, index) in tablist.data">
      <div class="tab" :class="tablist.active == index ? 'active' : ''" :key="index">
        <a @click.prevent="choose_active(index)">{{
          item.name + `${item.number != 0 ? `(${item.number})` : ""}`
        }}</a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
    name:"tablist",
    props:["tablist",'choose_active'],
    /**
     * tablist {
     * active:0, index索引
     * data:[]
     * }
     * 
     * choose_active Function 改变active
     */
};
</script>

<style lang="scss" scoped>
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