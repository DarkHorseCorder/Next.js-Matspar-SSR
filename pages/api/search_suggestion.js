import axios from 'axios';
export default async function handler(req, res) {
  try {
    axios.get(`https://api.matspar.se/autocomplete?query=${req.query.query}`)
    .then(response => {
      return res.status(200).json({ suggestions: response.data.suggestions })
    });
  } catch (error) {
    
  }
}
