import React, { useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Select, Space } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import type { InputRef } from "antd";

let index = 0;

const BaseCustomSelect = ({ name }) => {
  const { control } = useFormContext(); // Access form context
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, nameInput || `New item ${index++}`]);
    setNameInput("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleSelectChange = (value) => {
    setSelectedItems(value); // Update selected items
  };

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Select
          {...field}
          mode="multiple"
          value={selectedItems}
          onChange={(value) => {
            handleSelectChange(value);
            field.onChange(value);
          }}
          style={{ width: "100%" }}
          size="large"
          placeholder="custom dropdown render"
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{ margin: "8px 0" }} />

              <Input
                placeholder="Please enter item"
                ref={inputRef}
                value={nameInput}
                onChange={onNameChange}
                onKeyDown={(e) => e.stopPropagation()}
              />
              <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                Add item
              </Button>
            </>
          )}
          options={items.map((item) => ({ label: item, value: item }))}
        />
      )}
    />
  );
};

export default BaseCustomSelect;
