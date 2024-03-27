<script setup>
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import Header from '@/components/Header.vue'

const router = useRouter()

const name = ref('')

onMounted(() => {
   let user = localStorage.getItem('user-info')
   name.value = JSON.parse(user).name 
   if(!user){
    router.push({name:'sign up'})
   }
})
 
</script>

<template>
    <Header />
    <div>
         <h1>hello {{ name}}, this home page</h1>
    </div>
</template>