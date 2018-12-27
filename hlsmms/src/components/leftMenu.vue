
<!-- 左菜单公共样式抽取 -->
<template>
     <el-aside width="228px">
      <div class="title">
        <h1>华联超市管理系统</h1>
        <p>您好，admin</p>
        <p>
          <span>管理首页</span>|
          <span>退出系统</span>
        </p>
      </div>
      <!--:unique-opened="true"保持菜单只打开一个 -->
      <el-menu
        default-active="$route.push"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
      >
        <!-- 菜单1 -->
        <el-submenu index="1">
          <template slot="title">
            <span>分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">分类管理</el-menu-item>
            <el-menu-item index="1-2">添加分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 菜单2 -->
        <el-submenu index="2">
          <template slot="title">
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">商品管理</el-menu-item>
            <el-menu-item index="1-2">添加商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 菜单3 -->
        <el-submenu index="3">
          <template slot="title">
            <span>进货管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">库存管理</el-menu-item>
            <el-menu-item index="1-2">添加库存</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 菜单4 -->
        <el-submenu index="4">
          <template slot="title">
            <span>出货管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">销售列表</el-menu-item>
            <el-menu-item index="1-2">商品出库</el-menu-item>
            <el-menu-item index="1-2">商品退货</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 菜单5 -->
        <el-submenu index="5">
          <template slot="title">
            <span>统计管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">销售统计</el-menu-item>
            <el-menu-item index="1-2">进货统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 菜单6 -->
        <el-submenu index="6">
          <template slot="title">
            <span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="userlist"><router-link to="/userlist">账号管理</router-link></el-menu-item>
            <el-menu-item index="/useradd"><router-link to="/useradd">添加账号</router-link></el-menu-item>
            <el-menu-item index="/userpwd"><router-link to="/userpwd">密码修改</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 菜单7 -->
        <el-submenu index="7">
          <template slot="title">
            <span>会员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">账号管理</el-menu-item>
            <el-menu-item index="1-2">添加账号</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 菜单8 -->
        <el-submenu index="8">
          <template slot="title">
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">系统信息</el-menu-item>
            <el-menu-item index="1-2">系统配置</el-menu-item>
            <el-menu-item index="1-1">权限管理</el-menu-item>
            <el-menu-item index="1-2">添加管理组</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
     methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

</style>
