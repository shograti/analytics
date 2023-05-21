async function getUserById(id) {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getUserActivityById(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/user/${id}/activity`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getUserAverageSession(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/user/${id}/average-sessions`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getUserPerformance(id) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/user/${id}/performance`
    );
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
