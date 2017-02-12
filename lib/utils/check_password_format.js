// const PASSWORD_REGEX=/^[*]{6,}$/i;

const checkPasswordFormat=(string)=>{
  return string && string.length>=6;// PASSWORD_REGEX.test(string)
};
export default checkPasswordFormat;
