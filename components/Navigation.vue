<template>
    <div class="icons">
      <div style="margin-top: -0px;">
        <!-- <img src="/img/cookpal.png" alt="cookpal" /> -->
        <img src="~/assets/images/cookpal2nd.png" alt="Discover Nuxt 3" />
      </div>
      <div class="search-bar">
        <div class="search-dropdown">
          All Categories <span class="arrow-down">▼</span>
        </div>
        <div class="search-input">
          <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Search..." class="wide-input" />
          <button @click="performSearch">
            <i class="fas fa-search"></i>
          </button>

        </div>

      </div>

      <div>
        <img src="~/assets/cheout.png" alt="Discover Nuxt 3" width="70" height="50" />
      </div>
      <div class="profile-icon">
        <img src="~/assets/images/katlego.jpeg" alt="Profile Picture" class="profile-image" />
        <i class="fas fa-user-circle"></i>
      </div>
    </div>

    
  </template>
  
  <script>
  export default {
    name: 'Icons',
    
    props: {
    profilePicture: {
      type: String,
      default: '/assets/images/katlego.jpeg',
    },
  },

  };
  </script>
  
  <style scoped>
.profile-icon {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-right: 50px;
}

.icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.search-bar {
  display: flex;
  align-items: center;
}

.arrow-down {
  margin-left: 5px;
}

.search-input {
  display: flex;
  align-items: center;
}

input {
  padding: 5px;
}

.cart-icon {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.cart-count {
  margin-left: 5px;
  font-weight: bold;
}

.search-input {
  display: flex;
  align-items: center;
}

.nav-item {
  margin: 0 10px;
}

.icon {
  text-align: center;
  padding: 10px;
}

.logo {
  width: 140px;
}



button {
  background: none;
  border: none;
  cursor: pointer;
}


.wide-input {
  width: 100%;
  margin-left: 0px;
}


</style>
  