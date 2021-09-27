<template>
    <svg class='feather-icon'>
        <use :xlink:href="require('@/assets/feather-sprite.svg') + `#${icon}`" />
    </svg>
</template>

<style scoped>
.feather-icon {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>

<script lang="ts">  
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class FeatherIcon extends Vue {
    @Prop() private icon!: string;
}
</script>