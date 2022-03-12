const findTheOldest = function (people) {
  const oldest = people.sort((a, b) => {
    if (typeof(a.yearOfDeath) !== 'number') {a.yearOfDeath = new Date().getFullYear()}
    if (typeof(b.yearOfDeath) !== 'number') {b.yearOfDeath = new Date().getFullYear()}
    return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1
  })
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
