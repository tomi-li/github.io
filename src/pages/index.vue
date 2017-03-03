<template>
  <div id="app">
    <ul>
      <li v-for="post in posts">
        <post-list-item :post="post"></post-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      posts: []
    }),
    created(){
      this.getPosts();
    },
    methods: {
      getPosts: function() {
        this.API.Post.list()
          .then(res => this.posts = res.posts);
      },
    }
  }
</script>

<style lang="scss">
</style>
