export const load = async ({ fetch }) => {

  const fetchProducts = async () => {
    const productRes = await fetch('https://dummyjson.com/products?limit=3')
    const productData = await productRes.json()
    return productData.products
  }
  
  const fetchUsers = async () => {
      const usersRes = await fetch('https://dummyjson.com/users?limit=3')
      const usersData = await usersRes.json()
      return usersData.users
    }

    return {
      products: fetchProducts(),
      users: fetchUsers()
    }
}