<template>
        <div class="grid grid-cols-4 gap-5">
            <div
                v-for="product in products"
            >
                <ProductCard :product="product"/>
            </div>
        </div>
</template>

<script setup>
    definePageMeta({
        layout: 'default'
    })

    // fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')    
</script>