<template>
<v-progress-circular 
indeterminate 
:width="7"
:size="70" 
class="primary--text"
v-if="loading"></v-progress-circular>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
