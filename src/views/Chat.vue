<template>
  <div class="chat">
    <div class="header">
      <van-nav-bar
        class="list_main"
        title="在线客服"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="content">
      <div class="txt" v-html="all"></div>
      <br />
    </div>
    <div class="footer">
      <input class="input" type="text" v-model="txt" @keyup.enter="kuHandle" />
      <button @click="kuHandle">发送</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      people: "",
      txt: "",
      all: "",
      list: [
        "你好!",
        "有什么需要帮助的",
        "很高兴能帮助到你",
        "亲，有什么需要的",
      ],
    };
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    kuHandle() {
      if (this.txt) {
        this.text =
          `<div style=' margin-left:200px' class="right">` +
          this.txt +
          `</div>`;
        this.people +=
          `<div style='text-align：left' class="left">` +
          this.list[Math.floor(Math.random() * this.list.length)] +
          `</div>`;

        // this.people += "123";
        // this.all = `<div >` + this.people + this.text + `</div>`;
        this.all +=
          `<div style='border-bottom:1px solid #cecece'>` +
          this.text +
          this.people +
          `</div>`;
        this.people = "";
        this.txt = "";

        console.log(this.list[Math.floor(Math.random() * this.list.length)]);
      }
      //  if(this.people.value){
      //    this.
      //  }
    },
  },
};
</script>
<style scoped>
li {
  /* display: block; */
  height: 20px;
  width: 300px;
}
/* .right {
  margin-top: 40px;
} */
.chat {
  display: flex;
  flex-direction: column;
}
/* .header {
} */
.content {
  flex: 1;
  overflow-y: auto;
  border: solid 1px #8ab3b4;
}
.left {
  border: solid 1px #8ab3b4;
  padding: 5px;
  margin-bottom: 20px;
  width: 200px;
  border-radius: 10px;
}
.right {
  border: solid 1px #8ab3b4;
  margin-bottom: 50px;
  padding: 5px;
  width: 200px;
  float: right;
}
.header p {
  font-size: 22px;
  text-align: center;
}
.txt {
  /* border: 1px solid #cecece; */
  /* min-height: 450px; */
  min-width: 280px;
  line-height: 30px;
  margin-left: 5px;
}
.input {
  margin-top: 10px;
  padding: 10px;
  width: 280px;
  border: 1px solid #cecece;
}
button {
  background: rgb(95, 100, 95);
  color: white;
  border: none;
  margin: 8px;
  padding: 10px;
}
</style>