<script setup lang="ts">
import { ref } from 'vue'
import { useModalStore } from './stores/modal'
import TextInput from '@/components/TextInput.vue'
const store = useModalStore()

const name = ref('')
console.log(name)

console.log(store.modalIsOpen)
</script>

<template>
  <header class="header">
    <button @click="store.openModal()" class="button">Konfiguracja</button>
  </header>
  <RouterView />
  <h2>{{ store.modalIsOpen }}</h2>

  <transition name="modal">
    <modal class="modal" v-if="store.modalIsOpen">
      <div class="modal-container">
        <div>
          <form action=""></form>
          <TextInput label="Imię" modelValue="name" />
          <button type="submit">Save</button>
        </div>
        <button @click="store.closeModal()">Close button</button>
      </div>
    </modal>
  </transition>
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

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
}

.modal-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 30px;
  border: 1px solid rgba(9, 9, 121, 0.9878545168067226);
}
</style>
