import { toggleAdd } from "./toggleAddFrequent.js";
import { addFrequent } from "./addFrequent.js";
import { showDefault } from "./showDefault.js";
import { deleteFrequent } from "./deleteFrequent.js";
import { setDefaultToLocalStorage } from "./setDefaultToLocalStorage.js";
import { fetchDataForDelete } from "./deleteFrequent.js";
import { showModal } from "./modal/ZaksimToday.js";
import { addEventToEachFrequent } from "./getDetailFromHover.js";

// 디폴트 작심 설정
setDefaultToLocalStorage();

// 디폴트 작심 보여주기
showDefault();

// 마우스 hover 시 자주 쓰는 작심 확대 기능
addEventToEachFrequent();

const addBtn = document.getElementsByClassName("frequent_add_button")[0];
const cancelBtn = document.getElementsByClassName("frequent_cancel_btn")[0];
// const commitAddBtn = document.getElementById("frequent_add_btn");

// 자주 쓰는 작심 추가 모달 open
addBtn.addEventListener("click", showModal);

// 작심 추가 토글
// addBtn.addEventListener("click", toggleAdd);
// cancelBtn.addEventListener("click", toggleAdd);

// 작심 추가
// commitAddBtn.addEventListener("click", addFrequent);

// 작심 삭제
// const deleteBtn = Array.from(
//   document.getElementsByClassName("frequent_delete_btn")
// );
// for (let i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener("click", (e) => deleteFrequent(e));
// }

fetchDataForDelete();
// deleteFrequent();
