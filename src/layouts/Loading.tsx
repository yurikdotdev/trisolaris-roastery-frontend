import BaseLayout from '@/layouts/BaseLayout';
import { RingLoader } from 'react-spinners';

function Loading() {
  return (
    <BaseLayout
      title="Loading..."
      className="flex h-screen w-full items-center justify-center text-center"
    >
      <RingLoader size={80} color="#f08a42" />
    </BaseLayout>
  );
}

export default Loading;
