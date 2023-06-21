export const HouseView = /*html*/ `
<div class="container-fluid">
  <section class="row">
    <div class=col-12>
      <h1>Houses</h1>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#houseCollapse"
        aria-expanded="false" aria-controls="collapseExample">
        House Form
      </button>
    </div>
  </section>
<section class="row">
  <div class="col-10 m-auto">
    <div class="collapse" id="houseCollapse">
      <div class="card card-body">
        <form onsubmit="app.HousesController.createHouse(event)">
        <div>
          <label for="houseYear">Year</label>
          <input type="number" id="houseYear" min="" max="" required name="year">
        </div>

        <div>
          <label for="houseBedrooms">Bedrooms</label>
          <input type="number" id="houseBedrooms" min="1" max="10" required name="bedrooms">
        </div>

        <div>
          <label for="houseBathrooms">Bathrooms</label>
          <input type="number" id="houseBathrooms" min="1" max="10" required name="bathrooms">
        </div>

        <div>
          <label for="housePrice">Price</label>
          <input type="number" id="housePrice" min="1000" max="3000000" required name="price">
        </div>

        <div>
          <label for="houseUrl">Image URL</label>
          <input type="url" id="houseUrl" maxlength="300" required name="imgUrl">
        </div>

        <div>
          <label for="houseSqft">Square Footage</label>
          <input type="number" id="houseSqft" min="1" max="30000000" required name="sqft">
        </div>

        <div>
          <label for="houseDescription">Description</label>
          <textarea id="houseDescription" rows="5" cols="w-40" name="description"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  </div>
</section>
</div>


<section id="houseListings" class="row mt-3">
  
  </section>
`




