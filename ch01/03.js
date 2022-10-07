const URLS = 'mongodb://localhost:27017/robertapp';
const createConnection = (url) => ({ url: url });

class DB {
  constructor(url) {
    if (!DB.instance) {
      DB.instance = createConnection(url);
    }

    return DB.instance;
  }

  connect() {
    return this.instance;
  }
}

const a = new DB(URLS);
const b = new DB(URLS);

console.log(a === b);
