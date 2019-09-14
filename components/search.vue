<template>
  <div class="relative search flex p-2 rounded-lg items-center relative">
    <vue-fontawesome-icon
      :icon="['fal', 'search']"
      size="1x"
      class="mr-2"
    />
    <input
      v-model="input"
      class="input bg-none placeholder-gray"
      type="text"
      placeholder="Search..."
      @blur="results = []"
      @focus="matchResults"
    >
    <transition name="fade">
      <ul
        v-show="results.length && input !== ''"
        class="search-results absolute bg-light rounded-lg shadow-lg p-3 z-10"
      >
        <li
          v-for="result in results"
          :key="result.permalink"
          class="m-1 px-2 py-2 transition rounded hover:bg-gray "
        >
          <saber-link
            :to="result.permalink"
            class="text-sm hover:text-maroon search-title"
          >
            {{ result.title }}
          </saber-link>
          <p
            class="text-xs search-excerpt"
          >
            {{ result.excerpt }}
          </p>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import Logger from '@/helpers/logger'

const logger = new Logger({
  debug: true
})

export default {
  name: 'Search',
  data() {
    return {
      input: '',
      database: [],
      results: []
    }
  },
  computed: {
    inputValue() {
      return this.input.trim()
    }
  },
  watch: {
    inputValue(newValue) {
      const matchedResults = this.matchResults(newValue)
      this.results = matchedResults
    }
  },
  async mounted() {
    this.database = await this.$fetchSearchDatabase()
  },
  methods: {
    matchResults(keyword) {
      const matchedResults = this.database.filter(page => {
        if (page.title && page.excerpt) {
          return page.title.toLowerCase().includes(keyword.toLowerCase()) || page.excerpt.toLowerCase().includes(keyword.toLowerCase())
        }
        else return
      })
      return matchedResults
    }
  }
}
</script>

<style lang="scss" scoped>

.search {
  background: #e0e0e0;

  .input {
    background: none;

    &::placeholder {
      color: var(--dark-gray);
    }
  }

  .search-results {
    top: 110%;
    left: 0;
    right: 0;
    max-height: 300px;
    overflow-y: scroll
  }
}

.search-title,
.search-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
