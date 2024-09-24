import { useForm } from 'react-hook-form';

import { IGrocery } from 'models';

interface IProps {
  defaultValues?: IGrocery;
}

export const useCreateGroceryForm = ({ defaultValues }: IProps) => {
  const methods = useForm<IGrocery>({
    defaultValues,
  });

  return methods;
};
