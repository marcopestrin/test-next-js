
export async function getUsers(page) {
    const response = await fetch(`https://gorest.co.in/public-api/users?page=${page}`);
    return await response.json();
}

export async function getFilteredUsers(name) {
    const response = await fetch(`https://gorest.co.in/public-api/users?name=${name}`);
    return await response.json();
}

export async function getUserById(id) {
    const response = await fetch(`https://gorest.co.in/public-api/users/${id}`);
    return await response.json();
}