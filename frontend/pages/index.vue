<template>
<div class="min-h-screen bg-gray-200">
  <div class="grid grid-cols-1 grid-rows-1 bg-gray-200">
    <appHeader/>
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
              <div class="grid grid-cols-3 text-center">
                <h1>Error Code</h1>
                <h1>Error Text</h1>
                <h1>User Action</h1>
              </div>
              <unresolved />
              <!-- <div id="singleLineEntry" class="grid grid-cols-3 text-center my-6" v-for="error in unresolved" :key="error.index" :error="getUnresolved">
                <p>{{error.code}}</p>
                <p>{{error.text}}</p>
                <button> <span class="bg-blue-600" @click="changeState(error.index,error.code,error.text)" v-bind="error.code"> Move to Resolved</span></button>
              </div> -->
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">

            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">

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
export default {
   async asyncData({ $axios }) {
    try {
      const { resolved, unresolved, backlog } = await $axios.$get(
        "http://localhost:8000/get_lists"
      );
      return {
        resolved,
        unresolved,
        backlog
      };
    } catch (error) {
      console.log(
        `Couldn't get error lists:\n${error}\nDid you start the API?`
      );
      console.log(
        "HINT: You can comment out the full `asyncData` method and work with mocked data for UI/UX development, if you want to."
      );
    }
  },
    data() {
    return {
      unresolved : [],
      resolved : [],
      backlog : [],
      openTab: 1
    };
  },
  methods: {
    // ...mapActions(['asyncData']),
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    
    changeState : function(errorIndex, errorCode, errorDescription){
      if (String(errorDescription).includes("unresolved") === true) {
        var newUnresolved = []
        var arrayLength = this.unresolved.length
        var generatedKey = errorIndex - arrayLength
        var deletedUnresolved = this.unresolved.splice(generatedKey,1,newUnresolved)
        this.$nextTick(function () {})
        // this.$store.unresolved = this.unresolved
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

