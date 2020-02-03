import Vue from "vue"

const tags = {
    template: "#slider-tags",
    props: ["tags"],

};

const previews = {
    template: "#slider-preview",
    props: ["works", "currentWork"]
};

const btns = {
    template: "#slider-btns",
};

const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ')
        }
    }
};

const mobile = {
    template: "#slider-mobile",
    computed: {
        btns,
    }
};

const display = {
    template: "#slider-display",
    components: {
        info, btns, previews, mobile
    },
    props: ["works", "currentWork"],
    computed: {
        reversePrev () {
            return [...this.works].reverse()
        }
    }
};

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display, mobile
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    methods: {
        makeArrImg (data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/worksPreview/${item.photo}`);
                item.photo = requiredPic;
                return item
            })
        },
        handleSlide(direction) {
            switch (direction) {
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
            console.log(direction)
        },
        makeLookSlider(value) {
            const worksAmount = this.works.length - 1;
            if (value > worksAmount) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmount;

        }
    },
    watch: {
        currentIndex(value) {
            this.makeLookSlider(value)
        }
    },
    created() {
        const data = require("../data/works");
        this.works = this.makeArrImg(data);
    }
});