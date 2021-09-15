<template>
  <footer class="app-footer p-2">
    Footer container
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class PageFooter extends Vue {}
</script>

<style lang="scss" scoped>
  .app-footer {
    align-items: center;
    background-color: #E8E8E8;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
</style>
