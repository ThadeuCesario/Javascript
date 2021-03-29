function countDuplicatesValues(array) {
    const counts = array.reduce((acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }), {});
    return counts;
  }
  

const arrayExample = ['Thadeu', 'Thadeu', 'Leo', 'Melati', 'Melati'];

console.log(countDuplicatesValues(arrayExample));