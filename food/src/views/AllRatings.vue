<template>
  <div class="all-body">
    <header class="nav-header">
      <Header />
    </header>
    <main class="container">
      <div v-for="rating of ratings" :key="rating.id" class="content">
        <p>Tipo da avaliação: {{ rating.evaluation_type }}</p>
        <p>Grau da avaliação: {{ rating.evaluation_grade }}</p>
        <p>Comentário: {{ rating.commentary }}</p>
        <hr>
      </div>
      <SecundaryButton placeholder="Voltar" @action="goBack" />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SecundaryButton from "@/components/SecundaryButton.vue";

import api from "@/services/api.js";

export default {
  name: "AllRatings",
  components: {
    Header,
    Footer,
    SecundaryButton
  },
  data() {
    return {
      ratings: [],
    };
  },
  methods: {
    async getRatings() {
      try {
        const res = await api.get("/evaluation/");
        this.ratings = res.data.Avaliacao;
        console.log(this.ratings);
      } catch (e) {
        alert(e.response.data.message);
      }
    },
    goBack(){
      this.$router.go(-1)
    }
  },

  mounted() {
    this.getRatings();
  },
};
</script>

<style scoped>
.nav-header {
  background-color: #0da3e93b;
  height: 7%;
}
.container {
  display: flex;
  flex-direction: row;
  height: 88%;
  width: 100%;
}
.all-body {
            width: 100%;
            height: 100vh;

        }
        .content {
            background-color: #ffffff;
            width: 85%;
            padding: 15px;
            display: flex;
            flex-direction: column;
        }
</style>