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

	bindCategoryList(handler) {
		const categoryList = document.getElementById('category-list');
		const links = categoryList.querySelectorAll('div');
		for (const link of links) {
			var enlace = link.querySelector("a");
			enlace.addEventListener('click', () => {
				handler(enlace.dataset.category); // pasarle el category name data-category
			});
		}
	}

	showCategories(categories) {

		console.log(this.categories.children);
		if (this.categories.children.length > 1)
			this.categories.children[1].remove();
		const container = document.createElement('div');
		container.id = 'category-list';
		container.classList.add('nav');
		container.classList.add('nav-underline');
		for (const category of categories) {
			container.insertAdjacentHTML('beforeend', `<div class="col-lg-3 colmd-6 nav-item"><a data-category="${category.name}" href="#${category.name}" class="nav-link">
		<h4>${category.name}</h4>
		</a>
		</div>`);
		}
		this.categories.append(container);
	}

	showDishes(dishes) {
		// hacer que se borren todos los que habia antes
		if (this.list.children.length > 1)
			for (let index = 0; index <= this.list.children.length; index++) {
				console.log(this.list.children[index]);
				this.list.children[index].remove();
			}


		if (dishes.length === 3) {
			this.list.classList.add('nav');
		}

		console.log(dishes);
		for (const dish of dishes) {
			const container = document.createElement('div');
			container.classList.add('card');
			container.style.width = '18rem';
			// name, description = '', ingredients = [], image

			container.insertAdjacentHTML('beforeend', `<img src="${dish.image}" class="card-img-top" alt="...">
			<div class="card-body">
		    <h5 class="card-title"> ${dish.name} </h5> 
			<p class="card-text">${dish.description}</p>
			</div>
			</div>
			
			 `);
			this.list.append(container);
		}
	}



}
export default RestaurantView;
