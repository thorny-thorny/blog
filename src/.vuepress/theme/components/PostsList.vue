<template>
  <div>
    <div v-for="(post, index) in posts">
      <hr v-if="index > 0" />
      <h1>
        <RouterLink :to="post.path">{{ post.title }}</RouterLink>
      </h1>
      <PostInfo :post="post" :tags="tags" />
      <p v-html="post.excerpt" />
      <p>
        <RouterLink :to="post.path">Continue reading</RouterLink>
      </p>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import PostInfo from '@theme/components/PostInfo.vue'

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    tags: {
      type: Object,
      required: true,
    },
  },
  components: {
    Pagination,
    PostInfo,
  },
}
</script>
