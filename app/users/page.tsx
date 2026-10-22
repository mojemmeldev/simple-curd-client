import UsersCard from "@/components/UsersCard";
import { Divide } from "lucide-react";




const UsersPage = async () => {
    const res = await fetch ("http://localhost:8000/users")
    const users= await res.json()
    return (
        <div>
            <h2> users = {users.length}</h2>
            <div>
                {
                   users.map(user=> <UsersCard key={user._id} user={user}></UsersCard>) 
                }
            </div>
        </div>
    );
};

export default UsersPage;