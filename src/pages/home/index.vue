<template>
  <v-card max-width="640" min-width="480" class="mx-auto">
    <v-toolbar color="primary" flat>
      <v-toolbar-title>{{ $t('lanck.pages.home.exchangeRates') }}</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-container>
        <v-row no-gutters>
          <v-col cols="5">
            <v-combobox
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
          <v-col cols="2"></v-col>
          <v-col cols="5">
            <v-menu
              v-model="datePickerShown"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  clearable
                  @click:clear="selectedDate = undefined"
                  :value="selectedDate | moment('DD.MM.YYYY')"
                  :label="$t('lanck.pages.home.date')"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                color="primary"
                first-day-of-week="1"
                v-model="selectedDate"
                @input="datePickerShown = false"
              ></v-date-picker>
            </v-menu>
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
          sortable: false,
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
      datePickerShown: false,
      selectedCurrencies: [],
      selectedDate: undefined,
    };
  },
  methods: {
    getCurrencyCode(currencyId) {
      return this.currencies.find(({ id }) => id === currencyId).code;
    },
    getRates() {
      let filteredRates = this.rates
        .filter(({ currency }) => this.selectedCurrencies.length === 0
          || this.selectedCurrencies.map(({ id }) => id).includes(currency));

      if (this.selectedDate === undefined) {
        return filteredRates;
      }

      filteredRates = filteredRates.filter(({ date }) => this.selectedDate >= date);

      const groupedRates = this.currencies.reduce((groupedValues, { id }) => Object.assign({
        [id]: filteredRates.filter(({ currency }) => id === currency),
      }, groupedValues), {});

      Object.values(groupedRates).forEach(currencyRates => currencyRates
        // eslint-disable-next-line no-confusing-arrow
        .sort(({ date: dateA }, { date: dateB }) => dateA > dateB ? -1 : 1));

      return Object.values(groupedRates).map(currencyRates => currencyRates[0])
        .filter(rate => rate !== undefined);
    },
  },
};
</script>
