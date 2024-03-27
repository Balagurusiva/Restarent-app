<script setup>
import {useRouter} from 'vue-router'
import { ref ,onMounted} from 'vue'
import axios from 'axios';

const router = useRouter()

const user = ref({
    email: '',
    password: ''
})

const login = async () => {
    const result = await axios.get(`http://localhost:3000/users?email=${user.valueemail}&password=${user.value.password}`)

    if (result.data && result.status == 200) {
        console.log(result.data)
        localStorage.setItem("user-info", JSON.stringify(result.data))
        router.push({ name: 'home' })
        console.log("user logged")
    }else{
        console.log("errpr")
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
        <input type="email" v-model="user.email" placeholder="Email">
        <input type="password" v-model="user.password" placeholder="Password">
        <button type="submit" @click="login">Sign up</button>
    </div>
</template>