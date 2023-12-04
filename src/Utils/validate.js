export const checkValidData = (email, password) => {
  if (!email) return "Please Enter an Email";
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  if (!isEmailValid) {
    return "Email is not valid";
  }
  
  if (!password) return "Please Enter a Password";
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) {
    return "Password is not valid, it should contain 1 capitalcase, 1 smallcase, 1 special character";
  }

  return null;
};
