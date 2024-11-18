
export default function AuthenticationMsg({showSuccess,showFailed}) {
    if(showSuccess){
        return(
            <div>Authentication Success</div>
        )
    }else if(showFailed){
        return(
            <div>Authentication Failed</div>
        )
    }
}