<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt Home Page</NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/1" class="table">Products/1</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- Content -->
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup></script>

<style>
.router-link-exact-active {
    color: #12b488
}
</style>