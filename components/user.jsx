import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuShortcut
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function User() {
   

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full bg-[#f0f4f9]">
                    <Avatar className="h-8 w-8 border-2 rounded-full">
                        <AvatarImage src="/user.svg" alt="person" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#e2e6eb] text-stone-50" align="end" forceMount>
                {/* <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        {user ? (
                            <>
                                <p className="text-sm font-medium leading-none">{user.name}</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {user.email}
                                </p>
                            </>
                        ) : (
                            <p className="text-sm text-muted-foreground">No user data</p>
                        )}
                    </div>
                </DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={"/profile"}><p className="text-[#282828] text-xl">Profile</p></Link>
                        <DropdownMenuShortcut className="text-[#282828]">⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem >
                    <p className="text-[#282828] text-xl">Logout</p>
                    <DropdownMenuShortcut className="text-[#282828]">⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}