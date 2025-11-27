
// fetch all data
export async function fetchAllData() {
    let res = await fetch("http://localhost:3000/students")
    let data = await res.json()
    return data
}

// add data
export async function addDataApi(body) {
    let res = await fetch("http://localhost:3000/students", {
        method: "POST",
        body: JSON.stringify(body)
    })
    return res
}

// // delete
export async function deleteApi(id) {
    let res = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE"
    })
    return res
}
// // get singleData
export async function getSingleDataApi(id) {
    let res = await fetch(`http://localhost:3000/students/${id}`)
    return res
}

// // upadateSingle DATA
export async function updateSIngleData(id, body) {
    let res = await fetch(`http://localhost:3000/students/${id}`,{
        method: "PATCH",
        body: JSON.stringify(body)
    })
    return res
}