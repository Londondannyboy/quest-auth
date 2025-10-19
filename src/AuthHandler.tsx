import { useEffect } from 'react';
import { useUser } from '@stackframe/react';
import { useSearchParams } from 'react-router-dom';

export default function AuthHandler() {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectUri = searchParams.get('redirect_uri');

  useEffect(() => {
    // If user is authenticated and we have a redirect URI, redirect there
    if (user && redirectUri) {
      // Store the redirect URI in sessionStorage for after OAuth callback
      sessionStorage.setItem('quest_auth_redirect', redirectUri);

      // Add a small delay to ensure session is established
      setTimeout(() => {
        window.location.href = redirectUri;
      }, 500);
    }
  }, [user, redirectUri]);

  // Store redirect URI for use after OAuth callback
  useEffect(() => {
    if (redirectUri && !user) {
      sessionStorage.setItem('quest_auth_redirect', redirectUri);
    }
  }, [redirectUri, user]);

  return null; // This component handles redirects, doesn't render anything
}