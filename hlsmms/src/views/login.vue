
<template>
  <div id="loginbox">
      <!-- kapian -->
    <el-card class="box-card" id="login">
      <div slot="header" class="clearfix">
        <span>用户注册</span>
      </div>
      <div class="text item">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        pass: "",
       username:''
      },
      rules2: {
        pass: [{ required:true, trigger: "blur" ,message:'密码必填'},
                {min:6,max:12, trigger: "blur",message:'密码必须在6到12位' }
        ],
        username:[{min:6,max:12, trigger: "blur",message:'用户名必须在6到12位' },
                { required:true, trigger: "blur" ,message:'用户名必填'}]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //alert("提交成功!");
          this.$router.push("/")//路由里面跳转（如果提交成功，跳转到根目录）
        } else {
          console.log("提交失败!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>   

<style> 
    #loginbox{
        /* height: 100%; */
        background-image:url(../assets/1.jpg); background-size:25% 50%; -moz-background-size:100% 100%;
    }
    #login{
        width: 520px;
        height: 300px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
       opacity:0.9;
    }
</style>
