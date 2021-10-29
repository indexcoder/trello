<template>
    <div class="h-full flex flex-col items-stretch bg-purple-500">
        <div class="header text-white flex justify-between items-center mb-2 bg-purple-600">
            <div class="ml-2 w-1/3">x</div>
            <div>
                <a href="/" class="text-lg opacity-50 hover:opacity-75">Laravello</a>
            </div>
            <div class="mr-2 w-1/3 flex justify-end">x</div>
        </div>

        <div class="h-full flex flex-1 flex-col items-stretch">
            <div class="mx-2 mb-2 text-white font-bold text-lg">
                <span v-if="$apollo.queries.board.loading">Loading...</span>
                <span v-else> {{ board.title }}</span>
            </div>
            <div v-if="board" class="flex flex-1 items-start overflow-x-auto mx-2">
                <list v-for="list in board.lists" :key="list.id" :list="list" @cardAdded="updateQueryCache($event)"></list>
            </div>
        </div>

    </div>
</template>

<script>
    import List from './components/List';
    import BoardQuery from './graphql/BoardWithListsAndCards.gql';

    export default {
        components: {List},
        apollo: {
            board: {
                query: BoardQuery,
                variables: {id: 1}
            }
        },
        methods: {
            updateQueryCache(event) {

                const data = event.store.readQuery({
                    query: BoardQuery,
                    variables: {id: Number(this.board.id)}
                });

                data.board.lists.find(list => list.id == event.listId).cards.push(event.data);

                event.store.writeQuery({ query: BoardQuery, data });

            }
        }
    }
</script>

<style scoped>
    .header {
        height: 40px;
    }
</style>
