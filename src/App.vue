<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left"><img class="c-logo" height="30" alt="Vue logo" src="./assets/logo.png" uk-img></div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a href="#">MENU</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active">
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
export default {
  name: 'App',
};
</script>
<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./assets/less/theme.less";

.uk-navbar-container {
  padding-left: 10px;
  padding-right: 10px;
}

.c-logo {
  height: @height-small-height/4;
}

</style>