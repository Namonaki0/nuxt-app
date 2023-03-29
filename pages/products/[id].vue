<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, eveniet?</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>
