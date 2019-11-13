const getdata = async (url) => await fetch(`http://jsonplaceholder.typicode.com${url}`)
                    .then(response => response.json());

export default getdata;