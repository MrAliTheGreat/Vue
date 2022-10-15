<template>
    <div>
        Hello World!
        <SearchBar></SearchBar>
    </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue"

export default {
    name: "App",
    components: {
        SearchBar
    }
}
</script>

<style>
</style>



<!-- We can only have one root element in template like returning a View in react native!  -->
<!-- We must have only one element in template -->