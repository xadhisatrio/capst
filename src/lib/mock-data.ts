export type Product = {
  id: number;
  name: string;
  category: "Roti" | "Kue" | "Pastry";
  description: string;
  price: number;
  stock: number;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "Roti Sobek Cokelat", category: "Roti", description: "Roti lembut dengan isian cokelat premium, dibuat segar setiap pagi.", price: 32000, stock: 18, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "Croissant Butter", category: "Pastry", description: "Pastry berlapis dengan aroma butter dan tekstur renyah di luar.", price: 18000, stock: 24, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "Bolu Pandan Keju", category: "Kue", description: "Bolu pandan harum dengan taburan keju yang melimpah.", price: 55000, stock: 10, image: "https://unsplash.com/photos/go3DT3PpIw4/download?force=true" },
  { id: 4, name: "Cinnamon Roll", category: "Pastry", description: "Gulungan kayu manis lembut dengan cream cheese glaze.", price: 22000, stock: 15, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Chocolate Fudge Cake", category: "Kue", description: "Cake cokelat pekat berlapis ganache, cocok untuk perayaan spesial.", price: 145000, stock: 6, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "Milk Bun Original", category: "Roti", description: "Roti susu lembut dengan rasa ringan yang disukai seluruh keluarga.", price: 28000, stock: 20, image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=85" },
];

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
