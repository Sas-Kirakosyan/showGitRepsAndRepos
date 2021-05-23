import { axiosInstance } from "./api.config";

export const getFetchData_req = async (userName) => {
  const response = await axiosInstance.get(`/users/${userName}`);
};
