export default function buildFieldList (introspectionResults, resource, raFetchType, params){
    var type = resource.type;
    switch(type.name){
        case "Job" : 
            return ["jobId", "jobPortfolio", "jobDescription", "jobName", "lastDateToApply", "interviewDate"]
        case "Candidate":
            return ["candidateId", "candidateName"]
    }
}