interface users{
    id: number;
    name: string;
    
}
interface Admin extends users {
    tipo: "Admin";
    role: string;
  }
interface User extends users {
    tipo: "User";
  }
  function imprimirUsuario(user: users) {
    console.log(`Nombre: ${user.name}`);
    console.log(`id: ${user.id}`);
    
}