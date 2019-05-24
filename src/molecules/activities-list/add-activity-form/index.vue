<template>
  <v-form ref="form">
    <v-text-field
                  v-model="newActivityTitle"
                  v-validate="'alpha_spaces|min:3|required'"
                  :error-messages="errors.collect('newActivityTitle')"
                  name="newActivityTitle"
                  data-vv-as="Activity"
                  color="cyan"
                  label="What to do?"
                  @keydown.enter.prevent="add"
                  :rules="[rules.unique]"
                  ref="field"
                  append-outer-icon="send"
                  @click:append-outer="add"
    />
  </v-form>
</template>

<script>

export default {
  name: 'AddActivityField',
  data() {
    return {
      newActivityTitle: '',
      isValid: {
        unique: value => this.$store.state.activity.activities.filter(
          activity => activity.title === value,
        ).length === 0,
      },
      rules: {
        unique: value => this.isValid.unique((value || '').trim()) || 'The activity is already in the list',
      },
    };
  },
  methods: {
    add() {
      this.$validator.validateAll();

      if (this.isVeeValidationPassed() && this.isValid.unique(this.newActivityTitle)) {
        this.$store.dispatch('activity/add', this.newActivityTitle.trim());
        this.newActivityTitle = '';
        this.$refs.field.blur();
        this.$validator.reset();
        this.$refs.form.reset();
      }
    },
    isVeeValidationPassed() {
      return Object.values(this.fields).reduce((valid, field) => valid && field.valid, true);
    },
  },
};
</script>
