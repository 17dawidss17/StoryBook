import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 5 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  driection: "row",
  spacing: 3,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 3,
  wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 50,
  direction: "row",
  spacing: 3,
  wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 3,
  wrap: false,
};
