
//se encargara de guardar en el cache dinamico
function updateCacheDinamic(cache_dinamico, req, res){


    if(res.ok){
        caches.open(cache_dinamico).then(cache=>{
            cache.put(req, res.clone());

            return res.clone();
        });
    }else{
        return res;
    }

}