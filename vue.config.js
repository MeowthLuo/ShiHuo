const path=require("path")

//http://m.shihuo.cn/homefis
module.exports={
    
    devServer:{
        //设置自动打开
        open:true,
        proxy:{
            "/abc":{
                target:"http://m.shihuo.cn",
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            }
        }
    },


    configureWebpack:{
        resolve:{
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "common":path.resolve(__dirname,"./src/common"),
                "components":path.resolve(__dirname,"./src/components"),
                "router":path.resolve(__dirname,"./src/router"),
                "store":path.resolve(__dirname,"./src/store"),
                "untils":path.resolve(__dirname,"./src/untils"),
                "views":path.resolve(__dirname,"./src/views"),
                "api":path.resolve(__dirname,"./src/api"),
                "css":path.resolve(__dirname,"./public/css"),
                "js":path.resolve(__dirname,"./public/js")
            }
        }
    }



}