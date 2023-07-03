<template>
    <textarea 
        class="textarea"
        placeholder="Введите текст..."
        :id="id" 
        :value="value"
        @input="updateValue($event.target.value)"
    >
    </textarea>
</template>

<script>
export default {
    name: 'TextareaVue',

    props: {
        id: {
            type: String,
            required: true
        },
        value: {
            type: [String, Number],
            default: ''
        },
    },

    methods: {
        updateValue(newValue) {
            this.$emit('input', newValue);
        }
    }

}
</script>

