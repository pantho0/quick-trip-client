import React, { useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Select } from "antd";
import { Controller } from "react-hook-form";
import type { InputRef } from "antd";

let index = 0;

type TBaseSelectProps = {
  name: string;
  label: string;
  defaulItems?: string[] | never[] | any;
  className?: string;
  dropdownClassName?: string;
};

const BaseCustomSelect = ({ 
  name, 
  label, 
  defaulItems, 
  className = '',
  dropdownClassName = '' 
}: TBaseSelectProps) => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState(defaulItems);
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

  const handleSelectChange = (value: any) => {
    setSelectedItems(value);
  };

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            mode="multiple"
            value={selectedItems}
            onChange={(value) => {
              handleSelectChange(value);
              field.onChange(value);
            }}
            className={className}
            popupClassName={dropdownClassName}
            style={{ width: "100%" }}
            size="large"
            placeholder="Select features"
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
          {error && <small style={{ color: "red" }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default BaseCustomSelect;
