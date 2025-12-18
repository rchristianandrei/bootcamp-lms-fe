export class AuthRepo {
  public static async Login(username: string, password: string) {
    const res = await fetch("http://localhost:5074/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
      credentials: "include"
    });

    const data: {
      message: string,
      user: { firstName: string; lastName: string; userName: string }
    } = await res.json();

    return {...data, status: res.status};
  }
}
