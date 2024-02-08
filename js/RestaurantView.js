class RestaurantView {
	constructor() {
		this.categories = document.getElementById('categories');
		this.list = document.getElementById('listado');
	}


	bindInit(handler) {
		document.getElementById('init').addEventListener('click', (event) => {
			handler();
		});
		document.getElementById('logo').addEventListener('click', (event) => {
			handler();
		});
	}

	showCategories(categories) {
		if (this.categories.children.length > 1)
			this.categories.children[1].remove();
		const container = document.createElement('div');
		container.id = 'category-list';
		container.classList.add('nav');
		container.classList.add('nav-underline');
		for (const category of categories) {
			container.insertAdjacentHTML('beforeend', `<div class="col-lg-3 colmd-6 nav-item"><a data-category="${category.name}" href="#product-list" class="nav-link">
		<h4>${category.name}</h4>
		</a>
		</div>`);
		}
		this.categories.append(container);
	}

	showDishes(dishes) {
		if (this.list.children.length > 1)
			this.list.children[1].remove();

		// <div class="card" style="width: 18rem;">
		//     <img src="img/comida (1).jpg" class="card-img-top" alt="...">
		//     <div class="card-body">
		// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
		//     card's content.</p>
		//     </div>
		// </div>
		console.log(dishes);
		for (const dish of dishes) {

			console.log(dish);
			const container = document.createElement('div');
			container.classList.add('card');
			container.style.width = '18rem';
			// name, description = '', ingredients = [], image

			container.insertAdjacentHTML('beforeend', `<img src="img/comida (1).jpg" class="card-img-top" alt="...">
			<div class="card-body">
		    <h5 class="card-title"> ${dish.name} </h5> 
			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the
			card's content.</p>
			</div>
			</div>
			
			 `);
			this.list.append(container);
		}
	}



}
export default RestaurantView;
