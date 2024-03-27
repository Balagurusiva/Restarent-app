<script setup>
import {onMounted} from 'vue'
import {useRouter} from 'vue-router'
import Header from '@/components/Header.vue'

const router = useRouter()

onMounted(() => {
   let user = localStorage.getItem('user-info')
   if(!user){
    router.push({name:'sign up'})
   }
})
 
</script>

<template>
    <Header />
    <div>
         <h1>this add page</h1>
    </div>
</template>