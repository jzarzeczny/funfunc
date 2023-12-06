<script setup lang="ts">
import { useParticipantsStore } from '@/store/participants'
import { ref } from 'vue'
const participantsStore = useParticipantsStore()

const items = ref([...participantsStore.participantsList])
const moveToTop = ref(false)
const moveToBottom = ref(false)
const currentIndex = ref(0)

const sortFunction = (item: any) => {
  return item === 'a'
}

const animateElement = () => {
  console.log(participantsStore.participantsList)
  if (!moveToTop.value || !moveToBottom.value) {
    sortFunction(items.value[currentIndex.value])
      ? (moveToTop.value = true)
      : (moveToBottom.value = true)

    setTimeout(() => {
      moveToTop.value = false
      moveToBottom.value = false
      currentIndex.value = currentIndex.value + 1
    }, 10000)
  }
}
</script>

<template>
  <div class="container">
    <button @click="animateElement" class="button">Start</button>
    <div class="box start-box"></div>
    <div class="box sorter"></div>
    <div class="box first-category"></div>
    <div class="box second-category"></div>
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="{
        moveTop: moveToTop && currentIndex === index,
        moveBottom: moveToBottom && currentIndex === index,
        sorted: index < currentIndex,
        movingBox: true
      }"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: black;
  height: calc(100vh - 65px);
  position: relative;
}

.box {
  position: absolute;
  width: 200px;
  height: 300px;
  background-color: #fff;
}

.start-box {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.sorter {
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.first-category {
  right: 10px;
  top: 10px;
}

.second-category {
  right: 10px;
  bottom: 10px;
}

.movingBox {
  width: 100px; /* Adjust the width of the box */
  height: 100px; /* Adjust the height of the box */
  background-color: #3498db; /* Set your desired background color */
  position: absolute;
  top: 50%; /* Center the box vertically */
  transform: translateY(-50%);
}

.moveTop {
  animation: sortTop 10s linear forwards; /* Adjust the duration of the animation */
}

.moveBottom {
  animation: sortBottom 10s linear forwards;
}
.sorted {
  display: none;
}
@keyframes sortTop {
  40% {
    transform: translate(700px, -50%);
  }

  60% {
    transform: translate(700px, -400px);
  }

  100% {
    transform: translate(1200px, -400px);
  }
}

@keyframes sortBottom {
  40% {
    transform: translate(700px, -50%);
  }

  60% {
    transform: translate(700px, 300px);
  }

  100% {
    transform: translate(1200px, 300px);
  }
}
</style>
