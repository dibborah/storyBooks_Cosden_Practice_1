import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from "react";

import { Button } from "../components/Button";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        buttonText: 'Test',
        variant: 'primary',
        size: 'md',
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>
            {buttonText}
        </Button>
    },
};
