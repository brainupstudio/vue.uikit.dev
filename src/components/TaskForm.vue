<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>task
      </div>
      <input type="text" placeholder="Enter task..." v-model="task.message" />
      <div>ID {{task._id}}</div>
      <div>MESSAGE {{task.message}}</div>
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
// import { api } from '@/helpers/helpers';

export default {
  name: 'task-form',
  data() {
    return {
      errorsPresent: false,
      task: {}
    };
  },
  // async created() {
  //   this.task = await api.gettask(this.$route.params.id);
  // },
  methods: {
    onSubmit: function() {
      if (this.task.message === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.task);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>