export async function getedrawData(path) {
    const baseUrl = "http://localhost:1337";
    try {
      const response = await fetch(baseUrl + path);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
   