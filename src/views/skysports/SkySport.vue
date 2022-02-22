<template>
  <div class="px-6 pt-8">
    <div class="skysports flex items-center justify-center">
      <!--Header-->
      <div class="text-center">
        <h1>Sky page</h1>
        <img
          class="h-10 w-10"
          src="https://source.unsplash.com/random"
          alt=""
        />
        <p class="mt-4 max-w-2xl ml-32">
          C'est le premier réseau sportif du Royaume-Uni.
        </p>
      </div>
      <!--Content-->
      <hr class="border-gray-700" />
      <!--<DegreeTableLink
        v-for="degree in degreeItem"
        :key="degree.id"
        :degreeData="degree"
        class="text-sm text-gray-500"
      />-->
    </div>
  </div>
</template>

<!--<script>
import DegreeTableLink from "../../components/skysports/DegreeTableLink.vue";

export default {
  name: "SkySport",
  components: {
    DegreeTableLink,
  },
  computed: {
    degreeItem() {
      //Getters
      return this.$store.getters["skysports/displaySkysports"];
    },
  },
};
</script>-->