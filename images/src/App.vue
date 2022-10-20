<template>
    <AppHeader></AppHeader>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"

export default {
    name: "App",
    components: {
        AppHeader
    }
}
</script>

<style>
</style>



<!-- For handling css we are going to use semantic-ui -->
<!-- Installing semantic-ui is going to happen through cdnjs.com which is a content delivery network -->
<!-- We want to search for semantic-ui and get the link tag for semantic.min.css -->
<!-- We then add it to head of index.html then we have it installed! -->