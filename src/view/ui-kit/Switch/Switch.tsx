import { FC } from 'react';

import { useController } from 'react-hook-form';

import { Switch } from 'view/@gluestack/ui/switch';

interface IProps {
  name: string;
  placeholder?: string;
}

const Toggle: FC<IProps> = ({ name }) => {
  const { field } = useController({ name });

  const isActive = Boolean(field.value);

  const handlePress = () => {
    field.onChange(!isActive);
  };

  return <Switch size="md" value={isActive} onChange={handlePress} />;
};

export default Toggle;
