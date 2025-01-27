export interface Iprod {
  id: string;
  name: string;
  type: string;
  quantity: string;
  productDescription: string;
  canReturn: number;
  prodStatus: 'InProgress' | 'Dispatched' | 'Delivered';
}
