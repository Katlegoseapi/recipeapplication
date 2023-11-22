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
              <li>Activeness</li>
              <li>Rich Nutritions</li>
             </ul>
        
             <div class="recipe-card">


</div>

<div class="container">
<div class="info-container">
        <div class="image-container">
    <img src="~/assets/images/smallpic1.png" alt="Recipe Image">
  </div>
    <div class="title">Thai Basil Tofu Stir Fry</div>
    <div class="price">$123</div>
    <div class="clock">30 minutes</div>
    <div class="stars">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9734;</span> 
    </div>
    <div class="comment">35</div>
    <div class="like">55 Likes</div>
    <div class="word">Super Dry</div>
  </div>

  <div class="info-container">
    <div class="image-container">
      <img src="~/assets/images/smallpic2.png" alt="Recipe Image 2">
    </div>
    <div class="title">Kung Pao Shrimp</div>
    <div class="price">$123</div>
    <div class="clock">30 minutes</div>
    <div class="stars">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9734;</span>
    </div>
    <div class="comment">35</div>
    <div class="like">55 Likes</div>
    <div class="word">Super Dry</div>
  </div>


<div class="info-container">
    <div class="image-container">
      <img src="~/assets/images/smallpic3.png" alt="Recipe Image 3">
    </div>
    <div class="title">Mexican Chicken</div>
    <div class="price">$123</div>
    <div class="clock">40 minutes</div>
    <div class="stars">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
    </div>
    <div class="comment">40</div>
    <div class="like">100 Likes</div>
    <div class="word">Super Dry</div>
  </div>

  <div class="new-info-container">
    <div class="new-image-container">
      <img src="~/assets/images/image 4.png" alt="Recipe Image 3">
    </div>
    <div class="new-title">Egg White Bites</div>
    <div class="new-price">$123</div>
    <div class="new-clock">10 minutes</div>
    <div class="new-stars">
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
    </div>
    <div class="new-comment">80</div>
    <div class="new-like">100 Likes</div>
    <div class="new-word">Super Dry</div>
  </div>

 <div class="new-info-container">
    <div class="new-image-container">
      <img src="~/assets/images/image 5.png" alt="Recipe Image 3">
    </div>
    <div class="new-title">Greek Faro Salad</div>
    <div class="new-price">$123</div>
    <div class="new-clock">15 minutes</div>
    <div class="new-stars">
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
    </div>
    <div class="new-comment">80</div>
    <div class="new-like">100 Likes</div>
    <div class="new-word">Super Dry</div>
  </div>

  <div class="new-info-container">
    <div class="new-image-container">
      <img src="~/assets/images/image 6.png" alt="Recipe Image 3">
    </div>
    <div class="new-title">Mediterranian Diet Snack</div>
    <div class="new-price">$123</div>
    <div class="new-clock">30 minutes</div>
    <div class="new-stars">
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
      <span class="new-star">&#9733;</span>
    </div>
    <div class="new-comment">80</div>
    <div class="new-like">100 Likes</div>
    <div class="new-word">Super Dry</div>
  </div>
</div>

<div class="last-info-container">
  <div class="last-image-container last-image-1">
    <img src="~/assets/images/image 7.png" alt="Recipe Image 1">
  </div>


  <div class="last-image-container last-image-2">
    <img src="~/assets/images/image 8.png" alt="Recipe Image 2">
  </div>



  <div class="last-image-container last-image-3">
    <img src="~/assets/images/image 9.png" alt="Recipe Image 3">
  </div>
</div>
</header>

<footer class="site-footer">
    <img src="~/assets/images/image 10.png" alt="Footer Image">
  </footer>

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
  margin: 8px 0;
}

.egg-free {
  color: rgb(166, 238, 144)
}
.weight-loss {
  color: rgb(166, 238, 144)
}

.filter-subtitle {
    margin-left: 5npm0px;
}
.filter-list{
  margin-left: 35px;
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
  width: 70px; 
  height: auto;
  cursor: pointer;
}

.recipe-card {
      display: flex;
      align-items: flex-start;
      max-width: 600px; 
      margin: 0 auto; 
    }
    .image-container {
      margin-right: 10px;
    }

    .info-container {
      flex: 1;
      margin-left: 250px;
      margin-right: 20px;
      text-align: left;
      margin-top: -600px;
    }

    .title {
      font-size: 15px;
      font-weight: bold;
      width: 150px;
      white-space: normal;
    }

    .price {
      color: green;
      margin-left: 180px;
      margin-top: -33px;
    }

    .clock {
   margin-top: 21px;
    }
    .comment {
    margin-top: -20px;
    margin-left: 1px;
    }
    .like {
      margin-left: 20px;
      margin-top: -20px;
    }

    .stars {
      display: flex;
      align-items: center;
      margin-left: 142px;
    }

    .star {
      color: gold;
      margin-right: 3px;
    }

    .word {
      margin-left: 150px;
      margin-top: -30px;
    }

    .container {
  display: flex; 
    }
.container {
  padding-right: 350px;
}
.info-container {
  flex: 1;
  margin-right: 20px;
  text-align: left;
  
}

.info-container:last-child 
 {
  margin-left: 0; 
  padding-left: 50px;
}
.info-container:last-child .price {
  margin-top: -20px;
  
}

.image-container {
  margin-right: 10px;
  display: inline-block; 
}


.title,
.price,
.clock,
.stars,
.comment,
.like,
.word {
  
}


.container {
  display: flex;
}
.container {
  padding-left: 10px;
}
.info-container {
  margin-right: -150px;
}

.info-container:first-child {
  margin-right: -100px; 
}

.info-container:last-child {
  margin-right: -600px;
}

.image-container {
  display: inline-block;
}

.title,
.price,
.clock,
.stars,
.comment,
.like,
.word {
  /* General styles for all containers */
}

.info-container:nth-child(3) .title,
.info-container:nth-child(3) .price,
.info-container:nth-child(3) .clock,
.info-container:nth-child(3) .stars,
.info-container:nth-child(3) .comment,
.info-container:nth-child(3) .like,
.info-container:nth-child(3) .word {
  /* Specific styles for the third image components */
}

.info-container:nth-child(3) .title {
  font-weight: bold;
  color: black;
}

.info-container:nth-child(3) .price {
  font-size: 18px;
  color: green;
  margin-top: -20px; /* Adjusted margin-top for the third image price */
}

.info-container:nth-child(3) .clock {
  font-style: italic;
  color: black;
}

.info-container:nth-child(3) .stars {
  color: gold;
}

.info-container:nth-child(3) .comment {
  color: black;
}

.info-container:nth-child(3) .like {
  color: black;
}

.info-container:nth-child(3) .word {
  color: black;
}

/* New styles for the last three images */

.new-info-container {
  flex: 1;
  margin-left: 20px;
  text-align: left;
  margin-top: -250px; /* Adjust as needed */
}

.new-image-container {
  margin-left: -800px; /* Adjust as needed */
}

.new-title {
  font-size: 15px;
  font-weight: bold;
  width: 150px;
  white-space: normal;
  margin-left: -800px;
}

.new-price {
  color: green;
  margin-left: 80px; /* Adjust as needed */
  margin-top: -19px;
  margin-left: -630px;
}

.new-clock {
  color: black;
  margin-left: -800px;
  margin-top: 5px;
}

.new-comment {
  color: black;
  margin-left: -800px;
  margin-top: -20px;
}

.new-like {
color: black;
margin-left: -770px;
margin-top: -20px;
}

.new-stars {
  display: flex;
  align-items: center;
  margin-left: -659px; /* Adjust as needed */
}

.new-star {
  color: gold;
  margin-right: 3px;
}

.new-word {
  margin-left: -650px; /* Adjust as needed */
  margin-top: -35px;
}

/* 2nd Image 2nd Row= */

.container {
  display: flex; 
    }
.container {
  padding-right: 350px;
}
.new-info-container {
  flex: 1;
  margin-right: 310px;
  text-align: left;
  
}

.new-info-container:last-child 
 {
  margin-left: 0; 
  padding-left: 70px;
}
.new-info-container:last-child .price {
  margin-top: -20px;
  
}

.new-image-container {
  margin-right: 10px;
  display: inline-block; 
}


.new-title,
.new-price,
.new-clock,
.new-stars,
.new-comment,
.new-like,
.new-word {
  
}

/* 3rd image, 2nd row= */


.last-info-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 150px;
  margin-right: 500px; 
  margin-top: 50px;
}

.last-image-container last-image-1 {
  bottom: 80px;
  
}

.last-image-container:last-image-2 {
  bottom: 80px;
}

.last-image-container:last-image-3 {
  bottom: 50px;
  
}

.site-footer {
    text-align: center;
    padding: 0px;
    background-color: #333; /* Adjust the background color as needed */
    color: white;
  }

  .site-footer img {
    width: 100%;
    height: 100%; /* Adjust the width of your footer image */
  }

</style>








