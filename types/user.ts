export type UserRegisterType = {
  username: string;
  email: string;
  phone: string;
  status: "active" | "suspended" | "banned";
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  birth_date: Date;
  gender: "man" | "woman";
};

export type UserLoginType = {
  email: string;
  password: string;
};
