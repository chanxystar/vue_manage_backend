<template>
  <div class="login_container flex flex-items-center">
    <div class="login_bg flex flex-justify-center flex-items-center">
      <div>
        <img class="login_image" :src="login_image" alt="login_image">
        <div class="m-5 text-center color-white font-size-6 font-bold">Vue Manage Backend</div>
      </div>
    </div>
    <a-form class="login_box ml-50">
      <a-row >
        <a-col :span="24" class="font-size-7 font-semibold mb-4 login_title"><UserSwitchOutlined /> 登录</a-col>
        <a-col :span="24">
          <a-form-item v-bind="validateInfos.username">
            <a-input v-model:value="modelRef.username" size='large' placeholder="账号" allow-clear></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24"
          ><a-form-item v-bind="validateInfos.password">
            <a-input v-model:value="modelRef.password" size='large' placeholder="密码" allow-clear></a-input> </a-form-item
        ></a-col>
        <a-col :span="24">
          <a-button class="w-full" type="primary" size="large" @click="submit">登录</a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { Form } from "ant-design-vue";
import { FormProps } from "ant-design-vue/es/form";
import { ref } from "vue";
import { useRouter } from "vue-router";
import login_image from "@/assets/svg/login-image.svg";
const router = useRouter()
const useForm = Form.useForm;

const modelRef = ref({
  username: "",
  password: "",
});

const rulesRef = ref<FormProps["rules"]>({
  username: [
    {
      required: true,
      message: "账号不能为空",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
    },
  ],
});
const { validate, resetFields, validateInfos } = useForm(modelRef, rulesRef);

const submit = ()=>{
  validate().then(()=>{
    router.replace('/')
    resetFields()
  })
}
</script>

<style>
.login_container {
  height: 100vh;
  width: 100vw;
  
}

.login_bg {
  height: 100vh;
  width: 50vw;
  background-image: url("../../assets/svg/login-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
}
.login_image{
  width: 500px;

}
.login_box{
  width: 400px;
}
.login_title{
  letter-spacing: 5px;
}
</style>
