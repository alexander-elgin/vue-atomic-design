<template>
  <v-card max-width="480" min-width="480" class="mx-auto">
    <v-toolbar color="primary" flat>
      <v-toolbar-title>{{ $t('lanck.pages.home.exchangeRates') }}</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-container>
        <v-row no-gutters>
          <v-col cols="6">
            <v-combobox
              chips
              clearable
              item-text="code"
              item-value="id"
              :items="currencies"
              :label="$t('lanck.pages.home.currency')"
              multiple
              prepend-icon="attach_money"
              return-object
              v-model="selectedCurrencies"
            ></v-combobox>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-data-table :headers="columns" :items="getRates()">
              <template v-slot:item.currency="{ item }">
                {{ getCurrencyCode(item.currency) }}
              </template>
              <template v-slot:item.date="{ item }">
                {{ item.date | moment("DD.MM.YYYY") }}
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import currencies from './currencies.json';
import rates from './rates.json';

export default {
  computed: {
    columns() {
      return [
        {
          text: this.$t('lanck.pages.home.currency'),
          value: 'currency',
        },
        {
          text: this.$t('lanck.pages.home.rate'),
          value: 'rate',
        },
        {
          text: this.$t('lanck.pages.home.date'),
          value: 'date',
        },
      ];
    },
    currencies() {
      return currencies;
    },
    rates() {
      return rates;
    },
  },
  data() {
    return {
      selectedCurrencies: [],
    };
  },
  methods: {
    getCurrencyCode(currencyId) {
      return this.currencies.find(({ id }) => id === currencyId).code;
    },
    getRates() {
      return this.rates.filter(({ currency }) => this.selectedCurrencies.length === 0
        || this.selectedCurrencies.map(({ id }) => id).includes(currency));
    },
  },
};
</script>
