 // ## Array Cardio Day 2

 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  // Array.prototype.every() // is everyone 19 or older?
  const olderThan19 = people.some((person) => {
      const age = 2022 - person.year;
      return age >= 19;
  });
  console.log('some array check', olderThan19);

  const everyoneOver19 = people.every((person) => {
      const age = 2022 - person.year;
      return age >= 19;
  });
  console.log('every array check', everyoneOver19);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  const found = comments.find((comment) => comment.id === 823423);
  console.log('find array', found);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const findAndDelete = comments.findIndex((comment) => comment.id === 823423);
  console.log('findIndex Array', findAndDelete);
  comments.splice(findAndDelete, 1);
  console.log('delete index', comments);