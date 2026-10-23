"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { useRouter } from "next/navigation";
import UpdateCard from "./UpdateCard";

const UsersCard = ({ user }) => { 

  const route = useRouter();

  const handleDeleteUser = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: 'DELETE',
    });
    const afterDelete = await res.json()
    console.log("after delete", afterDelete);
    if (afterDelete.deletedCount>0){
      console.log("user deleted successfully");
      route.refresh()
    }
  }

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <CardHeader>
        <CardAction>
          <h2>no</h2>
        </CardAction>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>
          {user.email}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/users/${user._id}`}>
          <Button className="w-full">View Event</Button>
        </Link>
        
        <UpdateCard user={user}></UpdateCard>
        <Button
          onClick={()=>handleDeleteUser(user._id)}
          variant="destructive">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UsersCard;