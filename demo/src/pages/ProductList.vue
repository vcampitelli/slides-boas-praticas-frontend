<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '../components/Button.vue';
import ProductPresenter from '../ProductPresenter.ts';
import fetchProductsUseCase from '../useCases/fetchProducts.ts';
import type ProductDTO from '../types/ProductDTO.ts';

const products = ref<ProductDTO[] | null>(null);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);
const presenter = new ProductPresenter();

onMounted(() => {
    fetchProductsUseCase()
        .then((response) => {
            products.value = response;
        })
        .catch((err) => {
            error.value = err.message;
            console.error(err);
        })
        .finally(() => {
            loading.value = false;
        });
});
</script>

<template>
    <div>
        <h1>Produtos</h1>
        <p v-if="loading">Carregando...</p>
        <p v-else-if="error">Erro: {{ error }}</p>
        <div v-else class="flex">
            <div v-for="product in products" :key="product.id">
                <p class="product-name">{{ product.name }}</p>
                <p class="product-price">{{ presenter.formatPrice(product) }}</p>
                <Button size="md">Comprar</Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    column-gap: 1rem;
}
.product-name {
    margin: 1em 0 0 0;
    font-weight: bold;
}
.product-price {
    margin: 0 0 0.5em 0;
    color: forestgreen;
}
</style>
