<template>
    <div class="list bg-gray-300 rounded-sm p-2 mr-2 w-72">
        <div class="flex justify-between">
            <p class="text-gray-800 pl-2 pb-2 font-bold" v-text="list.title"></p>
        </div>
        <card v-for="card in list.cards"
              :key="card.id"
              :card="card"
              @deleted="$emit('card-deleted', {...$event, listId: list.id})"
              @updated="$emit('card-updated', {...$event, listId: list.id})">
        </card>

        <card-add-editor v-if="editing"
                     @closed="editing = false"
                     @added="$emit('card-added', {...$event, listId: list.id})"
                     :list="list">
        </card-add-editor>

        <card-add-button v-if="!editing && canAddCard" @click="editing=true"></card-add-button>
    </div>
</template>

<script>
    import Card from './Card';
    import {mapState} from 'vuex';
    import CardAddButton from './CardAddButton';
    import CardAddEditor from './CardAddEditor';

    export default {
        components: {Card, CardAddButton, CardAddEditor},
        props: {
            list: Object
        },
        data() {
            return {
                editing: false
            }
        },
        computed: mapState({
            canAddCard(state) {
                return this.list.board.owner.id === state.user.id;
            }
        })
    }
</script>


