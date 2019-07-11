import http from "untils/index.js"

//http://m.shihuo.cn/column/getList?columnId=337&pageSize=20&page=1&createTimestamp=
//http://m.shihuo.cn/sports/getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type=
//http://m.shihuo.cn/topic/detailList?page=1&sort=new&page_size=20&id=239
//http://m.shihuo.cn/youhui/brandSale11?r=0&news_id=0&page=1
//http://m.shihuo.cn/homefis/getNews?pageSize=20&param_str=&type=&channel_type=

//http://m.shihuo.cn/homefis/getNews?pageSize=20&param_str=&type=&channel_type=11
//http://m.shihuo.cn/homefis/getNews?pageSize=20&param_str=&type=&channel_type=12
//http://m.shihuo.cn/homefis/getNews?pageSize=20&param_str=1543035587%3A2%3A&type=&channel_type=7
export  const  columnList=()=>http("get","/abc/column/getList?columnId=337&pageSize=20&page=1&createTimestamp=")

export  const  ballList=()=>http("get","/abc/sports/getNews?pageSize=20&param_str=&type=basketball&newsId=&channel_type=")

export  const  discussList=()=>http("get","/abc/topic/detailList?page=1&sort=new&page_size=20&id=239")

export  const actList=(page)=>http("get","/abc/youhui/brandSale11",{page:page})

export  const homeList=()=>http("get","/abc/homefis/getNews?pageSize=20&param_str=&type=&channel_type=")

export  const oneList=()=>http("get","/abc/homefis/getNews?pageSize=20&param_str=&type=&channel_type=11")

export  const twoList=()=>http("get","/abc/homefis/getNews?pageSize=20&param_str=&type=&channel_type=12")

export  const threeList=()=>http("get","/abc/homefis/getNews?pageSize=20&param_str=1543035587%3A2%3A&type=&channel_type=7")
