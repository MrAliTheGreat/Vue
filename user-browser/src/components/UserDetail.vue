<template>
    <div v-if="user" class="col-md-8">
        <div class="details">
            <img :src="user.picture.large" />
            <h3 style="font-weight: bold; margin-top: 10px;">{{ userFullName }}</h3>
            <div>{{ user.email }}</div>
            <div>{{ user.cell }}</div>
        </div>
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

<style scoped>

.details {
    margin-top: 0.5px;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

img {
    height: 250px;
    width: 250px;
    border-radius: 20px;
}

</style>


<!-- v-if directive is used for conditional rendering -->
<!-- When declared on an element if the value of v-if is true then the element will render but if false the element won't render! -->