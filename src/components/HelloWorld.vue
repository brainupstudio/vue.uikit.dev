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

    <ul uk-accordion>
      <li class="uk-open">
        <a class="uk-accordion-title" href="#">Item 1</a>
        <div class="uk-accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">Item 2</a>
        <div class="uk-accordion-content">
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">Item 3</a>
        <div class="uk-accordion-content">
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
      </li>
    </ul>

    <div class="uk-card uk-card-default uk-width-1-2@m">
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-auto">
            <img class="uk-border-circle" width="40" height="40" src="../assets/images/avatar.jpg">
          </div>
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
            <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
      </div>
    </div>

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        <li>
          <img src="../assets/images/slider1.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider2.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider3.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider4.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider5.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider1.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider2.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider3.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider4.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>9</h1></div>
        </li>
        <li>
          <img src="../assets/images/slider5.jpg" alt="">
          <div class="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
      </ul>
      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
    </div>
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