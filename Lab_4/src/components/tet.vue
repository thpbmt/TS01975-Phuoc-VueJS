<template lang="">
  <div>
    <button v-on:click="changeAhihi" v-html="title"> </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title : "hide"
    };
  },

  methods: {
    changeAhihi() {
      console.log(this.title);

      if (this.title === "hide") {
        this.title = "show";
        return;
      }

      this.title = "hide";
    }
  }
}
</script>

<style lang="">
</style>