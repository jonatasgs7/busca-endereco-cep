const cep = document.querySelector("#cep")

const getData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#logradouro").value = result["logradouro"]
            document.querySelector("#bairro").value = result["bairro"]
            document.querySelector("#cidade").value = result["localidade"]
            document.querySelector("#uf").value = result["uf"]
        }
    }
}

const errorHandle = (result) => {
    document.querySelectorAll(".form-cep").value = ""
}

cep.addEventListener("blur",(e) => {
    
    let cepTratado = cep.value.replace("-", "")
    const url = `https://viacep.com.br/ws/${cepTratado}/json/`
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(url, options)
        .then( resp => resp.json() )
        .then( data => getData(data))
        .catch(e => errorHandle(e))
        //.catch(e => console.log ("Error: "+ e.message))
})