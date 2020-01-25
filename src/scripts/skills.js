// let svgScroll = (function () {
//     let svg = document.querySelector('.stack__svg '),
//         // svgPath = document.querySelector('.stack__svg stack__circle-upper'),
//         windowMargin = window.innerHeight / 3,
//         svgRect = svg.getBoundingClientRect(),
//         svgPos = svgRect.top;
//
//     return {
//         grow: function (wScroll) {
//             let startAnim = wScroll - svgPos + windowMargin,
//                 pixelsElapsed = svgPos - wScroll,
//                 percentsElapsed = 100 - Math.ceil(pixelsElapsed / windowMargin * 100),
//                 percentsDraw = 252 / 100 * percentsElapsed;
//
//             if (startAnim >=0)  {
//                 let DrawAmount = svg.strokeDashoffset - percentsDraw;
//             }
//
//             // console.log(svg)
//         }
//     }
// })();
// window.onscroll = function () {
//     let wScroll = window.pageYOffset;
//     svgScroll.grow(wScroll);
// };

// new Vue({
//     template: '<p>message</p>',
//     data: {
//
//         message: 'Привет, Vue!'
// }});