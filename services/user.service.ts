import api from "@/lib/axios";
import { UserLoginType, UserRegisterType } from "@/types/user";

// registering user (create new account)
export const registerUserApi = async (userData: UserRegisterType) => {
  userData["status"] = "active";

  try {
    const response = await api.post("/user/register", userData);
    return response.data; // Success case
  } catch (error: any) {
    // If Laravel returns 422, it lands here
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return { errors: { global: "Something went wrong" } };
  }
};

// login user

export const loginUserApi = async (userData: UserLoginType) => {
  try {
    const response = await api.post("/user/login", userData);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return { errors: { global: "Something went wrong" } };
  }
};
