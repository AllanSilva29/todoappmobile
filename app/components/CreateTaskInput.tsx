import React from "react";
import axios from "axios";
import { api } from "backend/api";
import { Button, Input, SizeTokens, XStack } from "tamagui";
import { useToastController } from "@tamagui/toast";

export function CreateTaskInput(props: {
  size: SizeTokens;
  placeholder: string;
  toast: { title: string; message: string };
}) {
  const toast = useToastController();

  const [task, setTask] = React.useState("");

  const onChangeTask = (value: string) => setTask(value);
  const createTask = () => {
    toast.show(props.toast.title, {
      message: props.toast.message,
    });
    axios.get(`${api.baseUrl}/test`).then((response) => console.log(response));
    console.log(task);
  };

  return (
    <XStack alignItems="center">
      <Input
        flex={1}
        size={props.size}
        placeholder={props.placeholder}
        value={task}
        onChangeText={onChangeTask}
        mr="$3"
      />
      <Button
        size={props.size}
        color={"$green10"}
        bg="$white025"
        onPress={createTask}
      >
        Criar
      </Button>
    </XStack>
  );
}
