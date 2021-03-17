<template>
<div class="min-h-screen bg-gray-200">
  <div class="grid grid-cols-1 grid-rows-1 bg-gray-200">
    <div class="grid grid-cols-1 grid-rows-1 gap-16 min-w-0 max-w-full mt-16 mb-4 mx-16 px-8 py-8 rounded text-white bg-blue-900 text-3xl font-bold uppercase"> 
    Error DashBoard
    </div>
    <div class="grid grid-cols-1 grid-rows-1 gap-16 min-w-0 max-w-full bg-gray-200 mb-4 mx-16 px-8 py-8 rounded">
    <div class="flex flex-wrap min-w-full">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-blue-900 bg-white': openTab !== 1, 'text-white bg-blue-900': openTab === 1}">
            <em class="fas fa-space-shuttle text-base mr-1"></em> unresolved
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-blue-900 bg-white': openTab !== 2, 'text-white bg-blue-900': openTab === 2}">
            <em class="fas fa-cog text-base mr-1"></em> Resolved
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-blue-900 bg-white': openTab !== 3, 'text-white bg-blue-900': openTab === 3}">
            <em class="fas fa-briefcase text-base"></em> Backlog
          </a>
        </li>
      </ul>
      <div class="relative grid grid-cols-1 min-w-0  bg-white w-full mb-6 mr-1 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="grid grid-cols-3 grid-rows-1 py-4 shadow-lg rounded bg-blue-500 text-white text-center">
                <div class="text-center align-middle font-bold">Error Code</div>
                <div class="text-center align-middle font-bold">Error Description</div>
                <div class="text-center align-middle font-bold">User Actions</div>
              </div>
              <div class="grid grid-cols-3 text-center" v-for="error in unresolved" :key="error">
                  <div class="text-center">{{ error.code }} </div>
                  <div class="text-center">{{ error.text }} </div>
                  <div class="grid grid-cols-2 text-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded" @click="changeState(error.index,error.code,error.text)">Mark as Resolved</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded">Undo previous action</button>
                  </div>
                </div>
            </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div class="grid grid-cols-3 grid-rows-1 py-4 shadow-lg rounded bg-blue-500 text-white text-center">
                <div class="text-center font-bold">Error Code</div>
                <div class="text-center font-bold">Error Description</div>
                <div class="text-center font-bold">User Actions</div>
              </div>
              <div class="grid grid-cols-3 gap-4 max-h-3 shadow-lg rounded py-6" v-for="error in resolved" :key="error.index">
                <div class="text-center">{{ error.code }} </div>
                <div class="text-center">{{ error.text }}</div>
                <div class="text-center">
                  <div class="grid grid-cols-2 text-center">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded" @click="changeState(error.index,error.code,error.text)">Mark as Unresolved</button>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded">Undo previous action</button>
                </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <div class="grid grid-cols-3 grid-rows-1 py-4 shadow-lg rounded bg-blue-500 text-white text-center">
                <div class="text-center font-bold">Error Code</div>
                <div class="text-center font-bold">Error Description</div>
                <div class="text-center font-bold">User Actions</div>
              </div>
              <div class="grid grid-cols-3 gap-4 max-h-3 shadow-lg rounded py-6" v-for="error in backlog" :key="error.index">
                <div class="text-center">{{ error.code }} </div>
                <div class="text-center">{{ error.text }}</div>
                <div class="text-center">
                  <div class="grid grid-cols-2 text-center">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded" @click="changeState(error.index,error.code,error.text)">Move to Unresolved</button>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded">Undo previous action</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
    data() {
    return {
      // unresolved : [],
      // resolved : [],
      // backlog : [],
      openTab: 1
    };
  },
  
  computed :{
    ...mapState([
      'unresolved',
      'resolved',
      'backlog'
    ]),
  },
  created () {
    this.$store.dispatch('asyncData')
  },
  methods: {
    ...mapActions(['asyncData']),
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    
    changeState : function(errorIndex, errorCode, errorDescription){
      if (String(errorDescription).includes("unresolved") === true) {
        var newUnresolved = []
        var arrayLength = this.unresolved.length
        var generatedKey = errorIndex - arrayLength
        var deletedUnresolved = this.unresolved.splice(generatedKey,1,newUnresolved)
      }
      else if (String(errorDescription).includes("resolved") === true) {
        var newResolved = []
        var arrayLength = this.resolved.length
        var generatedKey = errorIndex - arrayLength
        var deletedResolved = this.resolved.splice(generatedKey,1,newResolved)
      }
      else if (String(errorDescription).includes("backlog") === true) {
        // var newBacklog = []
        // var arrayLength = this.backlog.length
        // var generatedKey = errorIndex - arrayLength
        // var deletedBacklog = this.backlog.splice(generatedKey,1,newBacklog)
      }
    }
  }
};
</script>

