import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MealsList from '../components/meals/MealsList';
import { supabase } from '../lib/supabase';

function HomeScreen() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const { data, error } = await supabase.from('meals').select('*');

      if (error) {
        console.error('Greška pri dohvatanju obroka:', error.message);
      } else {
        setMeals(data);
      }
    };

    fetchMeals();
  }, []);

  return (
    <View style={styles.container}>
      <MealsList meals={meals} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
