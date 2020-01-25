const parallaxPromo = document.querySelector('.promo__parallax');
const layersPromo = parallaxPromo.children;

const parallaxBudda = document.querySelector('.reviews__parallax');
const layersBudda = parallaxBudda.children;

const moveLayers = (wScroll, layers) => {
    Array.from(layers).forEach(layer => {
        const dataSet = layer.dataset.speed;
        const scroll = dataSet / 40 * wScroll;

        layer.style.transform = `translate3d(0, ${-scroll}%, 0)`
    })
};

// function moveLayers(wScroll) {
//
//     Array.from(layers).forEach(layer => {
//         const dataSet = layer.dataset.speed;
//         const scroll = dataSet / 50 * wScroll;
//
//         layer.style.transform = `translate3d(0, ${-scroll}%, 0)`
//
//     })
// }
// let parallax = (function () {
//
//     return {
//         move: function (section, wScroll, ratio) {
//             let scroll = wScroll / -ratio + '%';
//             let transformSection = `translate3d(0, ${scroll}, 0)`;
//             let style = section.style;
//             style.transform = transformSection;
//             style.webkitTransform = transformSection;
//         },
//         init: function (wScroll) {
//             this.move(sky, wScroll, 45);
//
//         }
//     }
// })();

window.onscroll = function () {
    let wScroll = window.pageYOffset;
    moveLayers(wScroll, layersPromo);
    moveLayers(wScroll, layersBudda);
};
