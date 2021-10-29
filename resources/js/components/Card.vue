<template>
    <div class="flex items-center justify-between group shadow-card bg-white rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-200 mb-2">
        <div class="flex-1">{{ card.title }}</div>
        <div class="flex items-center opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300">
            <button class="text-gray-500 hover:text-yellow-500 mr-1">
                <svg class="fill-current w-6 h-auto" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" />
                </svg>
            </button>
            <button @click="cardDelete" class="text-gray-500 hover:text-red-500">
                <svg class="fill-current w-6 h-auto" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    import CardDelete from '../graphql/CardDelete.gql';

    export default {
        props: {
            card: Object
        },

        methods: {
            cardDelete() {
                this.$apollo.mutate({
                    mutation: CardDelete,
                    variables: {
                        id: this.card.id
                    }
                })
            }
        }
    }
</script>
