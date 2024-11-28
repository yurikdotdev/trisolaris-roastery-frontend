import MainLayout from '@/layouts/MainLayout';
import { useAuthStore } from '@/stores/useAuthStore';

function Account() {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <MainLayout title="Account | Trisolaris Roastery Co.">
      <div className="text-center">
        {!isAuthenticated ? (
          <p>Please log in to see your profile.</p>
        ) : (
          <>
            <h1>Welcome, {user?.username}</h1>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Account;
