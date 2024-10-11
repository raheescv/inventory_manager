<template>
  <div>
    <h2>product details for {{ id }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, soluta.</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
});
const { id } = useRoute().params;

</script>

<style scoped></style>