// helper function to shuffle array
const shuffleArray = (array) => {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const ProductsRepository = {
  getExclusive: async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/category/groceries");
      const json = await response.json();

      // shuffle and pick first 5 items
      const shuffled = shuffleArray(json.products).slice(0, 5);

      return shuffled.map(item => ({
        id: item.id,
        img: { uri: item.thumbnail },
        itemName: item.title,
        itemDescription: `500g, Price`,
        itemPrice: Math.floor(item.price),
      }));
    } catch (error) {
      console.error("Error fetching Exclusive data:", error);
      return [];
    }
  },

  getBestSelling: async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/category/groceries");
      const json = await response.json();

      // shuffle and pick first 8 items (example)
      const shuffled = shuffleArray(json.products).slice(0, 8);

      return shuffled.map(item => ({
        id: item.id,
        img: { uri: item.thumbnail },
        itemName: item.title,
        itemDescription: `500g, Price`,
        itemPrice: Math.floor(item.price),
      }));
    } catch (error) {
      console.error("Error fetching Best Selling data:", error);
      return [];
    }
  },

  getGroceries: async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/category/groceries");
      const json = await response.json();

      // shuffle and pick first 10 items (example)
      const shuffled = shuffleArray(json.products).slice(0, 10);

      return shuffled.map(item => ({
        id: item.id,
        img: { uri: item.thumbnail },
        itemName: item.title,
        itemDescription: `500g, Price`,
        itemPrice: Math.floor(item.price),
      }));
    } catch (error) {
      console.error("Error fetching Groceries data:", error);
      return [];
    }
  }
};
