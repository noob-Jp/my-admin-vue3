<template>
  <div class="admin-login">
    <div class="login-container">
      <div class="login-left">
        <!-- <div title="未设计" class="login-logo">LOGO</div> -->
        <img width="450" src="@/assets/bg.png" alt="" />
      </div>
      <div class="login-right">
        <el-form :model="loginFormData">
          <el-form-item label="">
            <el-input prefix-icon="el-icon-user" style="
            height: 44px; 
            margin-right: 10px" class="login-input" v-model="loginFormData.username" placeholder="">
            </el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input prefix-icon="el-icon-lock" style="
            height: 44px; 
            margin-right: 10px" class="login-input" v-model="loginFormData.password" placeholder="">
            </el-input>
          </el-form-item>
          <el-button class="login-btn" type="primary" @click="loginBtn">登录</el-button>
        </el-form>
      </div>
      <div class="login-footer">Powered by 赵俊鹏</div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useUserStore } from "../../../store/user"
export default {
  name: "login",
  setup() {
    const router = useRouter();
    const loginFormRef = ref(null);
    const loginFormData = reactive({
      username: "admin",
      password: "123456",
      code: "4396"
    })
    const loginBtn = () => {
      if (loginFormData.username == "admin" && loginFormData.password == "123456") {
        useUserStore().login(loginFormData)
          .then(() => {
            setTimeout(() => {
              ElMessage({
                type: "success",
                message: '登录成功',
              })
              router.push("/");
            }, 2000)
          });
      } else {
        ElMessage({
          type: "error",
          message: '登录失败',
        })
      }
    }
    return { loginFormData, loginBtn };
  },
};
</script>

<style lang="scss" scoped>
.admin-login {
  position: relative;
  height: 100vh;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  padding: 0 1rem;
  overflow: hidden;
}

.login-container {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.login-footer {
  position: absolute;
  bottom: 10px
}

.login-left {
  width: 25%;
  min-width: 300px;
  max-width: 500px;
  background-size: 100%;
}

.login-right {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 400px;
  border-radius: 1rem;
  box-shadow: 4px 10px 16px rgb(36 37 38 / 13%);
}

$input-height: 44px;

.login-input {
  font-size: 17px;
  width: 300px;

  :deep(.el-input__inner) {
    height: $input-height;
    line-height: $input-height;
    background: #f5f5f5;
    border: 0;

    &:focus+.el-input__prefix {
      color: black;
    }
  }
}

.login-btn {
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 16px;
}

@media screen and (max-width:$sm-width){
  .login-left{
    display: none;
  }
  .login-right{
    width:100%;
  }

}
</style>
