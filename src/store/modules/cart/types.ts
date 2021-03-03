import { Action } from 'redux';

export interface Product {
  id: number;
  picture: string;
  price: number;
  title: string;
  description: string;
  brand: string;
  memory: string;
  chipType: string;
  quantity: number;
  buy_units: number;
}

export interface ApplicationState {
  items: Product[];
}
export interface AddItem extends Action {
  type: 'ADD_ITEM';
  item: Product;
}
export interface RemoveItem extends Action {
  type: 'REMOVE_ITEM';
  item: Product;
}
export type ApplicationAction = AddItem | RemoveItem;
