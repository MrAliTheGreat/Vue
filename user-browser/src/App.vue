<template>
    <div>
        Hello World!
        <SearchBar @termChange="onTermChange"></SearchBar>
        <UserList :users="users"></UserList>
    </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue"
import UserList from "./components/UserList.vue"
import axios from "axios"

export default {
    name: "App",
    data() {
        return {
            users: []
        }
    },
    components: {
        SearchBar,
        UserList
    },
    methods: {
        async onTermChange(numUsers) {
            const response = await axios.get("https://randomuser.me/api/", {
                params:{
                    results: numUsers,
                    inc: "name,email,cell,picture"
                }
            })
            this.users = response.data.results
        }
    }
}
</script>

<style>
</style>



<!-- We can only have one root element in template like returning a View in react native!  -->
<!-- We must have only one element in template -->
<!-- The second element passed when emitting can be access as the first argument of the method onTermChange -->
<!-- data prop can be an obj or a func in a Vue instance but in a Vue component it must be a func that returns an obj -->
<!-- For sending prop from parent to child we have to use v-bind:propName="dataName" in the parent -->
<!-- the v-bind means that whenever there is an update to dataName, rerender this component and send the updated dataName to the child -->
<!-- We can also use :propName="dataName" instead of v-bind:propName="dataName" -->