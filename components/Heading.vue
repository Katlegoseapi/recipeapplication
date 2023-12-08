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
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  
  </script>
  
  <style scoped>
  .header
 {
  display: flex;
  justify-content: space-between;
  word-spacing: 25px;
  align-items: center;
  background-color: #000000;
  color: #fff;
  padding: 20px;
}
.left {
  display: flex;
  word-spacing: 5px;
}

.right {
  display: flex;
  word-spacing: 5px;
}

  </style>
  