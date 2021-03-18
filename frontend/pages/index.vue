<template>
<div class="min-h-screen bg-gray-900">
  <div class="grid grid-cols-1 grid-rows-1 bg-black-900">
    <appHeader/>
    <div class="grid grid-cols-1 grid-rows-1 gap-16 min-w-0 max-w-full bg-black-900 mb-2 mx-16 px-8 py-8 rounded">
    <div class="flex flex-wrap min-w-full">
    <div class="w-4/6">
      <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-400 bg-white': openTab !== 1, 'text-white bg-green-400': openTab === 1}">
            <em class="fas fa-space-shuttle text-base mr-1"></em> unresolved
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-400 bg-white': openTab !== 2, 'text-white bg-green-400': openTab === 2}">
            <em class="fas fa-cog text-base mr-1"></em> Resolved
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-5 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-400 bg-white': openTab !== 3, 'text-white bg-green-400  ': openTab === 3}">
            <em class="fas fa-briefcase text-base"></em> Backlog
          </a>
        </li>
      </ul>
      <div class="grid grid-cols-1 min-w-0 bg-white w-full mb-6 mt-2 mr-1 rounded-lg">
        <div class="flex-auto rounded">
          <div class="tab-content tab-space rounded-lg">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="grid grid-cols-1  bg-green-400 rounded-lg">
              <div class="grid grid-cols-3 text-center align-middle font-bold bg-green-400 h-16 pt-4 text-lg text-dark-green-900 rounded-lg">
                <p>Error Code</p>
                <p>Error Text</p>
                <p>User Action</p>
              </div>
              <unresolved />
            </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div class="grid grid-cols-1 bg-green-400 rounded-lg">
              <div class="grid grid-cols-3 text-center align-middle font-bold bg-green-400 h-16 pt-4 text-lg text-dark-green-900 rounded-lg">
                <h1>Error Code</h1>
                <h1>Error Text</h1>
                <h1>User Action</h1>
              </div>
              <resolved />
            </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <div class="grid grid-cols-1 bg-green-400 rounded-lg">
              <div class="grid grid-cols-3 text-center align-middle font-bold bg-green-400 h-16 pt-4 text-lg text-dark-green-900 rounded-lg">
                <h1>Error Code</h1>
                <h1>Error Text</h1>
                <h1>User Action</h1>
              </div>
              <backlog />
            </div>
            </div>
            </div>
            </div>
          </div>
          
        </div>
        <undo class="w-2/6"/>
      </div>
    </div>
    </div>
    <notifications position="top left"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   
    data() {
    return {
      openTab: 1
    };
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    } 
}
};
</script>
<style scoped>
/* .my-notification {
  background: rgb(12, 189, 130);
} */
</style>

