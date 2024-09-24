import { FC } from 'react';

import { useController } from 'react-hook-form';

import { Input, InputField } from 'view/@gluestack/ui/input';

interface IProps {
  name: string;
  placeholder?: string;
}

const TextInput: FC<IProps> = ({ name, placeholder }) => {
  const { field } = useController({ name });

  return (
    <Input className="m-1" size="md" variant="outline">
      <InputField placeholder={placeholder} value={field.value} onChangeText={field.onChange} />
    </Input>
  );
};

export default TextInput;
