

export interface Ropa {
  id: number;
  nombre: string;
  talla: string;
  color: string;
  precio: number;
  marca: string;
  categoria: string;
  stock: number;
  
}



export const ropas : Ropa[] = [
    {
      id: 1,
      nombre: "Camiseta",
      talla: "M",
      color: "Azul",
      precio: 15.99,
      marca: "Nike",
      categoria: "Casual",
      stock: 50
    },
    {
      id: 2,
      nombre: "Camiseta",
      talla: "L",
      color: "Rojo",
      precio: 17.99,
      marca: "Adidas",
      categoria: "Deportiva",
      stock: 30
    }
  ,
  
    {
      id: 3,
      nombre: "Jeans",
      talla: "L",
      color: "Negro",
      precio: 39.99,
      marca: "Levi's",
      categoria: "Denim",
      stock: 25
    },
    {
      id: 4,
      nombre: "Joggers",
      talla: "M",
      color: "Gris",
      precio: 29.99,
      marca: "Puma",
      categoria: "Deportivo",
      stock: 40
    }
  ,
    
    {
      id: 5,
      nombre: "Camisa Formal",
      talla: "M",
      color: "Blanca",
      precio: 45.99,
      marca: "Ralph Lauren",
      categoria: "Formal",
      stock: 20
    },
    {
      id: 6,
      nombre: "Camisa Casual",
      talla: "L",
      color: "Celeste",
      precio: 35.99,
      marca: "Zara",
      categoria: "Casual",
      stock: 15
    }
  ]
;
