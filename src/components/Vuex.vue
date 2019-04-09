<template>
    <div>
        <h2>vuexx</h2>
        {{$store.state.count}}
        <button @click="increment" type="button" name="button">增加</button>
        <button @click="decrement" type="button" name="button">减</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name:'vuexx',
        methods:mapActions([
            'increment',
            'decrement',
        ]),
    }
</script>

<style scoped>

</style>