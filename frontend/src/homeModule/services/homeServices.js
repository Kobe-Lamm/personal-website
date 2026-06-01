// Fetch for projects from backend
// project: {name, description, link, images}

export const getProjects = async (setProjects) => {
    const res = await fetch("", {method: "GET", headers: {"Content-Type": "application/json"}});
    const data = await res.json();
    setProjects(data);
    return;
};