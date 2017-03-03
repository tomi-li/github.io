<template>

  <div>
    <textarea id="editor"></textarea>
    <button @click="save"> save</button>
  </div>

</template>


<script>
  import SimpleMDE from 'simplemde';

  export default{
    mounted: function() {
      console.log(SimpleMDE);
      console.log(document.getElementById('editor'));
      this.editor = new SimpleMDE({
        element: document.getElementById('editor'),
        spellChecker: false
      })
    },
    methods: {
      save: function() {
        this.API.Post.save('test', this.editor.value())
          .then(res => {
            console.log(res);
          })

      }
    }
  }

</script>
