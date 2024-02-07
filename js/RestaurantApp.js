// import { Dish, Category, Allergen, Menu, Restaurant, Coordinate } from './objetos.js';
import { RestaurantsManager } from './RestaurantManagerModel.js';
import RestaurantController from './RestaurantController.js.js';
import RestaurantView from './RestaurantView.js.js';

const RestaurantApp = new RestaurantController(
    RestaurantsManager.getInstance(),
    new RestaurantView());

    RestaurantApp.onLoad();

// let cat1 = manager.createCategory('Carne', 'descrip');
// let dish = manager.createDish('Chuleton Cordero', 'Chuleton de Cordero con patatas cocidas en salsa de tomate ', ['cordero', 'tomate', 'patata cocida'], 'image');
// let dish2 = manager.createDish('Albondigas', 'Albondigas con tomate y patatas fritas', ['carne cerdo', 'tomate', 'patata frita'], 'image');
// let dish3 = manager.createDish('Bistec', 'carne de res con patatas', ['carne de res', 'patatas fritas'], 'image');
// let dish4 = manager.createDish('CheeseBurguer', 'hamburguesa de vacuno con queso', ['carne de vacuno', 'queso cheddar', 'lechuga', 'bacon', 'pan hamburguesa'], 'image');


// let cat2 = manager.createCategory('Pasta', 'descrip2');
// let dish21 = manager.createDish('Pesto', 'pasta al pesto', ['pasta', 'queso', 'salsa pesto'], 'image');
// let dish22 = manager.createDish('Bolognesa', 'pasta con carne picada y tomate', ['pasta', 'queso', 'carne de vacuno', 'tomate'], 'image');
// let dish23 = manager.createDish('Carbonara', 'pasta carbonara con nata y bacon', ['pasta', 'queso', 'bacon', 'salsa carbonara'], 'image');
// let dish24 = manager.createDish('Tomate Con Bacon', 'pasta con tomate y bacon', ['pasta', 'queso', 'bacon', 'tomate'], 'image');


// let cat3 = manager.createCategory('Postres', 'descrip3');
// let dish31 = manager.createDish('Coulant de chocolate', 'coulant', ['chocolate', 'harina', 'huevo'], 'image');
// let dish32 = manager.createDish('Bola de helado', 'bola de helado sabores a elegir', ['leche', 'chocolate', 'vainilla', 'fresa'], 'image');
// let dish33 = manager.createDish('Flan de huevo', 'flan', ['leche', 'huevo'], 'image');
// let dish34 = manager.createDish('Tarta de queso', 'tarta queso', ['queso', 'tarta'], 'image');



// let allergen1 = manager.createAllergen('gluten', 'Proteína encontrada en trigo, cebada y centeno.');
// let allergen2 = manager.createAllergen('cacahuetes', 'Leguminosa que puede causar alergias graves.');
// let allergen3 = manager.createAllergen('lácteos', 'Productos lácteos como leche, queso y mantequilla.');
// let allergen4 = manager.createAllergen('huevos', 'Alimento común que puede provocar alergias en algunas personas.');


// let menu1 = manager.createMenu('menu1', 'hamburguesa,pesto,flan');
// let menu2 = manager.createMenu('menu2', 'bistec,carbonara,coulant');
// let menu3 = manager.createMenu('menu3', 'chuleton,bolognesa,tarta');



// let rest1 = manager.createRestaurant('Restaurante de Madrid', 'descrip', new Coordinate(33, 66));
// let rest2 = manager.createRestaurant('Restaurante de Barcelona', 'descrip2', new Coordinate(55, 110));
// let rest3 = manager.createRestaurant('Restaurante de Sevilla', 'descrip3', new Coordinate(200, 100));





export default RestaurantApp;