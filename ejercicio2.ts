interface user{
    id: number;
    name: string;
    email: string;

}
interface Admin extends user {
    tipo: "Admin";
    role: string;
  }
interface User extends user {
    tipo: "User";
  }
  function imprimirUsuario(user: user) {
    console.log(`Nombre: ${user.name}`);
    console.log(`id: ${user.id}`);
    console.log(`Email: ${user.email}`);
}