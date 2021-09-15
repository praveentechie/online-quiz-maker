<template>
  <div>
    <nav-header/>
    <div id="app" class="container">
      <router-view></router-view>
      <p>test para</p>
      <p>test para</p>
      <p>test para</p><p>test para</p><p>test para</p><p>test para</p><p>test para</p>
      <p>test para</p><p>test para</p><p>test para</p><p>test para</p><p>test para</p>
      <p>test para</p><p>test para</p><p>test para</p><p>test para</p><p>test para</p>
      <p>test para</p><p>test para</p><p>test para</p><p>test para</p><p>test para</p>
      <p>test para</p><p>test para</p><p>test para</p><p>test para</p><p>test para</p>
    </div>
    <page-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavHeader from './modules/_core/components/NavHeader.vue';
import PageFooter from './modules/_core/components/PageFooter.vue';

@Component({
  components: {
    NavHeader,
    PageFooter
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
