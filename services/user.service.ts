import api from "@/lib/axios";
import { UserLoginType, UserRegisterType } from "@/types/user";

// registering user (create new account)
export const registerUserApi = async (userData: UserRegisterType) => {
  try {
    const response = await api.post("/auth/register", userData);
    return {
      status: response.status,
      data: response.data?.details,
    };
  } catch (error: any) {
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
    console.log(response.data);
    return {
      status: response.status,
      data: response.data?.details,
    };
  } catch (error: any) {
    return {
      status: error.response.status,
      errors: error.response.data?.details,
    };
  }
};
