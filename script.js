
const button = document.querySelector('button');
const newBackgroundColor = document.querySelector('body');

button.addEventListener('click',()  => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    const noun = ['cat', 'dog', 'elephant', 'ant', 'frog', 'duck', 'snake', 'whale', 'bear', 'lion', 'pangolin', 'sloth'];
    const adjective = ['dotted', 'striped', 'monochromatic', 'transparent', 'blue', 'blurry', 'flowery', 'brocade', 'checkered', 'chevron', 'ditsy' ];
    const verb = ['swimming', 'skiing', 'diving', 'jogging', 'sunbathing', 'sliding', 'dancing', 'smiling', 'slepping'];
    
    const getRandom = arr => {
        let holder = arr;
        let counter = arr.length;
        let temp;
        let index;
        index = Math.floor(Math.random()*counter--);
        temp = holder[counter];
        holder[counter] = holder[index];
        holder[index] = temp;
        let randomNumber = Math.floor(Math.random() * holder.length);
        return holder[randomNumber]
    }
    
    const getRandomMessage = () => {
        let firstWord = getRandom(verb);
        let firstWordCapitalized =  firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
        return `${firstWordCapitalized} ${getRandom(adjective)} ${getRandom(noun)}!`
    
    }
    
    let result = getRandomMessage();
    button.innerText = result;
    newBackgroundColor.style.backgroundColor = color;

})
