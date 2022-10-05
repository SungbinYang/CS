interface MyType {
  name: string;
}

// const testFunc = <T extends MyType | string>(what: T): T extends MyType ? MyType : string => {
//   if (typeof what === 'object') {
//     return what['name'];
//   }

//   return what;
// };
