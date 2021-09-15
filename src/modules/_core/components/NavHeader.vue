<template>
  <b-navbar toggleable="sm" variant="faded" type="dark" class="app-navigation">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Logo">
      BootstrapVue
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class NavHeader extends Vue {}
</script>

<style lang="scss" scoped>

  .app-navigation {
    background: linear-gradient(to left, #021b79, #0575e6) !important;
    color: $font-light;
    padding-bottom: .75rem;
    padding-top: .75rem;
  }
</style>
