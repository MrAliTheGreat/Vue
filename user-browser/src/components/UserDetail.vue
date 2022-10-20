<template>
    <div v-if="user">
        {{ userFullName }}
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    props: ["user"],
    computed: {
        userFullName() {
            return this.user.name.first + " " + this.user.name.last
        }
    }
}
</script>

<style>
</style>


<!-- v-if directive is used for conditional rendering -->
<!-- When declared on an element if the value of v-if is true then the element will render but if false the element won't render! -->