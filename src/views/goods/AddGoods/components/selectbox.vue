<template>
        <div class="select_list">
          <div
            class="select_item"
            v-for="(item, index) of productCats"
            :key="index"
            @click="click_list(number,index)"
          >
            <div
              :class="
                index == active ? 'select_item_select' : 'select_item_base'
              "
            >
              <div class="select_item_select_font">{{ item.name }}</div>
              <img
                v-show="index == active"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTIgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MC7lm77moIcv57q/5Z6LL2ljb25zX291dGxpbmVkX2Fycm93PC90aXRsZT4KICAgIDxnIGlkPSIwLuWbvuaghy/nur/lnosvaWNvbnNfb3V0bGluZWRfYXJyb3ciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iMC45Ij4KICAgICAgICA8cGF0aCBkPSJNMi40NTQwNTg0NSw2LjU4MDY0OTE5IEwzLjUxNDcxODYzLDUuNTE5OTg5MDEgTDkuMjkzNjE1NjYsMTEuMjk4ODg2IEM5LjY4Mzc0MDk2LDExLjY4OTAxMTMgOS42ODcyMDE0LDEyLjMxODA2OSA5LjI5MzYxNTY2LDEyLjcxMTY1NDcgTDMuNTE0NzE4NjMsMTguNDkwNTUxOCBMMi40NTQwNTg0NSwxNy40Mjk4OTE2IEw3Ljg3ODY3OTY2LDEyLjAwNTI3MDQgTDIuNDU0MDU4NDUsNi41ODA2NDkxOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNGRjYxNDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt=""
                class="select_item_select_image"
              />
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "selectbox",
  props:[
    'active','number','click_list','productCats'],
};
</script>
<style lang="scss" scoped>
.breadcrumb-container {
  padding-bottom: 32px;
}
.typebox {
  .select_cate {
    width: 100%;
    position: relative;
    background: #f7f7f7;
    border-radius: 5px;
    height: 456px;
    width: 100%;
    display: flex;
    .select_list {
      width: 25%;
      height: 456px;
      border-right: 0.5px solid rgba(0, 0, 0, 0.1);
      padding: 10px 10px;
      overflow-y: auto;
      .select_item {
        width: 100%;
        height: 40px;
        cursor: pointer;
        margin-bottom: 4px;
        .select_item_select_image {
          width: 10px;
          height: 20px;
        }
        .select_item_select {
          height: 40px;
          padding: 0 8px;
          line-height: 40px;
          font-size: 16px;
          background: rgba(255, 97, 70, 0.1);
          border-radius: 4px;
          color: rgba(255, 97, 70, 0.9);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .select_item_base {
          height: 40px;
          padding: 0 10px;
          line-height: 40px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.9);
        }
        .select_item_base:hover {
          background: rgba(255, 97, 70, 0.1);
          border-radius: 4px;
        }
      }
    }
    .select_list::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    .select_list::-webkit-scrollbar-thumb {
      background-color: #c2c2c2;
      background-clip: padding-box;
      max-height: 8px;
    }
  }
}
</style>