class RestaurantView {
	constructor() {
		this.main = document.getElementsByTagName('main')[0];
		this.linkRestaurant = document.getElementById('Restaurant');
		this.categories = document.getElementById('categories');
	}
	init() {
		this.main.replaceChildren();

		this.main.insertAdjacentHTML('afterbegin',
			`<div class="container article-banner">
		<div class="row">
		<div class="col d-md-flex align-items-md-stretch flex-md-nowrap">
		<div class="article-banner-image flex-sm-grow-1">
		<h4 class="d-lg-none">Artículo semanal</h4>
		</div>
		<div class="article-banner-text d-flex flex-column align-items-center justify-content-center flex-sm-grow-1">
		<h4>Artículo semanal</h4>
		<h5>Coworking</h5>
		<p>¿Cómo compartir espacios de trabajo?</p>
		<a id="button" class="btn" href="#">Ver artículo</a>
		</div>
		</div>
		</div>
		</div>`);
	}


	bindInit(handler) {
		document.getElementById('init').addEventListener('click', (event) => {
			handler();
			// event.preventDefault();
		});
		document.getElementById('logo').addEventListener('click', (event) => {
			handler();
		});
	}


	bindShowRestaurant(handler) {
		this.linkRestaurant.addEventListener('click', (event) => {
			handler();
		});
	}

	listProducts(products, title) {
		this.main.replaceChildren();
		if (this.categories.children.length > 1)
			this.categories.children[1].remove();
		const container = document.createElement('div');
		container.id = 'product-list';
		container.classList.add('container');
		container.classList.add('my-3');
		container.insertAdjacentHTML('beforeend', '<div class="row"> </div>');
		for (const product of products) {
			const div = document.createElement('div');
			div.classList.add('col-md-4');
			div.insertAdjacentHTML('beforeend', `<figure class="card cardproduct-grid card-lg"> <a data-serial="${product.serial}" href="#singleproduct" class="img-wrap"><img class="${product.constructor.name}-style"
		src="${product.url}"></a>
		<figcaption class="info-wrap">
		<div class="row">
		<div class="col-md-8"> <a data-serial="${product.serial}"
		href="#single-product" class="title">${product.brand} - ${product.model}</a> </div>
		<div class="col-md-4">
		<div class="rating text-right"> <i class="bi bi-starfill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-starfill"></i> </div>
		</div>
		</div>
		</figcaption>
		<div class="bottom-wrap">
		<a href="#" data-serial="${product.serial}" class="btn btnprimary float-end"> Comprar </a>
		<div><span class="price h5">${product.price.toLocaleString('esES', { style: 'currency', currency: 'EUR' })}</span> <br> <small
		class="text-success">Free shipping</small></div>
		</div>
		</figure>`);
			container.children[0].append(div);
		}
		container.insertAdjacentHTML('afterbegin', `<h1>${title}</h1>`);
		this.main.append(container);
	}



}
export default RestaurantView;
