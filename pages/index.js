
import Head from 'next/head'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Image from 'next/image'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function Home() {

  const router  = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL
        })
        //console.log(user.photoUrl)
      }else{
        setUser(null)
        router.push('/login')
      }
    })
  }, [])
  //console.log(user.photoUrl)
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <img 
              src={user && user.photoURL}  
              onClick={() => signOut(auth)} 
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uber.png" />
                Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reservation
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems> 
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
  h-28
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-4 w-20 text-sm
`
const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer 
`
const ActionButtons = tw.div`
  flex 
`
const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
  h-3/5
`
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`

