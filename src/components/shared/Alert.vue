<template>
<v-alert error dismissible v-model="alert">
  This is a success alert that is closable.
</v-alert>
</template>

<script>
export default {
  methods: {
    onClose () {
      this.$emit('dismissed')
    }
  }
}
</script>