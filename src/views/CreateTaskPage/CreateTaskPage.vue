<template>
     <div class="wrapper">
        <header class="header">
            <div class="container">
                <NavBar />
            </div>
        </header>
        <main class="main">
            <div class="container">
                <div class="create-task">
                        <h1 class="create-task__title">Создание задачи</h1>
                        <span class="create-task__line line"></span>
                    <form 
                        action="#" 
                        class="create-task__form form"
                        @submit.prevent="submitForm"
                    >
                        <div class="form__fields">
                            <div class="form__group">
                                <label for="input" class="form__label">Название <span>*</span></label>
                                <InputVue 
                                    class="form__input"
                                    v-model="postTask.name"
                                    :id="'input'"
                                />
                            </div>
                            <div class="form__group">
                                <label for="textarea" class="form__label">Описание</label>
                                <TextareaVue
                                    class="form__input"
                                    v-model="postTask.description"
                                    :id="'textarea'"
                                />
                            </div>
                            <div class="form__group">
                                <label for="select" class="form__label">Проект <span>*</span></label>
                                <SelectVue 
                                    class="form__input"
                                    :info="projectInfo"
                                    :keyName="'name'"
                                    :choosedItem="choosedItem"
                                    @choice="chooseItem"
                                />
                            </div>
                            <div class="form__group">
                                <label for="select" class="form__label">Исполнитель</label>
                                <SelectVue 
                                    class="form__input"
                                    :info="userInfo"
                                    :keyName="'name'"
                                    :choosedItem="choosedUser"
                                    @choice="chooseUser"
                                    
                                >
                                </SelectVue>
                            </div>
                        </div>
                        <span class="form__line line"></span>
                        <div class="form__btns">
                            <GlobalBtn
                                class="form__btn"
                                :class="['global-btn__white']"
                                :buttonName="'Отмена'"
                            />
                            <GlobalBtn
                                class="form__btn"
                                :class="['global-btn__blue']"
                                :buttonName="'Создать задачу'"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'
import InputVue from '@/components/UiComponents/InputVue/InputVue.vue'
import SelectVue from '@/components/UiComponents/SelectVue/SelectVue.vue'
import TextareaVue from '@/components/UiComponents/TextareaVue/TextareaVue.vue'
import GlobalBtn from '@/components/UiComponents/GlobalBtn/GlobalBtn.vue'

export default {
    name: "CreateTaskPage",

    components: {
        InputVue,
        NavBar,
        SelectVue,
        TextareaVue,
        GlobalBtn
    },

    data() {
        return {
            projectInfo: [
                {
                    "author": "77735454",
                    "authorEdited": null,
                    "dateCreated": "29.06.23",
                    "dateEdited": null, 
                    "_id": "343466546",
                    "name": "Проект 1",
                    "code": "1455"
                },
                {
                    "author": "77735454",
                    "authorEdited": null,
                    "dateCreated": "30.06.23",
                    "dateEdited": null, 
                    "_id": "7778889",
                    "name": "Проект 2",
                    "code": "1454454"
                }
            ],

            userInfo: [
                {
                    name: "User 1",
                    author: "77735454",
                },
                {
                    name: "User 2",
                    author: "777352332454"
                }
            ],

            postTask: {
                name: "",
                description: "",
                projectId: "",
                executor: ""
            },

            choosedItem: '',
            choosedUser: ''
        }
    },

    methods: {
        chooseItem(item) {
            this.choosedItem = item.name;
            this.postTask.projectId = item._id;
        },
        chooseUser(item) {
            this.choosedUser = item.name;
            this.postTask.executor = item.author;
        },
        submitForm(e) {
            console.log(this.postTask);
            e.target.reset()
        }
    }
}
</script>
