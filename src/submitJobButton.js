import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { showNotification as showNotificationAction } from 'react-admin';
import { push as pushAction } from 'react-router-redux';
import axios from 'axios';

export class SubmitJobButton extends Component {
    handleClick = (event) => {
        event.preventDefault();
        const { push, record, showNotification } = this.props;
        var myCandidateId;
        myCandidateId = 0;
        const updatedRecord = { ...record, is_approved: true };
        axios.post('http://10.74.18.242:4000/graphql',{"query": "query  candi($email : String!){ candidate(email : $email){ candidateId } }",
        "operationName": "candi",
          "variables": {
            "email" : localStorage.getItem('username')
          }
        }).then(function (response){
            console.log(response);
            myCandidateId = response.data.data.candidate.candidateId;
            console.log(myCandidateId)
            axios.post('http://10.74.18.242:4000/graphql',{
                "query": "mutation  cja($candidateId : Int!, $jobId : Int!){ createJobApplication(candidateId : $candidateId, jobId : $jobId){ candidateId, jobId, applicationId } }",
                "operationName": "cja",
                "variables": {
                    "candidateId" : myCandidateId,
                    "jobId" : record.id
                }
            }).then(function(response){
                
                    alert('You have successfully applied for this Job. ')
                
                
            })
        })

        
    }

    render() {
        return <Button label="Apply For this Job" onClick={event => this.handleClick(event)}>Apply For this Job </Button>;
    }
}

SubmitJobButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(SubmitJobButton);