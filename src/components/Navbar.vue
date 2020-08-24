<template>
  <div class="navbar">
    <!-- Navigation Start-->
    <div class="navbar-fixed">
      <nav class="nav">
        <div class="nav-wrapper container links">
          <img class="logo left" id="logo-img" src="" alt="" />
          <a class="logo left">Skills In</a>
          <ul class="right hide-on-small-only">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="{name:'/about'}">About</router-link></li>
            <li><router-link to="">Contact</router-link></li>
          </ul>
          <a
            class="btn-floating btn-small halfway-fab waves-effect waves-light teal"
          >
            <i class="material-icons">add</i>
          </a>
        </div>
      </nav>
    </div>
    <!-- Navigation End-->
    <!--    Side Menu Start-->
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background"></div>
          <a href="#user"><img class="circle" src=""/></a>
          <a><span class="white-text name">Skills In</span></a>
          <a href="#email"
            ><span class="white-text email">skillsin@gmail.com</span></a
          >
        </div>
      </li>
      <li><a class="subheader">SVPS</a></li>
      <li>
        <a href="" class="grey lighten-3"
          ><i class="material-icons right">folder</i>E-Learning</a
        >
      </li>
      <li>
        <a class="grey lighten-3"
          ><i class="material-icons right">comment</i>Messages</a
        >
      </li>
      <li><a class="subheader">More</a></li>
      <li>
        <a href="" class="grey lighten-3"
          ><i class="material-icons right">brush</i>Sketch</a
        >
      </li>
    </ul>
    <!--    Side Menu End-->
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>
<style>
.navbar .navbar-fixed nav {
  background-color: #757575;
}
</style>
