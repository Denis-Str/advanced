import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper'


new Vue({
   el: '#reviews-component',
   template: '#reviews-slider',
   components: {
      swiper,
      swiperSlide
   },
   data() {
      return {
         reviews: [],
         // swiperOption: {
         //    navigation: {
         //       nextEl: '.controls_right',
         //       prevEl: '.controls_left'
         //    },
         //    slidesPerView: 2,
         //    slidersPerGroup: 2
         // },
      }
   },
   // methods: {
   //    arrWithRequiredImages(array) {
   //       return array.map(item => {
   //          const requredPic = require(`../images/content/${item["author-pic"]}`);
   //          item["author-pic"] = requredPic;
   //
   //          return item;
   //       });
   //    }
   // },
   created() {
      const data = require("../data/reviews");
      this.reviews = data;
   }
});