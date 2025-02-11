import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    const fetchMasters = async () => {
      const response = await fetch('/api/master');
      const data = await response.json();
      setMasters(data);
    };

    fetchMasters();
  }, []);

  return (
    <Layout>
      <h1>Master Records</h1>
      <ul>
        {masters.map((master) => (
          <li key={master.id}>{master.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;