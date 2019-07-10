import http from "../utils/http.js"



export const getHotsellList =()=>http("get","abc/sports/search?page=1&page_size=20&range=%E7%AF%AE%E7%90%83%E9%9E%8B%2C%E7%B4%A7%E8%BA%AB%E8%A1%A3%2C%E7%AF%AE%E7%90%83%E6%9C%8D%2CT%E6%81%A4%2C%E8%BF%90%E5%8A%A8%E5%86%85%E8%A1%A3%2C%E8%BF%90%E5%8A%A8%E7%9F%AD%E8%A3%A4%2C%E8%BF%90%E5%8A%A8%E7%9F%AD%E8%A3%99%2C%E8%BF%90%E5%8A%A8%E9%95%BF%E8%A3%A4%2C%E7%B4%A7%E8%BA%AB%E8%A3%A4%2C%E8%BF%90%E5%8A%A8%E6%8A%A4%E5%85%B7%2C%E6%8A%A4%E8%86%9D%2C%E6%8A%A4%E8%B8%9D%2C%E6%8A%A4%E8%85%95%2C%E6%8A%A4%E8%82%98%2C%E8%BF%90%E5%8A%A8%E8%A2%9C%E5%AD%90%2C%E7%AF%AE%E7%90%83%2C%E8%83%8C%E5%8C%85&c=&sort=hot&brand=Nike%2F%E8%80%90%E5%85%8B&price=&keywords=&tag_type=&type=1")