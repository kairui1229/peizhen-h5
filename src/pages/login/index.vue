<template>
  <h1>用户登录</h1>
  <van-form @submit="onSubmit">
     <van-cell-group inset>
       <van-field 
       v-model="form.username" 
       name="用户名" 
       label="用户名" 
       placeholder="用户名" 
       :rules="[{ required: true, message: '请填写用户名' }]"
       />
       <van-field 
       v-model="form.password" 
       type="password" 
       name="密码" 
       label="密码" 
       placeholder="密码" 
       :rules="[{ required: true, message: '请填写密码' }]"
       />
     </van-cell-group>
     <div class="btn">
      <van-button round block type="primary" native-type="submit">提交</van-button>
     </div>
  </van-form>
</template>

<script setup>
import { ref,reactive } from 'vue'

const form  = reactive({
  username:'',
  password:''
})
const onSubmit = () => {
 
}
</script>

<style lang="less" scoped>
h1{
  text-align: center;
}
.btn{
  margin: 16px;
}
</style>