<template>
    <ul>
        User List
        <UserListItem 
            v-for="user in users"
            :user="user"
            :key="user.email"
        >
        </UserListItem>
    </ul>
</template>

<script>
import UserListItem from "./UserListItem.vue"

export default {
    name: "UserList",
    props: ["users"],
    components: {
        UserListItem
    }
}
</script>

<style>
</style>



<!-- For specifying props we can either use [] and list our props or we can use {} and name our props as key and their type as value -->
<!-- Like we can use ["users"] or { users: Array } it's just for validation, we want to make sure we get the right prop from the parent -->
<!-- For rendering multiple elements, like in a loop, we can use v-for directive on the element we want to render multiple times -->
<!-- We can use the var (here it's user) in v-for ONLY in the component that v-for is used. Like we can use it as a prop! -->