<template>
     <div class="filter-recipes">
      <div class="filter-title">Filter Recipes</div>
      <div class="navigation">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Help</a>
        <a href="#">Profile</a>
      </div>

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
</template>

<script>
export default {
    name: 'FilterRecipes' ,
}

</script>

<style scoped>
.recipe-card {
  display: flex;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
}

.filter-recipes {
  text-align: left;
  padding: 25px;
}

.navigation {
  display: flex;
  justify-content: center;
  flex-direction: center;
  /* Stack items vertically */
  align-items: center;
  /* Center items horizontally */
  background-color: white;
  padding: 0px;
  /* Add padding to the container */
}

.navigation a {
  color: rgb(166, 238, 144);
  text-decoration: underline overline;
  padding: 10px;
  /* Adjust the padding for each link */
  margin: 10px 0;
  /* Add margin to create space between links */
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
  margin-left: 5npm0px;
}

.filter-list {
  margin-left: 35px;
}

</style>
