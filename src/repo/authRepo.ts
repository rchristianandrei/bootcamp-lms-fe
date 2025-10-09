export default class AuthRepo {
  public static async Login(username: string, password: string) {
    const res = await fetch("http://localhost:5074/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    });

    const data = await res.json();

    return data.message;
  }
}
