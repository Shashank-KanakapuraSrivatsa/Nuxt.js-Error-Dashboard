<template>
    <div>
        <div class="grid grid-cols-3 text-center text-dark-green-900 mb-2 py-4 mx-4 rounded-xl bg-white border-solid border-4 border-green-400" v-for="(error,index) in resolved" :key="index">
                <p>{{error.code}}</p>
                <p>{{error.text}}</p>
            <div class="grid-cols-2">
                <button class="bg-red-200 bg-green-400 focus:outline-none hover:bg-green-900 hover:text-white rounded-lg text-dark-green-900 font-bold px-2 py-1 text-center" @click.prevent="changeStateResolved(error.index,error.code,error.text)" >Mark as Unresolved</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'resolved',
        mounted() {
    this.$store.dispatch('asyncData')
  },
  computed : {
      resolved () {
        return this.$store.state.resolved
      }
    },
    watch : {
      resolved () {
        return this.$store.state.resolved
      }
    },
    methods : {
        changeStateResolved : function(errorIndex,errorCode,errorText){
        this.$store.dispatch('DELETE_Resolved',{errorIndex,errorCode,errorText})
  }
    }
    }
</script>

<style scoped>

</style>