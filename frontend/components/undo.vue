<template>
    <div>
        <div class="grid grid-cols-1 mt-20 mb-1"></div>
       <div class="grid grid-cols-1 ml-8 mb-1 px-4 text-center font-bold bg-green-400 h-16 pt-4 text-lg text-dark-green-900 rounded-lg"> 
    Additional User Actions
    </div>
    <div class="grid grid-cols-1 mt-1 ml-8 h-56 px-4 bg-white rounded-lg">
        <button class="bg-green-400 rounded-lg h-16 mt-8 align-middle focus:outline-none hover:bg-green-900 hover:text-white text-dark-green-900 font-bold px-2 py-1 text-center" @click="undo()"> Undo Previous Action</button>
        <button class="bg-green-400 rounded-lg h-16 align-middle focus:outline-none hover:bg-green-900 hover:text-white text-dark-green-900 font-bold px-2 py-1 text-center" @click="undoAll()">Undo All Actions</button>
    </div>
    </div>
</template>

<script>
import undoAction from '../mixins/undoAction';
    export default {
        name: 'undo',
        mixins : [undoAction],
        data () {
            return {
                flag : false
            };
        },
        methods : {
            setFlag () {
                flag = !flag
            }
        }
    }
</script>

<style scoped>

</style>