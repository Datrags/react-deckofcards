import React, {useState, useEffect} from "react"
import Card from "./Card"
import axios from "axios"
const CardDeck = () => {
    const baseURL = "https://deckofcardsapi.com/api/deck/"


    const [cardDeck, setCardDeck] = useState(null);
    const [cardIndex, setCardIndex] = useState(0);

    useEffect(() => {
        async function newDeck() {
            const res = await axios.get(baseURL+"new/shuffle/?deck_count=1");
            setCardDeck(res.data.deck_id);
            console.log(res.data)
        }
        newDeck();
    }, []);

    function incIndex() {
        setCardIndex(cardIndex => cardIndex + 1);
    }

    async function shuffleDeck() {
        try{
            const res = await axios.get(baseURL+`${cardDeck}/shuffle/`);
            setCardDeck(res.data.deck_id);
            setCardIndex(0);
        } catch (e) {
            console.error(e);
        }
    }

    return( 
    <div>
        {cardDeck ? <Card deck_id={cardDeck} index={cardIndex}/> : <i>Loading</i>}
        <button onClick={incIndex}>Pick Up</button> 
        <button onClick={shuffleDeck}>Shuffle</button>
    </div>
    
    )
    
} 

export default CardDeck;