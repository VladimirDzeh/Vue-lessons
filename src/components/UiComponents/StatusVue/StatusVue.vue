<template>
    <div :class="checkColor">
        {{statusName}}
    </div>
</template>

<script>
export default {
    name: "StatusVue",

    props: {
        statusName: {
            type: String,
            required: true
        }
    },

    computed: {
        checkColor() {
            let className;

            switch (this.statusName) {
                case 'Завершена':
                case 'Выполнена':
                case 'Закрыта':
                case 'Активен':
                    className = 'status status-blue'
                    break;
                case 'Черновик':
                case 'В работе':
                case 'Тестирование':
                    className = 'status status-bronze'
                    break;
                case 'Удалена':
                    className = 'status status-red'
                    break;
                default:
                    className = 'status status-grey'
                    break;
            }

            return className
        }
    }

}
</script>
