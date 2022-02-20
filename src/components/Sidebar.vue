<template>
  <div class="fixed flex min-h-screen">
    <!--Sidebar-->
    <div
      class="
        bg-cyan-600
        text-cyan-100
        w-64
        space-y-6
        px-2
        py-4
        absolute
        inset-y-0
        left-0
        md:relative md:-translate-x-0
        transform-translate-x-full
        transition
        duration-200
        ease-in-out
      "
    >
      <router-link to="/" class="flex items-center space-x-2 px-4">
        <CubeTransparentIcon class="h-10 w-10 text-white" />
        <span class="text-2xl font-extrabold text-white">websiteviz</span>
      </router-link>

      <nav>
        <router-link
          to="/"
          class="
            group
            flex
            items-center
            px-4
            py-3
            hover:bg-cyan-700
            rounded
            hover:text-cyan-300
            transition
            duration-200
          "
        >
          <HomeIcon class="mr-2 h-5 w-5 text-white group-hover:text-cyan-300" />
          Home
        </router-link>

        <router-link
          to="/nbcsport"
          class="
            group
            flex
            items-center
            px-4
            py-3
            hover:bg-cyan-700
            rounded
            hover:text-cyan-300
            transition
            duration-200
          "
        >
          <DesktopComputerIcon class="mr-2 h-5 w-5 text-white" />
          NBC Sport
          <button class="absolute right-8 p-1 flex items-center">
            <ChevronDownIcon class="mr-2 h-5 w-5 text-white" />
          </button>
        </router-link>

        <div class="pt-2 pl-4">
          <ul class="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
            <li>
              <a
                href="inline-block w-full px-4 py-2 text-xs rounded hover:text-white hover:text-white"
                >Degree</a
              >
            </li>
            <li>
              <a
                href="inline-block w-full px-4 py-2 text-xs rounded hover:text-white hover:text-white"
                >PageRank</a
              >
            </li>
            <li>
              <a
                href="inline-block w-full px-4 py-2 text-xs rounded hover:text-white hover:text-white"
                >Closeness</a
              >
            </li>
            <li>
              <a
                href="inline-block w-full px-4 py-2 text-xs rounded hover:text-white hover:text-white"
                >Betweenness</a
              >
            </li>
          </ul>
        </div>

        <router-link
          to="/bbcsport"
          class="
            group
            flex
            items-center
            px-4
            py-3
            hover:bg-cyan-700
            rounded
            hover:text-cyan-300
            transition
            duration-200
          "
        >
          <DesktopComputerIcon class="mr-2 h-5 w-5 text-white" />
          BBC Sport
        </router-link>

        <router-link
          to="/skysport"
          class="
            group
            flex
            items-center
            px-4
            py-3
            hover:bg-cyan-700
            rounded
            hover:text-cyan-300
            transition
            duration-200
          "
        >
          <DesktopComputerIcon class="mr-2 h-5 w-5 text-white" />
          Sky Sport
        </router-link>

        <router-link
          to="/about"
          class="
            group
            flex
            items-center
            px-4
            py-3
            hover:bg-cyan-700
            rounded
            hover:text-cyan-300
            transition
            duration-200
          "
        >
          <QuestionMarkCircleIcon class="mr-2 h-5 w-5 text-white" />
          About us
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  DesktopComputerIcon,
  CubeTransparentIcon,
  MenuAlt1Icon,
  ChevronDownIcon,
} from "@heroicons/vue/outline";

import { ref } from "vue";

export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
  components: {
    HomeIcon,
    QuestionMarkCircleIcon,
    DesktopComputerIcon,
    CubeTransparentIcon,
    MenuAlt1Icon,
    ChevronDownIcon,
  },

  setup() {
    const showSidebar = ref(false);

    return {
      showSidebar,
    };
  },
};
</script>