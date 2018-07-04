export default function buildArgList(introspectionResults, resource, raFetchType, params){
    var type = resource.type;
    console.log(params)
    switch(raFetchType){
        case "GET_ONE" : 
            return getArgListForOne(introspectionResults, resource, type.name, params);
        case "GET_LIST" : 
            return "";
        case "CREATE" :
            return getArgListForCreate(introspectionResults, resource, type.name, params);
        default:
            return [];
    }
}

function getArgListForCreate(introspectionResults, resource, resTypeName, params){
    switch(resTypeName){
        case "Job" :
            return "(jobPortfolio : " + params.data.jobPortfolio + ", jobDescription : " + params.data.jobDescription + ", jobName : " + params.data.jobName + ", lastDateToApply : " + params.data.lastDateToApply + ", interviewDate : " + params.data.interviewDate + ")";
        case "JobApplication" :
            return "(jobId : " + params.data.jobId + ", candidateId : " + params.data.candidateId + ")";
        case "Feedback" :
            return "(candidateId : " + params.data.candidateId + ", jobId : " + params.data.jobId + ", feedback : " + params.data.feedback + ", positive : " + params.data.positive + ", rating : " + params.data.rating + ")";
        default:
            return "";
    }
}
//(jobId : $jobId)
function getArgListForOne(introspectionResults, resource, raFetchType, params){
    console.log("pre params");
    console.log(params);
    console.log("post params");
    switch(raFetchType){
        case "Job" :
            return "(jobId : " + params.id + ")";
        case "JobApplication" :
            return "(applicationId : " + params.id + ")";
        case "Feedback" :
            return "(feedbackId : " + params.id + ")";
        default:
            return "";
    }

}

/*function getArgList(introspectionResults, resource, type, params){
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
}*/