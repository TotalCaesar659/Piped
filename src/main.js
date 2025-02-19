import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown, faEye, faThumbtack, faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faThumbsUp, faThumbsDown, faEye, faGithub, faBitcoin, faThumbtack, faCheck, faHeart);

import("uikit/dist/css/uikit-core.css");
import("uikit/dist/js/uikit-core.min");

import router from "@/router/router";
import App from "./App.vue";

import("./registerServiceWorker");

const mixin = {
    methods: {
        timeFormat: function (duration) {
            var pad = function (num, size) {
                return ("000" + num).slice(size * -1);
            };

            var time = parseFloat(duration).toFixed(3),
                hours = Math.floor(time / 60 / 60),
                minutes = Math.floor(time / 60) % 60,
                seconds = Math.floor(time - minutes * 60);

            var str = "";

            if (hours > 0) str += hours + ":";

            str += pad(minutes, 2) + ":" + pad(seconds, 2);

            return str;
        },
        fetchJson: function (url, options) {
            return fetch(url, options).then(response => {
                return response.json();
            });
        },
    },
};

const app = createApp(App);
app.use(router);
app.mixin(mixin);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
