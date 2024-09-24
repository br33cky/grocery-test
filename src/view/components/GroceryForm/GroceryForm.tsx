import { FC } from 'react';

import { FormProvider } from 'react-hook-form';

import { useCreateGroceryForm } from 'hooks/useForms';

import { Button, Input, Switch } from 'view/ui-kit';

import { IAddGrocery, IGroceryInfo } from 'api/features/grocery/models';
import { IGrocery } from 'models';

interface IProps {
  defaultValues?: IGrocery;
  onSubmit(values: IGrocery | IGroceryInfo | IAddGrocery): void;
}

export const GroceryForm: FC<IProps> = ({ defaultValues, onSubmit }) => {
  const methods = useCreateGroceryForm({ defaultValues });

  const handleSubmit = methods.handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <Input name="title" placeholder="Title" />
      <Input name="amount" placeholder="Amount" />
      <Switch name="isBought" />

      <Button title="Submit" onPress={handleSubmit} />
    </FormProvider>
  );
};
