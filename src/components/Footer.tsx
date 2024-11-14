import { getYear } from '@/lib/utils';

function Footer() {
  return (
    <footer className="h-52 w-full bg-custom-bgLight font-newsreader text-custom-textLight dark:bg-custom-bgDark dark:text-custom-textDark">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <p className="font-medium">Trisolaris Roaster Co.</p>
        <p className="text-sm">&copy; {getYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
