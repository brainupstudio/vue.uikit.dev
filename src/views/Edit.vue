<template>
  <div>
    <h1>Edit task</h1>
    <task-form @createOrUpdate="createOrUpdate" :task=this.task></task-form>
  </div>
</template>

<script>
import taskForm from '@/components/TaskForm.vue';
import { api } from '@/helpers/helpers';

export default {
  name: 'edit',
  components: {
    'task-form': taskForm
  },
  data: function() {
    return {
      task: {}
    };
  },
  methods: {
    createOrUpdate: async function(task) {
      await api.updatetask(task);
      // this.$flashMessage.show({
      //   type: 'error',
      //   title: 'Error Message Title',
      //   message: 'task updated sucessfully!'
      // });
      await this.$router.push(`/tasks/${task._id}`);
    }
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  }
};
</script>