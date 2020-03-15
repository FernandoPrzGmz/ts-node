function sayHello(firstname: string, lastname?: string) {
  return `Hello ${firstname} ${lastname || ''}`;
}

console.log(sayHello('Fernando'));