<template>
  <header class="header">
    <div class="left">
      <div class="nav-item">Community</div>
      <div class="nav-item">Books</div>
      <div class="nav-item">Recipe index</div>
      <div class="nav-item">Popular</div>
    </div>
    <div class="right">
      <div class="nav-item">Register</div>
      <div class="nav-item">Login</div>
    </div>
  </header>

  <header>
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
      <input
        type="text"
        v-model="searchQuery"
        @input="performSearch"
        placeholder="Search..."
        class="wide-input"
      />
      <button @click="performSearch">
        <i class="fas fa-search"></i>
      </button>
    
  </div>
    
  </div>

  <div>
    <img src="~/assets/cheout.png" alt="Discover Nuxt 3" width="70" height="50" />
  </div>
  <div class="profile-icon">
    <img src="~/assets/images/katlego.jpeg" alt="Profile Picture" class="profile-image"/>
    <i class="fas fa-user-circle"></i>
  </div>
</div>

<div class="icons-container">
  <i class="icons-icons"></i>
    <!-- Your existing HTML content -->
    <!-- ... -->
  </div>
  <div class="page-layout">
    <!-- Your existing content -->
    <!-- ... -->

    <!-- Image container -->
    <div class="horizontal-picture">
      <img src="~/assets/images/foodpic.png" alt="Horizontal Picture" />
    </div>
  </div>

  <div class="filter-recipes">
      <div class="filter-title">Filter Recipes</div>
      <div class="filter-subtitle">Diet</div>
      <ul class="filter-list">
        <li>Dairy Free</li>
        <div class="egg-free">Egg Free</div>
        <li>Sugar Free</li>
        <li>Gluten Free</li>
      </ul>
    </div>
 
    <div class="filter-subtitle">Allergies</div>
         <ul class="filter-list">
         <li>Glutten</li>
         <li>Legumes</li>
         <li>Grain</li>
         <li>Fruite</li>
      </ul>

  </header>
</template>

<script>
export default {
  name: 'Header',
  name: 'Icons',
  props: {
    profilePicture: {
      type: String,
      default: '/assets/images/katlego.jpeg', 
    },
  },

  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      
    },
  },


};


</script>

<style scoped>
.header
 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #fff;
  padding: 15px;
}

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

.left {
  display: flex;
}

.right {
  display: flex;
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

button {
  background: none;
  border: none;
  cursor: pointer;
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

.horizontal-picture {
 
  width: 100%;
  margin: 0 auto; 
}

.horizontal-picture img {
  
  width: 100%;
  height: auto; 
  display: block; 
}

.search-input {
  display: flex;
  align-items: center;
}
.wide-input {
  width: 100%;
  margin-left: 0px
}

.filter-recipes {
  text-align: left;
  padding: 20px;
}

.filter-title {
  font-family: "Blackadder ITC", cursive;
  font-style: italic;
  color: rgb(166, 238, 144);
  font-size: 35px;
}

.filter-subtitle {
  color: rgb(167, 238, 144);
  font-size: 25px;
}

.filter-list {
  list-style: none;
  padding: 0;
  font-size: 17px;
  color: rgb(0, 0, 0);
}

.filter-list li {
  margin: 6px 0;
}

.egg-free {
  color: rgb(166, 238, 144)
}

</style>








