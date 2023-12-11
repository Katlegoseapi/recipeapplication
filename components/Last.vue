<template>
     <div class="background-footer">
    <div class="footer-overlay">
      <div class="footer-column">
        <img src="~/assets/images/cookpal2nd.png" alt="Cookpal Logo" class="footer-logo">
        <p class="footer-text">All Rights Reserved</p>
      </div>

      <div class="footer-column">
        <ul class="footer-list">
          <div class="title">Fresh Recipe</div>
          <li>Recipes</li>
          <li>Winter Salads</li>
          <li>Organic Chicken</li>
          <li>Beef and Mutton</li>
          <li>Flavoured Milk</li>
        </ul>
      </div>

      <div class="footer-column">
        <ul class="footer-list">
          <div class="title">In News</div>
          <li>Our Blogs</li>
          <li>Contests/Sweepsatkes</li>
          <li>Video</li>
          <li>New Release</li>
          <li>Newsletter</li>
        </ul>
      </div>

      <div class="footer-column">
        <ul class="footer-list">
          <div class="title">About Us</div>
          <li>FAQ</li>
          <li>Our Board</li>
          <li>Our Staff</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div class="footer-column">
        <p class="footer-text">Join our Newsletter</p>
        <div class="search-bar">
          <input type="text" placeholder="Email">
          <div class="email-icon">&#9993;</div>
        </div>
        <div class="footer-social-icons">
          <img src="~/assets/images/FL.jfif" alt="Facebook">
          <img src="~/assets/images/IL.jfif" alt="Instagram">
          <img src="~/assets/images/TL.jfif" alt="Twitter">
          <img src="~/assets/images/PL.jfif" alt="Pinterest">
          <img src="~/assets/images/YL.jfif" alt="Youtube">
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
    
  };
  

</script>

<style scoped>

.background-footer {
  position: relative;
  height: 300px;
  background: url('~/assets/images/image 10.png') center/cover no-repeat;
}

.footer-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: auto;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

}

.footer-column {
  flex: 1;
  text-align: left;
}

.footer-logo {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.footer-text {
  margin-bottom: 12px;
  color: white;
  font-size: 18px;
  font-style: italic;
}

.title {
  font-size: 18px;
  margin-bottom: 7px;
}

.footer-list {
  list-style-type: none;
  padding: 5px;
  color: white;
  margin-bottom: 20px;
}

.footer-list li {
  margin-bottom: 8px;
}

.search-bar {
  display: flex;
  align-items: left;
  max-width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-bar input[type="text"] {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  outline: none;
}


.search-bar .email-icon {
  margin-left: 5px;
  font-size: 20px;
}

.footer-social-icons img {
  width: 20px;
  margin-right: 10px;
  color: auto;
}

</style>
