function checkDate(date) {
  if (date === "" || date === null || date === undefined) {
    return new Date().toDateString();
  }
  if (new Date(date) === "Invalid Date") {
    return new Date().toDateString();
  }
  return new Date(date).toDateString();
}

function exercisesWithoutID(exercisesArray) {
  return exercisesArray.map(({ description, duration, date }) => {
    return {
      description,
      duration,
      date,
    };
  });
}

module.exports = { checkDate, exercisesWithoutID };
