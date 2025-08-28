// Dummy API service
export const get = async (url) => {
  try {
    if (url === "/exclusive") {
      return [
        { id: 3, img: require("../assets/images/organicBanana.png"), itemName: "Banana", itemDescription: "12Pcs, Price", itemPrice: 60 },
        { id: 1, img: require("../assets/images/Vector.png"), itemName: "Red Apple", itemDescription: "1kg, Price", itemPrice: 120 },
        { id: 2, img: require("../assets/images/oil.png"), itemName: "Olive Oil", itemDescription: "1L, Price", itemPrice: 240 },
        { id: 4, img: require("../assets/images/mango.jpg"), itemName: "Mango", itemDescription: "1kg, Price", itemPrice: 150 },
      ];
    }

    if (url === "/bestselling") {
      return [
        { id: 5, img: require("../assets/images/egg.png"), itemName: "White Eggs", itemDescription: "6Pcs, Price", itemPrice: 40 },
        { id: 7, img: require("../assets/images/noodles.png"), itemName: "Noodles", itemDescription: "500g, Price", itemPrice: 55 },
        { id: 8, img: require("../assets/images/chicken.png"), itemName: "Chicken", itemDescription: "1kg, Price", itemPrice: 220 },
      ];
    }

    if (url === "/groceries") {
      return [
        { id: 10, img: require("../assets/images/ginger.png"), itemName: "Ginger", itemDescription: "500g, Price", itemPrice: 50 },
        { id: 11, img: require("../assets/images/guava.jpg"), itemName: "Guava", itemDescription: "1kg, Price", itemPrice: 80 },
        { id: 12, img: require("../assets/images/papapya.jpg"), itemName: "Papaya", itemDescription: "1Pcs, Price", itemPrice: 45 },
      ];
    }
  } catch (error) {
    console.error("Dummy API Error:", error.message);
    throw error;
  }
};
