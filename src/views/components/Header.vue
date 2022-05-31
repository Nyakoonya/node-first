<template>
  <div class="header-wrapper">
    <div class="logo">
      <span>LOGO</span>
    </div>
    <div class="user">
      <Dropdown @on-click="handleUserOperation">
        <Avatar style="background: #d9d9f3; color: #f4f0e6; width: 50px; height: 50px"
          >USER</Avatar
        >
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem name="logout" divided>退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleUserOperation(name) {
      console.log("name :>> ", name);
      switch (name) {
        case "logout":
          this.handleLogout();
          break;
        default:
          break;
      }
    },
    handleLogout() {
      this.$store.dispatch("userInfo/logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  height: 8vh;
  background-color: #9dd3a8;
  color: #f4f0e6;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  .logo {
    flex: 1;
    span {
      font-size: 20px;
    }
  }
  .user {
    display: inline-block;
    text-align: right;
    flex: 3;
    .ivu-dropdown-menu {
      text-align: center;
    }
    /deep/ .ivu-avatar-string {
      top: calc(50% - 17px);
    }
  }
}
</style>
