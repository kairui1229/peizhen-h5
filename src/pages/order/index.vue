<template>
  <div class="container">
    <div class="header">我的订单</div>
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab title="全部" name=""></van-tab>
      <van-tab title="待支付" name="1"></van-tab>
      <van-tab title="待服务" name="2"></van-tab>
      <van-tab title="已完成" name="3"></van-tab>
      <van-tab title="已取消" name="4"></van-tab>
    </van-tabs>
    <van-row @click="goDetail(item)" v-for="item in order" :key="item.out_trade_no" class="van-row">
      <van-col span="5">
        <van-image radius="5" width="50" height="50" :src="item.serviceImg"/>
      </van-col>
      <van-col span="14">
        <div class="text1">
          {{ item.service_name }}
        </div>
        <div class="text2">
          <div>{{ item.hospital_name }}</div>
          <div>预约时间：{{ item.starttime }}</div>
        </div>
      </van-col>
      <van-col class="text2" :style="{'color':colorMap[item.trade_state]}" span="5">
        {{ item.trade_state }}
        <counter :second="item.timer" v-if="item.trade_state === '待支付'"></counter>
      </van-col>
    </van-row>
    <div class="bottom-text">没有更多了</div>
  </div>
</template>

<script setup>
import { ref,getCurrentInstance,onMounted } from 'vue'
import counter from '@/components/counter.vue'
import {useRouter, useRoute} from 'vue-router'

const route = useRoute()
const order = ref([])
const active = ref("")
const { proxy } = getCurrentInstance()

const colorMap = {
  '待支付': '#ffa200',
  '待服务': '#1da6fd',
  '已完成': '#21c521',
  '已取消': '#999999'
}


onMounted(() => {
  const status = route.query.status || ""
  active.value = status
  getOrderList(status)
})

const getOrderList = async (state) => {
  const {data:{data}} = await proxy.$api.orderList({state})
  data.forEach(item => {
    item.timer = item.order_start_time + 7200000 - Date.now()
   })
  order.value = data
}

const onClickTab = (item) => {
  getOrderList(item.name)
}

const router = useRouter()
const goDetail = (item) => {
  router.push(`/detail?oid=${item.out_trade_no}`)
}
</script>

<style lang="less" scoped>
.container {
    background-color: #f0f0f0;
    height: 100vh;
  }
  .header {
    background-color: #fff;
    line-height: 40px;
    text-align: center;
  }
  .van-row {
    background-color: #fff;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    .text1 {
      font-size: 16px;
      line-height: 25px;
      font-weight: bold;
    }
    .text2 {
      font-size: 14px;
      line-height: 20px;
      color: #999999;
    }
  }
  .bottom-text {
    line-height: 50px;
    text-align: center;
    color: #999999;
  }
</style>