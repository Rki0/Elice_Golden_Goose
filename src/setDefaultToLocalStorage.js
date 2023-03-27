export const setDefaultToLocalStorage = () => {
  let defaultFrequent = [
    {
      id: 0,
      content: "엘리스 강의듣기",
      type: "물",
    },
    {
      id: 1,
      content: "주간 테스트 보기",
      type: "태양",
    },
    {
      id: 2,
      content: "헬스장 가기",
      type: "영양",
    },
    {
      id: 3,
      content: "스터디 카페 가기",
      type: "물",
    },
    {
      id: 4,
      content:
        "엄청나게 긴 텍스트가 있다면엄청나게 긴 텍스트가 있다면엄청나게 긴텍스트가 있다면",
      type: "영양",
    },
  ];

  localStorage.setItem("JAKSIM", JSON.stringify(defaultFrequent));
};