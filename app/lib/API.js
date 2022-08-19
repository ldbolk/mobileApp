const timeout = 50000;

class API {
    static fetchData = () => new Promise( (resolve, reject) => {

        const url = 'https://api.dev-master.ninja/reactjs/slow';

        const killFetch = setTimeout( () => {
            console.warn('timeout!');
            reject({ success: false, error: 'Timeout occured' })
        }, timeout);


        fetch(url)
        .then( res => res.json() )
        .then(data => { 
            clearTimeout(killFetch);
            resolve({ success: true, data: data })
         })
         .catch( error => {
            clearTimeout(killFetch)
            reject({ sccess: false, error: error})
         })

    })
}


export default API;