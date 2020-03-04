module.exports = function addMinutes(date, minutes) {
  console.log(date, "sddkdkk");
  const newDate = new Date(date.getTime() + minutes * 60000);
  console.log("new", newDate);
  return newDate;
};
