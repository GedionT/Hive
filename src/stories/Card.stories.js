import DataCard from '../components/dataCard.jsx';

export default {
  title: 'DataCard',
  component: DataCard,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <DataCard {...args} />;

export const Cards = Template.bind({});
Cards.args = {
  people: [
    {
      name: 'Kidus Teshome',
      profileImageSrc: 'https://avatars.githubusercontent.com/u/26666155?v=4',
    },
    {
      name: 'Savannah Johnson',
      profileImageSrc: 'https://avatars.githubusercontent.com/u/26666155?v=4',
    },
  ],
  oneNoteIconProps: {
    iconName: 'OneNoteLogo',
    styles: {
      root: {
        color: '#00000',
        fontSize: '120px',
        width: '120px',
        height: '120px',
      },
    },
  },
};
