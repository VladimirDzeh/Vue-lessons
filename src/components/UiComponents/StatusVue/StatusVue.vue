<template>
    <div class="status" :class="checkColor">
        {{checkName}}
    </div>
</template>

<script>
import {statusName, statusClass} from '@/js/status';

export default {
    name: "StatusVue",

    props: {
        status: {
            type: String,
            required: true
        }
    },

    computed: {
        checkName() {
            return statusName[this.status]
        },

        checkColor() {
            return statusClass[this.status]
        }
    }

}
</script>
