<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

const userSignup = ref({
    name: '',
    email: '',
    password: ''
})



const handlesubmit = async () => {
    const result = await axios.post('http://localhost:3000/users', userSignup.value)

    if (result.data && result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data))
        router.push({name:'home'})
        console.log("user created")

    }
}

onMounted(() => {
   let user = localStorage.getItem('user-info')
   if(user){
    router.push({name:'home'})
   }
})
</script>

<template>
    <div class="login-page">

        <input type="text" v-model="userSignup.name" placeholder="Name">
        <input type="email" v-model="userSignup.email" placeholder="Email"> 
        <input type="password" v-model="userSignup.password" placeholder="Password">
        <button type="submit" @click="handlesubmit">Sign up</button>
        <router-link to="/sign-in">Sign in</router-link>

    </div>
</template>

<style scoped>
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