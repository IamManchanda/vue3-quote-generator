<template>
  <div class="page-index">
    <div v-if="error">
      <div class="error-container">
        <p class="error-message">
          There was an error loading data. Please refresh the page
        </p>
      </div>
    </div>
    <div v-else>
      <Suspense>
        <template #default>
          <quote-container />
        </template>
        <template #fallback>
          <quote-loader />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onErrorCaptured } from "vue";
import QuoteContainer from "@/components/quote-container.vue";
import QuoteLoader from "@/components/quote-loader.vue";

export default {
  name: "page-index",
  components: {
    QuoteContainer,
    QuoteLoader,
  },
  setup() {
    //#region Reactive References
    const state = reactive({
      error: null,
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    onErrorCaptured(error => {
      state.error = error;
      return true;
    });
    //#endregion

    //#region Methods
    //#endregion
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
