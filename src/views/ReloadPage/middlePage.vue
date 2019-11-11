<template>
  <div></div>
</template>
<script>
export default {
  name: 'MiddlePage',
  beforeRouteEnter(to, from, next) {
    setTimeout(() => {      
      next(vm => {
        vm.$router.replace(from.path);
      })
    }, 1000);
  },
}
</script>
