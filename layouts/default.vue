<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/">Nuxt App</nuxt-link>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- outputs page content -->
        <div>
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
