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
  import MainHeader from "./components/MainHeader";
  import NavMenu from "./components/NavMenu";
  import Work from "./components/Work";
  import Reviews from "./components/Reviews";
  import reg from "./components/reg";
  import variables from "../styles/variables"
  import About from "./components/About";

  export default {
      components: {About, Reviews, Work, NavMenu, MainHeader, reg},
      data() {
          return {
              variables
          }
      }
  }
</script>

<!--section.section-->
<!--.container-->
<!--Work-->
<!--section.section-->
<!--.container-->
<!--Reviews-->
<!--reg-->
