import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
  const houses = AppState.houses

  let template = ''

  houses.forEach(house => template += house.CardHouseTemplate)

  setHTML('houseListings', template)
}
export class HousesController {

  constructor() {
    console.log('The Houses Controller is hooked up', AppState.houses);
    _drawHouses()


    AppState.on('houses', _drawHouses)
  }

  createHouse(event) {
    event.preventDefault()
    console.log('did the house form submit?');

    const form = event.target

    const houseData = getFormData(form)

    console.log('here is the house data', houseData);

    housesService.createHouse(houseData)

    form.reset()
  }

  async deleteHouse(houseId) {
    const wantsToDelete = await Pop.confirm("Are you sure you're ready to sell your house?")

    if (!wantsToDelete) {
      return
    }

    housesService.deleteHouse(houseId)
  }

}