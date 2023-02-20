class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  rander() {
    // 입력 창 생성, 입력한 숫자를 받아와 숫자에 맞게 출력
    let myWindow = new Window();
  }
}
class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요?  
  요소생성 : 아이콘 (innerHtml) 
  기능 : 드래그 */
  constructor(id) {
    this.div = document.createElement("div");
    this.div.id = id;
    this.section = document.querySelector(".desktop");
    this.isDragging = false;
    this.currentX;
    this.currentY;
    this.initialX;
    this.initialY;
    this.xOffset = 0;
    this.yOffset = 0;

    this.div.addEventListener("mousedown", (evt) => this.dragStart(evt));
    this.div.addEventListener("mouseup", (evt) => this.dragEnd(evt));
    this.div.addEventListener("mousemove", (evt) => this.drag(evt));
    this.section.append(this.div);
  }

  dragStart(event) {
    this.initialX = event.clientX - this.xOffset;
    this.initialY = event.clientY - this.yOffset;

    this.isDragging = true;
    console.log("start :", this.initialX);
  }

  dragEnd() {
    this.initialX = this.currentX;
    this.initialY = this.currentY;

    this.isDragging = false;
    console.log("end :", this.initialX);
  }

  drag(event) {
    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
    if (this.isDragging) {
      event.preventDefault();
      this.currentX = event.clientX - this.initialX;
      this.currentY = event.clientY - this.initialY;

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      setTranslate(this.currentX, this.currentY, event.target);
    }
    console.log("ing :", this.initialX);
  }
}
// 드래그 기능(Icon 상속)
class Folder extends Icon {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(id) {
    super(id);
  }
  // 폴더창 열기 기능
  open() {
    // let folder = new Folder("model");
    this.model = document.createElement("div");
    this.model.className = "model";
    this.model.innerHTML = `<p>폴더창</p><button class='close'>닫기</button>`;
    const section = document.querySelector(".desktop");
    section.appendChild(this.model);

    this.model.addEventListener("mousedown", (evt) => this.dragStart(evt));
    this.model.addEventListener("mousemove", (evt) => this.drag(evt));
    this.model.addEventListener("mouseup", (evt) => this.dragEnd(evt));
  }

  rander() {
    this.div.addEventListener("dblclick", this.open.bind(this));
  }
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  // 아이콘과 폴더 갯수를 받아 그 갯수 만큼 출력 코드
  constructor() {
    this.input1 = document.createElement("input");
    this.input2 = document.createElement("input");
    this.input1.className = "IconInput";
    this.input2.className = "FolderInput";
    const section = document.querySelector(".desktop");
    section.innerHTML = `<button class="btn">전송</button>`;
    section.append(this.input1, this.input2);
    const btn = document.querySelector(".btn");
    this.d1 = document.querySelector(".IconInput");
    this.d2 = document.querySelector(".FolderInput");
    btn.addEventListener("click", this.post.bind(this));
  }
  post() {
    for (let i = 0; i < this.input1.value; i++) {
      let myIcon = new Icon("Icon");
    }
    for (let i = 0; i < this.input2.value; i++) {
      let myFolder = new Folder("Folder");
      myFolder.rander();
    }
  }
}
