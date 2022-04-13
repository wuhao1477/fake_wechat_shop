<template>
  <div>
    <breadcrumb class="breadcrumb-container" :custom="'选择类目'" />
    <div class="typebox"> 
      <div class="search">
        <img  src="https://res.wx.qq.com/wxaproducttrade/dist/images/search_4afbde.svg" alt="" class="search_main_search">
        <input type="text" placeholder="搜索" class="search_main_input">
      </div>
      <div class="select_cate">
        
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "SelectList",
  components: { Breadcrumb },
};
</script>
<style lang="scss" scoped>
.breadcrumb-container {
    padding-bottom: 32px;
  }
.typebox{
    background: #FFFFFF;
    box-shadow: 0 1px 6px 0 rgba(228, 232, 235, 0.2);
    border-radius: 8px;
    margin-top: 23px;
    margin-bottom: 64px;
    padding: 32px;
    .search{
      width: 426px;
      height: 40px;
      background: #F7F7F7;
      border-radius: 20px;
      padding: 0 12px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .search_main_search{
        width: 24px;
        height: 24px;
        margin-right: 5px;
        cursor: pointer;
      }
      .search_main_input{
        flex: 1;
        border: none;
        height: 24px;
        opacity: 0.9;
        font-size: 17px;
        color: #000000;
        background: #F7F7F7;
      }
    }
    .select_cate{
      width: 100%;
      position: relative;
      background: #F7F7F7;
      border-radius: 5px;
      height: 456px;
      width: 100%;
      display: flex;
    }
}
</style>