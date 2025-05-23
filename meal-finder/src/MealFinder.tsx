import styles from './MealFinder.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRandom } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';

interface MealProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strSource: string;
  ingredients: Array<{ ingredient: string; measurement: string }>;
}

const MealFinder = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [meal, setMeal] = useState<MealProps[]>([]);
  const [searchedMeal, setSearchedMeal] = useState<MealProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastSearchedTerm, setLastSearchedTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const getRandomMeal = async () => {
    const { data: result } = await axios.get(`${baseUrl}/random.php`);
    const fetchedMeal = result.meals[0];

    const ingredients = [];

    for (let i = 1; i < 20; i++) {
      const ingredient = fetchedMeal[`strIngredient${i}`];
      const measurement = fetchedMeal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ ingredient, measurement: measurement || '' });
      }
    }
    setSearchedMeal([]);
    setMeal([{ ...fetchedMeal, ingredients }]);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanedSearchTerm = searchTerm.trim();

    if (cleanedSearchTerm === '') return;

    const { data: result } = await axios.get(`${baseUrl}/search.php?s=${cleanedSearchTerm}`);

    if (result.meals && result.meals.length > 0) {
      const processedMeals = result.meals.map((fetchedMeal: any) => {
        const ingredients = [];

        for (let i = 1; i < 20; i++) {
          const ingredient = fetchedMeal[`strIngredient${i}`];
          const measurement = fetchedMeal[`strMeasure${i}`];

          if (ingredient && ingredient.trim() !== '') {
            ingredients.push({ ingredient, measurement: measurement || '' });
          }
        }

        return { ...fetchedMeal, ingredients };
      });

      setMeal([]);
      setLastSearchedTerm(searchTerm);
      setSearchTerm('');
      setIsSearching(true);
      setSearchedMeal(processedMeals);
    } else {
      setMeal([]);
      setIsSearching(true);
      setSearchedMeal([]);
    }
    console.log(result);
    console.log(searchTerm);
  };
  return (
    <div>
      <h1>Meal Finder</h1>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            id="search"
            placeholder="Search for meals or keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton} type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <button className={styles.randomButton} onClick={getRandomMeal}>
          <FontAwesomeIcon icon={faRandom} />
        </button>
      </div>
      <div className={styles.container}>
        {meal.length > 0 && (
          <div className={styles.container}>
            <h1>{meal[0].strMeal}</h1>
            <img src={`${meal[0].strMealThumb}/medium`} alt="meal-image" className={styles.mealImage} />
            <div className={styles.mealdescription}>
              <p>{meal[0].strCategory}</p>
              <p>{meal[0].strArea}</p>
            </div>
            <p className={styles.mealInstructions}>{meal[0].strInstructions}</p>
            <h2>Ingredients</h2>
            <ul>
              {meal[0].ingredients.map((item, idx) => (
                <li key={idx}>{`${item.ingredient} ${item.measurement}`}</li>
              ))}
            </ul>
          </div>
        )}
        {searchedMeal.length > 0 && (
          <div>
            <h2>Search results for '{lastSearchedTerm}'</h2>
            <div className={styles.display}>
              {searchedMeal.map((item, idx) => (
                <div className={styles.result}>
                  <img src={item.strMealThumb} alt="mealImage" className={styles.searchImage} />
                  <p key={idx} className={styles.searchName}>
                    {item.strMeal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isSearching && meal.length === 0 && searchedMeal.length === 0 && (
          <h2>There are no search results. Try again!</h2>
        )}
      </div>
    </div>
  );
};

export default MealFinder;
