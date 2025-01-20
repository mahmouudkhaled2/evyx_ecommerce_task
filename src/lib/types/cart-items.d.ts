declare type CartItem = {
    count: number;
    product: Product;
    price: number;
  } & Pick<DatabaseProps, '_id'> ;
  
  declare type Cart = {
    cartOwner: string;
    products: CartItems[];
    totalCartPrice: number;
  } & DatabaseProps;
  
  declare type CartResponse = {
    status: string;
    message: string;
    numOfCartItems: number;
    cartId: string;
    data: Cart;
  };

  declare type ErrorResponse = {
    statusMsg: "fail" | "error",  
    message: string,
  }