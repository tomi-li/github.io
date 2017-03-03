<template>
  <div>
    <post-detail :id="$route.params.id"></post-detail>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
    created: function() {
      console.log(this.$route.params);
    }
  }
</script>
