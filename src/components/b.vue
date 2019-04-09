<template>
    <div>
        {{$store.state.count.count}}
        <h2>bPage</h2>
        <button type="button" name="name" @click="add">增加</button>
        <button type="button" name="name" @click="reduce">减少</button>
    </div>
</template>

<script>
    import { mapActions } from 'Vuex'
    export default {
        name:'bPage',
        methods: mapActions('count',['add','reduce'])
    }
</script>

<style scoped>

</style>