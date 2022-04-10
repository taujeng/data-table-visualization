import React from 'react'
import DATA from '../../dummy_data'
import { Cell, PieChart, Pie, Legend, Tooltip } from 'recharts'
import './pieChart.css'

const Convert = () => {

  // <--- Count how many people are in each region --->
  const regionData = {}
  DATA.forEach((item)=> {
    let regionName = item["region"]
    regionData.hasOwnProperty(regionName) ? regionData[regionName] += 1 : regionData[regionName] = 1
  })

  // <--- Reformat regionData for PieChart use --->
  const newData = []
  for (const[key, value] of Object.entries(regionData)) {
    newData.push({"Region": key, "Quantity": value})
  }

  // <--- Pie Chart colors --->
  const colors = ["#FFDB66", "#2592DA", "#FFC300","#7CBEE9"]

  return (
    <div className='pieChart'>
      <h1>Number of Users per Region</h1>
      <PieChart width={500} height={500}>
        <Pie data={newData} dataKey="Quantity" nameKey="Region" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label >
        {
          newData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}/>
          ))
        }
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default Convert
