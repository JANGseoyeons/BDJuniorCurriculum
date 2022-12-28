class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  // desktop html 가져옴
  constructor(props) {
    this.props = props;
  }
  folder() {
    let div = document.createElement("div");
    div.setAttribute("class", "folder");
    this.props.appendChild(div);
    return this.props;
  }
}

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
}

class Folder {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  // 폴더 아이콘의 위치
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
}
