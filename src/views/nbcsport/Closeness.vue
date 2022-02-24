<template>
  <div class="px-6 pt-8">
    <div class="closeness flex flex-col flex-1 gap-6 p-4">
      <!--Header-->
      <div class="text-center">
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
      </div>
      <!--Content-->
      <hr class="border-gray-700" />
      <div class="flex flex-col flex-1 gap-3 p-2">
        <ClosenessTableLink
          :closenessData="closenessItem"
          class="text-sm text-gray-500 ml-60"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ClosenessTableLink from "../../components/nbcsport/ClosenessTableLink.vue";

export default {
  name: "Closeness",
  components: {
    ClosenessTableLink,
  },
  computed: {
    closenessItem() {
      //Getters
      console.log(this.$store.getters["nbcsport/displayNbcsportCloseness"]);
      return this.$store.getters["nbcsport/displayNbcsportCloseness"];
    },
  },
};
</script>