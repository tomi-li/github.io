<template>
  <div>
    <h3>{{ post.id }}</h3>
    <p>{{ post.title }}</p>
    <div v-html="htmlContent"></div>
  </div>
</template>

<script>
  import { markdown } from 'markdown';

  export default {
    props: ['id'],
    data: () => ({
      post: {}
    }),
    computed: {
      htmlContent: function() {
        if (!this.post.content) return;

        return markdown.toHTML(decodeURIComponent(this.post.content));
      }
    },
    created: function() {
      this.API.Post.detail(this.id)
        .then(res => {
          this.post = res.post;
        });
    }
  }
</script>

