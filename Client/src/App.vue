<template>
  <div
    id="app"
    class="container"
  >
    

    <Head></Head>
    <router-view></router-view>
    <Footer></Footer>
    <!-- <Head></Head> -->
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Footer from "./components/Footer.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    Head,
    Footer,
    // HelloWorld
  },
};
</script>

<style>
.my-border {
  border: 1px dashed black;
  padding: 0 10px;
}

.container {
  max-width: 400px;
  margin: 20px auto;
}



</style>
