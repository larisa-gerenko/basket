Vue.component("one-product", {
  props: ["product"],
  data: function () {
    return {
      visible: false,
    };
  },
  template: `<div v-on:click = "showDescription"  class="card text-center border-0 shadow-sm mb-3 bg-white rounded-lg">
                <img class="card-img-top"
                     src="https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487">
                <div class="card-body p-1 m-1">
                    <h5 class="card-title mb-0">{{product.name}}</h5>
                    <div class="card-text"> 
                        <div>
                            <small class="card-text text-muted">
                                {{product.category}}
                            </small>
                        </div>
                        <div>
                            <del>{{product.oldPrice}}</del>
                            <strong>{{product.price}} ₽</strong>
                        </div>
                        <div v-if = "visible" class="alert alert-dark p-0 m-0" role="alert">
                            <div>
                                <small>
                                    <strong>Бренд</strong> {{product.brand}}
                                </small>
                            </div>
                            <div>
                                <small>
                                    <strong>Размер</strong> {{product.size}}
                                </small>
                            </div>
                            <div>
                                <small>
                                    <strong>Цвет</strong> {{product.color}}
                                </small>
                            </div>
                        </div>
                    </div>
                    <a v-on:click = "buying(product, $event)" href="#" class="btn btn-primary m-1">Купить</a>
                </div>
            </div>`,
  methods: {
    buying(product, e) {
      e.preventDefault();
      alert(`куплен товар ${product.name}`);
    },
    showDescription(e) {
      if (e.target.tagName === "A") {
        return;
      }

      this.visible = !this.visible;
    },
  },
});

let goods = new Vue({
  el: "#app",
  data: {
    brands: "",
    sizes: "",
    colors: "",
    products: [
      {
        id: 1,
        name: "куртка красная",
        img:
          "https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487",
        category: "куртки",
        oldPrice: 5880,
        price: 4790,
        brand: "super",
        size: 31,
        color: "красный",
      },
      {
        id: 2,
        name: "куртка большая",
        img:
          "https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025",
        category: "куртки",
        oldPrice: 5900,
        price: 3790,
        brand: "super",
        size: 42,
        color: "зеленый",
      },
      {
        id: 3,
        name: "куртка модная",
        img:
          "https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487",
        category: "куртки",
        price: 5550,
        brand: "puper",
        size: 29,
        color: "красный",
      },
      {
        id: 4,
        name: "куртка выгодная",
        img:
          "https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025",
        category: "куртки",
        oldPrice: 7900,
        price: 1990,
        brand: "super",
        size: 29,
        color: "зеленый",
      },
    ],
  },
  computed: {
    filteredProducts() {
      console.log(this.brands, this.sizes, this.colors);
      return this.products.filter((productsObj) => {
        if (this.brands && productsObj.brand !== this.brands.toLowerCase()) {
          return false;
        }
        if (this.sizes && productsObj.size !== parseInt(this.sizes)) {
          return false;
        }
        if (this.colors && productsObj.color !== this.colors.toLowerCase()) {
          return false;
        }

        return true;
      });
    },
    isCleaning() {
      if (this.brands || this.sizes || this.colors) {
        return true;
      }

      return false;
    },
  },
  methods: {
    cleaning() {
      this.brands = "";
      this.sizes = "";
      this.colors = "";
    },
  },
});
