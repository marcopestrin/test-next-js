
export async function getUsers(name, page) {
    const response = await fetch(`https://gorest.co.in/public-api/users?name=${name}&page=${page +1}`);
    return await response.json();
}

export async function getUserById(id) {
    const response = await fetch(`https://gorest.co.in/public-api/users/${id}`);
    return await response.json();
}