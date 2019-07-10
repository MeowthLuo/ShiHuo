import http from "../utils/http"

export const discoverList = ()=>http("get","/abc/find/mobileList?tag_id=283&param_str=")

export const basketballList = ()=>http("get","/abc/find/mobileList?tag_id=347&param_str=")