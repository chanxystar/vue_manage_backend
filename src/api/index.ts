import request from "@/utils/request";

export const demo = (params: any) => {
  return request({
    url: "/demo",
    method: "get",
    params,
  });
};
