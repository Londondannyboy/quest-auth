import { useEffect } from 'react';
import { useUser } from '@stackframe/react';
import { useSearchParams } from 'react-router-dom';

export default function AuthHandler() {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectUri = searchParams.get('redirect_uri');

  useEffect(() => {
    console.log('AuthHandler: User status:', user ? 'Authenticated' : 'Not authenticated');
    console.log('AuthHandler: Redirect URI:', redirectUri);

    // If user is authenticated and we have a redirect URI, redirect there
    if (user && redirectUri) {
      console.log('AuthHandler: User authenticated, redirecting to:', redirectUri);

      // Add a small delay to ensure session is established
      setTimeout(() => {
        window.location.href = redirectUri;
      }, 500);
    }
  }, [user, redirectUri]);

  // Store redirect URI for use after OAuth callback
  useEffect(() => {
    if (redirectUri && !user) {
      console.log('AuthHandler: Storing redirect URI for after auth:', redirectUri);
      sessionStorage.setItem('quest_auth_redirect', redirectUri);
    }
  }, [redirectUri, user]);

  return null; // This component handles redirects, doesn't render anything
}