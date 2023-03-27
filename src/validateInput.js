// form > input 태그의 value 검증

export const validateInput = (text) => {
  if (text.length < 1 || text.length > 20) {
    return false;
  }

  return true;
};
