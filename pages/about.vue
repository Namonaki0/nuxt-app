<template>
    <div>
        <h2>ABOUT</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veritatis quibusdam minima dignissimos, ullam
            dolore facere quos, vel cum vitae totam modi! Possimus ipsam mollitia, temporibus voluptatibus ipsa explicabo
            soluta.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veritatis quibusdam minima dignissimos, ullam
            dolore facere quos, vel cum vitae totam modi! Possimus ipsam mollitia, temporibus voluptatibus ipsa explicabo
            soluta.</p>
        </div>
        <div>{{ data }}</div>
</template>

<script setup>
    const { data } = await useFetch('api/currency/GBP')
</script>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>