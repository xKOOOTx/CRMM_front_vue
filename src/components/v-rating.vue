<template>
  <div class="v-rating">
    <div class="wrapper">
      <div class="wrapper__header">
        <h1>Рейтинг пользователей:</h1>
        <button class="wrapper__header_button displayNone"
                @click="sortByRatingToHigh"
                id="sortHighBtn">
          <img
            src="@/assets/img/sort.png"
            alt="close"
            class="wrapper__header_img"
          >
        </button>
        <button class="wrapper__header_button"
                @click="sortByRatingToLow"
                id="sortLowBtn">
          <img
            src="@/assets/img/sort.png"
            alt="close"
            class="wrapper__header_img"
          >
        </button>
      </div>
      <div class="">
        <v-rating-item
          v-for="(user, index) in users_data"
          :key="index"
          :row_data="user"
          :index="index + 1"
          :isArrayReversed="isArrayReversed"
          :users_data="users_data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/style.scss'
import vRatingItem from '@/components/v-rating-item'

export default {
  name: 'v-rating',
  components: {
    vRatingItem
  },
  data () {
    return {
    }
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    },
    isArrayReversed: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  methods: {
    sortByRatingToHigh () {
      this.users_data.sort((a, b) => a.index < b.index ? 1 : -1)
      // this.users_data.reverse()
      const sortHighBtn = document.getElementById('sortHighBtn')
      const sortLowBtn = document.getElementById('sortLowBtn')
      sortHighBtn.classList.add('displayNone')
      sortLowBtn.classList.remove('displayNone')
      this.isArrayReversed = !this.isArrayReversed
    },
    // flipArr () {
    //   const a = [...this.users_data]
    //   for (let i = 0; i < this.users_data.length; i++) {
    //     a[i] = this[(this.length - 1) - i]
    //   }
    //   return a
    // },
    sortByRatingToLow () {
      this.users_data.sort((a, b) => a.index > b.index ? 1 : -1)
      // this.users_data.reverse()
      const sortHighBtn = document.getElementById('sortHighBtn')
      const sortLowBtn = document.getElementById('sortLowBtn')
      sortLowBtn.classList.add('displayNone')
      sortHighBtn.classList.remove('displayNone')
      this.isArrayReversed = true
    }
  }
}
</script>

<style lang="scss">

.wrapper {
  background: #FAFAFA;
  padding: 15px 188px 104px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 23px;

    & h1 {
      padding-right: 260px;
      font-family: inherit;
      font-size: 24px;
      font-weight: 400;
    }

    &_button {
      border: 1px solid rgba(#2C3E50, .67);
      outline: none;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      transition: background-color .2s linear;

      cursor: pointer;

      &:hover {
        background: rgba(#000, .07);
      }
    }

    &_img {
      padding: 11px 8px;
    }
  }
}

.dFlex {
  display: flex;
  justify-content: space-between;
  min-width: 500px;
}

#sortHighBtn {
  & img {
    transform: scale(1, -1);
  }
}

</style>
