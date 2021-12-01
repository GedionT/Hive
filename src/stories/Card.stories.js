import DataCard from '../components/dataCard.jsx';

export default {
  title: 'DataCard',
  component: DataCard,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <DataCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  openData: {
    title: 'Campaign for Breast Cancer Awareness',
    imgSrc:
      'https://www.saintjohnscancer.org/blog/wp-content/uploads/sites/11/2020/09/iStock-1175329868-1024x630-1.jpg',
    activity: 'Ends on January 13, 2022',
    people: [
      {
        name: 'Gedion Teshome',
        profileImageSrc: 'https://avatars.githubusercontent.com/u/26666155?v=4',
      },
      {
        name: 'Henok Fisseha',
        initials: 'HF',
      },
      {
        name: 'Fasika Zewdie',
        profileImageSrc: 'https://avatars.githubusercontent.com/u/26666155?v=4',
      },
      {
        name: 'Getachew Muhabaw',
        profileImageSrc: '',
        initials: 'GM',
      },
    ],
  },
};
