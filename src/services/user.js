/* 
  uid:用户名
  password:密码
  pid:商品id
  pnum:商品数量
  addres:收货地址
*/

// 取user
export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
//取地址
export function getAddres(){
  return JSON.parse(localStorage.getItem("addres"));
}

// 存储user
export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
//存储addres
export function setAddres(addres){
   localStorage.setItem("addres",JSON.stringify(addres));
}

// 注册接口
export function regAPI(uid, password) {
  let user = getUser();
  if (user[uid]) {
    return { message: "用户名已存在！", code: 0 };
  } else {
    user[uid] = {
      password: password,
      collect: [],
      cart: {},
    };
    setUser(user);
    return { message: "注册成功！", code: 1 };
  }
}

// 登录接口
export function loginAPI(uid, password) {
  let user = getUser();
  if (!user[uid]) {
    return { message: "用户名不存在！", code: 0 };
  } else {
    let correct = user[uid].password; // 正确的密码
    if (correct == password) {
      return { message: "登陆成功！", code: 1 };
    } else {
      return { message: "密码错误！", code: 0 };
    }
  }
}

// 修改密码接口
export function changePasswordAPI(uid, oldpassword, newpassword) {
  let user = getUser();
  if (!user[uid]) {
    return { message: "用户名不存在！", code: 0 };
  } else {
    let correct = user[uid].password; // 原密码
    if (correct == oldpassword) {
      user[uid].password = newpassword;
      setUser(user);
      return { message: "修改密码成功！", code: 1 };
    } else {
      return { message: "原密码输入错误，请重新输入！", code: 0 };
    }
  }
}

// 加入/删除收藏接口
export function collectAPI(uid, pid) {
  let user = getUser();
  let collect = user[uid].collect;
  if (collect.indexOf(pid)) {
    var index = collect.indexOf(pid);
    user[uid].collect.splice(index, 1);
    setUser(user);
    return { message: "删除收藏成功！" };
  } else {
    user[uid].collect.push(pid);
    setUser(user);
    return { message: "加入收藏成功！" };
  }
}

// 获取用户收藏接口
export function getCollectAPI(uid) {
  let user = getUser();
  return user[uid].collect;
}

// 加入购物车接口
export function addCartAPI(uid, pid, pnum) {
  let user = getUser();
  if (!user[uid].cart[pid]) {
    user[uid].cart[pid] = pnum;
  } else {
    user[uid].cart[pid] += pnum;
  }
  setUser(user);
}

// 删除购物车商品接口
export function deleteCartAPI(uid, pid) {
  let user = getUser();
  delete user[uid].cart[pid];
  setUser(user);
}

// 查询购物车接口
export function searchCartAPI(uid) {
  let user = getUser();
  return user[uid].cart;
}

//管理货地址接口
export function collectaddres(uid, pid) {
  let user = getUser();
  let collect = user[uid].collect;
  if (collect.indexOf(pid)) {
    var index = collect.indexOf(pid);
    user[uid].collect.splice(index, 1);
    setUser(user);
    return { message: "删除收藏成功！" };
  } else {
    user[uid].collect.push(pid);
    setUser(user);
    return { message: "加入收藏成功！" };
  }
}