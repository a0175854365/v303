# Vue 3 test

## GitHub
https://github.com/a0175854365/v303

## Vue CLI
https://cli.vuejs.org/guide/creating-a-project.html#vue-create

### 생성, 실행
```shell
vue create v303
cd v303
npm run serve
```
## Bootstrap 적용

### 설치
```npm i bootstrap```

### main.js 수정, bootstrap 추가, css 추가
```javascript
import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// app
const app = createApp(App)
app.mount('#app')
app.use(VueAxios, axios)
```

### axios example
```vue
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
      let api = 'http://www.naver.com'
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
```

## sass, scss primary color 변경

```scss 
$primary: green;
$danger: #ff4136;
$body-bg: #000; 
$body-color: #111;

// Required
@import "../../../node_modules/bootstrap/scss/bootstrap";

// 이하 custom css

```

——
## vue-axios 설치 
```npm install vue-axios```

## vue-chartjs 설치 
```npm i vue-chartjs chart.js```



