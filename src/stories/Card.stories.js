import DataCard from '../components/dataCard.jsx';

export default {
  title: 'DataCard',
  component: DataCard,
  argTypes: { handleClick: { action: 'clicked' } }, 
};

const Template = (args) => <DataCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  label: 'Card',
  size: 'medium',
};
