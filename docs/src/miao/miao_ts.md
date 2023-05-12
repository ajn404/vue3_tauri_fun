### Omit
```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type UserWithoutEmail = Omit<User, 'email'>;
```