import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

function App() {
  const [profile, setProfile] = useState("moderado");
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/recommend?profile=${profile}`)
      .then(res => setRecommendation(res.data))
      .catch(err => console.error(err));
  }, [profile]);

  const data = recommendation
    ? Object.entries(recommendation).map(([asset, value]) => ({
        name: asset,
        value
      }))
    : [];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Recomendaciones de Inversión</h1>

      <label>
        Perfil de riesgo:&nbsp;
        <select value={profile} onChange={e => setProfile(e.target.value)}>
          <option value="conservador">Conservador</option>
          <option value="moderado">Moderado</option>
          <option value="agresivo">Agresivo</option>
        </select>
      </label>

      {data.length > 0 && (
        <div style={{ width: "100%", height: 400, marginTop: "2rem" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default App;
