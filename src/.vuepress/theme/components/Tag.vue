<template>
  <Badge type="tag">
    <RouterLink :to="to">· {{ text }}</RouterLink>
  </Badge>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus">
.badge.tag a
  color white
</style>
