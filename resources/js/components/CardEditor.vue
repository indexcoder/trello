<template>
    <div>
        <textarea ref="card"
                  v-model="title"
                  @keyup.esc="closed"
                  @keyup.enter="addCard"
                  placeholder="Enter a title for this card..."
                  class="rounded-md shadow-card py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"></textarea>

        <div class="flex justify-between">
            <button @click="addCard" class="rounded-sm py-1 px-3 bg-indigo-600 text-white cursor-pointer hover:bg-indigo-600 outline-none">
                Add Card
            </button>
            <button @click="closed" class="py-1 px-3 rounded-sm hover:bg-gray-400 cursor-pointer text-gray-500">
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
    import CardAdd from '../graphql/CardAdd.gql';
    import BoardQuery from '../graphql/BoardWithListsAndCards.gql';

    export default {
        props: {
            list: Object
        },
        data() {
            return {
                title: null
            }
        },
        mounted() {
            this.$refs.card.focus();
        },
        methods: {
            addCard() {
                const self = this;
                this.$apollo.mutate({
                    mutation: CardAdd,
                    variables: {
                        title: this.title,
                        listId: this.list.id,
                        order: this.list.cards.length + 1
                    },
                    update(store, { data: { cardAdd }}) {
                        const data = store.readQuery({
                            query: BoardQuery,
                            variables: {id: Number(self.list.board_id)}
                        });

                        data.board.lists
                            .find(list => (list.id == self.list.id))
                            .cards.push(cardAdd);

                        store.writeQuery({ query: BoardQuery, data });
                    }
                })
                this.closed();
            },

            closed() {
                this.$emit("closed");
            }

        }
    }
</script>
