<template>
  <div class="container">
    <h1 class="my-4">หน้าแสดงข้อมูล</h1>
    <div class="row justify-content-evenly">
      <div class="col-8">
        <table class="table table-bordered table-hover table-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">title</th>
              <th scope="col">age</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <td>{{ todo.id + 1 }}</td>
              <td>{{ todo.name }}</td>
              <td>{{ todo.title }}</td>
              <td>{{ todo.age }}</td>

              <td>
                <router-link :to="{ name: 'edit', params: { id: todo.id } }"
                  ><button type="button" class="btn btn-primary">
                    แก้ไขข้อมูล
                  </button></router-link
                >
              </td>
              <td>
                <button @click="deleteid(todo.id)" type="button" class="btn btn-danger">ลบข้อมูล</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost:3001/todos")
      .then((res) => (this.todos = res.data));
  },
  methods:{
    deleteid(id){
      let check = this.todos.findIndex((c) => c.id === id)
      axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => { this.todos.splice(check, 1)
    })

  }  
    }
}

</script>


