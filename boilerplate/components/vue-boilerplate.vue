<template>
  <div class="component-vue-boilerplate"></div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";
//#endregion
export default {
  name: "component-vue-boilerplate",
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
.component-vue-boilerplate {
}
</style>
