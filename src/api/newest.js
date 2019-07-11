import http from "../utils/http"

export const newestList = ()=>http("get","/abc/column/ColumnList?key=collect_article&val=sort_new&page_size=20&param_str=")
// http://m.shihuo.cn/column/ColumnList?key=collect_article&val=sort_new&page_size=20&param_str=