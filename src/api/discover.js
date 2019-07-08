import http from "utils/http.js"

export const cityList = ()=>http("get","/find/mobileList?tag_id=283&param_str=")