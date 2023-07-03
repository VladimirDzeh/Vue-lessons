<template>
  <div class="wrapper">
        <header class="header">
            <div class="container">
                <NavBar
                    @switch-pages="switching"
                />
            </div>
        </header>
        <main class="main">
            <div class="container">
                <component :is="currentComponent"></component>
            </div>
        </main>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage.vue'
import TasksPage from '@/views/TasksPage/TasksPage.vue'

export default {
    name: "TogglePages",

    components: {
        NavBar,
        ProjectsPage,
        TasksPage
    },

    data() {
        return {
            currentComponent: ProjectsPage
        }
    },

    methods: {
        switching(id) {
            switch (id) {
                case 'projects':
                    this.currentComponent = ProjectsPage
                    break;
                case 'tasks':
                    this.currentComponent = TasksPage
                    break;
            }
        }
    }
}
</script>

