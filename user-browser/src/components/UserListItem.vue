<template>
    <li>
        {{ user.name.first + " " + user.name.last }} - {{ user.email }} - {{ user.cell }}
    </li>
</template>

<script>
export default {
    name: "UserListItem",
    props: ["user"]
}
</script>

<style>
</style>