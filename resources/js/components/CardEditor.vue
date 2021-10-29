<template>
    <div>
        <textarea ref="card" :value="value" @input="$emit('input', $event.target.value)" @keyup.esc="closed" @keyup.enter="saved" placeholder="Enter a title for this card..." class="rounded-md shadow-card py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"></textarea>
        <div class="flex justify-between">
            <button @click="saved" class="rounded-sm py-1 px-3 bg-indigo-600 text-white cursor-pointer hover:bg-indigo-600 outline-none">Add Card</button>
            <button @click="closed" class="py-1 px-3 rounded-sm hover:bg-gray-400 cursor-pointer text-gray-500">Cancel</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        mounted() {
            this.$refs.card.focus();
        },
        methods: {
            closed() {
                this.$emit("closed");
            },
            saved() {
                this.$emit("saved");
            }
        }
    }
</script>