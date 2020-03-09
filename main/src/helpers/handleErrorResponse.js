module.exports = error => {
  if (error.response.status === 503) {
    localStorage.setItem("User", "");
    localStorage.setItem("loggedIn", "");
    localStorage.setItem("Auth", "");

    window.location.href = "/#/login";
  }
};
