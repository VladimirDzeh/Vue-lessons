<template>
  <div class="task-item list-item">
        <div class="list-item__group">
            <div class="list-item__inner">
                <h4 class="list-item__title">
                    {{task.name}}
                </h4>
                <img
                    class="list-item__icon btn-menu__icon" src="@/assets/images/user-icon.png" width="24" height="24" alt="user-icon"
                >
            </div>
            <div class="list-item__description">
                <div class="list-item__set">
                    <p class="list-item__code">{{task.code}}</p>
                    <p class="list-item__user-info">{{task.user}}</p>
                    <StatusVue :statusName="'Тестирование'" />
                </div>
                <p class="list-item__admin-info">{{task.admin}}</p>
            </div>
        </div>
        <DropdownMenu :itemNames="['Редактировать', 'Удалить']">
            <GlobalBtn class="list-item__btn" :class="['global-btn__white']">
                <IconSvg :svgParam="svgData"/>
            </GlobalBtn>
        </DropdownMenu>
    </div>    
</template>

<script>
import DropdownMenu from '@/components/UiComponents/DropdownMenu/DropdownMenu.vue'
import GlobalBtn from '@/components/UiComponents/GlobalBtn/GlobalBtn.vue'
import IconSvg from '@/components/UiComponents/IconSvg/IconSvg.vue'
import StatusVue from '@/components/UiComponents/StatusVue/StatusVue.vue'

export default {
    name: "TaskListItem",

    components: {
        DropdownMenu,
        GlobalBtn,
        IconSvg,
        StatusVue
    },

    data() {
        return {
            svgData: {
                name: 'dots',
                width: '4',
                height: '13'
            }
        }
    },

    props: {
        task: {
            type: Object,
            required: true
        }
    }

}
</script>
