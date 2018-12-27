<template>
  <el-container id="home">
    <!-- 左边菜单栏 --><!-- 站位 -->
  <LeftMenu></LeftMenu>
    <el-container id="mainContent">
      <!-- 头部 --><!-- 站位 -->
      <RightTop></RightTop>
      <!-- 内容 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>系统信息</h3>
          </div>
          <div class="text item">
            <el-alert title="商品总数：5.已经销售总金额：890.00" type="warning" show-icon></el-alert>
            <el-alert title="导入数据" type="warning" show-icon></el-alert>
            <el-row :gutter="40">
              <!-- 左边 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>销售排行</h3>
                  </div>

                  <div class="text item">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column prop="name" label="商品产品" width="340"></el-table-column>
                      <el-table-column prop="address" label="销量"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
              <!-- 右边 -->
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货商品</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="tableData2" border style="width: 100%">
                      <el-table-column prop="date" label="商品名称" width="180"></el-table-column>
                      <el-table-column prop="name" label="库存" width="180"></el-table-column>
                      <el-table-column prop="address" label="操作"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
import LeftMenu from '../components/leftMenu'
// 头部
import RightTop from '../components/RightTop'
//脚部
import RightBottom from '../components/RightBottom'


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
          name: "海飞丝去屑洗发水",
          address: "5"
        },
        {
          name: "茅台酒",
          address: "6"
        },
        {
          name: "茅台酒",
          address: "4"
        },
        {
          name: "茅台酒",
          address: "6"
        }
      ],
      tableData2:[{
        date:'我的优乐美',
         name: "0",
          address: "入库"
      }]
    };
  }
};
</script>

<style>
</style>

