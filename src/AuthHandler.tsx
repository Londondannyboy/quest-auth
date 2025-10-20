import { useEffect } from 'react';
import { useUser } from '@stackframe/react';
import { useSearchParams } from 'react-router-dom';

export default function AuthHandler() {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectUriFromUrl = searchParams.get('redirect_uri');

  useEffect(() => {
    // If user is authenticated, redirect back
    if (user) {
      // Try to get redirect URI from URL first, then from sessionStorage
      const redirectUri = redirectUriFromUrl || sessionStorage.getItem('quest_auth_redirect');

      if (redirectUri) {
        // Clear sessionStorage
        sessionStorage.removeItem('quest_auth_redirect');

        // Add a small delay to ensure session is established
        setTimeout(() => {
          window.location.href = redirectUri;
        }, 500);
      }
    }
  }, [user, redirectUriFromUrl]);

  // Store redirect URI for use after OAuth callback
  useEffect(() => {
    if (redirectUriFromUrl && !user) {
      sessionStorage.setItem('quest_auth_redirect', redirectUriFromUrl);
    }
  }, [redirectUriFromUrl, user]);

  return null; // This component handles redirects, doesn't render anything
}