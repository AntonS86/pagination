<template lang="pug">
    div
        button(@click='prevSlide') Prev
        button(@click='nextSlide') Next
        button(@click='openSlide(3)') Open slide 3

        .slider.js-slider
            .slider__body(:style='{left: sliderOffsetLeft + "px"}')
                .slider__slide.js-slide(
                    v-for='slide in sliderList'
                    :style='"background-image: url(" + slide.img + ")"'
                )

</template>

<script>
    export default {
        data() {
            return {
                // Всего слайдов
                sliderAllCount: 0,
                // Номер активного слайда
                sliderActive: 1,
                // Отступ тела со слайдами в контейнере
                sliderOffsetLeft: 0,
                // Шаг одного слайда = его длина
                sliderOffsetStep: 0,
                // Список изображений
                sliderList: [
                    {img: 'https://dummyimage.com/wsvga'},
                    {img: 'https://dummyimage.com/wsvga'},
                    {img: 'https://dummyimage.com/wsvga'},
                    {img: 'https://dummyimage.com/wsvga'}
                ]
            };
        },
        methods: {
            // Иницилизация слайдера
            initSlider() {
                // Получаем элементы сладера и его слайдов
                const sliderBody = this.$el.querySelector('.js-slider');
                const sliderSlidies = sliderBody.querySelectorAll('.js-slide');
                // Записываем длину одного слайда для перелистывания
                this.sliderOffsetStep = sliderBody.clientWidth;
                // Общее количество слайдов для стопов
                this.sliderAllCount = sliderSlidies.length;
            },
            // Открыть нужный слайд
            openSlide (id) {
                if (id > 0 && id <= this.sliderAllCount) {
                    this.sliderActive = id;
                    // Сдвигаем элемент со слайдами
                    this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep);
                }
            },

            // Следующий слайд
            nextSlide () {
                if (this.sliderActive < this.sliderAllCount) {
                    this.sliderActive += 1;
                    this.openSlide(this.sliderActive);
                }
            },

            // Предыдущий слайд
            prevSlide () {
                if (this.sliderActive > 1) {
                    this.sliderActive -= 1;
                    this.openSlide(this.sliderActive);
                }
            },

        },
        mounted () {
            this.initSlider();
            // Перенастройка слайдера при ресайзе окна
            window.addEventListener('resize', () => {
                this.initSlider();
                this.openSlide(this.sliderActive);
            });
        }
    };
</script>

<style type="scss">
    $slider-height: 400px;
    $slide-width: 100%;

    .slider {
        width: 100%;
        height: $slider-height;
        position: relative;
        overflow: hidden;

        &__body {
            min-width: auto;
            height: $slider-height;
            display: flex;
            position: relative;
            align-items: stretch;
            transition: all .5s ease;
        }

        &__slide {
            min-width: $slide-width;
            height: $slider-height;
            background-size: cover;
            background-position: center;
            flex: 1 100%;
        }
    }
</style>
