<template>
    <div class="shadow-card bg-white rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-200 mb-2">
        {{ card.title }}
    </div>
</template>

<script>
    export default {
        props: {
            card: Object
        }
    }
</script>
