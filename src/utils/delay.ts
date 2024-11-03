export default async function delay(delay:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Resolved');
      }, delay); // 5000 milliseconds = 5 seconds
    });
  }
  