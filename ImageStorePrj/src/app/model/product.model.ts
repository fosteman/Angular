// Model class describing types of data contained in the data model
export class Product {
  constructor (
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number) {}
}
