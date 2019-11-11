import {fetchPostsList} from './async';

export default {
  async getPostList() {
    return fetchPostsList(data => {
      console.log('fetchPostsList be called!');
      // do something
    });
  }
}