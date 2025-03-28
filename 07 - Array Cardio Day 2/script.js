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
  const isAdult = people.some(person=> {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - person.year) >= 19;
  });
  console.log("One is Old Enough: ", isAdult);

  
  // Array.prototype.every() // is everyone 19 or older?
  const allAdults = people.every(person=> {
    const currentYear = (new Date()).getFullYear();
    return (currentYear - person.year) >= 19;
  });
  console.log("All Adults: ", allAdults);

  console.log(
    people.map(person=> {
        const date = new Date();
        const year = date.getFullYear();
        return year - person.year;
    })
  );

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  console.log("FIND id of 823423: ",
    comments.find(comment => {
        return comment.id === 823423;
    })
  )


  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const findIndex = comments.findIndex(comment=> comment.id === 823423);

  console.log("Delete comment with id 823423: ",comments.map((comment,index)=> {
    if(findIndex === index){
        delete comment.text;
    }
    return comment;
  }))

//   comments.splice(findIndex, 1);
const newComments = [
    ...comments.slice(0, findIndex),
    ...comments.slice(findIndex + 1)
];


console.log("New Comments: ", newComments);