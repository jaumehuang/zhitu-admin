<template>
    <div class="mian">
      
      <el-row style="height:100%">

        <el-col  :span="4" class="sidebar">
          <el-menu default-active="2" class="" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
               </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
<<<<<<< HEAD
                <el-menu-item index="1-1">
                   <router-link to="/page1">选项1</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <router-link to="/page2" style="display: block;width:100%;height:100%;text-decoration:none">选项2</router-link>
                </el-menu-item>
=======
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
>>>>>>> 7d0846d066529e391563bdc3ecc07e0542ec6bb0
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="20" class="content">
             
<<<<<<< HEAD
              
              
=======
              <router-link to="/page1">page1</router-link>
              <router-link to="/page2">page2</router-link>
>>>>>>> 7d0846d066529e391563bdc3ecc07e0542ec6bb0
             <router-view></router-view>
              
        </el-col>
      </el-row>
     
    </div>
</template>
<script>
export default {
    name: "app",
    data(){
         
         return {
              
         }
    },
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
<<<<<<< HEAD
<style>
   a{
    display: block;
    width:100%;
    height:100%;
   }
</style>



=======
>>>>>>> 7d0846d066529e391563bdc3ecc07e0542ec6bb0

