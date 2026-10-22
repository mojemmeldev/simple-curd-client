
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const UsersCard = ({user}) => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
     
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
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
    );
};

export default UsersCard;