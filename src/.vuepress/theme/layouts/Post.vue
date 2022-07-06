<template>
  <ParentLayout>
    <template slot="page-top">
      <ContentContainer>
        <h1>{{ $frontmatter.title }}</h1>
        <PostInfo :post="$page" :tags="$tag.map" />
      </ContentContainer>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import ContentContainer from '@theme/components/ContentContainer.vue'
import PostInfo from '@theme/components/PostInfo.vue'

export default {
  components: {
    ParentLayout,
    ContentContainer,
    PostInfo,
  }
}
</script>

<style lang="stylus">
.custom-content
  margin-bottom: -7rem !important
</style>
