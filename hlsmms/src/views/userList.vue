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
            <h3>用户管理</h3>
          </div>
          <div class="text item">
            <!-- 模板内容 -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="用户名字" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="用户组" width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
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
    return {
      tableData: [
        {
          date: "admin",
          name: "超级管理员",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style>
</style>

