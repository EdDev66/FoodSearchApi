import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Recipe from './components/Recipes';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Modal/Backdrop';
import Popup from './components/UI/NotFoundPopup';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [recipesLoaded, setRecipesLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [urlAddress, setUrlAddress] = useState('');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    getData();
  }, [searchTerm])
  

  const APP_ID = '00a533d1';
  const APP_KEY = '27c6927bc342b07f8a9fd6e64478da8f';

  const updateSearch = (text) => {
    if(text === ''){
      setAlert('Please enter something');

      setTimeout(() => {
        setAlert(null);
      }, 3000)
    } else {
      setSearchTerm(text);
    }
  }

  const openModal = (ingredients, url) => {
    setShowModal(true);
    setIngredientList(ingredients);
    setUrlAddress(url);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  const getData = async () => {
    if(searchTerm != ''){
      let url = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
      const result = await fetch(url);
      const data = await result.json();
      
      if(data.hits.length === 0){
        setAlert('Search term not found!');

        setTimeout(() => {
          setAlert(null);
        }, 3000)
      } else {
        setRecipes(data.hits);
        setRecipesLoaded(true);
        console.log(data);
      }
    }
  }

  return (
    <div className="App">
      {showModal ? <Backdrop onModalClose={closeModal}/> : null}
      {showModal ? <Modal ingredients={ingredientList} url={urlAddress} /> : null}
        <h1 className="heading">#1 Recipes</h1>
        {alert ? <Popup alertMsg={alert}/> : null}
        <SearchBar updateSearch={updateSearch}/>
        { recipesLoaded ? recipes.map(recip => (
          <Recipe
          key={recip.recipe.label}
          title={recip.recipe.label} 
          calories={recip.recipe.calories} 
          image={recip.recipe.image}
          ingredients={recip.recipe.ingredients}
          url={recip.recipe.url}
          viewRecipe={openModal}
          />
        )) : null}
    </div>
  );
}

export default App;
