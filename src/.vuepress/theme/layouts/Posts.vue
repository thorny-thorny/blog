<template>
  <ParentLayout>
    <template slot="page-top">
      <ContentContainer>
        <h1 v-if="$currentTag">Posts with tag "{{ $currentTag.key }}"</h1>
        <PostsList :posts="$pagination.pages" :tags="$tag.map" />
      </ContentContainer>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import ContentContainer from '@theme/components/ContentContainer.vue'
import PostsList from '@theme/components/PostsList.vue'

export default {
  components: {
    ParentLayout,
    ContentContainer,
    PostsList,
  }
}
</script>
