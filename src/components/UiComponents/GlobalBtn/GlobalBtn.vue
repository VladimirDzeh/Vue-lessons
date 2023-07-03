<template>
  <button 
    class="global-btn" 
    :id="buttonId"
    @click="$emit('selected-button', $event)"
  >
    {{buttonName}}
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: "GlobalBtn",

    props: {
        buttonName: {
          type: String
        },
        buttonId: {
          type: String
        }
    }

}
</script>
