<template>
    <div>
        <div id="singleLineEntry" class="grid grid-cols-3 text-center my-6" v-for="error in unresolved" :key="error.index" :error="getUnresolved">
                <p>{{error.code}}</p>
                <p>{{error.text}}</p>
                <button> <span class="bg-blue-600" @click="changeState(error.index,error.code,error.text)" v-bind="error.code"> Move to Resolved</span></button>
        </div> 
    </div>
</template>

<script>
    export default {
        name : 'unresolved'
    }
</script>

<style scoped>

</style>