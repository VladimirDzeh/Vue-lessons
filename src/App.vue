<template>
  <div id="app">
    <!-- <TogglePages/> -->
    <!-- <UserPage/> -->
    <CreateTaskPage/>
  </div>
</template>

<script>
// import TogglePages from '@/views/TogglePages/TogglePages.vue'
// import UserPage from '@/views/UserPage/UserPage.vue'
import CreateTaskPage from '@/views/CreateTaskPage/CreateTaskPage.vue'


export default {
  name: "App",

  components: {
    // TogglePages,
    // UserPage,
    CreateTaskPage
  }
}
</script>


