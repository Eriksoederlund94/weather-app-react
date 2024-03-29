export const getTheCurrentDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + '/' + mm + '/' + dd;
  return today;
};

export const fixSearchString = (str) => {
  const stringResult = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return stringResult;
};
