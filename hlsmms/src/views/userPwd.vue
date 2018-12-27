<template>
  <el-container id="home">
    <!-- 左边菜单栏 -->
    <!-- 站位 -->
    <LeftMenu></LeftMenu>
    <el-container id="mainContent">
      <!-- 头部 -->
      <!-- 站位 -->
      <RightTop></RightTop>
      <!-- 内容 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>密码修改</h3>
          </div>
          <div class="text item">
            <!-- 模板内容 -->



          </div>
        </el-card>
      </el-main>
        <!-- 脚 -->
      <RightBottom></RightBottom>
    </el-container>
  </el-container>
</template>

<script>
//引入公共组件
// 左侧菜单
import LeftMenu from "../components/leftMenu";
// 头部
import RightTop from "../components/RightTop";
//脚部
import RightBottom from "../components/RightBottom";

export default {
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  },
  //中间内容
  data() {
    return {};
  }
};
</script>

<style>
</style>

