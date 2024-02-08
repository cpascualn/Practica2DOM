import { Coordinate } from './objetos.js';
const MODEL = Symbol('RestaurantModel');
const VIEW = Symbol('RestaurantView');

class RestaurantController {
    constructor(modelRestaurant, viewRestaurant) {
        this[MODEL] = modelRestaurant;
        this[VIEW] = viewRestaurant;
        // Eventos iniciales del Controlador
        this.onInit();
        this.onLoad();

        // Enlazamos handlers con la vista
        // this[VIEW].bindInit(this.handleInit);
    }

    onInit = () => {
        // this[VIEW].init();
    };

    handleInit = () => {
        this.onInit();
    }

    onLoad = () => {

        let cat1 = this[MODEL].createCategory('Carne', 'disfrute de nuestras carnes');
        let dish11 = this[MODEL].createDish('Chuleton Cordero', 'Chuleton de Cordero con patatas cocidas en salsa de tomate ', ['cordero', 'tomate', 'patata cocida'], 'image');
        let dish12 = this[MODEL].createDish('Albondigas', 'Albondigas con tomate y patatas fritas', ['carne cerdo', 'tomate', 'patata frita'], 'image');
        let dish13 = this[MODEL].createDish('Bistec', 'carne de res con patatas', ['carne de res', 'patatas fritas'], 'image');
        let dish14 = this[MODEL].createDish('CheeseBurguer', 'hamburguesa de vacuno con queso', ['carne de vacuno', 'queso cheddar', 'lechuga', 'bacon', 'pan hamburguesa'], 'image');

        let cat2 = this[MODEL].createCategory('Pasta', 'la mejor pasta');
        let dish21 = this[MODEL].createDish('Pesto', 'pasta al pesto', ['pasta', 'queso', 'salsa pesto'], 'image');
        let dish22 = this[MODEL].createDish('Bolognesa', 'pasta con carne picada y tomate', ['pasta', 'queso', 'carne de vacuno', 'tomate'], 'image');
        let dish23 = this[MODEL].createDish('Carbonara', 'pasta carbonara con nata y bacon', ['pasta', 'queso', 'bacon', 'salsa carbonara'], 'image');
        let dish24 = this[MODEL].createDish('Tomate Con Bacon', 'pasta con tomate y bacon', ['pasta', 'queso', 'bacon', 'tomate'], 'image');

        let cat3 = this[MODEL].createCategory('Postres', 'deleite su paladar');
        let dish31 = this[MODEL].createDish('Coulant de chocolate', 'coulant', ['chocolate', 'harina', 'huevo'], 'image');
        let dish32 = this[MODEL].createDish('Bola de helado', 'bola de helado sabores a elegir', ['leche', 'chocolate', 'vainilla', 'fresa'], 'image');
        let dish33 = this[MODEL].createDish('Flan de huevo', 'flan', ['leche', 'huevo'], 'image');
        let dish34 = this[MODEL].createDish('Tarta de queso', 'tarta queso', ['queso', 'tarta'], 'image');

        let al1 = this[MODEL].createAllergen('gluten', 'Proteína encontrada en trigo, cebada y centeno.');
        let al2 = this[MODEL].createAllergen('cacahuetes', 'Leguminosa que puede causar alergias graves.');
        let al3 = this[MODEL].createAllergen('lácteos', 'Productos lácteos como leche, queso y mantequilla.');
        let al4 = this[MODEL].createAllergen('huevos', 'Alimento común que puede provocar alergias en algunas personas.');

        let menu1 = this[MODEL].createMenu('menu1', 'hamburguesa,pesto,flan');
        let menu2 = this[MODEL].createMenu('menu2', 'bistec,carbonara,coulant');
        let menu3 = this[MODEL].createMenu('menu3', 'chuleton,bolognesa,tarta');

        let rest1 = this[MODEL].createRestaurant('Restaurante de Madrid', 'descrip', new Coordinate(33, 66));
        let rest2 = this[MODEL].createRestaurant('Restaurante de Barcelona', 'descrip2', new Coordinate(55, 110));
        let rest3 = this[MODEL].createRestaurant('Restaurante de Sevilla', 'descrip3', new Coordinate(200, 100));


        this[MODEL].assignAllergenToDish(al1, dish14, dish21, dish22, dish23, dish24, dish33);
        this[MODEL].assignAllergenToDish(al2, dish31, dish32, dish33, dish34);
        this[MODEL].assignAllergenToDish(al3, dish31, dish32, dish33, dish34, dish23, dish14);
        this[MODEL].assignAllergenToDish(al4, dish33, dish23);

        this[MODEL].assignCategoryToDish(cat1, dish11, dish12, dish13, dish14)
        this[MODEL].assignCategoryToDish(cat2, dish21, dish22, dish23, dish24)
        this[MODEL].assignCategoryToDish(cat3, dish31, dish32, dish33, dish34)

        this[MODEL].assignDishToMenu(menu1, dish14, dish21, dish33)
        this[MODEL].assignDishToMenu(menu2, dish13, dish23, dish31)
        this[MODEL].assignDishToMenu(menu3, dish11, dish22, dish34)


        this[VIEW].showCategories(this[MODEL].categories);
        this[VIEW].showDishes(this.RandDishes());
    };

    RandDishes() {
        let randDishes = Array();
        let dishes = Array();

        for (const dish of this[MODEL].dishes) {
            dishes.push(dish.dish)
        }


        for (let index = 0; index < 3; index++) {
            let rand = Math.floor(Math.random() * dishes.length - 1);
            randDishes.push(dishes[rand]);
        }
        return randDishes;
    }

}

export default RestaurantController;
