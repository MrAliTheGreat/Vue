<template>
    <li class="list-group-item" @click="onUserSelect">
        <img :src="thumbnailURL" />
        <div>
            {{ userFullName }}
            <!-- {{ user.email }} - {{ user.cell }} -->
        </div>
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
    },
    methods: {
        onUserSelect() {
            this.$emit("userSelect", this.user)
        }
    }
}
</script>

<style scoped>

li {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

li:hover {
    background-color: lightgray;
}

div {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

</style>



<!-- For showing and image via URL we have to pass src as a prop! -->
<!-- We can also use computed to work with props! -->
<!-- Computed is used here to try moving logic from template to script and it's just a better way of coding! -->

<!-- cursor: pointer means that whenever the cursor goes on the element make a pointer like clickable -->
<!-- li:hover means that when the user hovers on the element do what we specified with the styling!  -->