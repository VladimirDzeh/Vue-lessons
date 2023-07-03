<template>
  <div class="plug">
        <p class="plag__text">{{plagText}}</p>
        <GlobalBtn 
            class="plug__btn"
            :class="['global-btn__blue']"
            :buttonName="'Добавить'"
        />
    </div>
</template>

<script>
import GlobalBtn from '@/components/UiComponents/GlobalBtn/GlobalBtn.vue'

export default {
    name: "Plug",

    components: {
        GlobalBtn
    },

    props: {
        plagText: {
            type: String,
            required: true
        }
    }

}
</script>
