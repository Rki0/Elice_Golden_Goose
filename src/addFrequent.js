// 작심 추가 기능

import { createFrequent } from "./createFrequentHtmlTag.js";
import { toggleAdd } from "./toggleAddFrequent.js";
import { validateInput } from "./validateInput.js";
import { fetchDataForDelete } from "./deleteFrequent.js";

const input = document.getElementsByClassName("frequent_input")[0];
const btns = document.getElementsByClassName("frequent_default")[0];

export const addFrequent = () => {
  const jaksim = input.value;

  if (!validateInput(jaksim)) {
    return alert("1 ~ 20자만 입력 가능합니다.");
  }

  const prevDataList = JSON.parse(localStorage.getItem("JAKSIM"));

  const createdData = {
    id: prevDataList[prevDataList.length - 1].id + 1,
    content: jaksim,
  };

  const updatedData = [...prevDataList, createdData];

  localStorage.setItem("JAKSIM", JSON.stringify(updatedData));

  const btn = createFrequent(createdData);
  btns.appendChild(btn);

  input.value = "";

  toggleAdd();

  fetchDataForDelete();
};

// 작심을 전부 지운 뒤, 추가하는 경우 에러 발생.
