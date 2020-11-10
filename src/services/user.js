// 取user
export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  
  // 存储user
  export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  
  // 注册接口
  export function regAPI(name, password) {
    let user = getUser();
    if (user[name]) {
      return { message: "用户名已存在！" };
    } else {
      user[name] = {
        password: password,
        collect: [],
        cart: [],
      };
      setUser(user);
      return { message: "注册成功！" };
    }
  }
