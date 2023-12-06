<script setup lang="ts">
import { ref } from 'vue'
import { useModalStore } from '@/store/modal'
import { useParticipantsStore } from '@/store/participants'
import { generateRandomID } from '@/utils'

const store = useModalStore()
const participantsStore = useParticipantsStore()
const formData = ref({
  name: ''
})
const submitForm = () => {
  participantsStore.addParticipant({ id: generateRandomID(), name: formData.value.name })
  formData.value.name = ''
}
</script>

<template>
  <modal class="modal" v-if="store.modalIsOpen">
    <div class="modal-container">
      <button class="button close-button" @click="store.closeModal()">Close</button>

      <form class="form" @submit.prevent="submitForm">
        <h2>Dodaj graczy</h2>
        <div class="form-control">
          <label for="name">Imię</label>
          <input id="name" v-model="formData.name" />
        </div>
        <button class="button submit-button" type="submit">Dodaj</button>
      </form>

      <div class="list-container">
        <h2>Uczestnicy</h2>
        <ul>
          <li v-for="item in participantsStore.participantsList" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </modal>
</template>

<style scoped lang="scss">
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
  background-color: rgb(59, 56, 56);
  padding: 2rem;
  border-radius: 30px;
  border: 1px solid rgba(9, 9, 121, 0.9878545168067226);
  display: grid;
  grid-template-columns: 70px 1fr 1fr 120px;
  grid-template-rows: 1fr 1fr;
}

.close-button {
  height: min-content;
  grid-column: 4/5;
  grid-row: 1/2;
}

.form {
  grid-column: 2/3;
  grid-row: 1/2;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 200px;

  .form-control {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    input {
      padding: 0.5rem 0.25rem;
      font-size: 1rem;
    }
  }
}

.list-container {
  grid-column: 3/4;
  grid-row: 1/2;
}
</style>
