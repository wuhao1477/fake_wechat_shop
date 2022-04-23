<template>
  <div class="app-container">
    <breadcrumb class="breadcrumb-container" custom="选择类目" />
    <selectlist />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import selectlist from "./components/selectlist"
export default {
  name: "addgoods",
  components: { Breadcrumb ,selectlist},
};
</script>
<style lang="scss" scoped>
</style>