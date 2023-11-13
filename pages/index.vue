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
   
  </div>
  <div class="page-layout">
   
</div>
   
<div class="background-image-container">
  <!-- <img src="~/assets/images/meatchicken.png" alt="backgound-image-container" class="backgound-image-container"/> -->
    <!-- <div class="background-image"></div> -->
    <!-- <p>background picture</p> -->
  <div style="position: absolute; bottom: 10px; left: 10px; background-color: rgba(255, 255, 255, 0.7); padding: 10px;">
    <button class="btn" style="text-align: left;">More</button>
    <div class="centered">
      <p style="display: inline; margin: 0;">Meat</p>
  <strong style="display: inline; margin-left: 10px;">Chicken</strong>
  </div>

  </div>
  <div class="social-icons">
  <a href="#" class="icon-link" @click="openFacebookProfile">
    <img src="~/assets/images/facebook.png" alt="Facebook" />
  </a>
  <a href="#" class="icon-link" @click="openYouTubeChannel">
    <img src="~/assets/images/youtube.jpg" alt="YouTube" />
  </a>
  <a href="#" class="icon-link" @click="openTwitterProfile">
    <img src="~/assets/images/twitter.png" alt="Twitter" />
  </a>
  <a href="#" class="icon-link" @click="openPinterestProfile">
    <img src="~/assets/images/pinterest.png" alt="Pinterest" />
  </a>
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

      <div class="filter-subtitle">Cusine</div>
          <ul class="filter-list">
            <li>Asian</li>
            <li>Italian</li>
            <li>Chines</li>
            <li>Thai</li>
          </ul>

          <div class="filter-subtitle">Goals</div>
             <ul class="filter-list">
              <div class="weight-loss">Weight Loss</div>
              <li>Freshness</li>
              <li>Rich Nutritions</li>
             </ul>

             <div class="recipe-card">
  <div class="image-container">
    <img src="~/assets/images/img1.png" alt="Recipe Image">
  </div>
  <div class="info-container">
    <h3 class="recipe-title">Thai Basil Tofu Stir Fry</h3>
    <p class="duration">30 minutes</p>
    <!-- Add other features as needed -->
  </div>
</div>


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
  methods: {
    openFacebookProfile() {
      window.open('https://www.facebook.com/', '_blank');
    },
    openYouTubeChannel() {
      window.open('https://www.youtube.com/', '_blank');
    },
    openTwitterProfile() {
      window.open('https://twitter.com/home?lang=en', '_blank');
    },
    openPinterestProfile() {
      window.open('https://za.pinterest.com/#top', '_blank');
    },
  }
 
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

.search-input {
  display: flex;
  align-items: center;
}
.wide-input {
  width: 100%;
  margin-left: 0px;
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
  color: rgb(166, 238, 144);
  font-size: 25px;
}

.filter-list {
  list-style: none;
  padding: 0;
  font-size: 17px;
  color: rgb(0, 0, 0);
}

.filter-list li {
  margin: 10px 0;
}

.egg-free {
  color: rgb(166, 238, 144)
}
.weight-loss {
  color: rgb(166, 238, 144)
}

.filter-subtitle {
    margin-left: 50px;
}
.filter-list{
  margin-left: 40px;
}

.background-image-container {
  position: relative;
  display: flex;
  height: 400px;
  width: 100%;
  object-fit: contain;
  background-image: url("~/assets/images/meatchicken.png"); 
}


.background-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: 60% 0%;
  max-width: 100%;
}

.btn {
  position: absolute;
  bottom: 60px;
  left: 200px;
  transform: translate(-50%, -50%);
  -ms-transform:translate(-50%, -50%);
  background-color: auto;
  color: white;
  font-size: 24px;
  padding: 24px 80px;
  border: 1px solid;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
 .btn:hover {
  background-color: black;
}
.centered {
  position: absolute;
  bottom: 1000%;
  left:1000%;
  transform:  translate(-50%, -50%);
  color: white;
  font-size: 46px;
}

.centered strong {
  font-weight: bold;
  display: inline;

}

.social-icons {
  display: inline;
  align-items: inline;
  position: absolute;
  bottom: 70px;
  left: 1390px;
}

.icon-link {
  margin-left: 7px;
}

.icon-link img {
  width: 70px; /* Adjust the width as needed */
  height: auto;
  cursor: pointer;
}

.recipe-card {
  position: absolute;
  top: 700px; /* Adjust the top position as needed */
  left: 300px; /* Adjust the left position as needed */

  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  /* Optional: Adjust the width and margin as needed */
  width: 150px;
  margin: 11px;
}

.recipe-card:hover {
  transform: scale(1.05);
}

.image-container img {
  width: 100%;
  height: 110px;
  border-bottom: 1px solid #ddd;
}

.info-container {
  padding: 12px;
}

.recipe-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 550px;
  margin-bottom: 15px;
}

.duration {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: #666;
}


</style>








