<template>
  <!-- 发送内容区域 -->
  <div class="chat">
    <div class="talk_input">
      <!-- 选项: 带有selected的选项,的value值和select标签共享 -->
      <select class="whotalk" id="who" v-model="str1">
        <option value="0">A说：</option>
        <option value="1">B说：</option>
      </select>
      <!-- 请输入内容 -->
      <input type="text" class="talk_word" id="talkwords" v-model="str2" />
      <!-- 按钮 -->
      <input
        type="button"
        value="发送"
        class="talk_sub"
        id="talksub"
        @click="add_data()"
      />
    </div>

    <div class="talk_con2">
      <!-- 显示区域 -->
      <div class="talk_show" id="words">
        <!-- 根据vue对象中的数组，遍历出对应的标签。 -->
        <div
          v-for="i in arr"
          :key="i"
          :class="i.person == 'A' ? 'atalk' : 'btalk'"
        >
          <span>{{ i.person }}说：{{ i.words }}</span>
        </div>
      </div>

      <!-- 发送内容区域 -->
      <div class="talk_input">
        <!-- 选项: 带有selected的选项,的value值和select标签共享 -->
        <select class="whotalk" id="who" v-model="str1">
          <option value="0">A说：</option>
          <option value="1">B说：</option>
        </select>
        <!-- 请输入内容 -->
        <input type="text" class="talk_word" id="talkwords" v-model="str2" />
        <!-- 按钮 -->
        <input
          type="button"
          value="发送"
          class="talk_sub"
          id="talksub"
          @click="add_data()"
        />
      </div>
    </div>
  </div>
</template>

<script>
// window.onload = function () {
// 上面定义变量和方法，标签上使用。

// 1.创建Vue对象

// 2.获取标签
// el: ".talk_con",
// 3.定义变量

export default {
  data() {
    return {
      arr: [
        { person: "A", words: "吃饭了吗？" },
        { person: "B", words: "还没呢，你呢？" },
      ],
      str1: "这是str1",
      str2: "",
    };
  },
  // 4.定义方法
  methods: {
    add_data: function () {
      // bug: 内容不能为空。
      if (this.str2 == "") {
        alert("请输入内容...");
        return;
      }

      // alert(111)
      // 思路: 页面中遍历一个数组(对象),页面中就会有很多标签。将来添加标签，就是
      // 数组中添加数据。
      //     数组中的数据: 元素:  1.谁说的。   2.说的啥。(描述多条信息，用对象/字典)
      //         数组中放入对象(默认两条数据):    [{}, {}, {person:'A/B', words:'...'}]

      // 点击按钮之后，组成一个元素，放入数组中。
      // alert(this.str1) // 0/1
      // alert(this.str2)
      var p = this.str1 == "0" ? "A" : "B";
      var obj = { person: p, words: this.str2 };
      this.arr.push(obj);

      // 添加完内容，清空
      this.str2 = "";
    },
  },
};
</script>

<style scoped>
.talk_con1 {
  width: 600px;
  height: 500px;
  border: 1px solid #666;
  margin: 30px;
  float: left;
  background: #e98080;
}

.talk_con2 {
  /* width: 600px; */
  height: 500px;
  border: 1px solid #666;
  margin: 30px;
  float: right;
  background: #7adbd3;
}
.talk_show {
  width: 280px;
  height: 420px;
  border: 1px solid #666;
  background: #fff;
  margin: 10px auto 0;
  overflow: auto;
  margin-left: 250px;
}
.talk_input {
  width: 580px;
  margin: 10px auto 0;
}
.whotalk {
  width: 80px;
  height: 30px;
  float: left;
  outline: none;
}
.talk_word {
  width: 420px;
  height: 26px;
  padding: 0px;
  float: left;
  margin-left: 10px;
  outline: none;
  text-indent: 10px;
}
.talk_sub {
  width: 56px;
  height: 30px;
  float: left;
  margin-left: 10px;
}
.atalk {
  margin: 10px;
}
.atalk span {
  display: inline-block;
  background: #0181cc;
  border-radius: 10px;
  color: #fff;
  padding: 5px 10px;
}
.btalk {
  margin: 10px;
  text-align: right;
}
.btalk span {
  display: inline-block;
  background: #ef8201;
  border-radius: 10px;
  color: #fff;
  padding: 5px 10px;
}
</style>