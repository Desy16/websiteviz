<template>
  <div class="px-6 pt-8">
    <main class="pagerank flex flex-col flex-1 gap-6 p-4">
      <!--Header-->
      <header class="text-center">
        <a href="https://www.nbcsports.com/" target="_blank">
          <img
            class="ml-60 h-50 w-50"
            src="../../assets/logos/nbcsports.png"
            alt=""
          />
        </a>
        <p class="mt-4 ml-60">
          It is the subsidiary of the television company NBC specializing in
          <br />
          the retransmission of sports programs in the United States.
        </p>
      </header>
      <!--Content-->
      <hr class="border-gray-700" />
    </main>
    <div class="flex flex-col flex-1 gap-3 p-2">
      <PagerankTableLink
        :pagerankData="pagerankItem"
        class="text-sm text-gray-500 ml-60"
      />
    </div>
  </div>
</template>

<script>
import PagerankTableLink from "../../components/nbcsport/PagerankTableLink.vue";

export default {
  name: "Pagerank",
  components: {
    PagerankTableLink,
  },
  computed: {
    pagerankItem() {
      //Getters
      console.log(this.$store.getters["nbcsport/displayNbcsportPagerank"]);
      return this.$store.getters["nbcsport/displayNbcsportPagerank"];
    },
  },
};
</script>