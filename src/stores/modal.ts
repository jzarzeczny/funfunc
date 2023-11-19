import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modalIsOpen = ref(false)

  function openModal() {
    console.log(openModal)
    modalIsOpen.value = true
  }

  function closeModal() {
    modalIsOpen.value = false
  }

  return { modalIsOpen, openModal, closeModal }
})
