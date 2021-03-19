<template class="bg-gray-200">
  <div class="bg-gray-200">
    <nuxt />
  </div>
</template>
<script>
import appHeader from '../components/appHeader';
import unresolved from '../components/unresolved';
import resolved from '../components/resolved';
import backlog from '../components/backlog';
import undo from '../components/undo';


// Vue.mixin(undoAction);

export default {
  components : {
    appHeader,
    unresolved,
    resolved,
    backlog,
    undo
  }
}
</script>

