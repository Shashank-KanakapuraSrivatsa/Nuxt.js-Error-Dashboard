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
              <div v-for="error in setLists.unresolved" :key="error.id">
                <p>{{error.text}}</p>
              </div>
              <!-- <unresolved /> -->
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <resolved />
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <backlog />
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
import {mapActions} from 'vuex';
export default {
   
    data() {
    return {
      // unresolved : [],
      // resolved : [],
      // backlog : [],
      openTab: 1
    };
  },
  computed : {
            ...mapActions(['SET_UNRESOLVED'])
    },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }, 
  }
};
</script>

