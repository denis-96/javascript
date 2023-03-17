Math.pow(2, 2)

function pow(x, n) {
  let result = 1;

  for (let i=0; i<n; i++) {
    result *= x
  }

  return result
}

function pow(x, n) {
  if (n === 1) {
    return x;
  } else if (n === 0) {
    return 1;
  } else {
    return x * pow(x, n - 1)
  }
}

// console.log(pow(2, 1))
// console.log(pow(2, 2))
// console.log(pow(2, 3))
// console.log(pow(2, 0))


const students = {
  js: [{
    name: 'John',
    progress: 100
  }, {
    name: 'Ivan',
    progress: 60
  }],

  html: {
    basic: [{
      name: 'Peter',
      progress: 20
    }, {
      name: 'Ann',
      progress: 18
    }],

    pro: [{
      name: 'Sam',
      progress: 10
    }],
    
    semi: {
      students: [{
        name: 'Test',
        progress: 100
      }]
    }
  }
};


function calcProgress(students) {
  let total = 0;
  let studentsQty = 0;

  for (course of Object.values(students)) {
    if (Array.isArray(course)) {
      studentsQty += course.length

      total += course.reduce((prev, next) => prev.progress + next.progress)
      // course.forEach(element => {
      //   total += element.progress;
      // });
    
    } else {
      for (subCourse of Object.values(course)) {
        studentsQty += subCourse.length
        subCourse.forEach(element => {
          total += element.progress;
        });
        // total += subCourse.reduce((prev, next) => prev.progress + next.progress)

      }
    }
  }

  return total / studentsQty;
}

function calcProgress2(data) {
  if (Array.isArray(data)) {
    let total = 0;

    data.forEach(element => {
      total += element.progress;
    });
    return [total, data.length]
  }

  let total = [0, 0]

  for (let subData of Object.values(data)) {
    const [progress, studentsQty] = calcProgress2(subData);
    total[0] += progress;
    total[1] += studentsQty;
  }
  return total
}

// console.log(calcProgress(students))

const [totalProgress, studentsQty] = calcProgress2(students)
console.log(totalProgress / studentsQty)
