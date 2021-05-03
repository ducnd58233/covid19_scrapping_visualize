import './App.css';
import React, { useState, useEffect } from 'react';
import CovidInfo from "./components/CovidInfo.jsx";
import { Table } from 'react-bootstrap'

function App() {
  

  const [covidInfos, setCovidInfos] = useState([]);

  useEffect(() => {
    
    async function fetchData(){    
      const url = "http://localhost:5000";
      await fetch(url, {mode: "cors"})
          .then(response => response.json())
          .then(json=> setCovidInfos(json))
          .catch(err => console.log(err))                      
    }

    console.log('POST list effect');
    fetchData();
  }, []);

  return (
    <div>
      <Table striped bordered={ true }  id="main-table">
        <thead>
          <tr>
            <th>Countries</th>
            <th>Total cases</th>
            <th>New cases</th>
            <th>Total deaths</th>
            <th>New deaths</th>
            <th>Total recovered</th>
            <th>Active cases</th>
            <th>Serious/Criticals</th>
            <th>Total cases / 1m</th>
            <th>Deaths / 1m population</th>
            <th>Total tests</th>
            <th>Tests / 1m population</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {covidInfos.map(info => {
            return <CovidInfo key={info._id} covidInfo={[info]}/>
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
