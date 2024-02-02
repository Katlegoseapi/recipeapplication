<template>
  <Heading />


     <header>

    <Navigation />

    <div class="icons-container">
      <i class="icons-icons"></i>

    </div>
    <div class="page-layout">

    </div>

    <BigImage />

    <SideTexts />

    <div class="recipe-card">
      <p> {{ count }}</p>
    </div>


    <div class="big-container">

      <div class="container" v-for="(recipe, index) in recipes" :key="index">
        <div class="info-container">
          <div class="image-container">
            <img :src="recipe.image" alt="Recipe Image">
          </div>
          <div class="title">{{ recipe.title }}</div>
          <div class="price">{{ recipe.price }}</div>
          <div class="clock">{{ recipe.clock }}</div>
          <div class="stars">
            <span v-for="star in recipe.stars" :key="star" class="star">&#9733;</span>
            <span v-for="star in recipe.stars" :key="star" class="star">&#9734;</span>
          </div>
          <div class="comment">{{ recipe.comment }}</div>
          <div class="like">{{ recipe.like }}</div>
          <div class="word">{{ recipe.word }}</div>
          
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
    </div>

  </header>

  <Last />
</template>

<script setup lang="ts">



import Heading from '@/components/Heading.vue';
import Navigation from '@/components/Navigation.vue';
import BigImage from '@/components/BigImage.vue';
import SideTexts from '@/components/SideTexts.vue';
import Last from '@/components/Last.vue';
 

const { data: count } = await useFetch ('http://localhost:3000/api/cusines')



</script>

<style scoped>
.filter-recipes {
  text-align: left;
  padding: 25px;
}

.navigation {
  display: flex;
  justify-content: center;
  flex-direction: center;
  align-items: center;
  background-color: white;
  padding: 0px;
}

.navigation a {
  color: rgb(166, 238, 144);
  text-decoration: underline overline;
  padding: 10px;
  margin: 10px 0;
  word-break: break-all;
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
  margin-left: 50px;
}

.filter-list {
  margin-left: 35px;
}

.recipe-card {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
}

.image-container {
  margin-left: 200px;
  margin-top: 150px;
  display: inline-block;
}

.info-container {
  margin-left: 500px;
  text-align: left;
  margin-top: -500px;
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
  display: inline-flex;
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

.big-container {
  display: inline-flex;
}

.container {
  padding-left: 200px;
  display: inline-block;
  flex-wrap: wrap;

}

.info-container {
  flex: wrap;
  margin-right: 15px;
  text-align: left;

}

.info-container:last-child {
  margin-left: 0;
  padding-left: 50px;
}

.info-container:last-child .price {
  margin-top: -20px;

}

.image-container {
  margin-right: 50px;
  display: inline-block;
  margin-top: 50px;
}


.title,
.price,
.clock,
.stars,
.comment,
.like,
.word {}


.container {
  display: inline-block;
  flex-wrap: wrap;

}

.container {
  padding-left: 10px;
  display: center;
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
  display: flex;
}

.title,
.price,
.clock,
.stars,
.comment,
.like,
.word {}

.info-container:nth-child(3) .title,
.info-container:nth-child(3) .price,
.info-container:nth-child(3) .clock,
.info-container:nth-child(3) .stars,
.info-container:nth-child(3) .comment,
.info-container:nth-child(3) .like,
.info-container:nth-child(3) .word {}

.info-container:nth-child(3) .title {
  font-weight: bold;
  color: black;
}

.info-container:nth-child(3) .price {
  font-size: 18px;
  color: green;
  margin-top: -20px;
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


.new-info-container {
  flex: 1;
  margin-left: 20px;
  text-align: left;
  margin-top: -250px;
}

.new-image-container {
  margin-left: 500px;
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
  margin-left: 80px;
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
  margin-left: -659px;
}

.new-star {
  color: gold;
  margin-right: 3px;
}

.new-word {
  margin-left: -650px;
  margin-top: -35px;
}


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

.new-info-container:last-child {
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
.new-word {}



.last-info-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 150px;
  margin-left: 250px;
  margin-top: 30px;
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
</style>








