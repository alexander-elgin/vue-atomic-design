<template>
  <div>
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>{{ $t('taxics.shared.sign-in') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="username"
            v-validate="'required'"
            name="username"
            :error-messages="errors.collect('username')"
            :data-vv-as="$t('taxics.shared.phone-number')"
            :label="$t('taxics.shared.phone-number')"
            prepend-icon="person"
            type="text"
            @keydown.enter.prevent="submit"
            :disabled="submitting"
          ></v-text-field>

          <v-text-field
            v-model="password"
            v-validate="'required'"
            name="password"
            :error-messages="errors.collect('password')"
            :data-vv-as="$t('taxics.shared.password')"
            :label="$t('taxics.shared.password')"
            prepend-icon="lock"
            type="password"
            @keydown.enter.prevent="submit"
            :disabled="submitting"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="submit()" :disabled="submitting">
          <div v-if="submitting">
            <v-progress-circular indeterminate></v-progress-circular>
          </div>
          <div v-if="!submitting">
            {{ $t('taxics.shared.sign-in') }}
          </div>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      :value="this.errors.collect('').length > 0"
      :bottom="true"
      :center="true"
      :multi-line="false"
      :timeout="3000"
      :vertical="false"
      color="secondary"
    >
      <v-layout row align-center>
        <v-flex>
          <v-icon left dark>error</v-icon>
        </v-flex>
        <v-flex>
          {{ this.errors.collect('').join(' ') }}
        </v-flex>
      </v-layout>
    </v-snackbar>
  </div>
</template>

<script>
import { setData, setToken } from '@/utils/current-user';

export default {
  data() {
    return {
      submitting: false,
      username: undefined,
      password: undefined,
    };
  },
  methods: {
    isValid() {
      return Object.values(this.fields).reduce((valid, field) => valid && field.valid, true);
    },
    submit() {
      if (!this.submitting) {
        this.$validator.validateAll();

        if (this.isValid()) {
          this.submitting = true;
          const { username, password } = this;

          this.$http.post(`${process.env.VUE_APP_API_USERS}/signin`, {
            username,
            password,
          })
            .then(({ data }) => {
              if (data.errors === undefined) {
                const { data: account, token } = data.result;
                setData(account);
                setToken(token);
                this.$router.push({ name: 'home' });
              } else {
                data.errors.forEach(({ error, field }) => this.errors.add({
                  field,
                  msg: this.$t(`taxics.organisms.sign-in-form.errors.${error.split('_').join('-').toLowerCase()}`),
                }));
              }
            })
            .catch(() => {
              this.errors.add({
                field: '',
                msg: this.$t('taxics.shared.errors.connection-failure'),
              });
            })
            .finally(() => {
              this.submitting = false;
            });
        }
      }
    },
  },
};
</script>
