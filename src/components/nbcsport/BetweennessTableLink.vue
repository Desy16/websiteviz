<template>
  <div class="p-6 bg-gray-900 rounded-lg">
    <div class="flex justify-between pb-4">
      <div :key="depth" class="flex flex-col gap-y-6 pt-6 pr-6">
        <button
          :style="index == 1 ? null : { 'background-color': ' #212832' }"
          class="relative flex space-x-2 items-center"
          @click="changeDepth(0)"
        >
          <ArrowNarrowDownIcon class="h-4 w-4 text-white" />
          <span>depth 2</span>
        </button>
        <button
          :style="index == 0 ? null : { 'background-color': ' #212832' }"
          class="relative flex space-x-2 items-center"
          @click="changeDepth(1)"
        >
          <ArrowNarrowDownIcon class="h-4 w-4 text-white" />
          <span>depth 2</span>
        </button>
      </div>
      <table class="w-full">
        <thead>
          <tr class="text-sm font-semibold text-white">
            <td class="py-8 border-b border-gray-700">Lien</td>
            <td class="py-8 border-b border-gray-700">Valeur</td>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(data, index) in betweennessData[index][depth]"
            :key="index"
            class="text-sm text-white"
          >
            <td class="py-4">
              <a :href="Object.keys(data)[0]" target="_blank">
                {{ Object.keys(data)[0] }}
              </a>
            </td>
            <td class="py-4">{{ convertScore(data[Object.keys(data)[0]]) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ArrowNarrowDownIcon } from "@heroicons/vue/outline";

export default {
  props: ["betweennessData"],
  components: {
    ArrowNarrowDownIcon,
  },
  data() {
    return {
      index: 0, // O vaut depth2
      depth: "depth2",
    };
  },

  methods: {
    convertScore(score) {
      return parseFloat(score).toFixed(5);
    },

    changeDepth(index) {
      this.index = index;
      if (this.index === 0) {
        this.depth = "depth2";
      } else {
        this.depth = "depth3";
      }
    },
  },
  computed: {},
};
</script>
