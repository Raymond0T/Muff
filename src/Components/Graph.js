import React from 'react';
import './Graph.css';

import {ResponsiveContainer, Area, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';


function Graph({data}){
  
    return(
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>

                <Area dataKey="price" stroke="blue" opacity={0.8}/>
                <XAxis dataKey="date" axisLine={false} tickLine={false} />
                <YAxis 
                    dataKey="price" 
                    axisLine={false} 
                    tickLine={false} 
                    tickCount={5} 
                    tickFormatter={ num => 
                        `$${num.toFixed(2)}`
                    }
                />
                <CartesianGrid opacity={0.2} vertical={false}/> 
                <Tooltip />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default Graph;