import fixedPrice from '../../images/trusted/fixed-price-project.svg';
import hourlyPrice from '../../images/trusted/hourly-price-project.svg';
const howToPayData = {
    title: 'How do you want to pay?',
    category: [
        {img: fixedPrice, payTitle: 'Pay fixed price', description: 'Agree on a price and release payment when the job is done. Best for one-off tasks.'},

        {img: hourlyPrice, payTitle: 'Pay by the hour', description: 'Hire based on an hourly rate and pay for hours billed. Best for ongoing work.'},
    ]
}

export default howToPayData;