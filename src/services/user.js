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
    return { message: "用户名已存在！", code: 0 };
  } else {
    user[name] = {
      password: password,
      collect: [],
      cart: [],
    };
    setUser(user);
    return { message: "注册成功！", code: 1 };
  }
}

// 登录接口
export function loginAPI(name, password) {
  let user = getUser();
  if (!user[name]) {
    return { message: "用户名不存在！", code: 0 };
  } else {
    let correct = user[name].password; // 正确的密码
    if (correct == password) {
      return { message: "登陆成功！", code: 1 };
    } else {
      return { message: "密码错误！", code: 0 };
    }
  }
}

// 修改密码接口
export function changePasswordAPI(name, oldpassword, newpassword) {
  let user = getUser();
  if (!user[name]) {
    return { message: "用户名不存在！", code: 0 };
  } else {
    let correct = user[name].password; // 原密码
    if (correct == oldpassword) {
      user[name].password = newpassword;
      setUser(user);
      return { message: "修改密码成功！", code: 1 };
    } else {
      return { message: "原密码输入错误，请重新输入！", code: 0 };
    }
  }
}
