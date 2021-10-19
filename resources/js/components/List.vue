<template>
    <div class="list bg-gray-300 rounded-sm p-2 mr-2">
        <div class="flex justify-between">
            <p class="text-gray-800 pl-2 pb-2 font-bold">{{ list.title }}</p>
        </div>
        <card v-for="card in list.cards" :key="card.id" :card="card"></card>
        <card-add-button></card-add-button>
    </div>
</template>

<script>
    import Card from './Card';
    import CardAddButton from './CardAddButton';

    export default {
        components: {Card, CardAddButton},
        props: {
            list: Object
        }
    }
</script>

<style scoped>
    .list {
        width: 250px;
        min-width: 250px;
    }
</style>
