function countDuplicatesValues(array) {
    const counts = array.reduce((acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }), {});
    return counts;
  }
  

const arrayExample = [1,5,4,7,8,1,2,3,4,5,2,3,4,5,8,9,5,7,8,9];

console.log(countDuplicatesValues(arrayExample));