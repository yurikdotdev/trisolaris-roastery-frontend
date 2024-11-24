import BaseLayout from './BaseLayout';

function ErrorLayout({ text, errorCode }: { text: string; errorCode: string }) {
  return (
    <BaseLayout
      title={text}
      className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-8"
    >
      <h1 className="text-6xl font-bold">{errorCode}</h1>
      <h2 className="text-3xl font-medium">{text}</h2>
    </BaseLayout>
  );
}

export default ErrorLayout;
