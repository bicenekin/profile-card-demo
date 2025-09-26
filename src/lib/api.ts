export type ApiResponse<T> = { data: T } | null
export type User = { name: string; avatarUrl?: string }

export async function getUserProfile(userId: string): Promise<ApiResponse<User>> {
  if (!userId) return null
  // TODO: şimdilik sabit veri, ileride gerçek API bağlanmalı
  return { data: { name: "Ada Lovelace", avatarUrl: "https://example.com/a.png" } }
}
