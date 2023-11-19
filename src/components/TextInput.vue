<script setup lang="ts">
defineProps(['label', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <label
    >{{ label }}
    <input :value="modelValue" @input="$emit('update:modelValue', '$event.target.value')" />
  </label>
</template>
