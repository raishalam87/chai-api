// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample Data for Menu Items
const menuItems = [
  { id: 1, name: 'Masala Chai', description: 'Spicy chai with ginger and cardamom', price: '$5', image: '/assets/masala-chai.jpg' },
  { id: 2, name: 'Green Tea', description: 'A refreshing herbal tea', price: '$4', image: '/assets/green-tea.jpg' },
  { id: 3, name: 'Samosa', description: 'Crispy snack filled with spiced potatoes', price: '$2', image: '/assets/samosa.jpg' },
  { id: 4, name: 'Aloo Tikki', description: 'Crispy spiced potato patties', price: '$3', image: '/assets/aloo-tikki.jpg' },
  { id: 5, name: 'Chole Bhature', description: 'A popular North Indian dish with spicy chickpeas and fried bread', price: '$6', image: '/assets/chole-bhature.jpg' },
  { id: 6, name: 'Paneer Pakora', description: 'Crispy deep-fried paneer fritters', price: '$4', image: '/assets/paneer-pakora.jpg' },
  { id: 7, name: 'Vada Pav', description: 'Spicy potato fritter sandwich', price: '$3', image: '/assets/vada-pav.jpg' },
  { id: 8, name: 'Lemon Tea', description: 'Refreshing tea with a zesty lemon twist', price: '$4', image: '/assets/lemon-tea.jpg' },
  { id: 9, name: 'Masala Dosa', description: 'Crispy South Indian crepe filled with spiced potatoes', price: '$7', image: '/assets/masala-dosa.jpg' },
  { id: 10, name: 'Gulab Jamun', description: 'Sweet, syrupy dessert made from milk solids', price: '$2', image: '/assets/gulab-jamun.jpg' }
];

// Sample Data for Services (e.g., Music, Art, Workshops)
const services = [
  { id: 1, title: 'Music Nights', description: 'Live music every Friday evening at Chaileela Café' },
  { id: 2, title: 'Art & Poetry Sessions', description: 'Join us for monthly art and poetry gatherings' },
  { id: 3, title: 'Workshops', description: 'Learn new skills in our community workshops' },
  { id: 4, title: 'Dance Nights', description: 'Groove to the beat at our weekend dance events' },
  { id: 5, title: 'Photography Exhibitions', description: 'Monthly photography exhibitions showcasing local talent' },
  { id: 6, title: 'Cultural Celebrations', description: 'Celebrate cultural festivals with us at Chaileela' },
  { id: 7, title: 'Comedy Nights', description: 'Laugh out loud at our stand-up comedy events' },
  { id: 8, title: 'Crafting Workshops', description: 'Learn to create beautiful crafts in our weekend workshops' },
  { id: 9, title: 'Chai Tasting', description: 'Explore different types of tea in our special tasting events' },
  { id: 10, title: 'Book Clubs', description: 'Join our community book clubs for insightful discussions' }
];

// API Endpoint to get menu items
app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

// API Endpoint to get services
app.get('/api/services', (req, res) => {
  res.json(services);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
