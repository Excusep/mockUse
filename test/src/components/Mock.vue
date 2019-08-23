<template>
 <div class="hello">
   <p>学习mock</p>
   <hr>
   <button @click="getData()">get获取数据</button>
   <button @click="postData()">post传数据</button>
   <button @click="sendDataId()">传id</button>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    async getData() {
      const { data : res} = await this.$http.get('/api/getList')
      console.log({res})
    },
    async postData() {
      const { data : res} = await this.$http.post('/api/postList',{name:'sds',age:18,hobby:'sdsd'})
      console.log({res})
    },
    async sendDataId(id) {
      id = Math.random()*100+1
      const { data : res} = await this.$http.get(`/api/sendId/${id}`)
      console.log(res)
    }
  }
}
</script>

<style scoped>
  .hello {
    padding: 20px;
  }
  hr {
    margin: 20px 0;
  }
  button {
    margin-left: 10px;
    padding: 4px 10px;
    background: yellowgreen;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 3px;
  }
</style>
