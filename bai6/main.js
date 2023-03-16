var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
  ];
  
  function getTopStudents(students) {
    // Write code here...
    students.sort(function (a, b) {
        return b.score-a.score; 
    });
    students = students.slice(0,3);
    return kq = students.sort( (a, b) => (a.name - b.name))
  }
  getTopStudents(students);
  console.log(getTopStudents(students));