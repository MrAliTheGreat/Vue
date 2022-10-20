<template>
    <div>
        <input @input="onInput"/>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    methods: {
        onInput(event) {
            this.$emit("termChange", event.target.value)
        }        
    }
}
</script>

<style scoped>

input {
    width: 75%;
    border: 2px solid black;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
}

div {
    text-align: center;
    margin: 10px;
}

</style>



<!-- @ can be used instead of v-on: -->
<!-- For passing data from parent to child we will use a prop but for the reverse we need to emit an event -->
<!-- Emitting an event happens in the child and the parent will listen for it when it happens the parent will execute a method -->
<!-- This way passing the data from child to parent will happen! -->

<!-- When ever the method onInput is called termChange event will be emitted -->
<!-- We can also pass a useful element with the name so that it can be used when listening for the termChange event -->

<!-- IMPORTANT NOTE!!! ==> arrow func and "this" does not work with each other so we have to define each method like above or use function -->

<!-- By adding scoped to style tag we make sure that whatever styling we use here is ONLY considered in this template and nowhere else -->
<!-- You can either use the name tag for css or use .styleName and specify class="styleName" on the element -->