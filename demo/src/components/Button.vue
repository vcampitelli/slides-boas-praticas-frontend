<script setup lang="ts">
interface Props {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
const { size = 'md' } = defineProps<Props>();
const sizeMappings = {
    'xs': 'x-small',
    'sm': 'small',
    'md': 'medium',
    'lg': 'large',
    'xl': 'x-large',
};
const propSize = sizeMappings[size] ?? 'medium';
</script>
<template>
    <v-btn v-bind:size="propSize">
        <slot/>
    </v-btn>
</template>
