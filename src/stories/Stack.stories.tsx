import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from "react";

import Stack from '../components/Stack';

type StoryProps = ComponentProps<typeof Stack>;

const meta: Meta<StoryProps> = {
    component: Stack,
    argTypes: {
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
    args: {},
    render: ({ ...args }) => {
        return <Stack {...args} />
    },
};
