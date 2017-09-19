<template>
  <div id="app">
    <at-menu mode="horizontal" class="menu" active-name="main-page" @on-select="handleNavigation">
      <at-menu-item class="main-page" name="main-page"><i class="icon icon-home"></i>Main</at-menu-item>
      <at-menu-item class="about-page" name="about-page"><i class="icon icon-layers"></i>About</at-menu-item>
      <at-menu-item class="contact-page" name="contact-page"><i class="icon icon-settings"></i>Contact</at-menu-item>
    </at-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleNavigation: function (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style>

</style>
