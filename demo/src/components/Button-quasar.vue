<script setup lang="ts">
interface Props {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
const { size = 'md' } = defineProps<Props>();
const sizeMappings = {
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
};
const propSize = sizeMappings[size] ?? 'medium';
</script>
<template>
    <q-btn color="deep-orange" v-bind:size="propSize">
        <slot/>
    </q-btn>
</template>
