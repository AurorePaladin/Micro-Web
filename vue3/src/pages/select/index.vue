<template>
  <div class="select-container">
    <div class="select-content">
      <LeftNav />

    </div>
  </div>
</template>

<script lang="ts">
import LeftNav from './components/leftNav.vue'
export default {
  name: 'index',
  components: {
    LeftNav,
  },
};
</script>

<style lang="scss">
.select{
  &-container{
    margin-top: 50px;
  }
  &-content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
}
</style>
