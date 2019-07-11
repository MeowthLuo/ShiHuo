import http from "untils/index.js"

export const getSearch=(val)=>http("get","abc/search/relatedKeywords",{keywords:val})
