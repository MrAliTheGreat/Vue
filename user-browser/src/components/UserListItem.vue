<template>
    <li class="list-group-item">
        <img :src="thumbnailURL" />
        {{ userFullName }} - {{ user.email }} - {{ user.cell }}
    </li>
</template>

<script>
export default {
    name: "UserListItem",
    props: ["user"],
    computed: {
        thumbnailURL() {
            return this.user.picture.thumbnail
        },
        userFullName() {
            return this.user.name.first + " " + this.user.name.last
        }
    }
}
</script>

<style>
</style>


<!-- For showing and image via URL we have to pass src as a prop! -->
<!-- We can also use computed to work with props! -->
<!-- Computed is used here to try moving logic from template to script and it's just a better way of coding! -->