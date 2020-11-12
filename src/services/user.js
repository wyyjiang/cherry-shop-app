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

// 存储user
export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// 注册接口
export function regAPI(uid, password) {
  let user = getUser();
  if (user[uid]) {
    return { message: "用户名已存在！", code: 0 };
  } else {
    user[uid] = {
      password: password,
      collect: [], // 收藏
      cart: {}, // 购物车
      address: [], // 地址
      order: {}, // 订单信息
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
  if (collect.indexOf(pid) > -1) {
    var index = collect.indexOf(pid);
    user[uid].collect.splice(index, 1);
    setUser(user);
    return { message: "删除收藏成功！", code: 0 };
  } else {
    user[uid].collect.push(pid);
    setUser(user);
    return { message: "加入收藏成功！", code: 1 };
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

// 添加地址接口
export function addAddressAPI(
  uid,
  username,
  telphone,
  addressDetail,
  province,
  city,
  county,
  isDefault,
) {
  let user = getUser();
  var timestamp = Date.parse(new Date());
  const index = user[uid].address.length; // 新添加的地址在地址列表中的索引位
  user[uid].address.push({
    id: timestamp,
    name: username,
    tel: telphone,
    address: province + city + county + addressDetail,
    isDefault: isDefault,
  });
  setUser(user);
  return { message: "添加地址成功！", code: 1, index: index };
}

//商品订单地址接口
export function showAddressAPI(uid) {
  let user = getUser();
  return user[uid].address.address;
}
// 删除地址接口
export function delAddressAPI(uid, index) {
  let user = getUser();
  user[uid].address.splice(index, 1);
  setUser(user);
  return { message: "删除地址成功！", code: 1 };
}

// 查询地址接口
export function searchAddressAPI(uid) {
  let user = getUser();
  return user[uid].address;
}

// 修改地址接口
// export function editAddressAPI(
//   uid,
//   index,
//   username,
//   country,
//   address,
//   telphone
// ) {
//   let user = getUser();
//   user[uid].address[index] = {
//     username: username,
//     country: country,
//     address: address,
//     telphone: telphone,
//   };
//   setUser(user);
//   return { message: "修改成功！", code: 1 };
// }

// 新增订单接口
export function addOrderAPI(uid, site, product, price) {
  let user = getUser();
  let date = new Date();
  const orderID =
    "" +
    date.getFullYear() +
    (date.getMonth() + 1) +
    date.getDate() +
    date.getHours() +
    date.getMinutes() +
    date.getSeconds();
  // site:{username:xxx,telphone:xxx,address:xxx}
  // product:{name:xxx,num:xxx,price:xxx,img:xxx}
  user[uid].order[orderID] = {
    orderID: orderID,
    time: date,
    address: site,
    product: product,
    price: price,
  };
  setUser(user);
}

// 查询订单接口
export function searchOrderAPI(uid) {
  let user = getUser();
  return user[uid].order;
}
