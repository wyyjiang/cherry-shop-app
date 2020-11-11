// // //  export function lists(){
// // //    const list1 = []
// // //    this.$eventBus1.$on("address",(e)=>{
// // //      list1.push(e)
// // //      console.log(list1);
// // //    })
// // //    return list1
// // //  }
// // import Vue from "vue";
// // var eventBus1 = new Vue();
// // Vue.prototype.$eventBus1 = eventBus1;
export const list = [
  {
    // id: this.$eventBus2++,
    name: "张三",
    tel: "13000000000",
    address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
    isDefault: true,
  },
  {
    // id: this.$$eventBus2++,
    name: "李四",
    tel: "1310000000",
    address: "浙江省杭州市拱墅区莫干山路 50 号",
  },
]

// export function list() {
//   this.$eventBus1.$on("address", (e) => {
//     console.log(e);
//     return e;
//   });
// }

