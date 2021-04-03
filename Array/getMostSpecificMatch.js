function getMostSpecificMatch(text, matchList) {
    let match;
  
    matchList
      .sort((a, b) => b.length - a.length)
      .some(str => {
        const doesMatch = text.includes(str);
        if (doesMatch) {
  
          match = str;
        }
        return doesMatch;
      });
  
    return match;
  }
  
  const sampleText = 'Olá @React tudo bem? Viu o @React Native?';
  const sampleList = ['React', 'React Native'];

  console.log(getMostSpecificMatch(sampleText, sampleList));