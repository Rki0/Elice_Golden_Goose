// 작심 추가 토글 기능

const addBtn = document.getElementsByClassName("frequent_add_button")[0];
const addForm = document.getElementsByClassName("frequent_form")[0];
const input = document.getElementsByClassName("frequent_input")[0];

export const toggleAdd = () => {
  addBtn.classList.toggle("hidden");
  addForm.classList.toggle("hidden");

  // input 태그 focus 설정
  input.focus();
};
