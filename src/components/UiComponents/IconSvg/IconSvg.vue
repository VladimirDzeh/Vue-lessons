<template>
    <svg :width="svgParam.width" :height="svgParam.height">
        <use :xlink:href="'#' + svgParam.name" />
    </svg>
</template>

<script>
import '@/register.js';

export default {
    name: "IconSvg",

    props: {
        svgParam: {
            type: Object,
            required: true,
        }
    }
}
</script>

