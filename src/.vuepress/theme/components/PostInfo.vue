<template>
  <p class="container">
    <span class="date">{{ post.frontmatter.date.split('T')[0] }}</span>
    <Tag v-for="tag in post.frontmatter.tags" :text="tag" :to="tags[tag].path" />
  </p>
</template>

<script>
import Tag from '@theme/components/Tag.vue'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    tags: {
      type: Object,
      required: true,
    },
  },
  components: {
    Tag,
  },
}
</script>

<style lang="stylus" scoped>
.container
  line-height: 1.4

.date
  vertical-align: top
  font-size: 12px
  line-height: 18px
</style>
