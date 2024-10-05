import axios from "axios"
import React, {useState, useEffect} from "react"

const Card = ({deck_id, index}) => {
     const baseURL = "https://deckofcardsapi.com/api/deck/"
    const [card, setCard] = useState(null);
    useEffect(() => {
        async function drawCard() {
            const res = await axios.get(baseURL+`${deck_id}/draw/?count=1`);
            setCard(res.data.cards[0]);
        }
        drawCard();
        }, [index, deck_id]
    )
    return(
        <div>
            {card ? <img src={card.image}/> : <i>Loading</i> }
            {index > 52 ? alert("Error: No Cards Remaining"): <i></i>}
        </div>
    );
} 

export default Card;