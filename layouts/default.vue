<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold">Nuxt App</nuxt-link>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- outputs page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: #12b488
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}
</style>
