/// Async HTTP requests that communicate with the server to get, create, update and delete date.

/// Change this if using a different backend server.
const API_ENDPOINT = "http://localhost:3001/";

export async function apiGetAllMaterials() {
    const response = await fetch(new URL('/materials', API_ENDPOINT));

    if (response.ok) {
        return response.json();
    }

    throw new Error("Unable to fetch from server.");
}

export async function apiAddMaterial(newMaterial) {
    const response = await fetch(new URL('/materials', API_ENDPOINT), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMaterial)
    });

    if (response.ok) {
        return response.json();
    }

    throw new Error("Unable to fetch from server.");
}


export async function apiUpdateMaterial(id, newMaterial) {
    const response = await fetch(new URL(`materials/${id}`, API_ENDPOINT), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMaterial),
    });

    if (response.ok) {
        return response.json();
    }

    throw new Error("Unable to fetch from server.");
}

export async function apiDeleteMaterial(id, newMaterial) {
    const response = await fetch(new URL(`materials/${id}`, API_ENDPOINT), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        return response.json();
    }

    throw new Error("Unable to fetch from server.");
}