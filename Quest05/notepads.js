class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  constructor(value) {
    this.input = value;
    this.section = document.querySelector(".section");
    this.BoldSt = document.querySelector(".Bold");
    this.ItalicSt = document.querySelector(".Italic");
    this.UnderlineSt = document.querySelector(".Under");
    this.CenterP = document.querySelector(".Canter");
    this.LeftP = document.querySelector(".Left");
    this.RightP = document.querySelector(".Right");
    this.Fsize = document.querySelector("#fontS");
    this.save = document.querySelector(".store");
    this.new = document.querySelector(".new");

    this.BoldSt.addEventListener("click", this.BoldChange.bind(this));
    this.ItalicSt.addEventListener("click", this.ItalicChange.bind(this));
    this.UnderlineSt.addEventListener("click", this.UnderChange.bind(this));
    this.CenterP.addEventListener("click", this.Center.bind(this));
    this.LeftP.addEventListener("click", this.Left.bind(this));
    this.RightP.addEventListener("click", this.Right.bind(this));
    this.Fsize.addEventListener("change", this.fontS.bind(this));
    this.save.addEventListener("click", this.Save.bind(this));
    this.new.addEventListener("click", this.change.bind(this));

    console.log(localStorage.getItem("text"));
  }

  BoldChange() {
    this.input.style.fontWeight = "bold";
  }
  ItalicChange() {
    this.input.style.fontStyle = "italic";
  }
  UnderChange() {
    this.input.style.textDecoration = "underline";
  }
  Center() {
    this.input.style.textAlign = "center";
  }
  Left() {
    this.input.style.textAlign = "left";
  }
  Right() {
    this.input.style.textAlign = "right";
  }
  fontS() {
    const a = this.Fsize.options[this.Fsize.selectedIndex].value;
    this.input.style.fontSize = `${a}px`;
  }
  Save() {
    // if (localStorage.getItem("text") === this.input.value) {
    //   alert("값이 같아요");
    // }
    localStorage.text = this.input.value;
  }
  change() {}
}
