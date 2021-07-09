const StringManipulation = (budget) => {
    const newArray = [];
    for (let index = 0; index < budget.length; index++) {
        const element = budget[index];
        if (element === '$') {
            for (let i = budget.indexOf(element) + 1; i < budget.length; i++) {
                if (element.startsWith('$') && budget.endsWith(')')) {
                    const test = budget[i - 1];
                    newArray.push(test)
                }
            }
            break;
        }

    }
    return newArray.join('');
};

export default StringManipulation;