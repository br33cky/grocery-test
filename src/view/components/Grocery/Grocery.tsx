import { FC, useState } from 'react';

import { useMutationUpdateGrocery } from 'hooks/useRequests';

import { Button, Typography } from 'view/ui-kit';

import { GroceryAmountForm } from '../GroceryAmountForm';

import { IGrocery } from 'models';

import { Box } from '../../@gluestack/ui/box';

interface IProps {
  data: IGrocery;
  removeItem(data: IGrocery): void;
  updateItem(data: IGrocery): void;
  buyItem(data: IGrocery): void;
}

const Grocery: FC<IProps> = ({ data, removeItem, updateItem, buyItem }) => {
  const [isOpenAmountForm, setAmountForm] = useState(false);

  const handleCloseForm = () => setAmountForm(false);

  const updateGroceryMutation = useMutationUpdateGrocery();

  const handleToggleForm = () => setAmountForm(p => !p);

  const handleSubmitAmountForm = (grocery: IGrocery) => {
    handleCloseForm();

    updateGroceryMutation.mutate(grocery);
  };

  return (
    <Box className="p-4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Box>
        <Typography outline={data.isBought}>id: {data.id}</Typography>
        <Typography>Title: {data.title}</Typography>
        <Typography>Amount: {data.amount}</Typography>
        <Typography>isBought: {String(data.isBought)}</Typography>
      </Box>

      {isOpenAmountForm && <GroceryAmountForm defaultValues={data} onSubmit={handleSubmitAmountForm} />}

      <Box className="flex flex-row flex-wrap">
        <Button action="primary" title="Buy" onPress={() => buyItem(data)} />
        <Button action="negative" title="Drop" onPress={() => removeItem(data)} />
        <Button action="positive" title="Set" onPress={() => updateItem(data)} />
        <Button action="primary" title="Set Amount" onPress={handleToggleForm} />
      </Box>
    </Box>
  );
};

export default Grocery;
