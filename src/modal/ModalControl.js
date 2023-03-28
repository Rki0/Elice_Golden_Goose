// 자주 쓰는 작심 추가 모달 토글 기능
export class Modal {
  constructor() {
    this.modalEl = document.querySelector(".jaksim_today_modal");
    this.backdropEl = document.querySelector(".backdrop");
  }

  show() {
    this.modalEl.style.display = "flex";
    this.backdropEl.style.display = "flex";
  }

  hide() {
    this.modalEl.style.display = "none";
    this.backdropEl.style.display = "none";
  }
}

