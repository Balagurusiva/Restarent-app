<script setup>
 
</script>

<template>
   <router-view></router-view>
</template>

<style >
*{
    font-family:cursive
}
.login-page {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

 

input[type="text"],
input[type="email"],
input[type="password"],
button {
    width: 40%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>

 
