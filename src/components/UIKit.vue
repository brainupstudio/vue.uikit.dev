<template>
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push; min-height: 567; max-height: 800">

    <ul class="uk-slideshow-items">
      <li>
        <img src="../assets/images/photo.jpg" alt="" uk-cover>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
          <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/dark.jpg" alt="" uk-cover>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="x: 100,-100">Heading</h2>
          <p uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/light.jpg" alt="" uk-cover>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Heading</h2>
          <p uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Lorem ipsum dolor sit amet.</p>
        </div>
      </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

  </div>

  <div class="uk-containe uk-padding">
    <div class="uk-child-width-1-2@m" uk-grid>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src="../assets/images/light.jpg" alt="">
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-body">
            <h3 class="uk-card-title">Media Bottom</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div class="uk-card-media-bottom">
            <img src="../assets/images/light.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'UiKit',
    props: {
      msg: String,
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>