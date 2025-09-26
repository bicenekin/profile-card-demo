import React, { useEffect, useState } from 'react'
import { fetchUserData } from '@/lib/api'
type User = { name: string; avatarUrl?: string }

type User = { name: string; avatarUrl?: string }

const ProfileCard = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetchUserData(userId).then((res: any) => setUser((res as any)?.data))
  }, []) // TODO: missing userId

  return (
    <div className="card">
      <img src={user?.avatarUrl} />
      <h2>{user?.name}</h2>
    </div>
  )
}

export default ProfileCard
