// Mock data for categories
export const mockCategories = [
  {
    id: 'fruits',
    name: 'Fruits',
    description: 'Fresh and juicy fruits from local farms',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    description: 'Organic vegetables for your healthy diet',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  },
  {
    id: 'dairy',
    name: 'Dairy',
    description: 'Fresh dairy products from local farms',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 'bakery',
    name: 'Bakery',
    description: 'Freshly baked bread and pastries',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  },
  {
    id: 'meat',
    name: 'Meat',
    description: 'Quality meat products for your meals',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

// Mock data for products
export const mockProducts = [
  // Fruits
  {
    id: 'apple-red',
    name: 'Red Apple',
    description: 'Sweet and juicy red apples, perfect for snacking',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'fruits',
    featured: true
  },
  {
    id: 'banana',
    name: 'Banana',
    description: 'Ripe and ready-to-eat bananas',
    price: 0.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    categoryId: 'fruits'
  },
  {
    id: 'orange',
    name: 'Orange',
    description: 'Juicy oranges, rich in vitamin C',
    price: 1.49,
    oldPrice: 1.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'fruits',
    featured: true
  },
  
  // Vegetables
  {
    id: 'carrot',
    name: 'Carrot',
    description: 'Fresh carrots, great for salads and cooking',
    price: 0.89,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'vegetables'
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    description: 'Nutritious broccoli, perfect for healthy meals',
    price: 1.29,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'vegetables',
    featured: true
  },
  {
    id: 'tomato',
    name: 'Tomato',
    description: 'Ripe tomatoes, great for salads and sauces',
    price: 0.99,
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'vegetables'
  },
  
  // Dairy
  {
    id: 'milk',
    name: 'Milk',
    description: 'Fresh cow milk, pasteurized and homogenized',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    categoryId: 'dairy'
  },
  {
    id: 'cheese',
    name: 'Cheese',
    description: 'Artisanal cheese, perfect for sandwiches and snacks',
    price: 3.99,
    oldPrice: 4.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'dairy',
    featured: true
  },
  {
    id: 'yogurt',
    name: 'Yogurt',
    description: 'Creamy yogurt with live cultures',
    price: 1.79,
    image: 'https://images.unsplash.com/photo-1571212515416-fca325e3e756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'dairy'
  },
  
  // Bakery
  {
    id: 'bread',
    name: 'Bread',
    description: 'Freshly baked bread, perfect for sandwiches',
    price: 2.29,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'bakery'
  },
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Buttery and flaky croissants',
    price: 1.49,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80',
    categoryId: 'bakery',
    featured: true
  },
  {
    id: 'muffin',
    name: 'Muffin',
    description: 'Delicious muffins in various flavors',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'bakery'
  },
  
  // Meat
  {
    id: 'chicken',
    name: 'Chicken',
    description: 'Fresh chicken, perfect for various recipes',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'meat'
  },
  {
    id: 'beef',
    name: 'Beef',
    description: 'Premium beef cuts for steaks and roasts',
    price: 8.99,
    oldPrice: 10.99,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'meat',
    featured: true
  },
  {
    id: 'pork',
    name: 'Pork',
    description: 'Quality pork cuts for various dishes',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    categoryId: 'meat'
  }
];