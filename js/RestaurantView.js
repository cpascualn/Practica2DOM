class RestaurantView {
	constructor() {
		this.categories = document.getElementById('categories');
		this.list = document.getElementById('listado');
		this.allergens = document.getElementById('allergens');
		this.menus = document.getElementById('menus');
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
			let enlace = link.querySelector("a");
			enlace.addEventListener('click', () => {
				handler(enlace.dataset.category); // pasarle el category name data-category
				this.modifyBreadcrumb(enlace.dataset.category);
			});
		}
	}

	bindAllerList(handler) {
		this.allergens.addEventListener('click', (event) => {
			handler();
		});

	}

	bindAllergen(handler) {
		const allergenList = document.getElementById('allergen-list');
		const links = allergenList.querySelectorAll('div');
		for (const link of links) {
			let enlace = link.querySelector("a");
			enlace.addEventListener('click', () => {
				handler(enlace.dataset.allergen); // pasarle el category name data-category
				this.modifyBreadcrumb(enlace.dataset.allergen);
			});
		}
	}


	bindMenuList(handler) {
		this.menus.addEventListener('click', (event) => {
			handler();
		});

	}

	bindMenu(handler) {
		const menuList = document.getElementById('menus-list');
		const links = menuList.querySelectorAll('div');
		for (const link of links) {
			let enlace = link.querySelector("a");
			enlace.addEventListener('click', () => {
				handler(enlace.dataset.menu); // pasarle el category name data-category
				this.modifyBreadcrumb(enlace.dataset.menu);
			});
		}
	}

	modifyBreadcrumb(category) {
		let bc = document.getElementById('breadcrumb');
		if (bc.children[1] !== undefined) {
			bc.removeChild(bc.children[1]);
		}
		if (category !== null) {
			bc.insertAdjacentHTML('beforeend', `
			<li class="breadcrumb-item active" aria-current="page">${category}</li>
	
			 `);
		}

	}

	showCategories(categories) {
		// hacer que se borren todos los que habia antes
		if (this.categories.children.length >= 1)
			this.categories.innerHTML = '';

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
		if (this.list.children.length >= 1)
			this.list.innerHTML = '';

		this.list.classList.add('nav');


		for (const dish of dishes) {
			const container = document.createElement('div');
			container.classList.add('card');
			container.style.width = '18rem';
			// name, description = '', ingredients = [], image

			let name = dish.name.replace(/\s/g, '');
			container.insertAdjacentHTML('beforeend', `<img src="${dish.image}" class="card-img-top" alt="...">
			<div class="card-body">
		    <h5 class="card-title"  > ${dish.name} </h5> 
			</div>
			</div>
			<button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#Modal${name}"> VER MAS
  			</button>

			  <div class="modal fade" id="Modal${name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
				  <div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">${dish.name}</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				  </div>
				  <div class="modal-body">
					<img src="${dish.image}" alt="">
					<h5>${dish.description}</h5>
					<p><b>INGREDIENTES:</b> ${dish.ingredients}</p>
				  </div>
				  <div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				  </div>
				</div>
			  </div>
			</div>

			 `);

			this.list.append(container);
		}
	}

	showAllergens(allergens) {
		// hacer que se borren todos los que habia antes
		if (this.list.children.length >= 1)
			this.list.innerHTML = '';

		if (this.categories.children.length >= 1)
			this.categories.innerHTML = '';

		const container = document.createElement('div');
		container.id = 'allergen-list';
		container.classList.add('nav');
		container.classList.add('nav-underline');
		for (const allergen of allergens) {
			container.insertAdjacentHTML('beforeend', `<div class="col-lg-3 colmd-6 nav-item"><a data-allergen="${allergen.name}" href="#${allergen.name}" class="nav-link">
			<h4>${allergen.name}</h4>
			</a>
			</div>`);
		}
		this.categories.append(container);

	}



	showMenus(menus) {
		// hacer que se borren todos los que habia antes
		if (this.list.children.length >= 1)
			this.list.innerHTML = '';

		if (this.categories.children.length >= 1)
			this.categories.innerHTML = '';

		const container = document.createElement('div');
		container.id = 'menus-list';
		container.classList.add('nav');
		container.classList.add('nav-underline');
		for (const menu of menus) {
			container.insertAdjacentHTML('beforeend', `<div class="col-lg-3 colmd-6 nav-item"><a data-menu="${menu.name}" href="#${menu.name}" class="nav-link">
			<h4>${menu.name}</h4>
			</a>
			</div>`);
		}
		this.categories.append(container);

	}

}
export default RestaurantView;
