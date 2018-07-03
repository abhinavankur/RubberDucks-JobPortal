export default function buildArgList(introspectionResults, resource, raFetchType){
    var type = resource.type;
    switch(raFetchType){
        case "GET_ONE" : 
            return getArgListForOne(introspectionResults, resource, type.name);
        case "GET_LIST" : 
            return "";
    }
}

//(jobId : $jobId)
function getArgListForOne(introspectionResults, resource, raFetchType){

    switch(raFetchType){
        case "Job" :
            return "(jobId : $jobId)";
    }

}