<template>
  <div>
    <div>
      <h3>메모장 화면입니다.</h3>
      <div class="tabs">
        <div
          v-for="(tabNm, index) in tabs"
          :key="index"
          @click="selectTab(tabNm.name)"
          class="tab"
        >
          {{ tabNm.name }}
        </div>
      </div>
      <textarea v-model="content" class="tab-content" id="editor"></textarea>
      <button v-on:click="openPrompt" id="add-btn">추가</button>
      <button v-on:click="deleteBtn(this.selectedTab)" id="remove-btn">
        삭제
      </button>
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
      tabs: [],
      selectedTab: null,
    };
  },
  methods: {
    openPrompt() {
      this.tabNm = prompt("파일명을 입력해주세요.");
      this.addTab(this.tabNm);
    },
    // file명과 file내용을 post로 요청
    addTab(fileName) {
      if (fileName !== "") {
        this.tabs.push({ name: fileName });
        fileName = "";
      }
    },
    // 클릭한 탭 선정 함수
    selectTab(fileNm) {
      this.selectedTab = fileNm;
      this.content = localStorage.getItem(fileNm);
    },
    addBtn() {
      localStorage.setItem(this.tabNm, this.content);
      this.content = ""; // 비워주기(초기화)
    },
    deleteBtn(fileName) {
      localStorage.removeItem(fileName);
      // 탭삭제
      this.tabs.forEach((item, index) => {
        if (item.name === fileName) {
          this.tabs.splice(index, 1);
        }
      });
      this.content = ""; // 비워주기(초기화)
    },
  },
};
</script>

<style>
.tabs {
  width: 400px;
  padding: 0;
}
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
