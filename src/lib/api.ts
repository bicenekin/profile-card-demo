export async function fetchUserData(userId: string): Promise<any> {
  return { data: { name: "Ada Lovelace", avatarUrl: "https://example.com/a.png" } }
}
