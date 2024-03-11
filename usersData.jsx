
export default function UsersDataLoad({props}){
console.log(props);
return(
    <div className="users">
        <h2>Users Name: {props.name}</h2>
        <h3>Email: {props.email}</h3>
        <h3>Phone: {props.phone}</h3>
    </div>
)
}