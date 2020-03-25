module.exports = error => {
  if (error.response.status === 503) {
    alert("Unauthorized to perform action");

    window.location.href = "/#/login";
  }
};
