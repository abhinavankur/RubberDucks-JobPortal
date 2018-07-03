export default function buildFieldList (introspectionResults, resource, raFetchType){
    var type = resource.type;
    switch(type.name){
        case "Job" : 
            return ["jobId", "jobPortfolio", "jobDescription"]
        case "Candidate":
            return ["candidateId", "candidateName"]
    }
}