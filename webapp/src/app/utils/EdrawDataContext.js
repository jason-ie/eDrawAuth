import { createContext, useContext, useState, useEffect } from 'react';
import { getedrawData } from './api';

const EdrawDataContext = createContext();

export function EdrawDataProvider({ children }) {
  const [edrawData, setEdrawData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!edrawData) {
        const data = await getedrawData("/api/home-page");
        setEdrawData(data.data);
      }
    }
    fetchData();
  }, [edrawData]);

  return (
    <EdrawDataContext.Provider value={edrawData}>
      {children}
    </EdrawDataContext.Provider>
  );
}

export function useEdrawData() {
  return useContext(EdrawDataContext);
}
