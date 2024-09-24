import { FC } from 'react';

import { Button, ButtonGroup, ButtonText } from 'view/@gluestack/ui/button';

interface IProps {
  title: string;
  onPress?(): void;
  action?: 'default' | 'primary' | 'secondary' | 'positive' | 'negative' | undefined;
}

const Touchable: FC<IProps> = ({ title, onPress, action = 'primary' }) => {
  return (
    <ButtonGroup>
      <Button action={action} className="m-1" disabled={!onPress} variant="solid" onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default Touchable;
