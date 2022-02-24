<template>
  <div class="fixed h-screen">
    <!--Sidebar fixed flex min-h-screen-->
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

      <nav class="px-4 space-y-2">
        <!--Home-->
        <router-link
          to="/"
          class="
            relative
            group
            flex
            items-center
            px-4
            py-3
            hover:bg-cyan-700
            space-x-2
            rounded-md
            p-2
            cursor-pointer
            hover:text-cyan-300
            transition
            duration-200
          "
        >
          <div class="relative flex space-x-2 items-center">
            <HomeIcon
              class="mr-2 h-5 w-5 text-white group-hover:text-cyan-300"
            />
            <h1>Home</h1>
          </div>
        </router-link>

        <!--NBC Sport-->
        <div x-data="dropdown" class="relative">
          <!-- Dropdown head -->
          <div
            @click="toggle('nbcsport')"
            class="
              relative
              flex
              justify-between
              px-4
              py-3
              hover:bg-cyan-700
              space-x-2
              rounded-md
              p-2
              cursor-pointer
              hover:text-cyan-300
              transition
              duration-200
            "
          >
            <div class="relative flex space-x-2 items-center">
              <DesktopComputerIcon class="h-5 w-5 text-white" />
              <h1>NBC Sport</h1>
            </div>

            <button class="absolute right-8 p-1" @click="open = true">
              <ChevronDownIcon class="h-4 w-4 text-white" />
            </button>
          </div>

          <!-- Dropdown content 
          <div class="text-gray-400 space-y-3">
            <h1 class="inline-block w-full hover:text-gray-200 cursor-pointer">
              Degree
            </h1>
            <h1 class="hover:text-gray-200 cursor-pointer">PageRank</h1>
            <h1 class="hover:text-gray-200 cursor-pointer">Closeness</h1>
            <h1 class="hover:text-gray-200 cursor-pointer">Betweenness</h1>
          </div>-->

          <ul x-show="open" class="text-gray-400 space-y-3">
            <li>
              <router-link
                to="/nbcsport/degree"
                class="
                  inline-block
                  w-full
                  px-4
                  py-2
                  text-xs
                  rounded
                  text-white
                  hover:text-gray-300
                "
                >Degree</router-link
              >
            </li>
            <li>
              <router-link
                to="/nbcsport/pagerank"
                class="
                  inline-block
                  w-full
                  px-4
                  py-2
                  text-xs
                  rounded
                  text-white
                  hover:text-gray-300
                "
                >PageRank</router-link
              >
            </li>
            <li>
              <router-link
                to="/nbcsport/closeness"
                class="
                  inline-block
                  w-full
                  px-4
                  py-2
                  text-xs
                  rounded
                  text-white
                  hover:text-gray-300
                "
                >Closeness</router-link
              >
            </li>
            <li>
              <router-link
                to="/nbcsport/betweenness"
                class="
                  inline-block
                  w-full
                  px-4
                  py-2
                  text-xs
                  rounded
                  text-white
                  hover:text-gray-300
                "
                >Betweenness</router-link
              >
            </li>
          </ul>
        </div>

        <!--BBC Sport-->
        <div class="relative">
          <!-- Dropdown head -->
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
            <h1>BBC Sport</h1>
          </router-link>

          <!-- Dropdown content -->
        </div>

        <!--SKY Sport-->
        <div class="relative">
          <!-- Dropdown head -->
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
            <h1>Sky Sport</h1>
          </router-link>

          <!-- Dropdown content -->
        </div>

        <!--About-->
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
          <h1>About us</h1>
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