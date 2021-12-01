import NavigationBar from '../components/navigation';

export default {
  title: 'NavigationBar',
  component: NavigationBar,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <Nav {...args} />;

export const Nav = Template.bind({});
Nav.args = {};
