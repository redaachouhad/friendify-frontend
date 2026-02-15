import api from "@/lib/axios";
import { UserLoginType, UserRegisterType } from "@/types/user";

// registering user (create new account)
export const registerUserApi = async (userData: UserRegisterType) => {
  userData["status"] = "active";

  try {
    const response = await api.post("/auth/register", userData);
    console.log(response.data);
    console.log(response.status);
    return {
      status: response.status,
      data: response.data?.details,
    };
  } catch (error: any) {
    console.log(error.response.data);
    console.log(error.response.status);
    return {
      status: error.response.status,
      errors: error.response.data?.details,
    };
  }
};

// login user

export const loginUserApi = async (userData: UserLoginType) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return { errors: { global: "Something went wrong" } };
  }
};
