import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Participant } from './participants'

export interface Setup {
  labelTop: string
  labelBottom: string
  dataType: string
  sortFunction: (data: Participant) => boolean
  icon: string
}

export const useSetupStore = defineStore('setup', () => {
  const setup = ref<Setup | undefined>()
  function setSetup(setupData: Setup) {
    setup.value = setupData
  }

  return { setup, setSetup }
})
