import { createContext, useContext, useState, useEffect } from 'react';
import { getedrawData } from './api';

const EdrawDataContext = createContext();

export function EdrawDataProvider({ children }) {
  const [edrawData, setEdrawData] = useState({});
  
  const fetchData = async (endpoint) => {
    if (!edrawData[endpoint]) {
      const response = await getedrawData(endpoint);
      setEdrawData((prevData) => ({
        ...prevData,
        [endpoint]: response.data,
      }));
    }
  };

  return (
    <EdrawDataContext.Provider value={{ edrawData, fetchData }}>
      {children}
    </EdrawDataContext.Provider>
  );
}

export function useEdrawData(endpoint) {
  const { edrawData, fetchData } = useContext(EdrawDataContext);

  useEffect(() => {
    if (endpoint) {
      fetchData(endpoint); 
    }
  }, [endpoint]);

  return edrawData[endpoint] || null; 
}

export function splitAndHighlightMultiple(text, highlightParts) {
  const regex = new RegExp(`(${highlightParts.join('|')})`, 'gi'); 
  const parts = text.split(regex);

  return parts.map((part, index) => (
      <span key={index} className={highlightParts.includes(part) ? 'highlighted' : ''}>
          {part}
      </span>
  ));
}
