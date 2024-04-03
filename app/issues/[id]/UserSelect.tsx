"use client";

import { Select } from "@radix-ui/themes";
import React from "react";

const UserSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..."></Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">User 1</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default UserSelect;
