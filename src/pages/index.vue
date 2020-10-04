<template>
  <div class="page-index"></div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion
export default {
  name: "page-index",
  setup() {
    //#region Reactive References
    const state = reactive({});
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
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
