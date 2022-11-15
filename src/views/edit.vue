<template>
  <form @submit.prevent="editdata" class="container">
    <div class="row justify-content-center">
      <div class="col-5">
        <div class="mb-3 text-start">
          <label class="form-label">กรอกชื่อ</label>
          <input
            v-model="todos.name"
            type="text"
            class="form-control"
            placeholder="กรอกชื่อ"
          />
        </div>
        <div class="mb-3 text-start">
          <label class="form-label">กรอกรายละเอียด</label>
          <textarea
            v-model="todos.title"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
        <div class="col-4 mb-3 text-start">
          <label class="form-label">อายุ</label>
          <input
            v-model="todos.age"
            type="number"
            class="form-control"
            placeholder="กรอกอายุ"
          />
        </div>
        <button class="btn btn-success">Success</button>
      </div>
    </div>
  </form>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      todos: {},
    };
  },

  mounted() {
    axios
      .get(`http://localhost:3001/todos/${this.$route.params.id}`)
      .then((res) => (this.todos = res.data));
  },
  methods:{
    editdata(){
       
      axios.put(`http://localhost:3001/todos/${this.$route.params.id}`, this.todos).then((res) => {
        this.$router.push("/dataviwe");
      });
    },
  }
};
</script>
  
  <style>
</style>