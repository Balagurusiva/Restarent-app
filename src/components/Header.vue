<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const handleLogoOut =() => {
    localStorage.clear()
    router.push({name:'sign up'})
}
 
</script>


<template>
  <header class="header">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/add">Add Restaurant</router-link></li>
        <li><router-link to="/update">Update Restaurant</router-link></li>
        <li><router-link to="" @click="handleLogoOut">Log Out</router-link></li>
      </ul>
    </nav>
  </header>
</template>

 

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 0.3rem;
  text-align:right;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 1rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  margin-right:20px;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
