const API_URL = import.meta.env.VITE_APP_API_URL;

async function getUserById(id) {
  try {
    const response = await fetch(`${API_URL}/user/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getUserActivityById(id) {
  try {
    const response = await fetch(`${API_URL}/user/${id}/activity`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getUserAverageSession(id) {
  try {
    const response = await fetch(`${API_URL}/user/${id}/average-sessions`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getUserPerformance(id) {
  try {
    const response = await fetch(`${API_URL}/user/${id}/performance`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance,
};
