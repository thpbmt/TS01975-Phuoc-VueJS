<template>
<div class="border rounded p-2 mb-2">
<strong>{{ comment.user }}</strong>
<p class="mb-0">{{ comment.content }}</p>
</div>
</template>


<script setup>
defineProps({ comment: Object })
</script>