<template>
  <div>
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <app-icon style="margin-left: 8px" :icon="item.icon || 'el-icon-grid'" />
        <span style="margin-left: 6px">{{ item.title }}</span>
      </template>
      <SideBarItem v-for="child in item.children" :key="child.path" :item="child"></SideBarItem>
    </el-sub-menu>

    <app-link v-else :to="realPath">
      <el-menu-item :index="realPath">
        <app-icon style="margin-left: 8px" :icon="item.icon || 'el-icon-menu'" />
        <template #title>
          <span style="margin-left: 6px">{{ item.title }}</span>
        </template>
      </el-menu-item>
    </app-link>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
export default {
  name: "SideBarItem",
  props: { item: { type: Object, required: true } },
  setup(props) {
    // console.log(props.item);
    const menu = props.item;
    const router = useRouter();
    const realPath =
      !isExternal(menu.path) && menu.name
        ? router.resolve({ name: menu.name }).path
        : menu.path
    // console.log(realPath);
    return { realPath }
  }

}
/** 外链的正则判断 */
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
</script>

<style lang="scss" scoped>
.el-menu-item.is-active {
  background-color: #409EFF !important;
  color: aliceblue;
}
</style>
