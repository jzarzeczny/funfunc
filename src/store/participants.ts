import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Participant {
  id: string
  name: string
  age: number
}

export const useParticipantsStore = defineStore('participants', () => {
  const participantsList = ref<Participant[]>([])

  function addParticipant(participant: Participant) {
    participantsList.value.push(participant)
  }

  function removeParticipant(participant: Participant) {
    const filteredList = participantsList.value.filter((p) => p.id !== participant.id)
    participantsList.value = filteredList
  }

  return { participantsList, addParticipant, removeParticipant }
})
