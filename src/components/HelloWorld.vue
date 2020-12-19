<template>
  <div class="hello">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active"><a href="#">Active</a></li>
          <li>
            <a href="#">Parent</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Item</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>