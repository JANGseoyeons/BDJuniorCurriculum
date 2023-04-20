<template>
  <div>
    <div>
      <h3>메모장 화면입니다.</h3>
      <div id="tabs" v-for="tab in tabList" v-bind:key="tab">{{ tab }}</div>
      <textarea v-model="content" class="tab-content" id="editor"></textarea>
      <button v-on:click="addTab" id="add-btn">추가</button>
      <button v-on:click="deleteBtn" id="remove-btn">삭제</button>
      <button v-on:click="addBtn" id="save-btn">저장</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      content: "",
      tabNm: "",
    };
  },
  methods: {
    addTab: function () {
      console.log(this.content);
      this.tabNm = prompt("파일명을 입력해주세요.");
    },
    addBtn: function () {
      // 로컬스토리지에 입력한 텍스트에 저장
      localStorage.setItem(this.tabNm, this.content);
      this.content = ""; // 비워주기(초기화)
    },
    deleteBtn: function () {
      axios({
        url: "http://localhost:3000/test",
        method: "POST",
        data: {
          content: this.content,
        },
      }).then((res) => {
        alert(res.data);
      });
    },
  },
};
</script>

<style>
.tab {
  display: inline-block;
  padding: 4px 8px;
  background-color: #ccc;
  border: 1px solid #999;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
}
.tab.active {
  background-color: #fff;
  border-bottom-color: #fff;
}
.tab:hover {
  background-color: #ddd;
}
.tab-content {
  border: 1px solid #999;
  padding: 0px;
  height: 300px;
  width: 400px;
}
textarea {
  margin: 0;
  height: 300px;
  width: 350px;
}
</style>
