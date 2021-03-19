<template>
    <div>
        <div class="grid grid-cols-3 text-center text-dark-green-900 mb-2 py-4 mx-4 rounded-xl bg-white border-solid border-4 border-green-400" v-for="(error,index) in backlog" :key="index">
                <p>{{error.code}}</p>
                <p>{{error.text}}</p>
            <div class="grid-cols-2">
                <button class="bg-green-400 rounded-lg focus:outline-none hover:bg-green-900 hover:text-white text-dark-green-900 font-bold px-2 py-1 text-center" @click.prevent="changeStateBacklog(error.index,error.code,error.text)" >Move to Unresolved</button>
            </div>
        </div>
    </div>
</template>

<script>
// import {mapActions} from 'vuex';
    export default {
        name : 'backlog',
        mounted() {
    this.$store.dispatch('asyncData')
  },
  computed : {
      backlog () {
        return this.$store.state.backlog
      }
    },
    watch : {
      backlog () {
        return this.$store.state.backlog
      }
    },
    methods : {
        changeStateBacklog : function(errorIndex,errorCode,errorText){
        this.$store.dispatch('DELETE_Backlog',{errorIndex,errorCode,errorText})
  }
    }
    }
    
</script>

<style scoped>

</style>