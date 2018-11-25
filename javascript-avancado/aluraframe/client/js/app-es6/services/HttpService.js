export class HttpService{
    _handleErrors(res){
        if(!res.ok) throw new Error(res.statusText);

        return res;
    }
    
    get(url){
        return fetch(url)
            .then(res => this._handleErrors(res))    
            .then(res => res.json())
            .catch(err => {
                throw new Error(err)
            });

        /*return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
        
            xhr.open('GET', url);
        
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if( xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr.responseText);
                    }
                } 
            };
        
            xhr.send();
        });
        */
    }

    post(url, dado){
        return fetch(url, {
            headers: {'Content-type': "application/json"},
            method: 'post',
            body: JSON.stringify(dado)
        })
        .then(res => this._handleErrors(res));

        /*
        return new Promise((resolve, reject) => {
            let xhr = new XMLDocument();

            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json")

            xhr.onreadystatechange = () => {
                if(xhr.sreadyState == 4){
                    console.log('4')
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    console.log('not 4')
                    reject(xhr.responseText);
                }
            }

            xhr.send(JSON.stringify(dado));
        });
        */
    }
}