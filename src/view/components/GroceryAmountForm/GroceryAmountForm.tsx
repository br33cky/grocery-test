import { FC } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input } from 'view/ui-kit';

import { IGrocery } from 'models';

interface IProps {
  defaultValues?: IGrocery;
  onSubmit(data: IGrocery): void;
}

export const GroceryAmountForm: FC<IProps> = ({ defaultValues, onSubmit }) => {
  const methods = useForm({ defaultValues });

  const handleSubmit = methods.handleSubmit(data => onSubmit(data));

  return (
    <FormProvider {...methods}>
      <Input name="amount" placeholder="Amount" />

      <Button title="Submit" onPress={handleSubmit} />
    </FormProvider>
  );
};
