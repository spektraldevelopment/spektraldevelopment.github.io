<template>
  <transition name="fade" mode="in-out">
    <div v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, this.delay * 1000);
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>