<template>
    <div>
        {{open_id}}
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.open_id = this.$root.$mp.query.open_id;
    console.log(open_id);
  }
};
</script>

<style lang="scss" scoped>
</style>