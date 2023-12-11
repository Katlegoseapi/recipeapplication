<template>
   <div class="background-image-container">
      <!-- <img src="~/assets/images/meatchicken.png" alt="backgound-image-container" class="backgound-image-container"/> -->
      <!-- <div class="background-image"></div> -->
      <!-- <p>background picture</p> -->
      <div
        style="position: absolute; bottom: 10px; left: 10px; background-color: rgba(255, 255, 255, 0.7); padding: 10px;">
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

  </template>
  
  <script>
  export default {
    name: 'background-image-container',
    
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
  -ms-transform: translate(-50%, -50%);
  background-color: auto;
  color: black;
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
  left: 1000%;
  transform: translate(-50%, -50%);
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

</style>
  