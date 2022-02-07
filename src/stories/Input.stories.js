import Input from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  padding: 1,
  border: "1px solid black",
  placeholder: "Small",
};

export const Big = Template.bind({});
Big.args = {
  padding: 4,
  border: "3px solid green",
  placeholder: "Big",
};

export const Yellow = Template.bind({});
Yellow.args = {
  padding: 1,
  border: "3px solid blue",
  placeholder: "Yellow",
  backgroundColor: "yellow",
};
