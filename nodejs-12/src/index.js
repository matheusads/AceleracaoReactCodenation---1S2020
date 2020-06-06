const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const categories = ["T-SHIRTS", "PANTS", "SHOES", "BAGS"];

function getShoppingCart(ids, productsList) {
	const filteredProducts = filterProductsObj(ids, productsList);
	const categories = getProductsCategories(filteredProducts);
	const categoriesMap = getCategoriesMap(categories);
	const appliedPromotion = getPromotion(categoriesMap);
	const prices = calcTotalPrices(filteredProducts, appliedPromotion);
	
	return {
		products: filteredProducts.map(product => ({
			name: product.name,
			category: product.category
		})),
		promotion: appliedPromotion,
		totalPrice: prices.discountPrice,
		discountValue: (prices.regularPrice - prices.discountPrice).toFixed(2),
		discount: ((1-(prices.discountPrice / prices.regularPrice))*100).toFixed(2) + "%" 
	};
}

// return a list with filtered products by given ids(array)
function filterProductsObj(ids, productsList) {
	return (result = productsList.filter(({id}) => ids.includes(id)));
}

// return a list with categories of filteredProducts
function getProductsCategories(products) {
	return (categoriesList = products
	  .filter(({ category }) => categories.includes(category))
	  .map(x => x.category));
}

// return a map with category and how many times it appears
function getCategoriesMap(categoriesList) {
	const map = categoriesList.reduce(
	  (prev, curr) => prev.set(curr, (prev.get(curr) || 0) + 1),
	  new Map()
	);
	return map;
}

// return the type of promotion based on promotions array position and categories qty
function getPromotion(categoriesMap) {
	const promo =
	  promotions[
		  [...categoriesMap.values()].length - 1 > 3 ? 3 : [...categoriesMap.values()].length - 1
	  ];
	return promo;
}

// return obj with sum of regular prices and sum of discounted prices
function calcTotalPrices(products, promotion) {
  let regularSum = 0;
  const discountPrice = products.reduce((prev, cur) => {
    let itemValue = 0;
    regularSum += cur.regularPrice;
    cur.promotions.map(obj => {
      if (obj.looks.includes(promotion)) {
        itemValue = obj.price;
      }
	});
	
    return prev + (itemValue > 0 ? itemValue : cur.regularPrice);
  }, 0);

  return {'regularPrice': regularSum.toFixed(2), 
		  'discountPrice': discountPrice.toFixed(2)
		};
}

module.exports = { getShoppingCart };