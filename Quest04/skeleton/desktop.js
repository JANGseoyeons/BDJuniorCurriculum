class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  // desktop html 가져옴
  constructor(props) {
    this.props = props;
  }
}

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  //드래그 기능
  drag() {
    console.log("hi");
  }
}

class Folder extends Icon {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  // 더블 클릭 시 폴더 창열림 기능
  open() {}
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  // 아이콘, 폴더 갯수 기능
  count() {}
}
