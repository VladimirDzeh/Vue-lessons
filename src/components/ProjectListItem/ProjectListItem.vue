<template>
    <div class="project-item list-item">
        <div class="list-item__group">
            <h4 class="list-item__title">
                {{project.name}}
            </h4>
            <div class="list-item__description">
                <div class="list-item__set">
                    <p class="list-item__code">{{project.code}}</p>
                    <p class="list-item__user-info">{{project.user}}</p>
                </div>
                <p class="list-item__admin-info">{{project.admin}}</p>
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


export default {
    name: "ProjectListItem",

    components: {
        DropdownMenu,
        GlobalBtn,
        IconSvg
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
        project: {
            type: Object,
            required: true
        }
    }
}
</script>
