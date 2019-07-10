import axios from "axios"
 //里面是自己想要什么配置就写什么配置
const http =axios.create({
    //设置超时请求
    timeout:1000,
    //设置是否可以跨域携带cookies
    withCredentials:true,
    // baseURL:"http://m.shihuo.cn"

})
//请求的拦截器
http.interceptors.request.use(function(config){
    if(config.method=="get"){
        config.params={...config.data}
    }else if(config.method=="post"){
        config.headers = {"content-type":"application/x-www-form-urlencoded"}
    }
    return config
})

//响应的拦截器
http.interceptors.response.use(function(res){
    if(res.status=="200"){
        
        return res.data
    }
},(err)=>{
    
})
export default (method,url,data={})=>{
    if(method == "get"){
       
        return http.get(url,{
            params:data
        })
    }else if(method == "post"){
         return http.post(url,data)
    }
}