<template>
  <div>
    <button @click="getList">Get list</button>
  </div>
</template>
<script>
export default {
  created() {
    console.log('created');
  },
  methods: {
    getList() {
      let api = 'https://qa-api.doctorvice.co.kr/server/time'
      console.log(api);
      try {
        this.axios.get(api).then((response) => {
          console.log(response.data)
        })
        // or
        this.$http.get(api).then((response) => {
          console.log(response.data)
        })
      } catch (err) {
        console.log('catch');
      }
    }
  }
};
</script>