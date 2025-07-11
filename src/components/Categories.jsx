import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'; 

function Categories() {
  const [currentDisplay, setCurrentDisplay] = useState('all_cards');
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [activeRecipeId, setActiveRecipeId] = useState(null);

  const setMainTitle = (displayType, recipeId = null) => {
    if (displayType === 'restaurant_review') {
      return 'Restaurant Reviews';
    } else if (displayType === 'single_recipe') {
      return 'Recipe';
    }
    return 'Categories';
  };
  

  const handleCategoryClick = (category) => {
    setActiveCategoryId(category);
    if (category === 'restaurant') {
      setCurrentDisplay('restaurant_review');
    } else {
      setCurrentDisplay('category_cards');
    }
  };

  const handleReadMoreClick = (id) => {
    if (id === 'recipe21') { 
      setCurrentDisplay('restaurant_review');
    } else {
      setActiveRecipeId(id);
      setCurrentDisplay('single_recipe');
    }
  };

  const goBackToCards = () => {
    setActiveCategoryId('all');
    setActiveRecipeId(null);
    setCurrentDisplay('all_cards');
  };
  

  const recipeCards = [
   
    { id: 'recipe1', categories: 'vegan quick', imgSrc: 'sal.png', title: 'Classic Caesar Salad', author: 'John Doe', description: 'Quick and delicious salad with crunchy croutons and cheese.', cardBgImg: 'bg1.png' },
    { id: 'recipe2', categories: 'snacks', imgSrc: 'cs.png', title: 'Crispy Samosas', author: 'Priya', description: 'Golden samosas filled with spiced potatoes and crispy wrappers.', cardBgImg: 'bg2.png' },
    { id: 'recipe3', categories: 'desserts', imgSrc: 'cc.png', title: 'Chocolate Cake', author: 'Aleven', description: 'Rich, moist chocolate cake for dessert lovers.', cardBgImg: 'bg3.png' },
    { id: 'recipe4', categories: 'vegan quick', imgSrc: 'pasta.png', title: 'Vegan Pasta Primavera', author: 'Maria', description: 'Fresh veggies tossed in olive oil and pasta.', cardBgImg: 'bg4.png' },
    { id: 'recipe5', categories: 'drinks', imgSrc: 'ml.png', title: 'Mango Lassi', author: 'Raj', description: 'Refreshing mango yogurt drink loved in summer.', cardBgImg: 'bg5.png' },
    { id: 'recipe6', categories: 'snacks', imgSrc: 'puffs.png', title: 'Veg Puffs', author: 'Neha', description: 'Flaky pastry filled with spicy vegetable mix.', cardBgImg: 'bg6.png' },
    { id: 'recipe7', categories: 'desserts indian', imgSrc: 'kesari.png', title: 'Kesari', author: 'Anita', description: 'Indian sweet dish made with semolina and ghee.', cardBgImg: 'bg7.png' },
    { id: 'recipe8', categories: 'drinks vegan', imgSrc: 'smoo.png', title: 'Fruit Smoothie', author: 'Michael', description: 'Colorful smoothie made with banana, berries, and almond milk.', cardBgImg: 'bg8.png' },
    { id: 'recipe9', categories: 'indian', imgSrc: 'poha.png', title: 'Poha', author: 'Kiran', description: 'Quick flattened rice snack with mustard, onion, and lemon.', cardBgImg: 'bg9.png' },
    { id: 'recipe10', categories: 'desserts quick', imgSrc: 'chh.png', title: 'Choco Mug Cake', author: 'Sara', description: 'Microwave chocolate cake in 2 minutes. Perfect for cravings!', cardBgImg: 'bg10.png' },
    { id: 'recipe11', categories: 'indian', imgSrc: 'chik.png', title: 'Chicken Biriyani', author: 'Rani', description: 'Spicy,aromatic rice cooked with marinated chicken and herbs.', cardBgImg: 'bg11.png' },
    { id: 'recipe12', categories: 'drinks', imgSrc: 'shake.png', title: 'Shake', author: 'Murali', description: 'Creamy, chilled drinks made with fruits.', cardBgImg: 'bg12.png' },
    { id: 'recipe13', categories: 'snacks', imgSrc: 'kfc.png', title: 'Broasted', author: 'Benjamin', description: 'Crispy fried chicken with secret spices, just like KFC.', cardBgImg: 'bg13.png' },
    { id: 'recipe14', categories: 'quick', imgSrc: 'pan.png', title: 'Pancake', author: 'Rachel', description: 'Soft, fluffy flat cakes served with syrup and fruits.', cardBgImg: 'bg14.png' },
    { id: 'recipe15', categories: 'indian vegan', imgSrc: 'tikka.png', title: 'Paneer Tikka', author: 'Sobha', description: 'Grilled marinated paneer cubes with veggies and spices.', cardBgImg: 'bg15.png' },
    { id: 'recipe16', categories: 'desserts', imgSrc: 'gul.png', title: 'Gulab Jamun', author: 'Elizabeth', description: 'Soft milk based balls soaked in rose flavored sugar syrup.', cardBgImg: 'bg16.png' },
    { id: 'recipe17', categories: 'street', imgSrc: 'pani.png', title: 'Pani puri', author: 'Mohanan', description: 'Crispy puris filled with spicy, tangy water and mashed potatoes.', cardBgImg: 'bg17.png' },
    { id: 'recipe18', categories: 'street', imgSrc: 'pav.png', title: 'Pav Bhaji', author: 'Clara', description: 'Spicy mashed vegetable curry served with buttered pav buns.', cardBgImg: 'bg18.png' },
    { id: 'recipe19', categories: 'street snacks', imgSrc: 'pazh.png', title: 'Pazham pori', author: 'Prabha', description: 'Kerala-style sweet banana fritters in a crispy batter.', cardBgImg: 'bg19.png' },
    { id: 'recipe20', categories: 'street', imgSrc: 'masa.png', title: 'Masala chai', author: 'James', description: 'Indian spiced tea brewed with milk, tea leaves, and whole spices.', cardBgImg: 'bg20.png' },
    
    { id: 'recipe21', categories: 'restaurant', imgSrc: 'res.png', title: 'Top-Rated Restaurants in Kochi', author: '', description: 'Kochi has tasty seafood, many types of puttu, coffee with art, famous biryani, good snacks, and yummy Kerala seafood.', cardBgImg: null },
  ];

  const restaurantDetails = [
    {
      name: 'Rice Boat (Taj Malabar)',
      location: 'Willingdon Island',
      highlights: 'Excellent shellfish, prawn and squid appetizers, especially scenic at sunset with backwater views.',
      imgSrc: 'riceboat.png', 
      mapLink: 'https://www.google.com/maps/search/Rice+Boat+%28Taj+Malabar%29%2C+Willingdon+Island%2C+Kochi%2C+India?utm_source=chatgpt.com' 
    },
    {
      name: 'Dhe Puttu',
      location: 'Edappally',
      highlights: 'Original flavors, quality service, great value, but can get crowded.',
      imgSrc: 'dheputtu.png', 
      mapLink: 'https://www.google.com/maps/search/Dhe+Puttu%2C+Multiple+spots%2C+Kochi%2C+India?utm_source=chatgpt.com' 
    },
    {
      name: 'Kashi Art Café',
      location: 'Fort Kochi',
      highlights: 'Chill vibe, Zen garden, smoothies, chocolate cake. Quiet and Instagram-worthy.',
      imgSrc: 'kashiartcafe.png', 
      mapLink: 'https://www.google.com/maps/search/Kashi+Art+Caf%C3%A9%2C+Fort+Kochi%2C+Kochi%2C+India?utm_source=chatgpt.com' 
    },
    {
      name: 'Fusion Bay',
      location: 'Fort Kochi',
      highlights: 'Authentic flavors and excellent service.',
      imgSrc: 'fusionbay.png', 
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Fusion+Bay+Fort+Kochi+Kochi+682001' 
    },
    {
      name: 'Kayees Rahmathulla Hotel',
      location: 'Mattancherry',
      highlights: 'A heritage favorite beloved by locals.',
      imgSrc: 'kayees.png', 
      mapLink: 'https://www.google.com/maps/search/Kayees+Rahmathulla+Hotel%2C+Mattancherry%2C+Kochi%2C+India?utm_source=chatgpt.com' 
    },
    {
      name: 'Bharath Coffee House',
      location: 'Broadway, Kochi',
      highlights: 'Dosa, filter coffee, classic Kerala charm.',
      imgSrc: 'bharathcoffee.png', 
      mapLink: 'https://www.google.com/maps/search/Bharath+Coffee+House%2C+Broadway%2C+Ernakulam%2C+Kochi%2C+India?utm_source=chatgpt.com' 
    },
    
    {
      name: 'Cochin Rahumania',
      location: 'Near Marine Drive',
      highlights: 'One of the best beef roast ever... mylanchi choru is signature.',
      imgSrc: 'cochinrahumania.png',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Rahumania+Biriyani+Marine+Drive+Kochi+682011'
    },
    {
      name: 'Aurum Cloud',
      location: 'Kadavanthra',
      highlights: 'Amazing! Their pidi kozhi is really good…',
      imgSrc: 'aurumcloud.png', 
      mapLink: 'https://www.google.com/maps/search/?api=1&query=The+Aurum+Cloud+Kochi+682020'
    },
    {
      name: 'Paragon',
      location: 'Multiple locations',
      highlights: 'Malabar cuisine, seafood, and Andhra-style curries.',
      imgSrc: 'paragon.png', 
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Paragon+Lulu+Mall+Edappally+Kochi+682024'
    },
    {
      name: 'Malabar Junction',
      location: 'Fort Kochi',
      highlights: 'Fine-dining Kerala and international fusion.',
      imgSrc: 'malabarjunction.png',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Malabar+Junction+The+Malabar+House+Kochi'
    }
  ];


  
  const getRecipeContent = (id) => {
      switch (id) {
          case 'recipe1': return (<><h1>Classic Caesar Salad</h1><p><strong>Author:</strong> John Doe</p><h2>Ingredients:</h2><ul><li>Romaine lettuce</li><li>Croutons</li><li>Parmesan cheese</li><li>Caesar dressing</li></ul><h2>Instructions:</h2><ol><li>Chop the lettuce.</li><li>Mix with dressing, croutons, and cheese.</li><li>Serve chilled.</li></ol></>);
          case 'recipe2': return (<><h1>Crispy Samosas</h1><p><strong>Author:</strong> Priya</p><h2>Ingredients:</h2><ul><li>Boiled potatoes</li><li>Spices (cumin, coriander, garam masala)</li><li>Pastry sheets</li><li>Oil for frying</li></ul><h2>Instructions:</h2><ol><li>Prepare the spiced potato filling.</li><li>Stuff the filling in pastry sheets and fold into triangles.</li><li>Fry until golden and crisp.</li></ol></>);
          case 'recipe3': return (<><h1>Chocolate Cake</h1><p><strong>Author:</strong> Aleven</p><h2>Ingredients:</h2><ul><li>1.5 cups all-purpose flour</li><li>1 cup sugar</li><li>1/4 cup cocoa powder</li><li>1 tsp baking soda</li><li>1/2 tsp salt</li><li>1 cup water</li><li>1/3 cup vegetable oil</li><li>1 tbsp vinegar</li><li>1 tsp vanilla extract</li></ul><h2>Instructions:</h2><ol><li>Preheat oven to 180°C (350°F).</li><li>In a bowl, mix dry ingredients.</li><li>Add wet ingredients and mix until smooth.</li><li>Pour into greased pan and bake for 30–35 mins.</li><li>Cool before slicing and serving.</li></ol></>);
          case 'recipe4': return (<><h1>Vegan Pasta Primavera</h1><p><strong>Author:</strong> Maria</p><h2>Ingredients:</h2><ul><li>200g pasta</li><li>1 zucchini, sliced</li><li>1 bell pepper, sliced</li><li>1 cup cherry tomatoes</li><li>2 tbsp olive oil</li><li>2 garlic cloves, minced</li><li>Salt and pepper to taste</li></ul><h2>Instructions:</h2><ol><li>Cook pasta as per package instructions.</li><li>Sauté garlic in olive oil. Add vegetables.</li><li>Cook until tender. Add pasta, toss well.</li><li>Season and serve hot.</li></ol></>);
          case 'recipe5': return (<><h1>Mango Lassi</h1><p><strong>Author:</strong> Raj</p><h2>Ingredients:</h2><ul><li>1 cup mango pulp</li><li>1 cup yogurt</li><li>1/4 cup milk</li><li>2 tbsp sugar</li><li>Ice cubes</li><li>Cardamom (optional)</li></ul><h2>Instructions:</h2><ol><li>Blend all ingredients until smooth.</li><li>Serve chilled in glasses. Garnish with cardamom if desired.</li></ol></>);
          case 'recipe6': return (<><h1>Veg Puffs</h1><p><strong>Author:</strong> Neha</p><h2>Ingredients:</h2><ul><li>1 pack puff pastry</li><li>2 boiled potatoes</li><li>1/2 cup peas</li><li>Spices (cumin, garam masala, chili powder)</li><li>Salt to taste</li></ul><h2>Instructions:</h2><ol><li>Mash potatoes and mix with peas and spices.</li><li>Cut puff pastry sheets into squares.</li><li>Fill with mixture, fold and seal edges.</li><li>Bake at 200°C for 20–25 mins or until golden.</li></ol></>);
          case 'recipe7': return (<><h1>KESARI</h1><p><strong>Author:</strong> Neha</p><h2>Ingredients:</h2><ul><li>1 cup rava (semolina)</li><li>2½ cups water</li><li>1 cup sugar</li><li>3 tbsp ghee</li><li>Few saffron strands</li><li>Cashews & raisins (optional)</li></ul><h2>Instructions:</h2><ol><li>Heat ghee in a pan and roast rava till aromatic.</li><li>Boil water with saffron separately and add to rava.</li><li>Stir continuously to avoid lumps.</li><li>Add sugar and cook till mixture thickens.</li><li>Garnish with roasted cashews and raisins.</li></ol></>);
          case 'recipe8': return (<><h1>FRUIT SMOOTHIE</h1><p><strong>Author:</strong> Neha</p><h2>Ingredients:</h2><ul><li>1 banana</li><li>½ cup mixed berries</li><li>½ cup yogurt or milk</li><li>1 tsp honey</li><li>Ice cubes</li></ul><h2>Instructions:</h2><ol><li>Add all ingredients into a blender.</li><li>Blend until smooth and creamy.</li><li>Pour into a glass and serve chilled.</li></ol></>);
          case 'recipe9': return (<><h1>POHA</h1><p><strong>Author:</strong> Neha</p><h2>Ingredients:</h2><ul><li>1 cup flattened rice (poha)</li><li>1 small onion, chopped</li><li>¼ tsp mustard seeds</li><li>1 green chili, chopped</li><li>Curry leaves</li><li>¼ tsp turmeric powder</li><li>Salt and lemon juice to taste</li></ul><h2>Instructions:</h2><ol><li>Wash poha and let it drain.</li><li>Heat oil, add mustard seeds, curry leaves, onions, and green chili.</li><li>Cook until onions turn soft, then add turmeric.</li><li>Add poha, salt, and mix well. Cook for 2–3 minutes.</li><li>Turn off heat and add lemon juice before serving.</li></ol></>);
          case 'recipe10': return (<><h1>CHOCO MUG CAKE</h1><p><strong>Author:</strong> Neha</p><h2>Ingredients:</h2><ul><li>4 tbsp all-purpose flour</li><li>2 tbsp cocoa powder</li><li>3 tbsp sugar</li><li>3 tbsp milk</li><li>2 tbsp oil</li><li>¼ tsp baking powder</li><li>Pinch of salt</li></ul><h2>Instructions:</h2><ol><li>Mix all ingredients directly in a microwave-safe mug.</li><li>Stir well until smooth.</li><li>Microwave for 1½ to 2 minutes (depending on your microwave power).</li><li>Let it cool for a minute and enjoy warm.</li></ol></>);
          case 'recipe11': return (<><h1>CHICKEN BIRIYANI</h1><p><strong>Author:</strong> Rani</p><h2>Ingredients:</h2><ul><li>500g chicken (cleaned)</li><li>2 cups basmati rice</li><li>1 cup yogurt</li><li>2 onions, sliced</li><li>1 tbsp ginger-garlic paste</li><li>Biryani masala, turmeric, chili powder</li><li>Whole spices (bay leaf, cardamom, cloves)</li><li>Coriander & mint leaves</li><li>Salt and oil/ghee</li></ul><h2>Instructions:</h2><ol><li>Marinate chicken with yogurt, spices, and ginger-garlic paste. Rest 1 hour.</li><li>Cook rice with whole spices until 80% done.</li><li>In a pan, fry onions till golden. Add marinated chicken and cook halfway.</li><li>Layer rice over chicken, sprinkle mint, coriander, and fried onions.</li><li>Seal and cook on low flame for 20 mins (dum method).</li></ol></>);
          case 'recipe12': return (<><h1>FRUIT SHAKE</h1><p><strong>Author:</strong> Murali</p><h2>Ingredients:</h2><ul><li>1 banana or mango or strawberries</li><li>1 cup chilled milk</li><li>1 scoop vanilla ice cream (optional)</li><li>1–2 tsp sugar or honey</li><li>Ice cubes</li></ul><h2>Instructions:</h2><ol><li>Peel and chop the fruit of your choice.</li><li>Blend with milk, sugar/honey, and ice cubes.</li><li>Add a scoop of ice cream for creaminess.</li><li>Pour into a tall glass and serve chilled.</li></ol></>);
          case 'recipe13': return (<><h1>Broasted Chicken</h1><p><strong>Author:</strong> Benjamin</p><h2>Ingredients:</h2><ul><li>500g chicken (drumsticks or wings)</li><li>1 cup buttermilk (for marination)</li><li>1 cup all-purpose flour</li><li>1 tsp paprika or chili powder</li><li>1 tsp garlic powder</li><li>1 tsp pepper, salt</li><li>Oil for deep frying</li></ul><h2>Instructions:</h2><ol><li>Marinate chicken in buttermilk for 3–4 hours.</li><li>Mix flour with spices in a bowl.</li><li>Coat marinated chicken in flour mixture.</li><li>Heat oil and deep fry until crispy and golden.</li><li>Drain excess oil and serve hot with dip.</li></ol></>);
          case 'recipe14': return (<><h1>CLASSIC PANCAKE</h1><p><strong>Author:</strong> Rachel</p><h2>Ingredients:</h2><ul><li>1 cup all-purpose flour</li><li>1 tbsp sugar</li><li>1 tsp baking powder</li><li>Pinch of salt</li><li>1 cup milk</li><li>1 egg</li><li>2 tbsp melted butter or oil</li></ul><h2>Instructions:</h2><ol><li>Mix flour, sugar, baking powder, and salt.</li><li>In another bowl, whisk milk, egg, and melted butter.</li><li>Combine wet and dry ingredients to form a smooth batter.</li><li>Heat a non-stick pan, pour 1 ladle of batter.</li><li>Cook until bubbles form, flip and cook the other side.</li><li>Serve with honey, syrup or fruits.</li></ol></>);
          case 'recipe15': return (<><h1>PANEER TIKKA</h1><p><strong>Author:</strong> Sobha</p><h2>Ingredients:</h2><ul><li>200g paneer cubes</li><li>½ cup thick curd</li><li>1 tsp ginger-garlic paste</li><li>½ tsp turmeric, chili powder, garam masala</li><li>1 tsp lemon juice</li><li>Salt to taste</li><li>Capsicum and onion cubes (optional)</li></ul><h2>Instructions:</h2><ol><li>Mix curd, spices, lemon juice to make marinade.</li><li>Coat paneer and veggies in marinade. Rest 30 mins.</li><li>Skewer and grill or roast on tawa until golden.</li><li>Serve hot with mint chutney and lemon.</li></ol></>);
          case 'recipe16': return (<><h1>Gulab Jamun</h1><p><strong>Author:</strong> Elizabeth</p><h2>Ingredients:</h2><ul><li>1 cup milk powder</li><li>2 tbsp all-purpose flour</li><li>2 tbsp ghee</li><li>Milk (as needed to knead)</li><li>Oil or ghee (for frying)</li><li>1 cup sugar</li><li>1 cup water</li><li>Cardamom and rose water (for syrup)</li></ul><h2>Instructions:</h2><ol><li>Make syrup: boil sugar + water + cardamom until slightly sticky. Add rose water.</li><li>Mix milk powder, flour, ghee, and add milk little by little to make soft dough.</li><li>Make smooth small balls without cracks.</li><li>Deep fry on low heat until golden brown.</li><li>Soak in warm sugar syrup for 1 hour before serving.</li></ol></>);
          case 'recipe17': return (<><h1>17. PANI PURI</h1><p><strong>Author:</strong> Mohanan</p><h2>Ingredients:</h2><ul><li>Ready-made puris – 20</li><li>Boiled potato – 2, mashed</li><li>Boiled chana – 1/2 cup</li><li>Green chutney – 3 tbsp</li><li>Tamarind chutney – 3 tbsp</li><li>Pani: mint, coriander, tamarind, green chili, salt, black salt, water</li></ul><h2>Instructions:</h2><ol><li>Grind mint, coriander, chili, and tamarind with water for pani. Chill it.</li><li>Mix potato and chana with chutneys and a pinch of salt.</li><li>Crack puris, fill with stuffing, and pour chilled pani before serving.</li></ol></>);
          case 'recipe18': return (<><h1>18. PAV BHAJI</h1><p><strong>Author:</strong> Clara</p><h2>Ingredients:</h2><ul><li>Boiled potatoes – 2, mashed</li><li>Mixed veggies (peas, carrot, cauliflower) – 1 cup</li><li>Onion & Tomato – 1 each, chopped</li><li>Pav bhaji masala – 2 tsp</li><li>Butter – 2 tbsp</li><li>Pav buns – 4</li></ul><h2>Instructions:</h2><ol><li>Sauté onion and tomato in butter.</li><li>Add mashed veggies and pav bhaji masala. Mash and cook well.</li><li>Toast pav with butter and serve hot with bhaji, lemon, and onions.</li></ol></>);
          case 'recipe19': return (<><h1>19. PAZHAM PORI</h1><p><strong>Author:</strong> Prabha</p><h2>Ingredients:</h2><ul><li>Ripe nendran banana – 2, sliced lengthwise</li><li>Maida (all-purpose flour) – 1 cup</li><li>Rice flour – 2 tbsp</li><li>Sugar – 2 tbsp</li><li>Turmeric – a pinch</li><li>Water – enough to make thick batter</li><li>Oil – for deep frying</li></ul><h2>Instructions:</h2><ol><li>Mix flour, rice flour, sugar, turmeric, and water into a smooth batter.</li><li>Dip banana slices and deep fry until golden brown.</li><li>Serve hot with evening tea.</li></ol></>);
          case 'recipe20': return (<><h1>MASALA CHAI</h1><h2>Ingredients:</h2><ul><li>Milk – 1 cup</li><li>Water – 1/2 cup</li><li>Tea powder – 1.5 tsp</li><li>Sugar – 2 tsp (adjust to taste)</li><li>Spices – 2 crushed cardamom, 1 inch ginger, small cinnamon stick</li></ul><h2>Instructions:</h2><ol><li>Boil water with the spices for 2–3 minutes.</li><li>Add milk, tea powder, and sugar. Simmer for 2 more minutes.</li><li>Strain and serve hot.</li></ol></>);
          default: return null;
      }
  };

  return (
    <div className="container">
      <aside className="sidebar">
       
         <Link to="/add-blog" className="create-blog-button">
          <i className="fas fa-plus-circle"></i> CREATE BLOG
        </Link>
        <h2>Categories</h2>
        
        <ul>
          <li><a onClick={() => handleCategoryClick('all')}>All</a></li>
          <li><a onClick={() => handleCategoryClick('indian')}>Indian Cuisine</a></li>
          <li><a onClick={() => handleCategoryClick('snacks')}>Snacks</a></li>
          <li><a onClick={() => handleCategoryClick('desserts')}>Desserts</a></li>
          <li><a onClick={() => handleCategoryClick('vegan')}>Vegan</a></li>
          <li><a onClick={() => handleCategoryClick('drinks')}>Drinks</a></li>
          <li><a onClick={() => handleCategoryClick('quick')}>Quick Meals</a></li>
          <li><a onClick={() => handleCategoryClick('street')}>Street Food</a></li>
          {}
          <li><a onClick={() => setCurrentDisplay('restaurant_review')}>Restaurant Reviews</a></li>
        </ul>
      </aside>

      <main className="content">
        <h1 id="main-title">{setMainTitle(currentDisplay, activeRecipeId)}</h1>

        {}
        {(currentDisplay === 'all_cards' || currentDisplay === 'category_cards') && (
          <div className="cards" id="card-section">
            {recipeCards.map(card => {
              const shouldShowCard = (
                (activeCategoryId === 'all' && card.id !== 'recipe21') ||
                (activeCategoryId !== 'all' && card.categories.includes(activeCategoryId) && card.id !== 'recipe21')
              );

              if (shouldShowCard) {
                return (
                  <div
                    key={card.id}
                    className={`card ${card.categories}`}
                    data-id={card.id}
                    style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('${card.cardBgImg}')` }}
                  >
                    <img src={card.imgSrc} alt="" />
                    <h3>{card.title}</h3>
                    <p><strong>{card.author}</strong></p>
                    <p>{card.description}</p>
                    <a className="read-more" onClick={() => handleReadMoreClick(card.id)}>Read More</a>
                  </div>
                );
              }
              return null;
            })}
              {(currentDisplay === 'all_cards' || activeCategoryId === 'restaurant') && (
                 <div
                    key="recipe21_card"
                    className={`card restaurant`}
                    data-id="recipe21"
                    
                    style={{ display: (currentDisplay === 'all_cards' || (currentDisplay === 'category_cards' && activeCategoryId === 'restaurant')) ? 'block' : 'none' }}
                   >
                    <img src="res.png" alt="Restaurant Review Thumbnail" />
                    <h3>Top-Rated Restaurants in Kochi</h3>
                    <p>Kochi has tasty seafood, many types of puttu, coffee with art, famous biryani, good snacks, and yummy Kerala seafood.</p>
                    <a className="read-more" onClick={() => handleReadMoreClick('recipe21')}>Read More</a>
                </div>
            )}
          </div>
        )}


        {}
        {currentDisplay === 'single_recipe' && activeRecipeId && (
          <div id={activeRecipeId} className="recipe active">
            {getRecipeContent(activeRecipeId)}
            <a className="back-link" onClick={goBackToCards}>← Back to Categories</a>
          </div>
        )}

        {}
        {currentDisplay === 'restaurant_review' && (
          <div id="restaurant-reviews-section" className="recipe active"> {}
            <h1>Top-Rated Restaurants in Kochi</h1>
            <p>Here are some of the top-rated and locally loved restaurants in Kochi, ranging from seafood and breakfast cafés to traditional Kerala eateries:</p>

            {restaurantDetails.map((restaurant, index) => (
              <div key={index} className="restaurant-entry">
                <hr />
                <h2>{restaurant.name}</h2>
                {restaurant.imgSrc && (
                  <img src={restaurant.imgSrc} alt={restaurant.name} className="restaurant-image" />
                )}
                <p><strong>Location:</strong> {restaurant.location}</p>
                <p><strong>Highlights:</strong> {restaurant.highlights}</p>
                {restaurant.mapLink && (
                  <p><a href={restaurant.mapLink} target="_blank" rel="noopener noreferrer">View on Map</a></p>
                )}
              </div>
            ))}

            <hr />

            <h3>🗣️ From Reddit's r/Kochi:</h3>
            <blockquote>
              “Cochin Rahumania near Marine Drive, one of the best beef roast ever... mylanchi choru is signature.”
              <br />
              “Aurum Cloud in Kadavanthra is amazing! Their pidi kozhi is really good…”
            </blockquote>

            <hr />

            <h3>🥘 Honorable Mentions:</h3>
            <ul>
              <li><strong>Paragon (Multiple locations)</strong> – Malabar cuisine, seafood, and Andhra-style curries</li>
              <li><strong>Malabar Junction (Fort Kochi)</strong> – Fine-dining Kerala and international fusion</li>
            </ul>

            <a className="back-link" onClick={goBackToCards}>← Back to Categories</a>
          </div>
        )}
      </main>
    </div>
  );
}

export default Categories;
