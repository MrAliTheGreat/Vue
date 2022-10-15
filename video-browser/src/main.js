import Vue from "vue";
import App from "./App"

new Vue({
    el: "#app",
    render: h => h(App)
})

/*
    We can use createElement instead of h in render prop!
    We can use .$mount(App) and call it on the instance instead of providing el prop
    The element will be rendered in index.html where it has a div with the id of app
*/