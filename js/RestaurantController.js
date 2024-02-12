import { Coordinate } from './objetos.js';
const MODEL = Symbol('RestaurantModel');
const VIEW = Symbol('RestaurantView');

class RestaurantController {
    constructor(modelRestaurant, viewRestaurant) {
        this[MODEL] = modelRestaurant;
        this[VIEW] = viewRestaurant;
        // Eventos iniciales del Controlador
        this.onLoad();
        this.onInit();
        // Enlazamos handlers con la vista
        this[VIEW].bindInit(this.handleInit);
        this[VIEW].bindAllerList(this.handleAllergenList);
        this[VIEW].bindMenuList(this.handleMenuList);
    }

    onInit = () => { // cada vez que se pulsa el boton de inicio se muestran de nuevo las categorias , 3 platos rand y se reinicia el breadcrumb
        this[VIEW].showCategories(this[MODEL].categories);
        this[VIEW].showDishes(this.RandDishes());
        this[VIEW].bindCategoryList(this.handleCategoryList);
        this[VIEW].modifyBreadcrumb(null);
    };

    handleInit = () => {
        this.onInit();
    }

    onLoad = () => {

        let cat1 = this[MODEL].createCategory('Carne', 'disfrute de nuestras carnes');
        let dish11 = this[MODEL].createDish('Chuleton Cordero', 'Chuleton de Cordero con patatas cocidas en salsa de tomate ', ['cordero', 'tomate', 'patata cocida'], 'img/Platos/cordero.jpg');
        let dish12 = this[MODEL].createDish('Albondigas', 'Albondigas con tomate y patatas fritas', ['carne cerdo', 'tomate', 'patata frita'], 'img/Platos/albondigas.jpg');
        let dish13 = this[MODEL].createDish('Bistec', 'carne de res con patatas', ['carne de res', 'patatas fritas'], 'img/Platos/bistec.jpg');
        let dish14 = this[MODEL].createDish('CheeseBurguer', 'hamburguesa de vacuno con queso', ['carne de vacuno', 'queso cheddar', 'lechuga', 'bacon', 'pan hamburguesa'], 'img/Platos/cheeseburguer.jpg');

        let cat2 = this[MODEL].createCategory('Pasta', 'la mejor pasta');
        let dish21 = this[MODEL].createDish('Pesto', 'pasta al pesto', ['pasta', 'queso', 'salsa pesto'], 'img/Platos/pesto.jpg');
        let dish22 = this[MODEL].createDish('Bolognesa', 'pasta con carne picada y tomate', ['pasta', 'queso', 'carne de vacuno', 'tomate'], 'img/Platos/bolognesa.jpg');
        let dish23 = this[MODEL].createDish('Carbonara', 'pasta carbonara con nata y bacon', ['pasta', 'queso', 'bacon', 'salsa carbonara'], 'img/Platos/carbonara.jpg');
        let dish24 = this[MODEL].createDish('Tomate Con Bacon', 'pasta con tomate y bacon', ['pasta', 'queso', 'bacon', 'tomate'], 'img/Platos/bacontomate.jpg');

        let cat3 = this[MODEL].createCategory('Postres', 'deleite su paladar');
        let dish31 = this[MODEL].createDish('Coulant de chocolate', 'coulant', ['chocolate', 'harina', 'huevo'], 'img/Platos/coulant.jpg');
        let dish32 = this[MODEL].createDish('Bola de helado', 'bola de helado sabores a elegir', ['leche', 'chocolate', 'vainilla', 'fresa'], 'img/Platos/bolashelado.jpg');
        let dish33 = this[MODEL].createDish('Flan de huevo', 'flan', ['leche', 'huevo'], 'img/Platos/flan.jpg');
        let dish34 = this[MODEL].createDish('Tarta de queso', 'tarta queso', ['queso', 'tarta'], 'img/Platos/tarta.jpg');

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
            let rand = Math.floor(Math.random() * dishes.length);
            // si el plato ya existe en el array de aleatorios, no se añade  y se resta uno al indice para seguir teniendo 3 platos
            if (randDishes.find(dish => dish.name === dishes[rand].name) === undefined) {
                randDishes.push(dishes[rand]);
            } else {
                index--;
            }

        }
        return randDishes;
    }

    handleCategoryList = (catName) => {
        let category;
        let categories = this[MODEL].categories;

        for (const cat of categories) {
            if (cat.name === catName) {
                category = cat;
            }
        }
        let dishes = this[MODEL].getDishesInCategory(category);
        let dishs = Array();
        for (const dish of dishes) {
            dishs.push(dish.dish);
        }
        this[VIEW].showDishes(dishs);
    }

    handleAllergenList = () => {
        this[VIEW].showAllergens(this[MODEL].allergens);
        this[VIEW].bindAllergen(this.handleAllergenDishes);
        this[VIEW].modifyBreadcrumb(null);
    }

    handleAllergenDishes = (allergenName) => {

        let allergen;
        let allergens = this[MODEL].allergens;

        for (const al of allergens) {
            if (al.name === allergenName) {
                allergen = al;
            }
        }
        let dishes = this[MODEL].getDishesWithAllergen(allergen);
        let dishs = Array();
        for (const dish of dishes) {
            dishs.push(dish.dish);
        }
        this[VIEW].showDishes(dishs);
    }


    handleMenuList = () => {
        let menus = Array();
        for (const menu of this[MODEL].menus) {
            menus.push(menu.menu);
        }
        this[VIEW].showMenus(menus);
        this[VIEW].bindMenu(this.handleMenuDishes);
        this[VIEW].modifyBreadcrumb(null);
    }


    handleMenuDishes = (menuName) => {
        //  cambiar
        let menu;
        let menus = this[MODEL].menus;


        for (const men of menus) {
            if (men.menu.name === menuName) {
                menu = men;
            }
        }
        let dishes = menu.dishes;
        console.log(dishes);
        let dishs = Array();
        for (const dish of dishes) {
            dishs.push(dish.dish);
        }
        this[VIEW].showDishes(dishs);
    }

}

export default RestaurantController;
