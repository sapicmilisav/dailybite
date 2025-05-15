import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

function MealItem({ id, image_url, title, servings, calories }) {
  const navigation = useNavigation();

  function mealPressHandler() {
    navigation.navigate('MealDetail', { mealId: id });
  }

  return (
    <Pressable onPress={mealPressHandler}>
      <View style={styles.mealItem}>
        <Image source={{ uri: image_url }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>
            {servings} porcija · {calories}kcal
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
  },
});
