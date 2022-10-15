/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryObj } from "@storybook/react";

import { Text } from "../Text/Text";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text>Checkbox Component</Text>
        </div>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
