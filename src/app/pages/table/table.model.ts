
export interface TableCellModel {

}
export interface PeriodicElement {
  name: string;
  zh: string;
  position: number;
  weight: number;
  symbol: string;
  discoverer: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', zh: '氢', weight: 1.0079, symbol: 'H', discoverer: '刘一' },
  { position: 2, name: 'Helium', zh: '氦', weight: 4.0026, symbol: 'He', discoverer: '陈二' },
  { position: 3, name: 'Lithium', zh: '锂', weight: 6.941, symbol: 'Li', discoverer: '张三' },
  { position: 4, name: 'Beryllium', zh: '铍', weight: 9.0122, symbol: 'Be', discoverer: '李四' },
  { position: 5, name: 'Boron', zh: '硼', weight: 10.811, symbol: 'B', discoverer: '王五' },
  { position: 6, name: 'Carbon', zh: '碳', weight: 12.0107, symbol: 'C', discoverer: '赵六' },
  { position: 7, name: 'Nitrogen', zh: '氮', weight: 14.0067, symbol: 'N', discoverer: '孙七' },
  { position: 8, name: 'Oxygen', zh: '氧', weight: 15.9994, symbol: 'O', discoverer: '周八' },
  { position: 9, name: 'Fluorine', zh: '氟', weight: 18.9984, symbol: 'F', discoverer: '吴九' },
  { position: 10, name: 'Neon', zh: '氖', weight: 20.1797, symbol: 'Ne', discoverer: '郑十' },
];