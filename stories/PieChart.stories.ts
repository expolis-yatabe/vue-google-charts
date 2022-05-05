import { GChart } from '../src';

const defaultArgs = {
  type: 'PieChart',
  data: [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ],
  options: {
    title: 'My Daily Activities',
    width: 800,
    height: 600,
  },
};

export default {
  title: 'PieChart',
  component: GChart,
  parameters: {
    layout: 'centered',
  },
  args: defaultArgs,
};

const Template = args => ({
  components: { GChart },
  setup() {
    return { args };
  },
  template: '<GChart v-bind="args" />',
});

export const DefaultPieChart = Template.bind({});
DefaultPieChart.args = { ...defaultArgs };