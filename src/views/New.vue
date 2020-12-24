<template>
  <div>
    <h1>New task</h1>
    <task-form @createOrUpdate="createOrUpdate"></task-form>
  </div>
</template>

<script>
import taskForm from '@/components/TaskForm.vue';
import { api } from '@/helpers/helpers';
export default {
  name: 'new-task',
  components: {
    'task-form': taskForm
  },
  methods: {
    createOrUpdate: async function(task) {
      const res = api.createtask(task);
      this.$flashMessage.show({
        type: 'success',
        title: 'Task created',
        message: 'task created sucessfully!'
      });
      await this.$router.push(`/tasks/${res._id}`);
    }
  }
};
</script>