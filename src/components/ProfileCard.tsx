import React, { useEffect, useState } from 'react'
import { getUserProfile, type ApiResponse, type User } from '@/lib/api'

const ProfileCard = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    let mounted = true
    getUserProfile(userId)
      .then((res: ApiResponse<User> | null) => {
        if (!mounted) return
        if (!res || !res.data) {
          // Hata 1: 404 veya boş veri ele alındı
          setNotFound(true)
          setUser(null)
          return
        }
        // Hata 2: any yerine tipli veri kullanıldı
        setUser(res.data)
      })
      .catch(() => {
        // Hata 3: try/catch eklenmediği için error state yoktu
        setError(true)
      })
    // Hata 4: useEffect dependency array eksikti
    return () => { mounted = false }
  }, [userId])

  if (error) return <div>Something went wrong</div>
  if (notFound) return <div>No user found</div>

  return (
    <div className="card">
      {/* Hata 5: alt attribute yoktu */}
      <img src={user?.avatarUrl} alt={user ? `${user.name} avatar` : 'user avatar'} />
      <h2>{user?.name}</h2>
    </div>
  )
}

export default ProfileCard
