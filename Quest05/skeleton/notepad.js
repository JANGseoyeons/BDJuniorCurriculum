class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  constructor(value) {
    this.input = value;
    this.tabList = document.querySelectorAll("li");
    this.newBtn = document.querySelector(".new");
    this.dlBtn = document.querySelector(".close");
    this.list = document.querySelector(".list");
    this.savBtn = document.querySelector(".save");

    this.newBtn.addEventListener("click", (evn) => this.newTab(evn));
    this.dlBtn.addEventListener("click", (evn) => this.dlTab(evn));
    this.savBtn.addEventListener("click", (evn) => this.savTab(evn));
  }
  newTab() {
    file.write(this.input);
    const nav = document.createElement("li");
    const a = document.getElementsByTagName("textarea");
    console.log(a.item(1));
    nav.innerHTML = `<a href="#tab2" class="btn">New Tab</a>
            <div id="tab2" class="cont"><textarea>2</textarea></div>`;
    this.list.append(nav);
    const tabList = document.querySelectorAll("li");
    for (var i = 0; i < tabList.length; i++) {
      tabList[i].querySelector(".btn").addEventListener("click", function (e) {
        e.preventDefault();
        for (var j = 0; j < tabList.length; j++) {
          tabList[j].classList.remove("is_on");
        }
        this.parentNode.classList.add("is_on");
      });
    }
  }
  dlTab() {
    localStorage.removeItem("text");
  }
  savTab() {
    // 각 해당하는 div에 작성한 text 글 저장
    sessionStorage.text = this.input.value;
  }
}
