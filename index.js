require('datejs');

function combineUsers(...userArrays) {
  const combinedObject = {
    users: [],
    merge_date: ""
  };

  for (let arr of userArrays) {
    combinedObject.users.push(...arr);
  }

  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};