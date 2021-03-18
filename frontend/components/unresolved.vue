<template>
    <div>
        <div class="grid grid-cols-3 text-center text-dark-green-900 mb-2 py-4 mx-4 rounded-xl bg-white border-solid border-4 border-green-400" v-for="(error,index) in unresolved" :key="index">
                <p>{{error.code}}</p>
                <p>{{error.text}}</p>
            <div class="grid-cols-2">
                <button class="bg-green-400 rounded-lg focus:outline-none hover:bg-green-900 hover:text-white text-dark-green-900 font-bold px-2 py-1 text-center" @click.prevent="changeStateUnresolved(error.index,error.code,error.text)" >Mark as Resolved</button>
            </div>
        </div>
    </div>
</template>

<script>
// import {mapActions} from 'vuex';
    export default {
        name : 'unresolved',
        mounted() {
    this.$store.dispatch('asyncData')
  },
  computed : {
      unresolved () {
        return this.$store.state.unresolved
      }
    },
    watch : {
      unresolved () {
        return this.$store.state.unresolved
      }
    },
    methods : {
        changeStateUnresolved : function(errorIndex,errorCode,errorText){
        this.$store.dispatch('DELETE_Unresolved',{errorIndex,errorCode,errorText})
  }
    }
    }
    
</script>

<style scoped>

</style>