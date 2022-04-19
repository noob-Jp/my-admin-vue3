<template>
    <el-dropdown>
        <img class="dropdown-avatar" :src="avatar" alt="avatar" />
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item in items" :key="item.title" :divided="item.divided"
                    :disabled="item.disabled" @click="typeof item.handle === 'function' ? item.handle() : null">
                    <app-link :to="item.path">{{ item.title }}</app-link>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <p class="menu-nickname" v-show="nickname">{{ nickname }}</p>
</template>
    
<script  >
export default {
  name: 'AvatarMenu',
  
  props: { items: { type: Array, required: true }, avatar: {}, nickname: {} },
}
</script >
    
<style lang="scss" scoped>
.dropdown-avatar {
  width: calc(#{$navbar-height} - 4px);
  height: calc(#{$navbar-height} - 4px);
  margin-top: 1px;
  margin-left: 4px;
  cursor: pointer;
  border-radius: 8px;
}

.menu-nickname {
  margin: 0 8px;
  font-size: 14px;
  font-weight: bold;
  color: #655959;
  //border-bottom: 2px solid #655959;
}
</style>