<template>
  <div class="v-rating-item">
      <v-popup
        id="modal"
        v-if="isInfoPopupVisible"
        :isArrayReversed="this.isArrayReversed"
        @closePopup="closeInfoPopup"
        :row_data="row_data"
        :users_data="this.users_data"
      >
        <div class="v-popup__main">
          <div class="v-popup__avatar" v-show="this.isArrayReversed">
            <img :src="this.row_data.avatar" alt="avatar" v-if="(this.users_data.length + 1) - index === 1" style="border: 4px solid #FDD835;">
            <img :src="this.row_data.avatar" alt="avatar" v-if="(this.users_data.length + 1) - index === 2" style="border: 4px solid #90A4AE;">
            <img :src="this.row_data.avatar" alt="avatar" v-if="(this.users_data.length + 1) - index === 3" style="border: 4px solid #795548;">
            <img :src="this.row_data.avatar" alt="avatar" v-if="(this.users_data.length + 1) - index >= 4" style="border: 4px solid transparent">
          </div>
          <div class="v-popup__avatar" v-show="!this.isArrayReversed">
            <img :src="this.row_data.avatar" alt="avatar" v-if="index === 1" style="border: 4px solid #FDD835;">
            <img :src="this.row_data.avatar" alt="avatar" v-if="index === 2" style="border: 4px solid #90A4AE;">
            <img :src="this.row_data.avatar" alt="avatar" v-if="index === 3" style="border: 4px solid #795548;">
            <img :src="this.row_data.avatar" alt="avatar" v-if="index >= 4" style="border: 4px solid transparent">
          </div>
          <div class="v-popup__text">
            <p class="text-header">Имя:</p>
            <p class="text-content">{{ this.row_data.name }}</p>
            <p class="text-header">Баллы</p>
            <p class="text-content">{{ this.row_data.rating }}</p>
            <p class="text-header">Позиция в рейтинге:</p>
            <p class="text-content"
               v-if="this.isArrayReversed"
            >{{ (this.users_data.length + 1) - index }}</p>
            <p class="text-content" v-else >{{ index }}</p>
          </div>
        </div>
        <div class="v-popup__footer">
          <p class="text-header">О себе:</p>
          <p class="text-content">{{ this.row_data.description }}</p>
        </div>
      </v-popup>
      <div class="rating">
        <div class="rating__main">
          <div class="rating__mainWrapper"
               @click="showPopupInfo"
          >
            <div class="rating__mainWrapper_avatar" v-show="this.isArrayReversed">
              <img :src=row_data.avatar alt="avatar" v-if="(this.users_data.length + 1) - index === 1" style="border: 4px solid #FDD835;">
              <img :src=row_data.avatar alt="avatar" v-else-if="(this.users_data.length + 1) - index  === 2" style="border: 4px solid #90A4AE;">
              <img :src=row_data.avatar alt="avatar" v-else-if="(this.users_data.length + 1) - index  === 3" style="border: 4px solid #795548;">
              <img :src=row_data.avatar alt="avatar" v-else-if="(this.users_data.length + 1) - index  >= 4">
            </div>
            <div class="rating__mainWrapper_avatar" v-show="!this.isArrayReversed">
              <img :src=row_data.avatar alt="avatar" v-if="index === 1" style="border: 4px solid #FDD835;">
              <img :src=row_data.avatar alt="avatar" v-else-if="index === 2" style="border: 4px solid #90A4AE;">
              <img :src=row_data.avatar alt="avatar" v-else-if="index === 3" style="border: 4px solid #795548;">
              <img :src=row_data.avatar alt="avatar" v-else-if="index >= 4">
            </div>
            <div class="dFlex">
              <div class="rating__mainWrapper_text">
                <h1>Пользователь:</h1>
                <p>{{ row_data.name }}</p>
              </div>
              <div class="rating__mainWrapper_rating">
                <img src="@/assets/img/star.png" alt="star">
                <p>{{ row_data.rating }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import vPopup from '@/components/v-popup'

export default {
  name: 'v-rating-item',
  components: {
    vPopup
  },
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: {
      type: Number
    },
    isArrayReversed: {
      type: Boolean
    },
    users_data: {
      type: Array
    }
  },
  data () {
    return {
      isInfoPopupVisible: false
    }
  },
  methods: {
    noScroll () {
      const body = document.body
      body.classList.toggle('no-scroll')
    },
    showPopupInfo () {
      this.isInfoPopupVisible = true
      this.noScroll()
    },
    closeInfoPopup () {
      this.isInfoPopupVisible = false
      this.noScroll()
    }
  }
}
</script>

<style lang="scss">

.rating {
  width: 600px;
  &__main {

  }
  &__mainWrapper {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    border-radius: 10px;
    transition: background-color .2s linear;
    cursor: pointer;
    &_avatar {
      & img {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 60px;
        height: 60px;
      }
    }
    &_text {
      padding-left: 26px;
      text-align: left;
      & h1 {
        font-family: inherit;
        font-size: 18px;
        font-weight: 400;
      }
      & p {
        font-family: inherit;
        font-size: 16px;
        font-weight: 400;
      }
    }
    &_rating {
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
      }
      & p {
        padding-left: 7px;
        padding-top: 2px;
      }
    }

    &:hover {
      background: rgba(#000, .07);
    }
  }
}

.v-popup {
  &__main {
    display: flex;
  }
  &__avatar {
    & img {
      width: 129px;
      height: 129px;
      border: 4px solid #FDD835;
      border-radius: 50%;
    }
  }
  &__text {
    text-align: left;
    padding-left: 37px;
  }
  &__footer {
    text-align: left;
    padding-top: 17px;
  }
}

.text-header {
  font-size: 18px;
  font-weight: 400;
  color: #2C3E50;
}
.text-content {
  font-size: 16px;
  font-weight: 400;
  color: #2C3E50;
}

</style>
