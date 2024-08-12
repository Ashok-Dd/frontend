import {
    Button,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    PopoverFooter
} from '@chakra-ui/react'
  
export const Profile = () => {
    const auth=JSON.parse(sessionStorage?.auth)

    const SignOut=()=>{
        sessionStorage?.removeItem('auth')
        window.location.reload(3)
    }

    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <Button>my profile</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{auth?.Email}</PopoverHeader>
                    <PopoverHeader>{auth?.Password}</PopoverHeader>
                    <PopoverHeader>{auth?.PhoneNumber}</PopoverHeader>
                    <PopoverHeader>{auth?.Branch}</PopoverHeader>
                </PopoverContent>
                <PopoverFooter>
                    <Button colorScheme='red' onClick={SignOut}>signOut</Button>
                </PopoverFooter>
            </Popover>
        </>
    )
}