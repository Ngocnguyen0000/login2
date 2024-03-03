const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");


btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else if ( inputUsernameRegister.value == "admin" &&
              inputPasswordRegister.value == 123) {
    alert("Đăng Ký Thành Công.");
    window.location.href = "index.html";
  }else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Tên đăng nhập hoặc mật khẩu không đúng");
    window.location.href = "signup.html";
  }
});
