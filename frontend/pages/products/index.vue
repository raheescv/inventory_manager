<template>
    <div>
        <h2>Products</h2>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="p in products">
                            <ProductCode :product="p" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
});
// fetch the product
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    'title': 'Products'
})
</script>

<style></style>