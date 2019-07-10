import http from "../utils/http.js"

export const getEquip = () =>http("get","/abc/sports/search?page=1&page_size=20&range=%E8%B7%91%E9%9E%8B%2C%E8%AE%AD%E7%BB%83%E9%9E%8B&c=&sort=hot&brand=&price=&keywords=&tag_type=&type=2")



