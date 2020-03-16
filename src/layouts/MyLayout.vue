<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Fika Trial Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item to="custom">
         <q-item-side icon="school" />
          <q-item-main label="Table" sublabel="Custom Table" />
        </q-item>
        <q-item to="custom2">
         <q-item-side icon="school" />
          <q-item-main label="Table Custom 2" sublabel="Custom Table" />
        </q-item>
        <q-item to="slider">
         <q-item-side icon="school" />
          <q-item-main label="Slider" sublabel="Custom Slider" />
        </q-item>
        <q-item to="range">
         <q-item-side icon="school" />
          <q-item-main label="Range" sublabel="Custom Range" />
        </q-item>
         <q-item to="timepicker">
         <q-item-side icon="school" />
          <q-item-main label="Time Picker" sublabel="Time Picker" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
