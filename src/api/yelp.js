import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer FTo_Qm3UEc6h4osyFnljR8rwabEzYENSrz3I8U33LFT13JGGIda9OJ6IpJ4vv3gWYmudn7Oq5lCH5BarYBaM8op4aZcx89LJfCuX3Oa6WeukGXYrTFRaOrghUeLdX3Yx',
  },
});
