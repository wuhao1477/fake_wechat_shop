<template>
  <div class="app-container">
    <breadcrumb class="breadcrumb-container" />
    <listframe />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import listframe from "./components/listframe"
export default {
  name: "goodslist",
  components: { Breadcrumb ,listframe},
};
</script>
<style lang="scss" scoped>
</style>