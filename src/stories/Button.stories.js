import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: "blue",
  label: "Blue",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "green",
  label: "Green",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "purple",
  label: "Purple",
  size: "lg",
};
