<template>
  <div>
    <h3>Welcome</h3>
  </div>
</template>

<script>
export default {
  created() {
    const Url = window.sessionStorage.getItem('activePath')
    if (this.$route.path !== Url) {
      window.sessionStorage.setItem('activePath', this.$route.path)
      location.reload('./Home.vue')
    }
  }
}
</script>

<style></style>
