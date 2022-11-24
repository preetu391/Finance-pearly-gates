import React from "react";
import ShareCard from "./ShareCard";
import Data from "./share.json";

export const ShareCards = () => {

  const [shares, setShares] = useState([])

    const getShares = async () => {
        try {
            const res = await axios.get(`https://finance-apppp-backend.herokuapp.com/api/addshare`)
            setShares(res.data)
            console.log(res);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getShares();
    }, []);

  return (
    <article>
      <ul>
        {shares?.map((share) => (
          <ShareCard key={share._id} share={share} />
        ))}
      </ul>
    </article>
  );
};

export default ShareCards;
