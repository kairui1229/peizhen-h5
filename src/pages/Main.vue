<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item 
      v-for="item in router.options.routes[0].children" 
      :key="item.path" 
      :url="`#/${item.path}`"
      :icon="item.meta.icon"
    >
      {{ item.meta.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref(0)

const updateActiveByRoute = () => {
  const data = router.options.routes[0]
  active.value = data.children.findIndex(item => '/' + item.path === route.path)
}

onMounted(() => {
  updateActiveByRoute()
})

// 监听路由变化
watch(() => route.path, () => {
  updateActiveByRoute()
})
</script>
