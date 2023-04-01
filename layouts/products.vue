<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Nuxt App</nuxt-link>
      </nav>
    </header>

    <!-- outputs page content -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>
