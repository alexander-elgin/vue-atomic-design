<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app class="hidden-sm-and-up" disable-resize-watcher>
      <v-list nav>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          avatar
        >
          <v-list-tile-avatar>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content class="text-left">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar :app="absolute">
      <v-toolbar-side-icon @click="sidebar = !sidebar" class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-avatar tile>
            <img src="./taxi-icon.svg">
          </v-avatar>
        </router-link>
        <span class="hidden-sm-and-up">{{ pageTitle }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          flat
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { isAuthorized } from '@/utils/current-user';

export default {
  name: 'Nav',
  data() {
    let menuItems = [
      { title: 'Home', path: '/', icon: 'home' },
      { title: 'Activities', path: '/activities', icon: 'face' },
    ];

    if (isAuthorized()) {
      menuItems = menuItems.concat([
        { title: this.$t('taxics.shared.sign-out'), path: '/sign-out', icon: 'power_settings_new' },
      ]);
    } else {
      menuItems = menuItems.concat([
        { title: this.$t('taxics.shared.sign-in'), path: '/sign-in', icon: 'exit_to_app' },
      ]);
    }

    return { sidebar: false, menuItems };
  },
  computed: {
    pageTitle() {
      return this.$store.state.nav.pageTitle;
    },
  },
  props: {
    absolute: Boolean,
  },
};
</script>
