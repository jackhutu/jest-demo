// functions.js
export default {
  getAuthor() {
    return {
      name: 'HUTU',
      age: 24,
    }
  },
  getIntArray(num) {
    if (!Number.isInteger(num)) {
      throw Error('"getIntArray"只接受整数类型的参数');
    }

    let result = [];
    for (let i = 0, len = num; i < len; i++) {
      result.push(i);
    }
    
    return result;
  }
}