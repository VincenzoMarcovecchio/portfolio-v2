---
title: "Pagination with Vuejs plus a checkbox filter"
cover: "vuejs-pagination-simple-example.png"
date: "2023-03-05"
category: "pagination"
slug: "vuejs-pagination-simple-example"

tags:
  - pagination
  - API
---

Building a Dynamic E-commerce Product Page with Vue.js

Vue.js is a popular JavaScript framework for building dynamic and reactive user interfaces. In this article, we'll explore a code snippet for a Vue.js application that creates a dynamic product page for an e-commerce store.

Let's take a closer look at the code:


```html


<section class="banner-store">
  <h3>Nome Categoria</h3>
</section>
<div id="app" class="container-lg">
  <div class="d-flex flex-column flex-md-row row">
    <div class="col-12 col-md-3 ">
      <div v-if="uniqueCheckboxes" v-for="(value, key) in uniqueCheckboxes" class="input-checkbox ">
        <input @change="setCheckBoxFilters(key)" type="checkbox" :id="'brand-' + key" :value="key">
        <label :for="'brand-' + key">
          <span></span>
          {_ key _}
          <small>{_ value _}</small>
        </label>
      </div>
    </div>
    <div class="col-12 col-md-9 row">
      <div v-if="!displayedRecords.length ">Spiacenti non ci sono risultati per la tua ricerca, controlla la barra di ricerca</div>
      <div v-for="(prodotto,index) in displayedRecords" :key='prodotto.id' class=" col-12 col-sm-12 col-md-3">
        <div>
          <div class="card">
            <img class="img-fluid" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div class="card-body">
              <h6 class="card-title text-uppercase">{_ prodotto.title _}</h6>
              <div class="d-flex flex-column align-items-start justify-content-between">
                <small class="text-uppercase card-text">With supporting.</small>
                <small class="ms-auto text-uppercase">Shop now</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
          </li>
          <li class="page-item d-flex">
            <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {_ pageNumber _} </button>
          </li>
          <li class="page-item">
            <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>


```


Now let's take a closer look at the Vue code that powers this application.


```js

 <script>
    new Vue({
    	el: "#app",
	    delimiters: ["{_", "_}"],	

        data: function() {
        return {
        prodotti:[],
        perPage: 20,
		    page:1,
		    pages: [],
        computedLength: null,
        checkBoxFilters: [],
        }
        
        },

```


First, we define a Vue instance and provide it with some initial data. The prodotti array is initially empty but will be populated with product data from an external API later on. perPage and page are used for pagination, pages stores an array of page numbers, computedLength is a computed property that is used to show how many records are currently being displayed, checkBoxFilters is an array that stores the categories that the user has selected.



These are the methods of this vuejs application 



```js

methods: {
  setCheckBoxFilters(valueItem) {
    if (!this.checkBoxFilters.includes(valueItem)) {
      // ✅ only runs if value not in array
      this.checkBoxFilters.push(valueItem.toLowerCase());
    } else
      this.checkBoxFilters = this.checkBoxFilters.filter(function(el) {
        return el != valueItem;
      });
  },
  setPages() {
    let numberOfPages = Math.ceil(this.prodotti.length / this.perPage);
    for (let index = 1; index <= numberOfPages; index++) {
      this.pages.push(index);
    }
  },
  paginate(posts) {
    let page = this.page;
    let perPage = this.perPage;
    let from = (page * perPage) - perPage;
    let to = (page * perPage);
    return posts.slice(from, to)
  },
  getAllProducts() {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((res) => (this.prodotti = res.products))
      .catch((error) => console.error(error))
  }
},



```

- setCheckBoxFilters(valueItem): This method adds or removes the selected category from the array of checkbox filters depending on whether the category is already present in the array or not. It takes a parameter valueItem, which is the category name that has been clicked.


- setPages(): This method calculates the number of pages needed based on the total number of products and the number of products to display per page. It then adds these pages to the pages array.


- paginate(posts): This method returns a subset of the products array based on the current page and number of products to display per page. It takes an argument posts which is the full list of products.


- getAllProducts(): This method fetches the list of products from the provided URL and updates the prodotti array with the response.


Next we define the computed properties.

The computed property displayedRecords is used to display the products based on the selected checkboxes and pagination.

The computed property uniqueCheckboxes is used to display the unique category values and the number of products for each category.

The watch property is used to call the setPages method whenever the prodotti array is updated.




```js

computed: {
  displayedRecords() {
    return this.checkBoxFilters.length ? this.paginate(this.prodotti.filter(el => this.checkBoxFilters.includes(el.category.toLowerCase()))) : this.paginate(this.prodotti)
  },
  uniqueCheckboxes() {
    const final = {};
		
    for (const { category } of this.prodotti) {
      final[category] = (final[category] || 0) + 1;
    }
		
    console.log(final);
    return final;
  },
},
watch: {
  prodotti() {
    this.setPages();
  }
},

```


In summary, this Vue code creates a product listing page with checkboxes for filtering by category, pagination, and product cards displaying product information. The code fetches product data from a dummy API and allows the user to filter and paginate the products displayed on the page.




<iframe height="300" style="width: 100%;" scrolling="no" title="vue e-commerce pagination" src="https://codepen.io/Vinny92/embed/YzOQGLa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Vinny92/pen/YzOQGLa">
  vue e-commerce pagination</a> by Vincenzo Marcovecchio (<a href="https://codepen.io/Vinny92">@Vinny92</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>