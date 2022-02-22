<template>
  <div class="px-6 pt-8">
    <div class="degree flex items-center justify-center">
      <!--Header-->
      <div class="text-center">
        <h1>NBC page</h1>
        <img class="h-10 w-10" src="../../assets/logos/nbcsports.png" alt="" />
        <p class="mt-4 max-w-2xl ml-32">
          C'est la filiale de la société de télévision NBC spécialisée dans la
          retransmission d'émissions sportives aux États-Unis.
        </p>
      </div>
      <!--Content-->
      <hr class="border-gray-700" />
      <DegreeTableLink :degreeData="degreeItem" class="text-sm text-gray-500" />
    </div>
  </div>
</template>

<script>
import DegreeTableLink from "../../components/nbcsport/DegreeTableLink.vue";

export default {
  name: "Degree",
  components: {
    DegreeTableLink,
  },
  computed: {
    degreeItem() {
      //Getters
      console.log(this.$store.getters["nbcsport/displayNbcsportDegree"]);
      return this.$store.getters["nbcsport/displayNbcsportDegree"];
    },
  },
};
</script>