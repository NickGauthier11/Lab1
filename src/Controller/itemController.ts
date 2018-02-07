import {ItemModel} from "../export";

interface IController {
    itemModel:ItemModel;
}
export class ItemController implements IController{
    itemModel:ItemModel;
    constructor(itemModel:ItemModel) {
        this.itemModel = itemModel;
    }
}