<template>
  <div class="app-side-nav">
    <div class="menu-profile">
      <img class="profile-image" src="../../assets/straw_hat_icon.png" alt="User Avatar"/>
      <div class="profile-name">Name</div>
    </div>
    <router-link :to="{ name: 'entryList' }">
      <div
        class="menu-item"
        :class="{ isActive: activeItem === 'entryList' }"
        @click="onMenuItemClick('entryList')"
      >
        <font-awesome-icon icon="th-large" class="icon" />
        <span>Entry List</span>
      </div>
    </router-link>
    <div
      class="menu-item"
      :class="{ isActive: activeItem === 'migrationHistory' }"
      @click="onMenuItemClick('migrationHistory')"
    >
      <font-awesome-icon icon="copy" class="icon" />
      <span>Migration History</span>
    </div>
    <router-link :to="{ name: 'addEntry' }">
      <div
        class="menu-item"
        :class="{ isActive: activeItem === 'addEntry' }"
        @click="onMenuItemClick('addEntry')"
      >
        <font-awesome-icon icon="database" class="icon" />
        <span>Add Entry</span>
      </div>
    </router-link>
    <div
      class="menu-item"
      :class="{ isActive: activeItem === 'import' }"
      @click="onMenuItemClick('import')"
    >
      <font-awesome-icon icon="upload" class="icon" />
      <span>Import</span>
    </div>
  </div>
</template>

<script>
import has from 'lodash/has';

export default {
  name: 'AppSideNav',
  data() {
    return {
      activeItem: 'entryList',
    };
  },
  methods: {
    onMenuItemClick(item) {
      this.activeItem = item;
    },
  },
  created() {
    if (has(this.$router, 'history.current.name')) {
      this.activeItem = this.$router.history.current.name;
    }
  },
};
</script>

<style scoped lang="scss">
  @import "../../styles/theme";

  .app-side-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 220px;
    min-height: 100vh;
    background: $background-blue;
  }

  .menu-profile {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid $gray-default;

    .profile-image {
      width: 80px;
      height: 80px;
      border: 2px solid $light-gray-default;
      border-radius: 50%;
      margin-bottom: 15px;
    }

    .profile-name {
      color: $gray-default;
      font-weight: $bold;
    }
  }

  .menu-item {
    display: flex;
    align-items: center;
    padding: 15px 25px;
    border-bottom: 1px solid $gray-default;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    .icon {
      margin-right: 15px;
      color: $gray-default;
    }

    span {
      color: $gray-default;
      font-weight: $bold;
      font-size: $h3-font-size;
    }
  }

  .isActive {
    background: $background-dark-blue;
    border-left: 5px solid $green-default;
  }
</style>
