<script setup lang="ts">
import { useModalStore } from './store/modal'
import ModalComponent from '@/components/ModalComponent.vue'

const modalStore = useModalStore()
</script>

<template>
  <header class="header">
    <button @click="modalStore.openModal()" class="button">Konfiguracja</button>
  </header>
  <RouterView />

  <transition name="modal"><ModalComponent /></transition>
</template>

<style scoped>
.header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 0.75rem 1.25rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 0.9878545168067226) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}

.button {
  grid-column: 3/4;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  background-color: #fff;
  justify-self: end;
  border: 1px solid rgba(9, 9, 121, 0.9878545168067226) 1;
}
</style>
