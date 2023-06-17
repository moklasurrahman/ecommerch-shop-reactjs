import "./chart.scss"
import {LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
 {name: "January", Total: 1000},
 {name: "February", Total: 1200},
 {name: "March", Total: 800},
 {name: "April", Total: 1600},
 {name: "May", Total: 900},
 {name: "June", Total: 1700},

//  {name: "August ", Total: 1200},
//  {name: "September", Total: 1200},
//  {name: "October", Total: 1200},
//  {name: "November", Total: 1200},
//  {name: "December", Total: 1200},
 

];


const Chart = ({aspect, title}) => {
  return (
    <div className="chart">

<div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" stroke="gra" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
      
  )  
}

export default Chart