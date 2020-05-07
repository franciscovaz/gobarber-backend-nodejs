declare namespace Express {
  export interface Request {
    // vai adicionar ao que já existe
    user: {
      id: string;
    };
  }
}
