import * as React from 'react';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import MemberEntity from '../../api/memberEntity';
import MemberErrors from '../../validations/memberFormErrors';
import MemberForm from './memberForm';

interface Props extends React.Props<MemberPage> {
  params? : any
  member? : MemberEntity
  ,errors?: MemberErrors
  ,saveCompleted? : boolean
  ,loadMember? : (id : number) => void
  ,fireValidationFieldValueChanged?  : (fieldName : string, value : any) => void
  ,saveMember?: (member: MemberEntity) => void
  ,initializeNewMember?: () => void
  ,resetSaveCompletedFlag?: () => void
}

export default class MemberPage extends React.Component<Props, {}> {
    constructor(props : Props){
        super(props);
    }

    componentWillMount() {
        let memberId = this.getMemberId();

        if(memberId) {
          this.props.loadMember(memberId);
        } else {
          this.props.initializeNewMember();
        }
    }

    // https://github.com/reactjs/redux/issues/580
    componentWillReceiveProps(nextProps) {
        if(this.props.saveCompleted != nextProps.saveCompleted
          && nextProps.saveCompleted) {

          // Show toast
         toastr.success('Author saved.');

         // using hashHistory, TODO: proper configure browserHistory on app and here
         hashHistory.push('/members')

         // Reset saveCompleted flag
         this.props.resetSaveCompletedFlag();
        }
    }

    private getMemberId() : number {
        // Coming from navigation
        return this.props.params && this.props.params.id ?
            parseInt(this.props.params.id) :
            null;
    }

    // on any update on the form this function will be called
    private updateMemberFromUI(event) {
        var field = event.target.name;
    	var value = event.target.value;

        this.props.fireValidationFieldValueChanged(field, value);
    }

    private saveMember(event) {
        event.preventDefault();

        this.props.saveMember(this.props.member);
    }

    public render() {
        if(!this.props.member)
            return (<div>No data</div>)

        return (
            <MemberForm
                member={this.props.member}
                errors={this.props.errors}
                onChange={this.updateMemberFromUI.bind(this)}
                onSave={this.saveMember.bind(this)}
            />
       );
     }
}
