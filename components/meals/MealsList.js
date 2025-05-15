import { FlatList } from 'react-native';
import MealItem from './MealItem';

function renderMealItem(itemData) {
  return <MealItem {...itemData.item} />;
}

function MealsList({ meals }) {
  return (
    <FlatList
      data={meals}
      renderItem={renderMealItem}
      keyExtractor={(meal) => meal.id}
    />
  );
}

export default MealsList;
