<template>
    <textarea v-model="title"
              @keyup.enter.esc="$emit('closed')"
              ref="card"
              placeholder="Enter a title for this card..."
              class="rounded-md shadow-card py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"></textarea>
</template>

<script>
    export default {
        data() {
            return {
                title: null
            }
        },
        mounted() {
            this.$refs.card.focus();
        }
    }
</script>
