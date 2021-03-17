<template>
  <div class="grid grid-cols-1 grid-rows-1 justify-center bg-gray-100">
    <div class="grid grid-cols-1 grid-rows-1 gap-16 min-w-0 max-w-full bg-gray-300 
    mt-16 mx-16 px-8 py-8 rounded text-white bg-pink-600 text-3xl font-bold uppercase"> 
    Error DashBoard
    </div>
    <div class="grid grid-cols-1 grid-rows-1 gap-16 min-w-0 max-w-full bg-gray-300 my-4 mx-16 px-8 py-8 rounded">
    <div class="flex flex-wrap min-w-full">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
            <i class="fas fa-space-shuttle text-base mr-1"></i> Resolved
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2}">
            <i class="fas fa-cog text-base mr-1"></i> Unresolved
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-pink-600 bg-white': openTab !== 3, 'text-white bg-pink-600': openTab === 3}">
            <i class="fas fa-briefcase text-base"></i> Backlog
          </a>
        </li>
      </ul>
      <div class="relative grid grid-cols-1 min-w-0  bg-white w-full mb-6 mr-1 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="grid grid-cols-3 max-h-3 shadow-lg rounded py-6 bg-pink-400 text-white">
                <div class="text-center font-bold">Error Code</div>
                <div class="text-center font-bold">Error Description</div>
                <div class="text-center font-bold">User Actions</div>
              </div>
              <div class="grid grid-cols-3 max-h-3 shadow-lg rounded py-6" v-for="error in resolved" :key="error.index">
                <div class="text-center">{{ error.code }} </div>
                <div class="text-center">{{ error.text }}</div>
                <div class="grid grid-cols-2 text-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded" @click="changeState(error.index,error.code,error.text)">Mark as unresolved</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded">Undo previous action</button>
                  </div>
              </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div class="grid grid-cols-3 max-h-3 shadow-lg rounded py-6 bg-pink-400 text-white">
                <div class="text-center font-bold">Error Code</div>
                <div class="text-center font-bold">Error Description</div>
                <div class="text-center font-bold">User Actions</div>
              </div>
              <div class="grid grid-cols-3 gap-4 max-h-3 shadow-lg rounded py-6" v-for="error in unresolved" :key="error.index">
                <div class="text-center">{{ error.code }} </div>
                <div class="text-center">{{ error.text }}</div>
                <div class="grid grid-cols-2 text-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded" @click="changeState(error.index,error.code,error.text)">Mark as Resolved</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white my-2 mx-4 rounded">Undo previous action</button>
                  </div>
              </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <div class="grid grid-cols-3 max-h-3 shadow-lg rounded py-6 bg-pink-400 text-white">
                <div class="text-center font-bold">Error Code</div>
                <div class="text-center font-bold">Error Description</div>
                <div class="text-center font-bold">User Actions</div>
              </div>
              <div class="grid grid-cols-3 gap-4 max-h-3 shadow-lg rounded py-6" v-for="error in backlog" :key="error.index">
                <div class="text-center">{{ error.code }} </div>
                <div class="text-center">{{ error.text }}</div>
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
    <!-- <div class="grid grid-cols-3 grid-rows-1">
    <div class="grid max-h-8 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16  overflow-auto">
      <h1 class="">Resolved:</h1> 
      <div class="grid max-h-3 overflow-auto" v-for="error in resolved" :key="error.index">`{{ error.code }}` - {{ error.text }}</div>
    </div>
    <div class="grid gap-4 max-h-8 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16  overflow-auto">
      <h1 class="">Unresolved:</h1> 
      <div class="grid gap-4 max-h-3" v-for="error in unresolved" :key="error.index">`{{ error.code }}` - {{ error.text }}</div>
    </div>
    <div class="grid bg-gray-400 m-16 max-h-1 overflow-auto">
      <h1 class="">Backlog:</h1> 
      <div class="grid gap-4 max-h-3" v-for="error in backlog" :key="error.index">`{{ error.code }}` - {{ error.text }}</div>
    </div>
    </div> -->
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
      resolved: [],
      unresolved: [],
      backlog: [],
      openTab: 1
    };
  },
  computed : () => {
    return {unresolved, resolved, backlog}
  },
  methods: {
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

