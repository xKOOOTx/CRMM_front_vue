<template>
  <div class="window-wrapper modal">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>Профиль пользователя:</span>
        <span class="v-popup__header_close">
        <img src="../assets/img/close_btn.png"
             alt="close"
             @click="closePopup"
        >
      </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    closePopup () {
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
.window-wrapper {
  position: fixed;
  background: rgba(#000, .07);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-popup {
  position: fixed;
  min-width: 478px;
  max-width: 700px;
  min-height: 281px;
  padding: 16px 16px 21px 24px;
  background: #fff;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 26px;
    &_close {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 16px;

      cursor: pointer;

      transition: background-color .2s linear;

      &:hover {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 16px;
      }
    }
    & span {
      font-family: inherit;
      font-size: 24px;
      font-weight: 400;
    }
  }
  &__content {
  }
}

</style>
