import Vue from 'vue';
import Main from './Main.vue';

const app = () => {
    return new Vue({
        el    : '#app',
        render: h => h(Main),
    });
};

app();
