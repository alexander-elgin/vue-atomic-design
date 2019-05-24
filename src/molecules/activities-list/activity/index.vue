<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <v-checkbox color="cyan" v-model="activity.done">
      </v-checkbox>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title v-html="activity.title" v-bind:class = "[activity.done ? 'done' : '']">
      </v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-icon color="cyan" @click="dialog = true">delete</v-icon>
    </v-list-tile-action>

    <v-dialog v-model="dialog" max-width="240">
      <v-card>
        <v-card-title>Confirm Removal</v-card-title>

        <v-card-text>Remove?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="cyan"
            flat="flat"
            @click="dialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="cyan"
            flat="flat"
            @click="remove(activity); dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list-tile>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Activity',
  props: ['activity'],
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    title() {
      return this.activity.title;
    },
  },
  methods: {
    ...mapActions('activity', [
      'toggle',
      'remove',
    ]),
  },
};
</script>

<style scoped lang="scss">
.done {
  text-decoration: line-through;
}
</style>
