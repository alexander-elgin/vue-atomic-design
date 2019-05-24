<template>
  <div>
    <h3>{{ msg }}</h3>
    <p>{{ $t('hello') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
    color: #42b983;
  }
</style>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  },
  "ru": {
    "hello": "Привет, i18n в ОФК!"
  }
}
</i18n>
