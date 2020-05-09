<template>
  <div class="box">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else
           v-for="currency in info"
           class="currency"
           :key="currency.id">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>

    </section>
  </div>
</template>
<script>
export default {
  name: 'axios',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$axios({
      method: 'get',
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json' // 接口地址
    })
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => { console.log(error, 'error', this.errored = true) }) // 失败的返回
      .finally(() => { this.loading = false })
  }
}
</script>
<style scoped>
.box {
  margin: auto;
  width: 300px;
  padding: 20px 40px;
  background: #2f242c;
  border-radius: 5px;
  color: #b3bfb8;
}
.lighten {
  color: white;
}
</style>
