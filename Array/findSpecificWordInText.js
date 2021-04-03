const conversation = '@React Native tudo bem? viu o @React? e o @Thadeu Munhóz? está junto com o @Thadeu?'
const mentions = ['Thadeu', 'Thadeu Santos', 'Thadeu Cesário', 'React', 'React Native', 'João', 'João Santos', 'Thadeu Munhóz'];


function filterSpecificNamesMentioned(mentions, text) {
    const finalMentions = [];
    let candidateMentions = [];
    const arrayConversation = text.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
    
    for(let j = 0; j < arrayConversation.length; j++) {
        if(arrayConversation[j].includes('@')) {
            const consolidatedWord = `${arrayConversation[j].replace('@', '')} ${arrayConversation[j+1] || ''}`;
            candidateMentions.push(consolidatedWord);
        }
    }

    mentions.forEach((mention, indexMention) => {
        candidateMentions.forEach((candidate, indexCandidate) => {
            if(mention === candidate) {
                finalMentions.push(candidate);
                mentions.splice(indexMention, 1);
                candidateMentions.splice(indexCandidate, 1);
            }
        })
    });

    mentions.forEach(mention => {
        candidateMentions.forEach((candidate) => {
            if(candidate.includes(mention)) finalMentions.push(mention);
        })
    })

    return finalMentions;
}

filterSpecificNamesMentioned(mentions, conversation);
