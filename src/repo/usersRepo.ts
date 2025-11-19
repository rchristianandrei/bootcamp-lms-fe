export class UsersRepo {
  public static async GetAll() {
    const res = await fetch("http://localhost:5074/api/users", {
      method: "GET",
      credentials: "include",
    });

    const data:{userName: string, firstName:string, lastName: string}[] = await res.json();

    return { users: data, status: res.status };
  }
}
