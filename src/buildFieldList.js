export default function buildFieldList (introspectionResults, resource, raFetchType, params){
    var type = resource.type;
    switch(type.name){
        case "Job" : 
            return ["jobId", "jobPortfolio", "jobDescription", "jobName", "lastDateToApply", "interviewDate"]
        case "Candidate":
            return ["candidateId", "candidateName"]
        case "JobApplication":
            return ["jobId", "candidateId", "applicationId", "appliedOn"]
       case "Feedback":
            return ["feedbackId", "candidateId", "jobId", "feedback", "createdOn", "positive", "rating"]
        default:
            return [];
    }
}