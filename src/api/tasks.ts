export const getTask = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await request.json()
    await new Promise(resolve => setTimeout(resolve, 1000))
    return data
};