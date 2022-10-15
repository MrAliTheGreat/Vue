<template>
    <div>
        Hello World!
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue"

export default {
    name: "App",
    components: {
        SearchBar
    },
    methods: {
        onTermChange(searchTerm) {
            console.log("App: " + searchTerm)
        }
    }
}
</script>

<style>
</style>



<!-- We can only have one root element in template like returning a View in react native!  -->
<!-- We must have only one element in template -->
<!-- The second element passed when emitting can be access as the first argument of the method onTermChange -->