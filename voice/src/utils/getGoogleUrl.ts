export const getGoogleUrl = (from: string) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

  const options = {
    redirect_uri: "https://api.one2one.ai/auth/google/callback",
    //"http://localhost:3000/auth/google/callback",
     //import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT as string,
    client_id:
      "670465706381-ut0mhlrchadm7c6e6q77ka6675tkuokk.apps.googleusercontent.com", //import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};
