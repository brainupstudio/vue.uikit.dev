<template>
  <div class="home">
    <UIKit msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UIKit from '@/components/UIKit.vue'

export default {
  name: 'Home',
  components: {
    UIKit
  }
}
</script>
