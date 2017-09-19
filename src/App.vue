<template>
  <div id="app">
    <at-menu mode="horizontal" active-Name="1">
      <at-menu-item name="1"><i class="icon icon-home"></i>Navigation One</at-menu-item>
      <at-menu-item name="2" disabled><i class="icon icon-layers"></i>Navigation Two</at-menu-item>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three - Submenu</template>
        <at-menu-item-group title="Group One">
          <at-menu-item name="3-1">Submenu One</at-menu-item>
          <at-menu-item name="3-2" disabled>Submenu Two</at-menu-item>
        </at-menu-item-group>
        <at-menu-item-group title="Group Two">
          <at-menu-item name="3-3">Submenu Three</at-menu-item>
          <at-menu-item name="3-4">Submenu Four</at-menu-item>
        </at-menu-item-group>
      </at-submenu>
      <at-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</at-menu-item>
    </at-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
