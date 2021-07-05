import projectIcon from '../../images/trusted/project-icon.svg';
import recruiterIcon from '../../images/trusted/recruiter-001.svg';
const projectTypeData = {
    title: 'What type of project are you posting?',
    category: [
        {img: projectIcon, title: 'Standard Project', description: 'Free to post, your project will go live instantly and start receiving bids within seconds', status: 'Free'},

        {img: recruiterIcon, title: 'Recruitter project', description: `We'll assign one of our expert staff to help you find the perfect freelancer for the job.`, status: 'ONLY 9.00$ USD'},
    ]

}

export default projectTypeData;