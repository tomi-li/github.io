<template>
  <div class="container">
    <div class="intro">

      <div class="title">
        <h1 class="logo">XXXX</h1>
        <p class="slogan">Write better code, Gracefully</p>
      </div>

      <ul class="links">
        <li><a target="_blank" href="http://www.github.com/tomi-li"><img src="../assets/Github.svg"></a></li>
        <li><a target="_blank" href="http://www.jianshu.com/users/10a12265f914"><img src="../assets/Jian.svg"></a></li>
        <li><a target="_blank" href="https://medium.com/@tomili"><img src="../assets/Medium.svg"></a></li>
        <li><a target="_blank" href="https://500px.com/tomili"><img src="../assets/500px.svg"></a></li>
      </ul>

    </div>
    <div class="blog">
      <ul>
        <li v-for="post in posts">
          <post-list-item :post="post"></post-list-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      posts: [],
      test: ''
    }),
    created(){
      this.getPosts();
    },
    methods: {
      getPosts: function() {
        this.API.Post.list()
          .then(res => this.posts = res.posts);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/variables";

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5vh 3vw;
    height: 100%;
  }

  .intro, .blog {
    width: 50%;
    height: 100%;
    color: #ffffff;
  }

  .intro {
    background: url('../assets/bg.jpg') center center;
    background-size: cover;

    .title {
      margin: 60px 45px;

      .logo {
        font-size: 100px;
        font-weight: 200;
        letter-spacing: 2vw;
        margin: 0;
      }

      .slogan {
        display: inline-block;
        background: $grey;
        font-weight: 100;
        font-size: 26px;
        padding: .8vh 2vw;
        color: $primary-dark;
        letter-spacing: .4vw;
      }
    }
  }

</style>
