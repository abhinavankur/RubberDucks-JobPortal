export default function buildArgList(introspectionResults, resource, raFetchType, params){
    var type = resource.type;
    console.log(params)
    switch(raFetchType){
        case "GET_ONE" : 
            return getArgListForOne(introspectionResults, resource, type.name);
        case "GET_LIST" : 
            return getArgList(introspectionResults, resource, type.name, params);
    }
}

//(jobId : $jobId)
function getArgListForOne(introspectionResults, resource, raFetchType, params){
    
    switch(raFetchType){
        case "Job" :
            return "(jobId : $jobId)";
    }

}

function getArgList(introspectionResults, resource, type, params){
    var filter = params.filter;
    var pagination = params.pagination;
    var sort = params.sort;
    var argString = "(";
    if(Object.keys(filter).length === 0 && filter.constructor === Object){
    } else {
        var where = " where: {" + filter.key + ":" + filter.value + "} "
        argString = argString + where;
    }

    if(!Object.keys(pagination).length === 0 && pagination.constructor === Object){
        var page = pagination.page - 1;
        var perPage = pagination.perPage;
        var paging = " first : " + perPage + " skip : " + (page*perPage) + " ";
        argString = argString + paging;
    }

    if(!Object.keys(sort).length === 0 && sort.constructor === Object){
        var srt = " orderBy : " + sort.field + "_" + sort.order;
        argString = argString + srt;
    }

    if(argString === "(")
        argString = "";
    
    return argString;
}