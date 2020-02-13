<template lang="pug">
  .about
    .about__inner
      h2.about__title.title Блок «Обо мне»
      .about__modify.modify
        button(type="button" class="modify__add modify__add_small" aria-label="Add")
        span Добавить группу
    .about__skills
      Skills
</template>

<script>
    import Skills from "./Skills";
    export default {
        name: "About",
        components: {Skills}
    }
</script>

<style lang="postcss" scoped>
  @import "../../../node_modules/normalize.css/normalize.css";
  @import "../../styles/mixins.pcss";
  @import "../../styles/layout/base.pcss";

  .about {
    &__inner {
      display: flex;
      margin-bottom: 60px;
      align-items: center;
    }
    &__title {
      margin-right: 50px;
      margin-bottom: 0;
    }
    &__modify {
      display: flex;
      max-width: unset;
      width: auto;
      align-items: center;
      span {
        color: #383bcf;
        margin-left: 15px;
      }
    }
  }
</style>