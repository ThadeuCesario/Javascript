const conversation = '@React tudo @React Native bem por ai? Viu o @Thadeu Santos e ai ?'
const mentions = ['Thadeu', 'Thadeu Santos', 'Thadeu Cesário', 'React', 'React Native', 'João', 'João Santos'];


function filterSpecificNamesMentioned(mentions, text) {
    const finalMentions = [];
    let candidateMentions = [];
    const arrayConversation = text.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
    const mentionsTreated = mentions.map(mention => mention.replace(' ', ''));
    
    for(let i = 0; i < mentionsTreated.length; i++) {
        for(let j = 0; j < arrayConversation.length; j++) {
            if(arrayConversation[j].includes('@')) {
                if(!candidateMentions.includes(arrayConversation[j])) candidateMentions.push(arrayConversation[j]);
                const unconsolidatedWord = `${arrayConversation[j].replace('@', '')} ${arrayConversation[j+1] || ''}`;
                const consolidatedWord = `${arrayConversation[j].replace('@', '')}${arrayConversation[j+1] || ''}`;
                if(consolidatedWord.includes(mentionsTreated[i]) && consolidatedWord.length === mentionsTreated[i].length) {
                    finalMentions.push(unconsolidatedWord);
                }
            }
        }
    }

    console.log('candidateMentions', candidateMentions);
    console.log('finalMentions', finalMentions);
    return finalMentions;
}

filterSpecificNamesMentioned(mentions, conversation);