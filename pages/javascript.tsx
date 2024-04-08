import React, { useEffect, useState } from 'react';
import { xml2js } from 'xml-js';

const JavaScriptPage = () => {
  const [stations, setStations] = useState<any[]>([]);
  const [filteredStations, setFilteredStations] = useState<any[]>([]);
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.irail.be/stations/');
        const text = await response.text();
        const data = xml2js(text, { compact: true });
        const stations = data.stations.station.map((station: any) => ({
            name: station._text,
          locationX: station._attributes.locationX,
          locationY: station._attributes.locationY,
          id: station._attributes.id,
          URI: station._attributes.URI,
          standardname: station._attributes.standardname,
        }));
        setStations(stations);
        setFilteredStations(stations);
        setNotes(new Array(stations.length).fill(''));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNoteChange = (index: number, value: string) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = value;
    setNotes(updatedNotes);
  };

  const handleSearch = (query: string) => {
    const filtered = stations.filter((station) =>
      station.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStations(filtered);
  };

  const handleSort = (key: string) => {
    const sorted = [...filteredStations].sort((a, b) => a[key].localeCompare(b[key]));
    setFilteredStations(sorted);
  };

  return (
    <div>
      <h1>Train Stations in Belgium</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('locationY')}>Latitude</th>
            <th onClick={() => handleSort('locationX')}>Longitude</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {filteredStations.map((station, index) => (
            <tr key={station.id}>
              <td>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${station.locationY},${station.locationX}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {station.name}
                </a>
              </td>
              <td>{station.locationY}</td>
              <td>{station.locationX}</td>
              <td>
                <input
                  type="text"
                  value={notes[index]}
                  onChange={(e) => handleNoteChange(index, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JavaScriptPage;
