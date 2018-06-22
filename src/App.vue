<template>
  <div id="app">
     <!-- 头部 -->
     <v-header></v-header>
     <!-- 中部 -->
     <v-conent></v-conent>
     <!-- 尾部 -->
     <v-footer></v-footer>
  </div>
</template>
  
<script>
import vHeader from "../src/components/common/Header";
import vFooter from "../src/components/common/Footer";
import vConent from "../src/components/common/Conent";
export default {
  name: "app",
  data: function() {
    return {
      isCollapse: false
    };
  },
  components: {vHeader,vFooter,vConent},
 
};
</script>
  
<style>
body {
  margin: 0;
  background-color: #fff;
}
.mian {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 60px;
}
.login {
  height: 30px;
  width: 30px;
  display: block;
  margin-top: 15px;
}

.header {
  background-color: #222;
  height: 60px;
  color: #fff;
  line-height: 60px;
}

.switch {
  line-height: 60px;
}

.admin {
  float: right;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.mian .sidebar {
  height: 100%;
  background-color: #eef1f6;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: #222;
  color: #fff;
}
.mian .content {
  height: 100%;
}
</style>
