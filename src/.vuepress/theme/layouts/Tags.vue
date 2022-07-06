<template>
  <ParentLayout>
    <template slot="page-top">
      <ContentContainer>
        <h1>All tags</h1>
        <p>
          <Tag v-for="tag in $tag.list" :text="`${tag.name} (${tag.pages.length})`" :to="tag.path" />
        </p>
      </ContentContainer>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import ContentContainer from '@theme/components/ContentContainer.vue'
import Tag from '@theme/components/Tag.vue'

export default {
  components: {
    ParentLayout,
    ContentContainer,
    Tag,
  }
}
</script>
