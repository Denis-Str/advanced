<template lang="pug">
  div
    main-header
    nav-menu
    section.section
      .container
        router-view
</template>

<style lang="postcss">
  @import "../../node_modules/normalize.css/normalize.css";
  @import "../styles/mixins.pcss";
  @import "./styles/layout/base.pcss";
</style>

<script>
  import variables from "../styles/variables"
  import MainHeader from "./components/MainHeader";
  import NavMenu from "./components/NavMenu";

  export default {
      components: {NavMenu, MainHeader},
      data() {
          return {
              variables
          }
      }
  }
</script>