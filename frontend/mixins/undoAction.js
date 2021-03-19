const EMPTY_STATE = 'emptyState';

export default {
    data() {
      return {
        done: []
      }
    },
    created() {
      // var exclusionArray = ['SET_Resolved','SET_Unresolved','SET_Backlog']
      this.$store.subscribe(mutation => {
        if (mutation.type !== EMPTY_STATE) {
            this.done.push(mutation);
          }
      })
    },
    methods : {
        undo() {
          this.done.pop();
          this.done.forEach(mutation => {
            this.$store.commit(`${mutation.type}`, mutation.payload);
            this.done.pop();
            
          });
        },
        undoAll() {
          var count = 0
          
          this.done.forEach(mutation => {
            count++;
            if (count < 9) {
            this.$store.commit(`${mutation.type}`, mutation.payload);
            this.done.pop();
            }
            
            
          });
      }
  }
}