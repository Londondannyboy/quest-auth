import { useUser } from '@stackframe/react';

export default function Home() {
  const user = useUser();

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Quest Auth - Neon Authentication</h1>

      {user ? (
        <div>
          <h2>Welcome, {user.displayName || user.primaryEmail}!</h2>
          <p>You are successfully authenticated.</p>
          <p>Email: {user.primaryEmail}</p>
          <button
            onClick={() => user.signOut()}
            style={{
              padding: '0.5rem 1rem',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <h2>Please sign in to continue</h2>
          <p>Authentication powered by Neon Auth & Stack</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a
              href="/handler/sign-in"
              style={{
                padding: '0.5rem 1rem',
                background: '#2563eb',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.375rem'
              }}
            >
              Sign In
            </a>
            <a
              href="/handler/sign-up"
              style={{
                padding: '0.5rem 1rem',
                background: '#16a34a',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.375rem'
              }}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
