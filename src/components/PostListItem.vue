<template>
  <div>
    <router-link :to="{name: 'detail', params: { id: post.id }}">{{post.title}}</router-link>
    <div v-html="htmlContent"></div>
  </div>
</template>

<script>
  import { markdown } from 'markdown';

  export default {
    props: ['post'],
    computed: {
      htmlContent: function() {
        if (!this.post.content) return;
        return markdown.toHTML(decodeURIComponent(this.post.content));
      }
    }
  }
</script>

