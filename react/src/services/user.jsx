import request from "../utils/request";

export function getAllUses() {
   return  request({
        method: "get",
        url: "/user/"
    })
}