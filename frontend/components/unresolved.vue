<template>
    <div>
        <p>Hi! This is Unresolved</p>
        <div id="singleLineEntry" class="grid grid-cols-3 text-center my-6" v-for="error in unresolved" :key="error.index">
                <p>{{error.code}}</p>
                <p>{{error.text}}</p>
                <button> <span class="bg-blue-600" @click="changeUnresolved(error.index,error.code,error.text)"> Move to Resolved</span></button>
        </div> 
    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        name : 'unresolved',
        computed : {
            ...mapActions(['setLists'])

        //  fetchUnresolved () {
        //      return this.$store.getters.listUnresolved;
        //  }
    }
    }
    
</script>

<style scoped>

</style>