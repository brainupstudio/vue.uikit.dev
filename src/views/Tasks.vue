<template>
  <div>
    <h1>Tasks</h1>

    <table class="uk-table uk-table-striped">
      <thead>
      <tr>
        <th class="uk-table-expand">Tasks title</th>
        <th>Tasks action</th>
        <th>Tasks action</th>
        <th>Tasks action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in tasks" :key="task.message">
        <td>{{ task.message }}</td>
        <td><router-link :to="{ name: 'show', params: { id: task._id }}">Show</router-link></td>
        <td><router-link :to="{ name: 'edit', params: { id: task._id }}">Edit</router-link></td>
        <td @click.prevent="onDestroy(task._id)"><a :href="`/tasks/${task._id}`">Delete</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from '@/helpers/helpers';
export default {
  name: 'tasks',
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deletetask(id);
      this.$flashMessage.show({
        type: 'success',
        title: 'Task deleted',
        message: 'task deleted sucessfully!'
      });
      const newtasks = this.tasks.filter(task => task._id !== id);
      this.tasks = newtasks;
    }
  },
  async mounted() {
    this.tasks = await api.gettasks();
  }
};
</script>