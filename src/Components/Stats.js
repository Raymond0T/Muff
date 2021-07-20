import React from 'react';
import './Stats.css';
import Graph from './Graph.js';
import {subDays} from 'date-fns';

function Stats(){
    const prices = [];

    for(let i = 30; i >=0; i--){
        prices.push({
            date: subDays(new Date(), i).toString().substr(4,12),
            price: ((Math.random()) + 5).toFixed(2)
        })
    }
    console.log(prices,prices[0].price)
    return(
        <div className="Stats">
            <div className="Stats_Container">
                <div className="Stats_Col_1" >
                    <span><b>Name: </b>Muffle Coin</span><br/><br/>
                    <span><b>Symbol:</b> MUFF</span><br/><br/>
                    <span><b>Price: </b>${`${prices[30].price}`} USD</span><br/><br/>
                    <span><b>Market Cap: </b>${`${(1.5e+8 * `${prices[30].price}`).toFixed(2)}`}B</span><br/><br/>
                    <span><b>Volume:</b> ${`${((Math.random() * (9 - 5 + 1)) + 5).toFixed(2)}`}B</span><br/><br/>
                    <span><b>Total Supply:</b> 150M </span><br/><br/>
                </div>
                <div className="Stats_Col_2">
                    <Graph data={prices}/>
                </div>
            </div>
        </div>
    )
}

export default Stats;