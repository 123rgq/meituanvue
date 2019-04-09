<template>
    <div>
        {{ $store.state.money.money}}
        <h2>aPage</h2>
        <button type="button" name="button" @click="add(2)">上升</button>
        <button type="button" name="button" @click="reduce(1)">减少</button>
    </div>
</template>

<script>
    import { mapActions } from 'Vuex'
    export default {
        name:'aPage',
        methods:{
            ...mapActions('money',['add','reduce']),
        }
    }
</script>

<style scoped>

</style>