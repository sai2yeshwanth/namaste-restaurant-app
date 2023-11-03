import { useRouteError } from "react-router-dom"

const ErrorComponent = () => {
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h3>{err.error.message}</h3>
            <h4>{err.status}  {err.statusText}</h4>
        </div>
    )
}
export default ErrorComponent