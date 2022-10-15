/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";

import { TextInput, RootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <EnvelopeSimple />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your email" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<RootProps>;

export const Default: StoryObj<RootProps> = {};

export const WithoutIcon: StoryObj<RootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your email" />,
  },
};
