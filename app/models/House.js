import { generateId } from "../utils/generateId.js";

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get CardHouseTemplate() {
    return `

      <section class="row ">
        <div class="col-10 m-auto mb-3">
          <section class="row bg-light elevation-5">
            <div class="col-4 p-0">
              <img
                src="${this.imgUrl}"
                class="img-fluid" alt="">
            </div>
            <div class="col-8 p-3">
              <h2>${this.year} ${this.bedrooms} Bedroom ${this.bathrooms} Bathroom</h2>
              <h3>$${this.price}</h3>
              <h4>${this.sqft} sqft</h4>
              <p>${this.description}</p>
              <button class="btn btn-danger text-light" onclick="app.HousesController.deleteHouse('${this.id}')">Mark as Sold!</button>
            </div>
          </section>
        </div>
      </section>

    </div>
    `
  }
}