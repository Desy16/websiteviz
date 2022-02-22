<template>
  <div class="p-6 bg-gray-900 rounded-lg">
    <div class="flex items-center justify-between pb-4">
      <div :key="depth">
        <button
          :style="index == 1 ? null : { 'background-color': ' #212832' }"
          class="bt outline-none"
          @click="changeDepth(0)"
        >
          profondeur 2
        </button>
        <button
          :style="index == 0 ? null : { 'background-color': ' #212832' }"
          class="bt outline-none"
          @click="changeDepth(1)"
        >
          profondeur 3
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
            v-for="(data, index) in closenessData[index][depth]"
            :key="index"
            class="text-sm text-white"
          >
            <td>
              <a :href="Object.keys(data)[0]" target="_blank">
                {{ Object.keys(data)[0] }}
              </a>
            </td>
            <td>{{ data[Object.keys(data)[0]] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["closenessData"],

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
