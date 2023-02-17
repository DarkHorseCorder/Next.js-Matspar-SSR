import axios from 'axios';
export default async function handler(req, res) {
  try {
    axios.post('https://api.matspar.se/slug',
      {
        slug : "/kategori",
        query : {"q" : req.body.Squery}
      },
      )
    .then(response => {
      return res.status(200).json({ products: response.data.payload.products })
    });
  } catch (error) {
    
  }
}
