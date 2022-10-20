<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <UserDetail :user="selectedUser"></UserDetail>
            <UserList @userSelect="onUserSelect" :users="users"></UserList>
        </div>
    </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue"
import UserList from "./components/UserList.vue"
import UserDetail from "./components/UserDetail.vue"

import axios from "axios"

export default {
    name: "App",
    data() {
        return {
            users: [],
            selectedUser: null
        }
    },
    components: {
        SearchBar,
        UserList,
        UserDetail
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
        },
        onUserSelect(user) {
            this.selectedUser = user
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

<!-- For styling we are going to use bootstrap css -->
<!-- Installing bootstrap is done by providing the link to it in index.html file in the public directory! -->
<!-- Whenever we use bootstrap it assumes that our root element has a class of container -->
<!-- So, the main element in App.vue has a container class -->
<!-- This container class is used for better aligning items in our project -->

<!-- By providing class="row" all elements in div will be placed in row instead of column -->
<!-- But the elements will take all the place they have so for truly showing elements in a row we have to specifiy -->
<!-- the amount of space each element can have so use something like bootstrap col-md or any other way! -->