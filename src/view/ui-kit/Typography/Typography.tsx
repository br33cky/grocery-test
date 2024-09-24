import { FC } from 'react';

import { Heading } from 'view/@gluestack/ui/heading';

import { classNames } from 'utils';

interface IProps {
  children: React.ReactNode;
  outline?: boolean;
}

export const Typography: FC<IProps> = ({ children, outline }) => {
  return (
    <Heading className={classNames('leading-normal mb-0 l p-1', outline && 'line-through')} size="sm">
      {children}
    </Heading>
  );
};
