import projectIcon from '../../images/trusted/project-icon.svg';
import contestIcon from '../../images/trusted/contest-icon.svg';
const choosePostingData = {
    title: 'How would you like to get it done?',
    chooseItemContent: 'Based on the description you have written, we recommend posting a contest. Contests are great for when you want to crowdsource the best ideas.',
    category: [
        {img: projectIcon, choosePostTitle: 'Post a project', description: 'Recieve free quotes, best for when you have a specific idea, the project is not visual in nature or the project is complex.'},
        {img: contestIcon, choosePostTitle: 'Start a contest', description: 'Crowdsource ideas. Post a prize and get competing entries which you can iterate on with feedback. Great for visuals.'},
    ]
}

export default choosePostingData;