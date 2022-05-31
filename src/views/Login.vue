<!--
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
-->
<template>
  <div class="login-container">
    <div class="login-box">
      <Tabs value="login">
        <TabPane label="登录" name="login">
          <Form ref="formLoginRef" :model="formLogin" :rules="rule" class="login-tab">
            <FormItem prop="username">
              <Input type="text" v-model="formLogin.username" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formLogin.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                @click="handleSubmit('login')"
                style="margin-top: 10px"
                >登录</Button
              >
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="注册" name="register">
          <Form
            ref="formRegisterRef"
            :model="formRegister"
            :rules="rule"
            class="register-tab"
          >
            <FormItem prop="username">
              <Input type="text" v-model="formRegister.username" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formRegister.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="confirm">
              <Input
                type="password"
                v-model="formRegister.confirm"
                placeholder="确认密码"
              >
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('register')">注册</Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { login, register } from "../utils/api";
import encode from "../utils/encode";
export default {
  name: "Login",
  data() {
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请确认密码！"));
      } else if (value !== this.formRegister.password) {
        callback(new Error("密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      formLogin: {
        username: "",
        password: "",
      },
      formRegister: {
        username: "",
        password: "",
        confirm: "",
      },
      rule: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6",
          },
        ],
        confirm: [
          {
            required: true,
            message: "请确认密码",
          },
          {
            type: "string",
            validator: validatePass,
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(type) {
      console.log("type :>> ", type);
      if (type === "login") {
        this.$refs.formLoginRef.validate((valid) => {
          console.log("valid :>> ", valid);
          if (valid) {
            // login
            this.handleLogin();
          }
        });
      } else {
        this.$refs.formRegisterRef.validate((valid) => {
          if (valid) {
            this.handleRegister();
          }
        });
      }
    },
    handleLogin() {
      console.log("login api:>> ", this.formLogin);
      const { username, password } = this.formLogin;
      const payload = {
        username,
        password: encode(password),
      };
      login(payload)
        .then((res) => {
          console.log("res :>> ", res);
          const { code, msg, data } = res;
          if (code === 0) {
            this.$Message.success(msg);
            this.$store.dispatch("userInfo/saveUserInfo", data);
            this.$router.push({ name: "Home" });
          } else if (code === -1) {
            this.$Message.error(msg);
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    },
    handleRegister() {
      console.log("register :>> ", this.formRegister);
      const { username, password } = this.formRegister;
      const payload = {
        username,
        password: encode(password),
      };
      register(payload).then((res) => {
        console.log("res register:>> ", res);
        const { code, msg, data } = res;
        if (code === -1) {
          this.$Message.error(msg);
        } else if (code === 0) {
          this.$Message.success(msg);
          this.$store.dispatch("userInfo/saveUserInfo", data);
          this.$router.push({ name: "Home" });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url("../assets/bg3.jpeg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box {
  width: 350px;
  height: 300px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  backdrop-filter: blur(3px);
}

.ivu-form-item-required {
  width: 180px;
}
/deep/.ivu-form-item-content,
/deep/.ivu-tabs-nav-scroll,
.ivu-tabs-tabpane {
  display: flex;
  justify-content: center;
}
// .ivu-tabs-tabpane {
//   margin-top: 20px;
// }
.login-tab {
  margin-top: 20px;
}
.register-tab {
  margin-top: 15px;
}
</style>
