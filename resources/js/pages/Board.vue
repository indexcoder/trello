<template>
    <div class="h-full flex flex-col items-stretch" :class="bgColor">
        <div class="header text-white flex justify-between items-center mb-2">
            <div class="ml-2 w-1/3">
                <button @click="showBoards = !showBoards" class="bg-purple-500 rounded-sm px-2 py-1 text-sm font-bold outline-none whitespace-no-wrap focus:outline-none hover:opacity-75">Boards</button>
                <div v-if="showBoards" class="absolute bg-gray-200 rounded-sm mt-2 text-sm text-gray-600 border border-gray-200 shadow w-64 overflow-y-auto z-10 p-2">
                    <div class="text-gray-600 text-xs font-semibold mb-2 ml-2">BOARDS</div>
                    <div class="m-2 bg-indigo-100 rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex">
                        <div class="bg-indigo-200 w-10 rounded-sm rounded-r-none">

                        </div>
                        <div class="p-2">The board name!</div>
                    </div>
                </div>
            </div>
            <div>
                <a href="/" class="text-lg opacity-50 hover:opacity-75">Laravello</a>
            </div>
            <div class="mr-2 w-1/3 flex justify-end">
                <div v-if="isLoggedIn" class="flex items-center">
                    <div class="text-sm mr-2">{{ name }}</div>
                    <button @click="logout" class="bg-purple-500 rounded-sm px-2 py-1 text-sm font-bold outline-none whitespace-no-wrap focus:outline-none hover:opacity-75">
                        Выйти
                    </button>
                </div>
                <div v-else>
                    <button @click="$router.push({name: 'login'})" class="bg-purple-800 rounded-sm px-2 py-1 text-sm font-bold outline-none whitespace-no-wrap focus:outline-none hover:opacity-75">
                        Войти
                    </button>
                    <button @click="$router.push({name: 'register'})" class="bg-purple-800 rounded-sm px-2 py-1 text-sm font-bold outline-none whitespace-no-wrap focus:outline-none hover:opacity-75">
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
        <div class="h-full flex flex-1 flex-col items-stretch">
            <div class="mx-2 mb-2 text-white font-bold text-lg">
                <div v-if="$apollo.queries.board.loading" class="flex justify-center items-center">
                    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
                <span v-else> {{ board.title }}</span>
            </div>
            <div v-if="board" class="flex flex-1 items-start overflow-x-auto mx-2">
                <list v-for="list in board.lists"
                      :key="list.id"
                      :list="list"
                      @card-deleted="updateQueryCache($event)"
                      @card-updated="updateQueryCache($event)"
                      @card-added="updateQueryCache($event)">
                </list>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {colorMap500} from "../utils";
    import List from '../components/List';
    import Logout from '../graphql/Logout.gql';
    import BoardQuery from '../graphql/BoardWithListsAndCards.gql';
    import {EVENT_CARD_ADDED, EVENT_CARD_DELETED, EVENT_CARD_UPDATE} from "../Constants";

    export default {
        components: {List},

        data() {
            return {
                showBoards: false
            }
        },

        computed: {
            bgColor() {
                return {
                    "bg-gray-500": this.$apollo.loading,
                    [colorMap500[this.board?.color]]: true
                }
            },
            ...mapState({
                 isLoggedIn: "isLoggedIn",
                 name: state => state.user.name
            })
        },

        apollo: {
            board: {
                query: BoardQuery,
                variables() {
                    return {
                        id: Number(this.$route.params.id)
                    }
                }
            }
        },
        methods: {
            async logout() {
                const response = await this.$apollo.mutate({mutation: Logout});
                if (response.data?.logout.id) {
                    this.$store.dispatch("logout");
                }
            },

            updateQueryCache(event) {
                const data = event.store.readQuery({
                    query: BoardQuery,
                    variables: {id: Number(this.board.id)}
                });

                const listById = () => data.board.lists.find(list => list.id === event.listId);

                switch (event.type) {
                    case EVENT_CARD_ADDED:
                        listById().cards.push(event.data);
                        break;
                    case EVENT_CARD_DELETED:
                        listById().cards = listById().cards.filter(card => card.id !== event.data.id);
                        break;
                    case EVENT_CARD_UPDATE:
                        listById().cards.filter(card => card.id === event.data.id).title = event.data.title;
                        break;
                }

                event.store.writeQuery({ query: BoardQuery, data });
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 40px;
        background-color: rgba(0,0,0, 0.2);
    }
</style>
